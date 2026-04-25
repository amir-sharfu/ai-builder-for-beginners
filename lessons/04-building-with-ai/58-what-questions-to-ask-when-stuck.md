# What Questions to Ask When Stuck

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
Being stuck usually means one of four things: something isn't running, something isn't connected, something doesn't look right, or something doesn't behave right — each has a different question to ask.

## The Four Types of Stuck

### 1. "It won't start"
*The app doesn't run at all*

Questions to ask:
> "I ran `npm run dev` and got this error: [paste error]. What does it mean and how do I fix it?"

> "The server starts but immediately crashes with: [paste error]. Walk me through diagnosing this."

> "I get 'Cannot find module X'. I've installed all dependencies. What else could cause this?"

---

### 2. "It won't connect"
*The app runs but parts can't talk to each other*

Questions to ask:
> "The frontend loads but shows 'disconnected'. The backend is running on port 3001. What should I check first?"

> "API calls from the frontend get a 404. The route exists on the backend. What could be wrong?"

> "I'm getting a CORS error. The server has cors() enabled. What else could cause this?"

---

### 3. "It doesn't look right"
*The UI is broken or unstyled*

Questions to ask:
> "My Tailwind CSS classes aren't applying. The classes are in the code but have no effect. What should I check?"

> "The layout is broken — the sidebar is overlapping the main content. Here's the relevant JSX: [paste code]. Fix the layout."

> "On mobile, the chat input is hidden behind the keyboard. How do I fix this?"

---

### 4. "It doesn't behave right"
*The app runs but does the wrong thing*

Questions to ask:
> "When I delete a chat, it disappears from the UI but comes back on refresh. The delete API call returns 200. What's wrong?"

> "Messages are appearing twice in the chat window. Here's my message handling code: [paste]. Why is this happening?"

> "The AI response appears all at once instead of streaming. The server is streaming. What could prevent the frontend from showing it progressively?"

---

## The Universal Debugging Question

When you have no idea where to start:
> "My app is doing [X] but I expected [Y]. I don't know where to look. Given this is a React + Express + WebSocket app, what are the most likely causes and how do I check each one?"

## Before Asking AI: Collect Information

The more you provide, the faster AI helps:
- **Error message** (full text)
- **What you expected**
- **What actually happened**
- **Relevant code** (the specific file/function, not the whole project)
- **What you've already tried**

## What to Tell AI When You Need It
> "I'm stuck. Here's the situation: [describe]. Here's what I've tried: [list]. Here's the error/behaviour: [describe]. Where do I look next?"

---

← [How to Ask AI to Explain Code](./57-how-to-ask-ai-to-explain-code.md) · [How to Verify AI Didn't Make Mistakes](./59-how-to-verify-ai-didnt-make-mistakes.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)