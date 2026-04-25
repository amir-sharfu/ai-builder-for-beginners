# Your First Project from Scratch

> ⏱ 4 min read · 🟡 Intermediate

## You Made It
Three weeks of lessons. 74 concepts covered. One real app built and understood. Now you build your own.

This lesson gives you the exact process to go from idea to working app using AI — without a reference repo, without copying someone else's code, just you and Claude Code.

---

## Step 1: Pick an Idea (10 minutes)

The best first project solves a real, small problem you have.

**Questions to help you find one:**
- What do I do repeatedly that's boring? (AI could automate it)
- What information do I wish was organised better? (AI could structure it)
- What would I use every day? (motivation to finish)

**Good first projects:**
- Personal journal with AI reflection
- Meeting notes app that generates action items
- Book/article reading list with AI summaries
- Daily standup generator for your team
- Recipe helper that suggests meals from your ingredients

**Avoid for your first project:**
- Social networks (complex, needs many users)
- Anything requiring payments (adds significant complexity)
- Real-time multiplayer (harder than it seems)

---

## Step 2: Describe the App (30 minutes)

Write out your idea in full before talking to AI. Use these prompts:

**User experience:**
> Who uses it? What do they do first? What happens next? What does success look like?

**Key features (maximum 3 for v1):**
> What are the 3 things it absolutely must do? Leave everything else for later.

**Data:**
> What information does the app store? What does one "record" look like?

Write this out in plain English. Don't worry about being technical.

---

## Step 3: The Starting Prompt

Use this template with Claude Code:

```
I want to build [app name]: [one sentence description].

Target user: [who will use it, including you]

The 3 core features:
1. [feature 1]
2. [feature 2]
3. [feature 3]

User experience for the main flow:
[describe step by step what the user does and sees]

Technical stack (same as what I've been learning):
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Real-time (if needed): WebSocket
- Storage: in-memory for now
- AI: Claude Agent SDK with @anthropic-ai/claude-agent-sdk
- TypeScript throughout

Please:
1. Create the full project structure
2. Build all the files needed to make the core features work
3. Explain each file briefly as you create it
4. Tell me what to run to start it
```

---

## Step 4: The Build Loop

After Claude Code creates the initial app:

1. **Run it** — `npm install` then `npm run dev`
2. **Use it** — click everything, try the main flow
3. **Identify the first gap** — what's missing or broken?
4. **Fix or add one thing at a time** — use the templates from lessons 66-68
5. **Test after every change**
6. **Repeat**

Don't try to build everything at once. Ship a version that works for the core flow, then improve it.

---

## Step 5: Share It

Push to GitHub. Share the link. Even if it's not perfect — a working app is better than a perfect plan.

```bash
git init
git add .
git commit -m "Initial version of [app name]"
git push
```

---

## The Mindset

You will get stuck. That's not failure — that's learning. Every time you get stuck and figure it out, you understand something more deeply than any lesson could teach.

The goal isn't a perfect app. The goal is an app that exists, that you built, that you understand.

**Go build something.**

---

*You've completed the 3-week plan. The rest is practice.*

---

← [How to Contribute to This Repo](./74-how-to-contribute.md) · [Course Complete 🎉](../../README.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)