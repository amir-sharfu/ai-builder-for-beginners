import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const LESSONS_DIR = path.join(ROOT, "lessons");
const PLAN_FILE = path.join(ROOT, ".github/topics.md");   // hidden from casual visitors
const REPO = "https://github.com/amir-sharfu/ai-builder-for-beginners";

const FOLDERS = {
  "01-web-fundamentals":    { label: "🌐 Web Fundamentals",  difficulty: "🟢 Beginner"     },
  "02-backend-and-apis":    { label: "⚙️ Backend & APIs",    difficulty: "🟢 Beginner"     },
  "03-tools-and-protocols": { label: "🛠️ Tools & Protocols", difficulty: "🟡 Intermediate" },
  "04-building-with-ai":    { label: "🤖 Building with AI",  difficulty: "🟡 Intermediate" },
  "05-advanced":            { label: "🚀 Advanced Topics",   difficulty: "🟠 Advanced"     },
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

// ── read planned topics from .github/topics.md ───────────────────────────────

function readPlannedTopics() {
  if (!fs.existsSync(PLAN_FILE)) return [];
  const content = fs.readFileSync(PLAN_FILE, "utf8");
  const planSection = content.match(/## 📅 Up Next \(Tomorrow\)([\s\S]*?)(?=##|$)/);
  if (!planSection) return [];

  const rows = planSection[1].match(/^\|\s*\d+\s*\|(.+)$/gm) || [];
  return rows.map(row => {
    const cols = row.split("|").map(s => s.trim()).filter(Boolean);
    // cols: [index, filename, title, folder]
    return { filename: cols[1], title: cols[2], folder: cols[3] };
  }).filter(t => t.filename && t.title && FOLDERS[t.folder]);
}

// ── ask Claude for N new unique topics with smart folder placement ─────────────

async function suggestTopics(existingLessons, count, excludeTitles = []) {
  const existingList = existingLessons.map(l => `- [${l.folder}] ${l.title}`).join("\n");
  const excludeList = excludeTitles.map(t => `- ${t}`).join("\n");
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

Course folders:
${folderDescriptions}

ALL lessons already published:
${existingList}

${excludeList ? `Also exclude these already-planned topics:\n${excludeList}\n` : ""}
Suggest exactly ${count} NEW lessons that:
1. Are NOT already covered or planned above (not even partially)
2. Are useful for beginners learning web development OR relevant to building with AI
3. Belong to the most appropriate folder for each topic
4. Cover a good mix: some beginner fundamentals, some tools, some AI-related

Number filenames starting from ${nextNum}.

Return ONLY a valid JSON array, no explanation, no code block:
[
  {
    "filename": "${nextNum}-slug.md",
    "title": "Human Readable Title",
    "folder": "exact-folder-key"
  }
]`,
      },
    ],
  });

  const raw = message.content[0].text.trim();
  const jsonMatch = raw.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error(`Could not parse suggestions:\n${raw}`);

  return JSON.parse(jsonMatch[0]).map(t => ({
    ...t,
    folder: FOLDERS[t.folder] ? t.folder : "05-advanced",
  }));
}

// ── generate a single lesson ──────────────────────────────────────────────────

async function generateLesson(filename, title, folder, prevEntry, nextTitle) {
  const number = filename.split("-")[0];
  const meta = FOLDERS[folder];

  const prevLink = prevEntry
    ? `← [${prevEntry.title}](./${prevEntry.filename})`
    : `← [${meta.label}](./README.md)`;
  const nextLinkText = nextTitle
    ? `[${nextTitle}](./README.md) →`
    : `[More coming tomorrow](./README.md) →`;

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

[↑ Back to course](../../README.md)

Rules:
- Replace X with real estimated read time (word count ÷ 200, minimum 2)
- Max 400 words total, jargon-free
- Output only the markdown, nothing before the # title or after the last line`,
      },
    ],
  });

  return message.content[0].text.trim();
}

// ── update folder README ──────────────────────────────────────────────────────

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
    const mins = Math.max(2, Math.ceil(content.trim().split(/\s+/).length / 200));
    totalMins += mins;
    table += `| ${file.split("-")[0]} | [${title}](./${file}) | ${mins} min |\n`;
  }

  fs.writeFileSync(path.join(folderPath, "README.md"),
    `# ${meta.label}\n\n> ${files.length} lessons · ~${totalMins} min total · ${meta.difficulty}\n\n---\n\n## Lessons\n\n${table}\n---\n\n[← Back to Course](../../README.md)\n`
  );
}

// ── write .github/topics.md with history + tomorrow's plan ───────────────────

function updatePlanFile(todayTopics, tomorrowTopics, date) {
  let history = "";
  if (fs.existsSync(PLAN_FILE)) {
    const existing = fs.readFileSync(PLAN_FILE, "utf8");
    const historyMatch = existing.match(/## 📋 History([\s\S]*?)(?=##|$)/);
    history = historyMatch ? historyMatch[1].trim() : "";
  }

  // Append today's lessons to history
  for (const t of todayTopics) {
    const folderLabel = FOLDERS[t.folder]?.label ?? t.folder;
    history += `\n| ${date} | ${folderLabel} | [${t.filename}](../lessons/${t.folder}/${t.filename}) | ${t.title} |`;
  }

  const tomorrowTable = tomorrowTopics.map((t, i) => {
    const folderLabel = FOLDERS[t.folder]?.label ?? t.folder;
    return `| ${i + 1} | ${t.filename} | ${t.title} | ${t.folder} |`;
  }).join("\n");

  const content = `# Automation Plan

> This file is auto-managed. Do not edit manually.
> Check here to see what lessons are coming tomorrow.

---

## 📅 Up Next (Tomorrow)

Last planned: ${date}

| # | Filename | Title | Folder |
|---|----------|-------|--------|
${tomorrowTable}

---

## 📋 History

| Date | Section | Lesson | Title |
|------|---------|--------|-------|
${history.trim()}
`;

  fs.writeFileSync(PLAN_FILE, content, "utf8");
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Scanning existing lessons...");
  const existing = getAllExistingLessons();
  console.log(`Found ${existing.length} existing lessons.`);

  // Use pre-planned topics if available, otherwise ask Claude now
  let todayTopics = readPlannedTopics();
  if (todayTopics.length === 5) {
    console.log("Using pre-planned topics from .github/topics.md:");
    todayTopics.forEach(t => console.log(`  [${t.folder}] ${t.filename} — ${t.title}`));
  } else {
    console.log("No pre-planned topics found. Asking Claude for today's topics...");
    todayTopics = await suggestTopics(existing, 5);
    console.log("Topics selected:");
    todayTopics.forEach(t => console.log(`  [${t.folder}] ${t.filename} — ${t.title}`));
  }

  // Generate today's lessons
  const foldersUpdated = new Set();
  for (let i = 0; i < todayTopics.length; i++) {
    const topic = todayTopics[i];
    const destDir = path.join(LESSONS_DIR, topic.folder);
    fs.mkdirSync(destDir, { recursive: true });

    const prev = i === 0
      ? existing[existing.length - 1]
      : { filename: todayTopics[i - 1].filename, title: todayTopics[i - 1].title };
    const nextTitle = i < todayTopics.length - 1 ? todayTopics[i + 1].title : null;

    console.log(`  Generating: ${topic.title} → lessons/${topic.folder}/`);
    const content = await generateLesson(topic.filename, topic.title, topic.folder, prev, nextTitle);
    fs.writeFileSync(path.join(destDir, topic.filename), content, "utf8");
    foldersUpdated.add(topic.folder);
    console.log(`    ✓ Saved`);
  }

  for (const folder of foldersUpdated) {
    updateFolderReadme(folder);
    console.log(`  ✓ Updated lessons/${folder}/README.md`);
  }

  // Pre-plan tomorrow's 5 topics
  console.log("\nPre-planning tomorrow's 5 topics...");
  const allNow = [...existing, ...todayTopics];
  const tomorrowTopics = await suggestTopics(allNow, 5, todayTopics.map(t => t.title));
  console.log("Tomorrow's plan:");
  tomorrowTopics.forEach(t => console.log(`  [${t.folder}] ${t.filename} — ${t.title}`));

  const today = new Date().toISOString().split("T")[0];
  updatePlanFile(todayTopics, tomorrowTopics, today);
  console.log("✓ .github/topics.md updated with history + tomorrow's plan");
  console.log(`\n✅ Done — ${todayTopics.length} lessons published, ${tomorrowTopics.length} planned for tomorrow.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
