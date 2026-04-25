# Project Overview — Simple Chat App

> ⏱ 3 min read · 🟡 Intermediate

## What We Built
A fully working AI chat application where you can have conversations with Claude. It supports multiple chats, real-time streaming responses, and tool use (Claude can run code, search the web, read files).

## Try It First
Before reading the walkthroughs, open the app and explore it. Create a few chats. Ask Claude to search the web. Watch what happens when it uses tools.

See the project files in: [`projects/01-simple-chatapp/`](../projects/01-simple-chatapp/)

## The Architecture at a Glance

```
Browser (React App)
    ↕ WebSocket + HTTP
Express Server (Node.js)
    ↕ Claude Agent SDK
Anthropic API (Claude AI)
```

Three layers. Each with a clear job.

## The Files and Their Jobs

### Frontend (`client/`)

| File | Job |
|------|-----|
| `index.html` | The HTML page the browser loads first |
| `index.tsx` | Mounts the React app into `index.html` |
| `App.tsx` | The whole application — manages state, WebSocket, and renders everything |
| `components/ChatList.tsx` | The left sidebar showing all chats |
| `components/ChatWindow.tsx` | The main chat area with messages and input |

### Backend (`server/`)

| File | Job |
|------|-----|
| `server.ts` | Express server — defines all REST routes and WebSocket handling |
| `session.ts` | Manages one chat: receives messages, talks to agent, broadcasts responses |
| `ai-client.ts` | Wraps the Claude Agent SDK — creates the agent, manages the message queue |
| `chat-store.ts` | In-memory storage — stores all chats and messages |
| `types.ts` | TypeScript type definitions shared across the backend |

## The Data Flow in One Diagram

```
User types message
      ↓
App.tsx (frontend)
  → optimistically adds to messages list
  → sends WebSocket: { type: "chat", chatId, content }
      ↓
server.ts (backend)
  → routes to Session.sendMessage()
      ↓
session.ts
  → saves to ChatStore
  → sends to AgentSession.sendMessage()
      ↓
ai-client.ts
  → pushes to MessageQueue
  → Claude Agent SDK processes it
  → streams events back
      ↓
session.ts
  → receives each event
  → broadcasts to subscribers via WebSocket
      ↓
App.tsx (frontend)
  → receives WebSocket messages
  → appends to messages array
  → React re-renders
      ↓
User sees response appear word by word
```

## What Makes This App Interesting
- **Real-time streaming** — responses appear as they're generated
- **Tool use** — Claude can use Bash, WebSearch, file operations
- **Multiple chats** — each chat is an independent agent session
- **WebSocket** — live bidirectional connection throughout

## Next Four Lessons
The next four lessons walk through each major file in detail:
- [The Server](62-walkthrough-server.md)
- [WebSocket](63-walkthrough-websocket.md)
- [Frontend](64-walkthrough-frontend.md)
- [AI Client](65-walkthrough-ai-client.md)

---

← [When to Trust AI — and When Not To](./60-when-to-trust-ai-when-not-to.md) · [Walkthrough — The Server](./62-walkthrough-server.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)