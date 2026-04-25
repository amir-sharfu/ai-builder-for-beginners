# How to Fix a Bug with AI

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
Give AI the full error, the expected behaviour, the actual behaviour, and the relevant code — in that order.

## The Bug Report Template

```
Bug: [one sentence description]

Expected: [what should happen]
Actual: [what actually happens]

Error message (if any):
[full error text — don't paraphrase]

Steps to reproduce:
1. [do this]
2. [then this]
3. [bug appears]

Relevant code:
[paste only the relevant section — not the whole project]

What I've tried:
[anything you've already done]
```

## Example: A Real Bug Report

```
Bug: Messages appear twice in the chat window when I send a message.

Expected: Each message appears once.
Actual: Every message I send shows up twice in the chat window.

Error: No error in terminal or browser console.

Steps to reproduce:
1. Open the app
2. Create a new chat
3. Type any message and press Enter
4. The message appears twice

Relevant code (App.tsx, handleSendMessage function):
[paste the function]

Also relevant (App.tsx, handleWSMessage, "user_message" case):
[paste the case]

What I've tried: Refreshing the browser didn't help. The duplication happens live.
```

A bug report this clear usually gets an accurate diagnosis immediately.

## Common Bug Patterns and What to Include

| Bug type | What to include |
|----------|----------------|
| UI looks wrong | Screenshot description + the component file |
| Data not saving | The API call + the store/database code |
| Network error | The full error from browser console |
| App crashes | The full terminal error + stack trace |
| Wrong behaviour | Before/after description + the function that handles it |

## The Browser Console Is Your Friend

Press `F12` in your browser → Console tab. This shows:
- JavaScript errors (red)
- Network errors (sometimes red)
- Your `console.log()` calls
- Warnings (yellow)

Always check the console before asking AI. It often tells you exactly what went wrong.

## When AI Gives the Wrong Fix

If AI's first fix doesn't work:
1. Tell it exactly what happened after applying the fix
2. Paste any new errors
3. Say "that didn't fix it, here's what changed:"

AI improves its diagnosis with more information. Don't give up after one attempt.

## What to Tell AI When You Need It
> "Here's a bug. Don't fix it yet — first explain what you think is causing it and why. Then I'll confirm before you make changes."

---

← [How to Add a Feature with AI](./66-how-to-add-a-feature-with-ai.md) · [How to Change the UI with AI](./68-how-to-change-the-ui-with-ai.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)