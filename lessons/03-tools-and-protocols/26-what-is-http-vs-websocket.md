# What is HTTP vs WebSocket?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
HTTP is a one-time request-response (like sending a letter). WebSocket is a live, two-way connection (like a phone call).

## Real World Analogy
- **HTTP** — sending a text message. You send it, you get a reply, conversation ends. Next topic = new message.
- **WebSocket** — a phone call. Once connected, both sides can talk whenever they want. No need to hang up and call again for each sentence.

## Live Examples
- **HTTP**: **https://www.wikipedia.org** — You ask for a page, it sends it, done. No ongoing connection.
- **WebSocket**: **https://www.slack.com** — When someone sends you a message, it appears instantly without you refreshing the page. That's a live WebSocket connection pushing data to you.

## Side by Side

| Feature | HTTP | WebSocket |
|---------|------|-----------|
| Connection | Opens and closes per request | Stays open |
| Who can send | Only client can start | Both sides, anytime |
| Speed | Slight overhead per request | Fast, no repeated handshake |
| Good for | Fetching data, submitting forms | Chat, live updates, streaming |
| Example | Loading a webpage | Real-time chat messages |

## How HTTP Works
```
Browser → "GET /api/chats"    → Server
Browser ←  [list of chats]    ← Server
(connection closes)
```

## How WebSocket Works
```
Browser → "Open connection /ws" → Server
(connection stays open)
Browser → "Send message"         → Server
Browser ← "AI response chunk 1" ← Server
Browser ← "AI response chunk 2" ← Server
Browser ← "AI response chunk 3" ← Server
(connection stays open until closed)
```

## How It Shows Up in Our App
Our app uses **both**:
- **HTTP** — for fetching chat lists, creating chats, deleting chats (one-time operations)
- **WebSocket** — for sending messages and receiving AI responses (real-time, streaming)

## What to Tell AI When You Need It
> "Use HTTP REST endpoints for CRUD operations (create, read, update, delete). Use WebSocket for the real-time chat — messages in, AI responses streamed back out."

---

← [Frontend + Backend — The Full Picture](../02-backend-and-apis/25-frontend-backend-full-picture.md) · [What is Streaming?](./27-what-is-streaming.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)