# What is Localhost?

## One Line Answer
`localhost` is your own computer — it's a special address that means "right here, on this machine."

## Real World Analogy
If the internet is a city full of buildings, `localhost` is your own home. When you mail something to `localhost`, it never leaves your house — it goes from one room to another.

## Live Example
Type **http://localhost:5174** in your browser while running `npm run dev`.

You see our chat app. But if you send that same URL to a friend, they'll get "connection refused" — because `localhost` on their computer means *their* computer, not yours. There's nothing running on port 5174 on their machine.

## Localhost vs Real Domains

| Address | What it means |
|---------|--------------|
| `localhost` | Your own computer |
| `192.168.1.5` | Another computer on your local WiFi network |
| `github.com` | GitHub's servers, somewhere in the world |
| `api.anthropic.com` | Anthropic's servers |

## Why Developers Use Localhost
When building an app, you don't want to deploy to the internet every time you make a change. Localhost lets you:
- Run the app privately on your machine
- Test changes instantly
- Not pay for server costs during development
- Not expose broken code to the public

## The 127.0.0.1 Connection
`localhost` is just a nickname for `127.0.0.1` — the standard IP address that always means "this machine." They are identical:
- `http://localhost:3001` = `http://127.0.0.1:3001`

## How It Shows Up in Our App
Everything during development runs on localhost:
- Frontend: `http://localhost:5174`
- Backend: `http://localhost:3001`
- WebSocket: `ws://localhost:3001/ws`

When you deploy to production, `localhost` gets replaced with real domain names.

## What to Tell AI When You Need It
> "Set up the app to run locally on localhost during development. Frontend on localhost:5173, backend on localhost:3001. When I'm ready to deploy, we'll update the URLs."

---
*Previous: [What is a Port?](19-what-is-a-port.md) · Next: [What is an API?](21-what-is-an-api.md)*
