# Frontend + Backend — The Full Picture

## One Line Answer
The frontend is what users see; the backend is what makes it work. Together they form a complete app.

## The Complete Map

```
USER
  │
  ▼
BROWSER (Frontend)
  ├── React components (UI)
  ├── Tailwind CSS (styling)
  ├── State management (which chat is open, messages list)
  └── WebSocket client (real-time connection)
  │
  │  HTTP requests (/api/chats)
  │  WebSocket messages (/ws)
  ▼
SERVER (Backend — localhost:3001)
  ├── Express routes (REST API)
  ├── WebSocket server (real-time)
  ├── Session management (per-chat agent)
  ├── ChatStore (in-memory data)
  └── Claude Agent SDK
        │
        │  HTTPS
        ▼
  ANTHROPIC API (api.anthropic.com)
        │
        ▼
  CLAUDE AI MODEL
```

## Tracing One Message Through the System

You type "What is React?" and press Enter.

1. **Frontend** — React captures the input, adds it to the messages list optimistically, sends a WebSocket message `{ type: "chat", chatId: "...", content: "What is React?" }`

2. **Backend (WebSocket)** — receives the message, finds the Session for this chat

3. **Backend (Session)** — stores the user message in ChatStore, sends it to the AgentSession

4. **Backend (Agent SDK)** — passes the message to Claude via Anthropic's API

5. **Anthropic API** — Claude processes the message and streams back a response

6. **Backend (Session)** — receives streamed response chunks, broadcasts each one to the frontend via WebSocket

7. **Frontend** — receives each WebSocket message of type `assistant_message`, appends it to the messages array, React re-renders the chat window

8. **You see the response** appear in real time

## Why They're Separate

| Concern | Frontend | Backend |
|---------|---------|---------|
| Security | Never put API keys here | Safe to store secrets |
| User experience | Fast, interactive | Reliable, consistent |
| Data | Displays data | Stores and processes data |
| Scale | Each user has their own | Shared by all users |

## What to Tell AI When You Need It
> "I want a clear separation between frontend and backend. The frontend only talks to the backend via HTTP or WebSocket — it never calls external APIs directly. All secrets stay on the backend."

---

**Week 1 Complete.** You now understand every piece of the web stack. Week 2 covers the tools in depth.

*Previous: [What is In-Memory Storage?](24-what-is-in-memory-storage.md) · Next: [What is HTTP vs WebSocket?](26-what-is-http-vs-websocket.md)*
