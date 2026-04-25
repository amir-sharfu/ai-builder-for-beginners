import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const LESSONS_DIR = path.join(ROOT, "lessons");
const LOG_FILE = path.join(ROOT, "topics.md");
const REPO = "https://github.com/amir-sharfu/ai-builder-for-beginners";

const FOLDERS = {
  "01-web-fundamentals":    { label: "🌐 Web Fundamentals",   difficulty: "🟢 Beginner",      backPath: "../../README.md" },
  "02-backend-and-apis":    { label: "⚙️ Backend & APIs",     difficulty: "🟢 Beginner",      backPath: "../../README.md" },
  "03-tools-and-protocols": { label: "🛠️ Tools & Protocols",  difficulty: "🟡 Intermediate",  backPath: "../../README.md" },
  "04-building-with-ai":    { label: "🤖 Building with AI",   difficulty: "🟡 Intermediate",  backPath: "../../README.md" },
  "05-advanced":            { label: "🚀 Advanced Topics",    difficulty: "🟠 Advanced",      backPath: "../../README.md" },
};

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── scan all existing lessons ─────────────────────────────────────────────────

function getAllExistingLessons() {
  const existing = [];
  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        scanDir(path.join(dir, entry.name));
      } else if (entry.name.endsWith(".md") && entry.name !== "README.md") {
        const fullPath = path.join(dir, entry.name);
        const content = fs.readFileSync(fullPath, "utf8");
        const titleMatch = content.match(/^#\s+(.+)$/m);
        const title = titleMatch ? titleMatch[1].trim() : entry.name;
        const folder = path.relative(LESSONS_DIR, path.dirname(fullPath));
        existing.push({ filename: entry.name, title, folder });
      }
    }
  }
  scanDir(LESSONS_DIR);
  return existing.sort((a, b) => a.filename.localeCompare(b.filename));
}

// ── ask Claude for 5 new topics with smart folder placement ───────────────────

async function suggestNewTopics(existingLessons) {
  const existingList = existingLessons.map(l => `- [${l.folder}] ${l.title}`).join("\n");
  const nextNum = existingLessons.length + 1;

  const folderDescriptions = Object.entries(FOLDERS)
    .map(([key, val]) => `  "${key}" — ${val.label}`)
    .join("\n");

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are curating a beginner-friendly web development and AI course.

These are the course folders:
${folderDescriptions}

Here are ALL lessons already published (with their folder):
${existingList}

Suggest exactly 5 NEW lessons that:
1. Are NOT already covered above (not even partially)
2. Are useful for beginners learning web development OR relevant to building with AI in the future
3. Can belong to ANY of the folders above — pick the most appropriate one for each
4. Cover a good mix: some beginner-friendly fundamentals, some tools, some AI-related topics

Number filenames starting from ${nextNum}.

Return ONLY a valid JSON array, no explanation, no code block:
[
  {
    "filename": "${nextNum}-slug.md",
    "title": "Human Readable Title",
    "folder": "one-of-the-five-folder-keys-above"
  },
  ...
]`,
      },
    ],
  });

  const raw = message.content[0].text.trim();
  const jsonMatch = raw.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error(`Could not parse topic suggestions:\n${raw}`);

  const topics = JSON.parse(jsonMatch[0]);

  // Validate folders, fall back to 05-advanced if unknown
  return topics.map(t => ({
    ...t,
    folder: FOLDERS[t.folder] ? t.folder : "05-advanced",
  }));
}

// ── generate a single lesson ──────────────────────────────────────────────────

async function generateLesson(filename, title, folder, prevEntry, nextTitle) {
  const number = filename.split("-")[0];
  const meta = FOLDERS[folder];

  // Relative path from lesson file back to repo root depends on nesting depth
  const backToRoot = "../../README.md";
  const backToFolder = "./README.md";

  const prevLink = prevEntry
    ? `← [${prevEntry.title}](./${prevEntry.filename})`
    : `← [${meta.label}](${backToFolder})`;
  const nextLinkText = nextTitle
    ? `[${nextTitle}](${backToFolder}) →`
    : `[More coming tomorrow](${backToFolder}) →`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1500,
    messages: [
      {
        role: "user",
        content: `Write a beginner-friendly lesson for a web development and AI course targeting non-coders.

Lesson number: ${number}
Title: ${title}
Section: ${meta.label}
Difficulty: ${meta.difficulty}

Use EXACTLY this markdown structure:

# ${title}

> ⏱ X min read · ${meta.difficulty}

## One Line Answer
[1 sentence, plain English, no jargon]

## Real World Analogy
[1 short analogy anyone can understand without a tech background]

## Live Example
[Name a real website or tool where this concept is visible. Explain exactly where to see it.]

## How It Shows Up in a Real App
[Short explanation or minimal code snippet showing where this appears in a web project]

## What Breaks Without It
[1-2 sentences on what fails or goes wrong if this concept is missing or ignored]

## What to Tell AI When You Need It
[1-2 copy-paste prompts a non-coder can use with Claude Code or ChatGPT to get help with this topic]

---

${prevLink} · ${nextLinkText}

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](${REPO}/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](${backToRoot})

Rules:
- Replace X in "⏱ X min read" with actual estimated minutes (word count ÷ 200, minimum 2)
- Keep all sections short and jargon-free, max 400 words total
- Output only the markdown, nothing before the # title or after the final line`,
      },
    ],
  });

  return message.content[0].text.trim();
}

// ── update folder README after adding a lesson ────────────────────────────────

function updateFolderReadme(folder) {
  const folderPath = path.join(LESSONS_DIR, folder);
  const meta = FOLDERS[folder];

  const files = fs.readdirSync(folderPath)
    .filter(f => f.endsWith(".md") && f !== "README.md")
    .sort();

  let totalMins = 0;
  let table = `| # | Lesson | Read Time |\n|---|--------|-----------|\n`;

  for (const file of files) {
    const content = fs.readFileSync(path.join(folderPath, file), "utf8");
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : file;
    const words = content.trim().split(/\s+/).length;
    const mins = Math.max(2, Math.ceil(words / 200));
    totalMins += mins;
    const num = file.split("-")[0];
    table += `| ${num} | [${title}](./${file}) | ${mins} min |\n`;
  }

  const readme = `# ${meta.label}

> ${files.length} lessons · ~${totalMins} min total · ${meta.difficulty}

---

## Lessons

${table}
---

[← Back to Course](../../README.md)
`;

  fs.writeFileSync(path.join(folderPath, "README.md"), readme, "utf8");
}

// ── append to topics log at repo root ─────────────────────────────────────────

function appendToLog(topics, date) {
  const header = `# Topics Log\n\nAuto-updated daily at 9:00 AM IST. Every row is a lesson generated automatically — no manual input needed.\n\n| Date | Folder | Lesson | Title |\n|------|--------|--------|-------|\n`;
  let log = fs.existsSync(LOG_FILE) ? fs.readFileSync(LOG_FILE, "utf8") : header;

  // Migrate old format if needed
  if (!log.includes("| Folder |")) {
    log = header;
  }

  for (const t of topics) {
    const folderLabel = FOLDERS[t.folder]?.label ?? t.folder;
    log += `| ${date} | ${folderLabel} | [${t.filename}](lessons/${t.folder}/${t.filename}) | ${t.title} |\n`;
  }

  fs.writeFileSync(LOG_FILE, log, "utf8");
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Scanning existing lessons...");
  const existing = getAllExistingLessons();
  console.log(`Found ${existing.length} existing lessons.`);

  console.log("Asking Claude for 5 new unique topics with smart folder placement...");
  const newTopics = await suggestNewTopics(existing);
  console.log("Topics selected:");
  newTopics.forEach(t => console.log(`  [${t.folder}] ${t.filename} — ${t.title}`));

  const foldersUpdated = new Set();

  for (let i = 0; i < newTopics.length; i++) {
    const topic = newTopics[i];
    const destDir = path.join(LESSONS_DIR, topic.folder);
    fs.mkdirSync(destDir, { recursive: true });

    const prev = i === 0
      ? existing[existing.length - 1]
      : { filename: newTopics[i - 1].filename, title: newTopics[i - 1].title };
    const nextTitle = i < newTopics.length - 1 ? newTopics[i + 1].title : null;

    console.log(`  Generating: ${topic.title} → lessons/${topic.folder}/`);
    const content = await generateLesson(topic.filename, topic.title, topic.folder, prev, nextTitle);
    fs.writeFileSync(path.join(destDir, topic.filename), content, "utf8");
    foldersUpdated.add(topic.folder);
    console.log(`    ✓ Saved`);
  }

  // Update README.md for every folder that got new lessons
  for (const folder of foldersUpdated) {
    updateFolderReadme(folder);
    console.log(`  ✓ Updated lessons/${folder}/README.md`);
  }

  const today = new Date().toISOString().split("T")[0];
  appendToLog(newTopics, today);
  console.log("✓ topics.md log updated");
  console.log(`\n✅ Done — ${newTopics.length} new lessons published.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
