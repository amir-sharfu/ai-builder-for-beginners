import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const TOPICS_FILE = path.join(ROOT, "topics.md");
const LESSONS_DIR = path.join(ROOT, "lessons");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function parseTopics(content) {
  return content
    .split("\n")
    .map((line) => {
      const pending = line.match(/^- \[ \] (.+\.md) \| (.+)$/);
      const done = line.match(/^- \[x\] (.+\.md) \| (.+)$/);
      if (pending) return { filename: pending[1], title: pending[2], done: false, raw: line };
      if (done) return { filename: done[1], title: done[2], done: true, raw: line };
      return null;
    })
    .filter(Boolean);
}

async function generateLesson(filename, title) {
  const number = filename.split("-")[0];
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `Write a beginner-friendly lesson for a web development course targeting non-coders.

Lesson number: ${number}
Filename: ${filename}
Title: ${title}

Use this exact markdown structure:

# ${number}. ${title}

## What is it?
[2-3 plain English sentences]

## Real World Analogy
[One short analogy a 10-year-old would understand]

## Live Example
[Name a real website/tool where this concept is visible, explain where to see it]

## How It Shows Up in a Real App
[Short code snippet or description of where this appears in a web project]

## What Breaks Without It
[1-2 sentences on what fails if this concept is missing or misunderstood]

## What to Tell AI When You Need It
[1-2 example prompts a non-coder could copy-paste to ask Claude Code or ChatGPT about this topic]

---

*Part of the [AI Builder for Beginners](../../README.md) course.*

Keep all sections short and jargon-free. No bullet walls. Max 400 words total.`,
      },
    ],
  });

  return message.content[0].text;
}

async function main() {
  const topicsContent = fs.readFileSync(TOPICS_FILE, "utf8");
  const topics = parseTopics(topicsContent);
  const pending = topics.filter((t) => !t.done);

  if (pending.length === 0) {
    console.log("All topics completed.");
    return;
  }

  const batch = pending.slice(0, 5);
  console.log(`Generating ${batch.length} lessons...`);

  let updatedContent = topicsContent;

  for (const topic of batch) {
    console.log(`  → ${topic.filename}`);
    const content = await generateLesson(topic.filename, topic.title);
    const outputPath = path.join(LESSONS_DIR, topic.filename);
    fs.writeFileSync(outputPath, content, "utf8");
    updatedContent = updatedContent.replace(topic.raw, topic.raw.replace("- [ ]", "- [x]"));
    console.log(`    ✓ Written to lessons/${topic.filename}`);
  }

  fs.writeFileSync(TOPICS_FILE, updatedContent, "utf8");
  console.log("topics.md updated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
