# How to Read an Error Message

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
An error message tells you what went wrong, where it happened, and sometimes how to fix it.

## Real World Analogy
It's like a check engine light that also says "low oil, front left sensor, check manual page 42" — the more you read it, the less scary it gets.

## Live Example
Open any webpage in Chrome, right-click, and choose **Inspect**. Click the **Console** tab. If anything is broken on the page, you'll see red error messages there — each one names the file and line number where the problem is.

## How It Shows Up in a Real App
When your JavaScript has a typo, the console might show:

```
Uncaught ReferenceError: userName is not defined
    at app.js:12
```

This tells you three things: the error type (`ReferenceError`), what caused it (`userName is not defined`), and exactly where to look (`app.js`, line 12).

## What Breaks Without It
You'll waste hours guessing what went wrong instead of going straight to the source. Most bugs are fixed in under a minute once you actually read the message.

## What to Tell AI When You Need It
- *"I got this error in my browser console: [paste error here]. I'm a beginner — what does it mean and how do I fix it?"*
- *"Explain this error message in plain English and show me what the corrected code looks like: [paste error here]"*
---

← [What is a Config File?](./45-what-is-a-config-file.md) · [What is a Port Conflict?](./47-what-is-a-port-conflict.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)