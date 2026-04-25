# Walkthrough — The Server

> ⏱ 2 min read · 🟡 Intermediate

## File: `server/server.ts`
This is the entry point of the backend — the first file that runs when you start the server.

## What It Does in Plain English
It creates a web server that:
1. Serves the REST API endpoints (create, list, delete chats)
2. Handles WebSocket connections for real-time messaging
3. Keeps track of all active chat sessions
4. Pings clients every 30 seconds to detect disconnections

## Reading It Section by Section

### Setup
```typescript
import "dotenv/config";  // Load .env file (ANTHROPIC_API_KEY)
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { WebSocketServer } from "ws";
```
The imports tell you exactly what this file uses: environment variables, Express, CORS, HTTP server, WebSocket server.

### The Express App
```typescript
const app = express();
app.use(cors());           // Allow frontend to call this
app.use(express.json());   // Understand JSON in request bodies
```
Three lines that configure the Express app. `cors()` is why the frontend can talk to it. `express.json()` is why it can read the body of POST requests.

### REST API Routes
```typescript
app.get("/api/chats", (req, res) => {
  res.json(chatStore.getAllChats());  // Return all chats as JSON
});

app.post("/api/chats", (req, res) => {
  const chat = chatStore.createChat(req.body?.title);
  res.status(201).json(chat);  // 201 = "Created"
});

app.delete("/api/chats/:id", (req, res) => {
  const deleted = chatStore.deleteChat(req.params.id);
  // ...
});
```
Each route: receives a request, does something, sends a response. Clean and readable.

### Session Management
```typescript
const sessions: Map<string, Session> = new Map();

function getOrCreateSession(chatId: string): Session {
  let session = sessions.get(chatId);
  if (!session) {
    session = new Session(chatId);
    sessions.set(chatId, session);
  }
  return session;
}
```
A `Map` (like a dictionary) storing one `Session` per chat ID. If a chat doesn't have a session yet, create one. This is how each chat gets its own independent AI agent.

### Starting the Server
```typescript
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```
Starts listening for requests on the specified port.

## What to Ask AI About This File
> "In server.ts, why do we use `createServer(app)` instead of just `app.listen()`? What's the difference and why does it matter for WebSocket?"

---

← [Project Overview — Simple Chat App](./61-project-overview-simple-chatapp.md) · [Walkthrough — WebSocket](./63-walkthrough-websocket.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)