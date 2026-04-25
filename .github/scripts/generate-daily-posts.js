import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const LESSONS_DIR = path.join(ROOT, "lessons");
const PLAN_FILE = path.join(ROOT, ".github/topics.md");
const INBOX_FILE = path.join(ROOT, ".github/inbox.md");
const REPO = "https://github.com/amir-sharfu/ai-builder-for-beginners";

const FOLDERS = {
  "01-web-fundamentals":    { label: "🌐 Web Fundamentals",  difficulty: "🟢 Beginner"     },
  "02-backend-and-apis":    { label: "⚙️ Backend & APIs",    difficulty: "🟢 Beginner"     },
  "03-tools-and-protocols": { label: "🛠️ Tools & Protocols", difficulty: "🟡 Intermediate" },
  "04-building-with-ai":    { label: "🤖 Building with AI",  difficulty: "🟡 Intermediate" },
  "05-advanced":            { label: "🚀 Advanced Topics",   difficulty: "🟠 Advanced"     },
};

const RSS_FEEDS = [
  "https://dev.to/feed",
  "https://web.dev/feed.xml",
  "https://developer.mozilla.org/en-US/blog/rss.xml",
  "https://css-tricks.com/feed/",
];

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
        existing.push({ filename: entry.name, title, folder, fullPath });
      }
    }
  }
  scanDir(LESSONS_DIR);
  return existing.sort((a, b) => a.filename.localeCompare(b.filename));
}

// ── read inbox — consume 1 item ───────────────────────────────────────────────

function readInbox() {
  if (!fs.existsSync(INBOX_FILE)) return null;
  const content = fs.readFileSync(INBOX_FILE, "utf8");
  const lines = content.split("\n");
  let topic = null;
  const remaining = [];
  let pastDivider = false;
  let consumed = false;

  for (const line of lines) {
    if (line.trim() === "---") { pastDivider = true; remaining.push(line); continue; }
    if (!pastDivider) { remaining.push(line); continue; }
    const match = line.match(/^-\s+(.+)$/);
    if (match && !consumed) {
      topic = match[1].trim();
      consumed = true;
    } else {
      remaining.push(line);
    }
  }

  if (topic) {
    fs.writeFileSync(INBOX_FILE, remaining.join("\n"), "utf8");
    console.log(`  Inbox: consumed "${topic}", ${remaining.filter(l => /^-\s+/.test(l)).length} remaining.`);
  }

  return topic;
}

// ── fetch RSS feeds ───────────────────────────────────────────────────────────

async function fetchInternetTitles() {
  const titles = [];
  for (const url of RSS_FEEDS) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; RSS reader)" },
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) continue;
      const xml = await res.text();
      const matches = [...xml.matchAll(/<title[^>]*><!\[CDATA\[([^\]]+)\]\]><\/title>|<title[^>]*>([^<]+)<\/title>/g)];
      matches.slice(1, 8).forEach(m => {
        const t = (m[1] || m[2] || "").trim();
        if (t) titles.push(t);
      });
    } catch {
      console.log(`  Could not reach ${url}, skipping.`);
    }
  }
  return titles;
}

// ── pick 1 topic — frameworks/tools/apps only ────────────────────────────────

async function pickOneTopic(raw, existingLessons, nextNum, fromInternet = false) {
  const existingList = existingLessons.map(l => `- ${l.title}`).join("\n");
  const folderDescriptions = Object.entries(FOLDERS)
    .map(([key, val]) => `  "${key}" — ${val.label}`)
    .join("\n");

  const focus = fromInternet
    ? `From these recent web articles, pick exactly 1 topic that is a real framework, tool, library, or app (e.g. Angular, Astro, Vitest, Electron, SvelteKit, Playwright) — NOT a concept or theory. If none fit, invent one based on the theme.

Articles:
${raw}`
    : `The course owner wants a lesson about: "${raw}"
Turn this into a clean lesson title about the framework, tool, or app.`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    messages: [{
      role: "user",
      content: `You are curating a beginner-friendly web development course.

Course folders:
${folderDescriptions}

Lessons already published (do NOT duplicate):
${existingList}

${focus}

Rules:
- Pick only 1 topic
- Must be a real framework, tool, library, or app — not a concept or theory
- Must NOT already be covered above
- Number the filename starting from ${nextNum}

Return ONLY a valid JSON object:
{
  "filename": "${nextNum}-slug.md",
  "title": "What is [Tool/Framework]?",
  "folder": "exact-folder-key"
}`,
    }],
  });

  const raw2 = message.content[0].text.trim();
  const jsonMatch = raw2.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error(`Could not parse topic: ${raw2}`);
  const t = JSON.parse(jsonMatch[0]);
  return { ...t, folder: FOLDERS[t.folder] ? t.folder : "05-advanced" };
}

// ── audit: review 3 random lessons, rewrite any that are weak ────────────────

async function auditLessons(existing) {
  if (existing.length < 3) return;

  // Pick 3 random lessons to review
  const sample = existing
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  for (const lesson of sample) {
    const content = fs.readFileSync(lesson.fullPath, "utf8");
    const words = content.trim().split(/\s+/).length;

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 256,
      messages: [{
        role: "user",
        content: `You are reviewing a lesson from a beginner-friendly web development course.

Title: ${lesson.title}
Word count: ${words}

First 300 words of the lesson:
${content.slice(0, 1200)}

Is this lesson:
1. Clear and useful for a complete beginner?
2. Written in plain English with a good real-world analogy?
3. The right length (150–400 words)?

Reply with ONLY one of:
- "OK" — lesson is fine
- "REWRITE: [one sentence reason]" — lesson needs improvement`,
      }],
    });

    const verdict = message.content[0].text.trim();
    if (verdict.startsWith("REWRITE")) {
      const reason = verdict.replace("REWRITE:", "").trim();
      console.log(`  ⚠️  Rewriting: ${lesson.title} — ${reason}`);
      await rewriteLesson(lesson, content, reason);
    } else {
      console.log(`  ✓ OK: ${lesson.title}`);
    }
  }
}

async function rewriteLesson(lesson, oldContent, reason) {
  const meta = FOLDERS[lesson.folder] || FOLDERS["05-advanced"];
  const number = lesson.filename.split("-")[0];

  // Preserve existing footer (prev/next links)
  const footerMatch = oldContent.match(/\n---\n\n←[\s\S]*$/);
  const footer = footerMatch ? footerMatch[0] : "";

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1500,
    messages: [{
      role: "user",
      content: `Rewrite this beginner web dev lesson to be clearer and more useful.

Reason it needs rewriting: ${reason}

Lesson number: ${number}
Title: ${lesson.title}
Section: ${meta.label}
Difficulty: ${meta.difficulty}

Use EXACTLY this structure:

# ${lesson.title}

> ⏱ X min read · ${meta.difficulty}

## One Line Answer
[1 sentence, plain English]

## Real World Analogy
[1 short analogy anyone can understand]

## Live Example
[A real website or tool, explain where to see it]

## How It Shows Up in a Real App
[Short explanation or small code snippet]

## What Breaks Without It
[1-2 sentences]

## What to Tell AI When You Need It
[1-2 copy-paste prompts]

Rules:
- Replace X with real read time (word count ÷ 200, min 2)
- Max 400 words, jargon-free
- Output only the markdown content above — no footer, nothing after the last section`,
    }],
  });

  const newBody = message.content[0].text.trim();
  fs.writeFileSync(lesson.fullPath, newBody + footer, "utf8");
  console.log(`    ✓ Rewritten: ${lesson.filename}`);
}

// ── generate the new lesson ───────────────────────────────────────────────────

async function generateLesson(filename, title, folder, prevEntry) {
  const number = filename.split("-")[0];
  const meta = FOLDERS[folder];

  const prevLink = prevEntry
    ? `← [${prevEntry.title}](./${prevEntry.filename})`
    : `← [${meta.label}](./README.md)`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1500,
    messages: [{
      role: "user",
      content: `Write a beginner-friendly lesson about a real framework, tool, or app for a web development course targeting non-coders.

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
[The actual website or tool URL. Explain exactly what to click or look at.]

## How It Shows Up in a Real App
[Short explanation or minimal code snippet — show how a developer actually uses this tool/framework]

## What Breaks Without It
[1-2 sentences on what you'd have to do manually if this tool didn't exist]

## What to Tell AI When You Need It
[1-2 copy-paste prompts a non-coder can use with Claude Code to get started with this tool]

---

${prevLink} · [More coming tomorrow](./README.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](${REPO}/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)

Rules:
- Replace X with real read time (word count ÷ 200, min 2)
- Max 400 words, jargon-free
- Output only the markdown, nothing before the # title or after the last line`,
    }],
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

// ── update .github/topics.md log ─────────────────────────────────────────────

function updateLog(topic, source, date) {
  let history = "";
  if (fs.existsSync(PLAN_FILE)) {
    const existing = fs.readFileSync(PLAN_FILE, "utf8");
    const match = existing.match(/## 📋 History([\s\S]*?)$/);
    history = match ? match[1].trim() : "";
  }
  const folderLabel = FOLDERS[topic.folder]?.label ?? topic.folder;
  history += `\n| ${date} | ${source} | ${folderLabel} | [${topic.filename}](../lessons/${topic.folder}/${topic.filename}) | ${topic.title} |`;

  fs.writeFileSync(PLAN_FILE,
    `# Automation Log\n\n> Auto-managed. 1 lesson published per day.\n\n---\n\n## 📋 History\n\n| Date | Source | Section | Lesson | Title |\n|------|--------|---------|--------|-------|\n${history.trim()}\n`
  );
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Scanning existing lessons...");
  const existing = getAllExistingLessons();
  console.log(`Found ${existing.length} existing lessons.`);

  // Step 1: audit existing lessons
  console.log("\nAuditing existing lessons...");
  await auditLessons(existing);

  // Step 2: pick today's 1 topic
  const nextNum = existing.length + 1;
  let topic;
  let source;

  const inboxItem = readInbox();
  if (inboxItem) {
    console.log(`\n📥 Inbox item: "${inboxItem}"`);
    topic = await pickOneTopic(inboxItem, existing, nextNum, false);
    source = "📥 Inbox";
  } else {
    console.log("\n📭 Inbox empty. Fetching from internet...");
    const titles = await fetchInternetTitles();
    if (titles.length >= 3) {
      topic = await pickOneTopic(titles.join("\n"), existing, nextNum, true);
      source = "🌐 Internet";
    } else {
      console.log("  Falling back to Claude...");
      topic = await pickOneTopic("Pick any relevant modern web framework or developer tool not already covered.", existing, nextNum, false);
      source = "🤖 Claude";
    }
  }

  console.log(`\nToday's lesson (${source}): [${topic.folder}] ${topic.filename} — ${topic.title}`);

  // Step 3: generate the lesson
  const prev = existing[existing.length - 1];
  fs.mkdirSync(path.join(LESSONS_DIR, topic.folder), { recursive: true });
  const content = await generateLesson(topic.filename, topic.title, topic.folder, prev);
  fs.writeFileSync(path.join(LESSONS_DIR, topic.folder, topic.filename), content, "utf8");
  console.log(`  ✓ Saved to lessons/${topic.folder}/${topic.filename}`);

  // Step 4: update folder README
  updateFolderReadme(topic.folder);

  // Step 5: log
  const today = new Date().toISOString().split("T")[0];
  updateLog(topic, source, today);

  console.log(`\n✅ Done — 1 lesson published. Source: ${source}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
