import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const LESSONS_DIR = path.join(ROOT, "lessons");
const ADVANCED_DIR = path.join(ROOT, "lessons/05-advanced");
const LOG_FILE = path.join(ROOT, "topics.md");
const REPO = "https://github.com/amir-sharfu/ai-builder-for-beginners";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── collect all existing lesson titles from the repo ──────────────────────────

function getAllExistingLessons() {
  const existing = [];
  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        scanDir(path.join(dir, entry.name));
      } else if (entry.name.endsWith(".md") && entry.name !== "README.md") {
        const content = fs.readFileSync(path.join(dir, entry.name), "utf8");
        const titleMatch = content.match(/^#\s+(.+)$/m);
        const title = titleMatch ? titleMatch[1].trim() : entry.name;
        existing.push({ filename: entry.name, title });
      }
    }
  }
  scanDir(LESSONS_DIR);
  return existing;
}

// ── ask Claude to suggest 5 new unique topics ─────────────────────────────────

async function suggestNewTopics(existingLessons) {
  const existingTitles = existingLessons.map(l => `- ${l.title}`).join("\n");
  const nextNum = existingLessons.length + 1;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are curating a beginner-friendly web development course.

Here are ALL the lessons already published:
${existingTitles}

Suggest exactly 5 NEW unique web development topics that:
1. Are NOT already covered in the list above (not even partially)
2. Are genuinely useful for someone learning to build web apps
3. Are beginner to intermediate level
4. Cover a wide range — tools, concepts, protocols, practices, security, performance, patterns

Number the filenames starting from ${nextNum}.

Return ONLY a valid JSON array, no explanation, no markdown code block:
[
  { "filename": "${nextNum}-slug-here.md", "title": "Human Readable Title" },
  ...
]`,
      },
    ],
  });

  const raw = message.content[0].text.trim();
  const jsonMatch = raw.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error(`Could not parse topic suggestions:\n${raw}`);
  return JSON.parse(jsonMatch[0]);
}

// ── generate a single lesson ──────────────────────────────────────────────────

async function generateLesson(filename, title, prevEntry, nextTitle) {
  const number = filename.split("-")[0];
  const prevLink = prevEntry
    ? `← [${prevEntry.title}](./${prevEntry.filename})`
    : `← [Advanced Topics](./README.md)`;
  const nextLinkText = nextTitle
    ? `[${nextTitle}](./README.md) →`
    : `[More coming tomorrow](./README.md) →`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1500,
    messages: [
      {
        role: "user",
        content: `Write a beginner-friendly web development lesson for a course targeting non-coders.

Lesson number: ${number}
Title: ${title}

Use EXACTLY this markdown structure:

# ${title}

> ⏱ X min read · 🟠 Advanced

## One Line Answer
[1 sentence, plain English]

## Real World Analogy
[1 short analogy anyone can understand]

## Live Example
[Name a real website/tool where this concept is visible and explain where to see it]

## How It Shows Up in a Real App
[Short explanation or small code snippet]

## What Breaks Without It
[1-2 sentences on what fails if this is missing or ignored]

## What to Tell AI When You Need It
[1-2 copy-paste prompts a non-coder can use with Claude Code or ChatGPT]

---

${prevLink} · ${nextLinkText}

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](${REPO}/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)

Instructions:
- Replace X in "⏱ X min read" with the real estimated read time (word count ÷ 200, minimum 2)
- Keep all sections short and jargon-free, max 400 words total
- Output only the markdown, nothing before the # title or after the last line`,
      },
    ],
  });

  return message.content[0].text.trim();
}

// ── append to topics log at repo root ─────────────────────────────────────────

function appendToLog(topics, date) {
  const header = `# Topics Log\n\nAuto-updated daily. Every row is a lesson generated automatically — no manual input needed.\n\n| Date | Lesson | Title |\n|------|--------|-------|\n`;
  let log = fs.existsSync(LOG_FILE) ? fs.readFileSync(LOG_FILE, "utf8") : header;

  // If file exists but has old format (checklist style), replace it
  if (!log.includes("| Date |")) {
    log = header;
  }

  for (const t of topics) {
    log += `| ${date} | [${t.filename}](lessons/05-advanced/${t.filename}) | ${t.title} |\n`;
  }

  fs.writeFileSync(LOG_FILE, log, "utf8");
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Scanning existing lessons...");
  const existing = getAllExistingLessons();
  console.log(`Found ${existing.length} existing lessons.`);

  console.log("Asking Claude for 5 new unique topics...");
  const newTopics = await suggestNewTopics(existing);
  console.log("Suggested:");
  newTopics.forEach(t => console.log(`  → ${t.filename} | ${t.title}`));

  fs.mkdirSync(ADVANCED_DIR, { recursive: true });

  for (let i = 0; i < newTopics.length; i++) {
    const topic = newTopics[i];
    const prev = i === 0
      ? existing[existing.length - 1]
      : { filename: newTopics[i - 1].filename, title: newTopics[i - 1].title };
    const nextTitle = i < newTopics.length - 1 ? newTopics[i + 1].title : null;

    console.log(`  Generating: ${topic.title}...`);
    const content = await generateLesson(topic.filename, topic.title, prev, nextTitle);
    fs.writeFileSync(path.join(ADVANCED_DIR, topic.filename), content, "utf8");
    console.log(`    ✓ Saved`);
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
