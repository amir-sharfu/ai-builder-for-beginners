# What is Express?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
Express is a framework for Node.js that makes it easy to create a web server with routes — without writing everything from scratch.

## Real World Analogy
Node.js gives you the raw ingredients and kitchen equipment. Express is the recipe book — it tells you exactly how to handle each type of request cleanly and consistently.

## Live Example
Almost every Node.js backend tutorial on **https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs** uses Express as the starting point. It's the most widely used Node.js framework in the world — used by companies like IBM, Accenture, and Uber.

## What Express Does

Without Express (raw Node.js — complex):
```javascript
const server = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/chats') {
    // ... 20 lines of parsing, headers, etc.
  } else if (req.method === 'POST' && req.url === '/api/chats') {
    // ... read body, parse JSON, handle errors...
  }
});
```

With Express (clean and simple):
```javascript
app.get('/api/chats', (req, res) => {
  res.json(chatStore.getAllChats());
});

app.post('/api/chats', (req, res) => {
  const chat = chatStore.createChat(req.body?.title);
  res.status(201).json(chat);
});
```

## Express Routes in Our App

| Method | Route | What It Does |
|--------|-------|-------------|
| GET | `/api/chats` | List all chats |
| POST | `/api/chats` | Create a new chat |
| GET | `/api/chats/:id` | Get one chat |
| DELETE | `/api/chats/:id` | Delete a chat |
| GET | `/api/chats/:id/messages` | Get messages |

The `:id` part is a variable — it matches any chat ID in the URL.

## How It Shows Up in Our App
`server/server.ts` starts with:
```javascript
const app = express();
app.use(cors());       // Allow requests from the frontend
app.use(express.json()); // Parse JSON request bodies
```

Then defines all the routes, then starts the HTTP server.

## What to Tell AI When You Need It
> "Use Express to create REST API routes. I need GET, POST, and DELETE routes for the /api/chats path. Return JSON responses with appropriate status codes."

---

← [What is Node.js?](./17-what-is-nodejs.md) · [What is a Port?](./19-what-is-a-port.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)