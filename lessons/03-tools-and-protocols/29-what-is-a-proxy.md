# What is a Proxy?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
A proxy sits between two parties and passes messages between them — often adding something useful in the process (security, routing, translation).

## Real World Analogy
A proxy is like a receptionist. Visitors don't walk directly into the CEO's office — they go through the receptionist, who directs them to the right person. The CEO's direct location is hidden; the receptionist handles the routing.

## Live Example
When you use a corporate WiFi at a large company, your internet traffic often goes through a company proxy server. The proxy can filter websites, log activity, and manage security — all while being invisible to you. You just browse normally.

## The Vite Proxy — The One That Fixed Our App

In `vite.config.ts`:
```javascript
server: {
  proxy: {
    "/api": "http://localhost:3001",
    "/ws": {
      target: "ws://localhost:3001",
      ws: true,
    },
  },
},
```

**What this does:**
- Browser at `localhost:5174` asks for `/api/chats`
- Vite intercepts it
- Vite secretly forwards it to `localhost:3001/api/chats`
- Gets the response back
- Returns it to the browser as if Vite itself answered

The browser never knows there were two servers involved.

## Why This Fixed the WebSocket Disconnect

**Before the fix:**
```
Browser → ws://localhost:3001/ws  ✗ (port 3001 not accessible in Codespace)
```

**After the fix:**
```
Browser → ws://[codespace-host]/ws  ✓ (Vite proxy forwards it to port 3001)
```

In GitHub Codespaces, only the forwarded port (5174) is accessible from the browser. Port 3001 is internal. The proxy bridges them.

## Types of Proxies

| Type | Purpose |
|------|---------|
| Dev proxy (Vite) | Forward requests during development |
| Reverse proxy (nginx) | Route traffic to multiple backend services |
| API gateway | Manage authentication, rate limiting, routing |
| CDN | Cache and deliver content from nearby servers |

## What to Tell AI When You Need It
> "Set up a Vite proxy so that /api requests go to localhost:3001 and /ws WebSocket connections too. The frontend should use relative URLs (/api/chats) not hardcoded ports."

---

← [Why Chat Apps Use WebSocket](./28-why-chatapps-use-websocket.md) · [What Broke When WebSocket Disconnected](./30-what-broke-when-websocket-disconnected.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)