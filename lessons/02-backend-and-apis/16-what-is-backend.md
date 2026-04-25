# What is a Backend?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
The backend is the part of the app the user never sees — it runs on a server, handles logic, talks to databases, and calls external APIs.

## Real World Analogy
A restaurant has a dining area (frontend) and a kitchen (backend). Customers see the dining area, place orders, and receive food. But all the real work — cooking, storing ingredients, managing recipes — happens in the kitchen. Customers never go there.

## Live Example
Go to **https://www.instagram.com** and log in.

When you tap the heart on a photo:
1. The **frontend** (what you see) instantly turns the heart red
2. The **backend** records your like in a database
3. The backend sends a notification to the photo owner
4. The backend updates the like count

You only see step 1. Steps 2–4 are entirely backend.

## What Lives in the Backend

| Responsibility | Example in Our App |
|---------------|-------------------|
| Receiving requests | Express routes (`/api/chats`) |
| Business logic | Creating, deleting, managing chats |
| Calling external APIs | Sending messages to Claude AI |
| Managing connections | WebSocket sessions |
| Data storage | In-memory ChatStore |

## What the Backend Keeps Secret
- **API keys** — our `ANTHROPIC_API_KEY` never leaves the server
- **Business rules** — logic the user shouldn't be able to bypass
- **Database credentials** — connection details to data stores

This is why we never put API keys in frontend code — the browser is public and anyone could read it.

## How It Shows Up in Our App
Our backend is `server/server.ts` — an Express + WebSocket server running on `localhost:3001`. It receives messages from the browser, passes them to the Claude Agent SDK, and streams responses back.

## What Breaks Without It
The frontend becomes a pretty but useless interface. No AI responses, no chat history, no data saved anywhere.

## What to Tell AI When You Need It
> "Build a Node.js backend with Express. It should handle REST API routes for managing chats and use WebSocket for real-time communication. Keep the API key on the server side only."

---

← [Why Do We Use Frameworks?](../01-web-fundamentals/15-why-we-use-frameworks.md) · [What is Node.js?](./17-what-is-nodejs.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)