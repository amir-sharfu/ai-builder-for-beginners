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

// RSS feeds from popular web dev / AI sources
const RSS_FEEDS = [
  "https://dev.to/feed",
  "https://web.dev/feed.xml",
  "https://developer.mozilla.org/en-US/blog/rss.xml",
  "https://css-tricks.com/feed/",
  "https://blog.openai.com/rss/",
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
        existing.push({ filename: entry.name, title, folder });
      }
    }
  }
  scanDir(LESSONS_DIR);
  return existing.sort((a, b) => a.filename.localeCompare(b.filename));
}

// ── read inbox.md — returns raw items and removes consumed lines ──────────────

function readInbox(limit) {
  if (!fs.existsSync(INBOX_FILE)) return [];
  const content = fs.readFileSync(INBOX_FILE, "utf8");

  const lines = content.split("\n");
  const topics = [];
  const remaining = [];
  let pastDivider = false;

  for (const line of lines) {
    if (line.trim() === "---") { pastDivider = true; remaining.push(line); continue; }
    if (!pastDivider) { remaining.push(line); continue; }

    const match = line.match(/^-\s+(.+)$/);
    if (match && topics.length < limit) {
      topics.push(match[1].trim());
    } else {
      remaining.push(line);
    }
  }

  if (topics.length > 0) {
    fs.writeFileSync(INBOX_FILE, remaining.join("\n"), "utf8");
    console.log(`  Inbox: consumed ${topics.length} item(s), ${remaining.filter(l => /^-\s+/.test(l)).length} remaining.`);
  }

  return topics;
}

// ── fetch RSS feeds and extract article titles ────────────────────────────────

async function fetchInternetTopics() {
  const titles = [];

  for (const url of RSS_FEEDS) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; RSS reader)" },
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) continue;
      const xml = await res.text();
      // Extract <title> tags (skip the first one — that's the feed title)
      const matches = [...xml.matchAll(/<title[^>]*><!\[CDATA\[([^\]]+)\]\]><\/title>|<title[^>]*>([^<]+)<\/title>/g)];
      matches.slice(1, 8).forEach(m => {
        const t = (m[1] || m[2] || "").trim();
        if (t) titles.push(t);
      });
      console.log(`  Fetched ${Math.min(7, matches.length - 1)} titles from ${url}`);
    } catch {
      console.log(`  Could not reach ${url}, skipping.`);
    }
  }

  return titles;
}

// ── ask Claude to pick 5 topics from internet titles ─────────────────────────

async function pickFromInternet(internetTitles, existingLessons, nextNum) {
  const existingList = existingLessons.map(l => `- ${l.title}`).join("\n");
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

Lessons already published (do NOT duplicate):
${existingList}

Here are recent article titles fetched from the web today:
${internetTitles.map((t, i) => `${i + 1}. ${t}`).join("\n")}

From these internet titles, pick or inspire exactly 5 lesson topics that:
1. Are genuinely useful for a beginner learning web dev or AI
2. Are NOT already covered in the published lessons above
3. Can be explained simply with a real-world analogy
4. Belong to the most appropriate course folder

If a title is too advanced or niche, adapt it into a beginner-friendly angle.
Number filenames starting from ${nextNum}.

Return ONLY a valid JSON array, no explanation:
[
  {
    "filename": "${nextNum}-slug.md",
    "title": "Human Readable Title",
    "folder": "exact-folder-key",
    "inspired_by": "original internet title that inspired this"
  }
]`,
      },
    ],
  });

  const raw = message.content[0].text.trim();
  const jsonMatch = raw.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error(`Could not parse internet topic picks:\n${raw}`);

  return JSON.parse(jsonMatch[0]).map(t => ({
    filename: t.filename,
    title: t.title,
    folder: FOLDERS[t.folder] ? t.folder : "05-advanced",
    inspired_by: t.inspired_by || "",
  }));
}

// ── ask Claude to resolve inbox raw items into structured topics ──────────────

async function resolveInboxTopics(rawItems, existingLessons, nextNum) {
  const existingList = existingLessons.map(l => `- ${l.title}`).join("\n");
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

Lessons already published (do not duplicate):
${existingList}

The course owner has pasted these topic ideas:
${rawItems.map((t, i) => `${i + 1}. ${t}`).join("\n")}

For each item, write a clear beginner-friendly lesson title, assign the best folder, and generate a filename starting from ${nextNum}.

Return ONLY a valid JSON array, one entry per item, in the same order:
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
  if (!jsonMatch) throw new Error(`Could not parse inbox resolution:\n${raw}`);

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

// ── update .github/topics.md ──────────────────────────────────────────────────

function updatePlanFile(todayTopics, source, date) {
  let history = "";
  if (fs.existsSync(PLAN_FILE)) {
    const existing = fs.readFileSync(PLAN_FILE, "utf8");
    const historyMatch = existing.match(/## 📋 History([\s\S]*?)$/);
    history = historyMatch ? historyMatch[1].trim() : "";
  }

  for (const t of todayTopics) {
    const folderLabel = FOLDERS[t.folder]?.label ?? t.folder;
    const note = t.inspired_by ? ` *(from: ${t.inspired_by})*` : "";
    history += `\n| ${date} | ${source} | ${folderLabel} | [${t.filename}](../lessons/${t.folder}/${t.filename}) | ${t.title}${note} |`;
  }

  fs.writeFileSync(PLAN_FILE,
    `# Automation Log\n\n> Auto-managed. Shows how each day's topics were sourced and what was published.\n\n---\n\n## 📋 History\n\n| Date | Source | Section | Lesson | Title |\n|------|--------|---------|--------|-------|\n${history.trim()}\n`
  );
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Scanning existing lessons...");
  const existing = getAllExistingLessons();
  console.log(`Found ${existing.length} existing lessons.`);

  const nextNum = existing.length + 1;
  let todayTopics = [];
  let source = "";

  // Priority 1: inbox.md — user-curated items
  const inboxRaw = readInbox(5);
  if (inboxRaw.length > 0) {
    console.log(`\n📥 Inbox has ${inboxRaw.length} item(s). Using inbox topics.`);
    todayTopics = await resolveInboxTopics(inboxRaw, existing, nextNum);
    source = "📥 Inbox";
  } else {
    // Priority 2: inbox is empty → explore the internet
    console.log("\n📭 Inbox is empty. Fetching topics from the internet...");
    const internetTitles = await fetchInternetTopics();

    if (internetTitles.length >= 5) {
      console.log(`  Found ${internetTitles.length} titles from the web. Asking Claude to pick 5...`);
      todayTopics = await pickFromInternet(internetTitles, existing, nextNum);
      source = "🌐 Internet";
    } else {
      // Fallback: not enough internet content (network issues), Claude picks from knowledge
      console.log("  Not enough internet content. Falling back to Claude's knowledge...");
      const message = await client.messages.create({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        messages: [{
          role: "user",
          content: `Suggest 5 beginner-friendly web development or AI topics that are currently relevant and NOT in this list:\n${existing.map(l => `- ${l.title}`).join("\n")}\n\nReturn ONLY a JSON array:\n[{"filename":"${nextNum}-slug.md","title":"Title","folder":"folder-key"}]`,
        }],
      });
      const raw = message.content[0].text.trim();
      const jsonMatch = raw.match(/\[[\s\S]*\]/);
      todayTopics = JSON.parse(jsonMatch[0]).map(t => ({ ...t, folder: FOLDERS[t.folder] ? t.folder : "05-advanced" }));
      source = "🤖 Claude";
    }
  }

  todayTopics = todayTopics.slice(0, 5);
  console.log(`\nToday's topics (source: ${source}):`);
  todayTopics.forEach(t => console.log(`  [${t.folder}] ${t.filename} — ${t.title}`));

  // Generate lessons
  const foldersUpdated = new Set();
  for (let i = 0; i < todayTopics.length; i++) {
    const topic = todayTopics[i];
    fs.mkdirSync(path.join(LESSONS_DIR, topic.folder), { recursive: true });

    const prev = i === 0
      ? existing[existing.length - 1]
      : { filename: todayTopics[i - 1].filename, title: todayTopics[i - 1].title };
    const nextTitle = i < todayTopics.length - 1 ? todayTopics[i + 1].title : null;

    console.log(`  Generating: ${topic.title} → lessons/${topic.folder}/`);
    const content = await generateLesson(topic.filename, topic.title, topic.folder, prev, nextTitle);
    fs.writeFileSync(path.join(LESSONS_DIR, topic.folder, topic.filename), content, "utf8");
    foldersUpdated.add(topic.folder);
    console.log(`    ✓ Saved`);
  }

  for (const folder of foldersUpdated) {
    updateFolderReadme(folder);
    console.log(`  ✓ Updated lessons/${folder}/README.md`);
  }

  const today = new Date().toISOString().split("T")[0];
  updatePlanFile(todayTopics, source, today);
  console.log(`\n✅ Done — ${todayTopics.length} lessons published. Source: ${source}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
