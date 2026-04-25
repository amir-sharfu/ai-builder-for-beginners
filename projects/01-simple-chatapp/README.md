# Project 01 — Simple AI Chat App

> You don't need to write any code yourself.
> Copy the prompt below, open Claude Code, paste it, and let it build the app for you.

---

## What You're Building

A fully working AI chat app — like a personal version of Claude.ai running on your own computer.

**It will have:**
- A clean chat interface where you can type messages and get AI responses
- Multiple independent chat sessions (like tabs)
- Real-time streaming — the AI types back word by word as it thinks
- Powered by Claude via the Anthropic API

---

## Before You Start

You need two things:
1. **Claude Code** installed — [get it here](https://claude.ai/code)
2. **An Anthropic API key** — [get one here](https://console.anthropic.com)

---

## The Prompt

> Open Claude Code in an empty folder, then paste this entire prompt:

```
Build me a fully working AI chat web app from scratch. Here is exactly what I want:

WHAT THE APP DOES:
- A chat interface where I can type messages and receive AI responses
- Multiple chat sessions — I can create a new chat, switch between chats, and each one is independent
- Responses stream in real time, word by word, like Claude.ai
- Clean, minimal UI — dark sidebar on the left showing chat list, main area on the right showing the conversation

TECH STACK TO USE:
- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Real-time communication: WebSocket (ws package)
- AI: Anthropic API using the official @anthropic-ai/sdk package with streaming

PROJECT STRUCTURE I WANT:
- /frontend — the React app
- /backend — the Node.js server
- A root package.json with a single "npm run dev" command that starts both

BACKEND REQUIREMENTS:
- Express server running on port 3001
- REST endpoint: POST /api/chats — creates a new chat, returns { id, title, createdAt }
- REST endpoint: GET /api/chats — returns all chats
- WebSocket server on the same port
- When a WebSocket message arrives with { type: "chat", chatId, content }, call the Anthropic API with streaming and send each chunk back as { type: "chunk", chatId, content }
- When streaming finishes, send { type: "done", chatId }
- Store chats and messages in memory (no database needed)
- Read ANTHROPIC_API_KEY from a .env file

FRONTEND REQUIREMENTS:
- Left sidebar: list of all chats with a "New Chat" button at the top
- Main area: shows messages for the selected chat
- Input bar at the bottom with a send button (also sends on Enter)
- AI messages stream in word by word — do not wait for the full response
- Show a subtle typing indicator while the AI is responding
- Auto-scroll to the latest message
- Each chat gets a title from the first message (truncated to 30 characters)
- Responsive layout — works on mobile too

ENVIRONMENT SETUP:
- Create a .env file in /backend with: ANTHROPIC_API_KEY=your_key_here
- Add .env to .gitignore
- Show a clear error in the UI if the API key is missing

AFTER BUILDING:
- Show me the exact commands to install and run the app
- Tell me what to replace in the .env file
- Open the app in the browser and confirm it works

I am a beginner. Please explain briefly what each major file does as you create it.
```

---

## After It Builds

Claude Code will create all the files, install dependencies, and start the app.

You just need to:
1. Open `/backend/.env`
2. Replace `your_key_here` with your actual Anthropic API key
3. Restart the app with `npm run dev`

Open `http://localhost:5173` and your chat app is live.

---

## Want to Understand What Was Built?

Read these lessons to understand every piece of this app:

| What to understand | Lesson |
|--------------------|--------|
| How the frontend works | [Walkthrough — Frontend](../../lessons/04-building-with-ai/64-walkthrough-frontend.md) |
| How the backend works | [Walkthrough — Server](../../lessons/04-building-with-ai/62-walkthrough-server.md) |
| How WebSocket works | [Walkthrough — WebSocket](../../lessons/04-building-with-ai/63-walkthrough-websocket.md) |
| How the AI client works | [Walkthrough — AI Client](../../lessons/04-building-with-ai/65-walkthrough-ai-client.md) |

---

## Want to Extend It?

Once it's running, try asking Claude Code:

> "Add a button to copy any message to clipboard"

> "Make the sidebar collapsible on mobile"

> "Add a system prompt input at the top of each chat so I can give Claude a role"

> "Save chats to localStorage so they survive a page refresh"

Each of these is one prompt away.

---

[← Back to course](../../README.md)
