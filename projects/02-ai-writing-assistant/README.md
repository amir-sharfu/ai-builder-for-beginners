# Project 02 — AI Writing Assistant

> Copy the prompt below → paste into Claude Code → your app is built.

---

## What You're Building

A writing tool where you type or paste any text, highlight a section, and ask Claude to improve it — all inside a clean web interface.

**It will:**
- Let you write or paste any text into an editor
- Let you select any part of the text and apply an AI action
- Actions: **Improve**, **Shorten**, **Expand**, **Fix grammar**, **Translate**, **Explain simply**
- Replace the selected text with Claude's improved version instantly
- Show a before/after diff so you can see what changed
- No WebSocket needed — simple button click, instant result

**Why this project is different from Project 01:**
- Uses plain HTTP requests (not WebSocket) — simpler, different skill
- No streaming — shows result all at once
- Teaches how to send selected text to an API and replace it in the UI

---

## Before You Start

You need:
1. **Claude Code** — [get it here](https://claude.ai/code)
2. **An Anthropic API key** — [get one here](https://console.anthropic.com)

---

## The Prompt

> Open Claude Code in an empty folder, then paste this entire prompt:

```
Build me an AI writing assistant web app from scratch. Here is exactly what I want:

WHAT THE APP DOES:
- A clean text editor where I can type or paste any text
- I can select (highlight) any portion of the text
- A floating toolbar appears near the selection with these action buttons:
  Improve · Shorten · Expand · Fix Grammar · Translate · Explain Simply
- When I click an action, it sends the selected text to Claude and replaces it
  with Claude's improved version
- Show a subtle loading spinner on the button while Claude is processing
- After replacement, briefly highlight the changed text in green so I can see
  what was updated
- A "Translate" button opens a small dropdown to pick the target language first
- An undo button (Ctrl+Z) that reverts the last AI change

TECH STACK TO USE:
- Frontend only — React + Vite + Tailwind CSS
- Backend: Node.js + Express (just one endpoint)
- AI: Anthropic SDK using claude-sonnet-4-6, no streaming needed

PROJECT STRUCTURE:
- /frontend — the React app
- /backend — one Express server file
- Root package.json with "npm run dev" that starts both

BACKEND REQUIREMENTS:
- Single endpoint: POST /api/improve
- Request body: { text: string, action: string, language?: string }
- action is one of: "improve", "shorten", "expand", "fix-grammar",
  "translate", "explain-simply"
- Call Claude with the appropriate system prompt for each action
- Return: { result: string }
- Read ANTHROPIC_API_KEY from .env

FRONTEND REQUIREMENTS:
- Large text area that fills most of the screen, clean minimal design
- When text is selected, show a floating toolbar above the selection
  with the 6 action buttons — styled with rounded corners, subtle shadow
- Buttons have icons (use emoji if no icon library) and short labels
- Clicking a button replaces the selected text with the API response
- Loading state: blur the selected text slightly + spinner on the button
- After replacement: flash the replaced text with a green background
  for 1.5 seconds, then fade back to normal
- Undo (Ctrl+Z) reverts to the text before the last AI action
- Word count shown in the bottom right corner, updates as you type
- Dark mode toggle in the top right corner

ENVIRONMENT:
- .env in /backend with ANTHROPIC_API_KEY=your_key_here
- .env added to .gitignore

AFTER BUILDING:
- Show me the commands to install and run
- Confirm it works by testing "Improve" on a sample sentence

I am a beginner. Briefly explain what each file does as you create it.
```

---

## After It Builds

1. Open `/backend/.env`
2. Replace `your_key_here` with your actual Anthropic API key
3. Run `npm run dev`
4. Open `http://localhost:5173`
5. Type something, highlight a word, click **Improve**

---

## Try These to Test It

Paste this into the editor and try each action:

> "the cat sat on the mat and it was very comfortable and nice"

- **Shorten** → should cut it to one tight sentence
- **Improve** → should make it more vivid
- **Fix Grammar** → should clean up any issues
- **Explain Simply** → should rewrite for a 10-year-old

---

## Want to Extend It?

Once it's running, try asking Claude Code:

> "Add a 'Tone' dropdown so I can make text formal, casual, or professional"

> "Save the document to localStorage so it persists on refresh"

> "Add a sidebar that shows the history of all AI edits I've made"

> "Add a 'Rewrite entirely' button that rewrites the whole document"

---

## What You'll Learn From This Project

| Concept | Where it appears |
|---------|-----------------|
| REST API (POST request) | Frontend calls `/api/improve` |
| Request/response pattern | No streaming — wait for full result |
| Text selection in the browser | `window.getSelection()` |
| React state for undo | Storing previous versions |
| Floating UI positioning | Toolbar above selection |

---

## Related Lessons

| What to understand | Lesson |
|--------------------|--------|
| What is an API? | [Lesson 21](../../lessons/02-backend-and-apis/21-what-is-an-api.md) |
| What is a Prompt? | [Lesson 51](../../lessons/04-building-with-ai/51-what-is-a-prompt.md) |
| What is a System Prompt? | [Lesson 35](../../lessons/03-tools-and-protocols/35-what-is-a-system-prompt.md) |
| How to Add a Feature with AI | [Lesson 66](../../lessons/04-building-with-ai/66-how-to-add-a-feature-with-ai.md) |

---

[← Back to course](../../README.md)
