# What Broke When WebSocket Disconnected

> ⏱ 2 min read · 🟡 Intermediate

## The Story
This repo was built inside a GitHub Codespace. When we first ran the app, the UI loaded but showed "disconnected." No messages could be sent. Here's exactly what happened and why — so you understand the real problem, not just the fix.

## What the Code Said (Before Fix)

In `client/App.tsx`:
```javascript
const WS_URL = `ws://${window.location.hostname}:3001/ws`;
```

This tells the browser: "Connect to WebSocket at this hostname, on port 3001."

## Why It Worked Locally (On a Regular Computer)
On a normal local machine:
- `window.location.hostname` = `localhost`
- Port 3001 is accessible directly
- URL becomes `ws://localhost:3001/ws` ✓

## Why It Failed in GitHub Codespaces
In a Codespace, your app runs inside a remote Linux container. GitHub exposes specific ports to the internet via special URLs like:
```
https://your-codespace-5174.preview.app.github.dev
```

Port 5174 (Vite) was forwarded and accessible.
Port 3001 (Express) was **not directly accessible** from the browser.

So `ws://your-codespace:3001/ws` failed silently — the browser couldn't reach port 3001 at all.

## The Fix

```javascript
// Before (hardcoded port 3001):
const WS_URL = `ws://${window.location.hostname}:3001/ws`;

// After (uses current host, goes through Vite proxy):
const WS_URL = `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}/ws`;
```

Now the WebSocket connects to the **same host and port the browser is already using** (the Vite dev server). Vite's proxy then forwards `/ws` to `localhost:3001` internally — inside the container where both servers can reach each other.

## The Lesson

**Never hardcode ports in frontend code.**

Instead, use relative paths or the current `window.location.host`. Let the proxy or deployment configuration handle routing. This way, your code works the same whether you're on localhost, Codespaces, or a production server.

## What to Tell AI When You Need It
> "The WebSocket URL should use the same host as the page (window.location.host), not a hardcoded port. Set up a Vite proxy to forward WebSocket connections to the backend."

---

← [What is a Proxy?](./29-what-is-a-proxy.md) · [What is an AI API?](./31-what-is-an-ai-api.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)