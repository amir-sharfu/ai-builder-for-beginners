# What is a URL?

## One Line Answer
A URL is the address of something on the internet — it tells the browser exactly where to go and what to ask for.

## Real World Analogy
A URL is like a postal address, but for information. Just like `123 Main Street, New York` points to a specific building, `https://github.com/amir-sharfu` points to a specific page on the internet.

## Live Example
Look at this URL: **https://github.com/anthropics/claude-agent-sdk-demos**

| Part | Value | Meaning |
|------|-------|---------|
| `https://` | Protocol | Use secure connection |
| `github.com` | Domain | Which server to contact |
| `/anthropics` | Path | Which user/organisation |
| `/claude-agent-sdk-demos` | Path | Which repository |

## Breaking Down a URL

```
https://localhost:3001/api/chats?limit=10

https://     → protocol (how to connect)
localhost    → domain (which computer)
:3001        → port (which door on that computer)
/api/chats   → path (which resource)
?limit=10    → query string (extra options)
```

## How It Shows Up in Our App
Our app uses several URLs:
- `http://localhost:5174` — the frontend (what you open in the browser)
- `http://localhost:3001/api/chats` — backend API to list chats
- `ws://localhost:3001/ws` — WebSocket connection for real-time messages

## What Breaks Without It
Without a correct URL, the browser has no idea where to send the request. You get a "cannot connect" or "not found" error.

## What to Tell AI When You Need It
> "The frontend should call the backend at `/api/chats` to get the list of chats. Make sure the URL is correct and the server has that endpoint."

---
*Previous: [How Does a Browser Talk to a Server?](04-how-browser-talks-to-server.md) · Next: [What is HTML?](06-what-is-html.md)*
