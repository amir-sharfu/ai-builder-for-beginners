# Common Beginner Mistakes

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
New developers often break their apps by ignoring error messages, hardcoding sensitive values, or assuming the wrong port is running their server.

## Real World Analogy
It's like moving into a new apartment and assuming the light switches work the same as your old place — small wrong assumptions cause real problems until you stop and read the manual.

## Live Example
Open any project on **Replit** (replit.com) and start a Node server without specifying a port. Replit assigns its own port automatically — if you hardcode `3000`, your app won't load. The error message tells you exactly what's wrong, but beginners often skip reading it.

## How It Shows Up in a Real App

Three mistakes appear constantly in beginner projects:

**1. Hardcoding ports**
```js
// ❌ Breaks on most hosting platforms
const PORT = 3000;

// ✅ Works anywhere
const PORT = process.env.PORT || 3000;
```

**2. Skipping error messages**
```js
// ❌ Beginner habit — ignoring the red text in the terminal
// ✅ Read the first line of the error, Google it exactly as written
```

**3. Committing API keys to GitHub**
```js
// ❌ Anyone can steal this
const key = "sk-abc123realkey";

// ✅ Store it in a .env file, never push that file
const key = process.env.API_KEY;
```

## What Breaks Without It
Hardcoded ports cause apps to fail silently on platforms like Render or Railway. Exposed API keys can rack up charges on your account within hours of being pushed to a public repo.

## What to Tell AI When You Need It

> "My Node server works locally on port 3000 but won't start when I deploy to Render. Here's my server file: [paste code]. What's wrong?"

> "I accidentally pushed my API key to GitHub. What do I do right now to secure it, and how do I use environment variables instead?"
---

← [What is a Dependency?](./49-what-is-a-dependency.md) · [What is a Prompt?](../04-building-with-ai/51-what-is-a-prompt.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)