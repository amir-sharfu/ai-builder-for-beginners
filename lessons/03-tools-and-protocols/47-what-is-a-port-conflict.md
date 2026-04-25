# What is a Port Conflict?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
A port conflict happens when two processes try to use the same port number — only one can win, the other fails.

## Real World Analogy
Imagine two taxis with the same number plate trying to park in the same designated spot. The city only allows one taxi per number. The second one gets turned away. Port conflicts work the same way — the operating system only allows one process per port.

## The Exact Error We Saw

```
Error: listen EADDRINUSE: address already in use :::3001
```

Translation: "Port 3001 is already occupied. I can't start here."

## Why It Happened in Our Case

We ran `npm run dev:server` manually first (to test), which started a process on port 3001. Then when we ran `npm run dev` (which also starts the server), the second server tried to use port 3001 — but it was already taken by the first one.

## How to Find What's Using a Port

```bash
# Linux/Mac — find the process ID using port 3001
lsof -ti:3001

# Kill it
kill $(lsof -ti:3001)
```

Or on Windows:
```bash
netstat -ano | findstr :3001
taskkill /PID <number> /F
```

## How to Prevent It

1. **Always stop processes before restarting** — `Ctrl+C` to stop the current server
2. **Use different ports** — if you need two servers, give them different port numbers
3. **Check before starting** — `lsof -ti:3001` to see if anything is there

## How Vite Handles It
Vite is smart — if port 5173 is taken, it automatically tries 5174, then 5175, etc. You saw this happen:
```
Port 5173 is in use, trying another one...
VITE v5.4.21  ready in 1319 ms
➜  Local:   http://localhost:5174/
```

Express (our backend) does not do this — it just fails. That's why we had to kill the old process manually.

## What to Tell AI When You Need It
> "Add logic to the server that shows a clear error message if the port is already in use, and suggests how to free it up."

---

← [How to Read an Error Message](./46-how-to-read-an-error-message.md) · [What is CORS?](./48-what-is-cors.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)