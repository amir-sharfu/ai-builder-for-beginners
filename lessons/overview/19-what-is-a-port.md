# What is a Port?

## One Line Answer
A port is like a numbered door on a computer — different services listen on different doors so they don't get mixed up.

## Real World Analogy
Think of a large office building. The building has one street address (the computer's IP address), but inside there are many departments on different floors. Port 80 is floor 80, port 3001 is floor 3001. When you knock on the door, you say which floor you want — and only the right department answers.

## Live Example
Open your browser and visit these two addresses:
- **http://localhost:5174** — the React frontend (Vite serves on port 5174)
- **http://localhost:3001/api/chats** — the Express backend (on port 3001)

Same computer (`localhost`), two different services on two different ports.

## Common Port Numbers

| Port | Common Use |
|------|-----------|
| 80 | HTTP (standard websites) |
| 443 | HTTPS (secure websites) |
| 3000 | Common dev server default |
| 3001 | Our Express backend |
| 5173/5174 | Vite frontend dev server |
| 5432 | PostgreSQL database |
| 27017 | MongoDB database |

## What "Port Already in Use" Means
When you saw this error:
```
Error: listen EADDRINUSE: address already in use :::3001
```
It means another process was already sitting on port 3001. Like two people trying to open the same door at the same time. The fix was to close the first process before starting a new one.

## How It Shows Up in Our App
- Backend starts on port `3001`
- Frontend starts on port `5174` (bumped from 5173 since it was taken)
- The `.env` file can change the backend port: `PORT=3001`

## What to Tell AI When You Need It
> "Run the backend on port 3001 and the frontend on port 5173. If either port is in use, show a clear error message instead of silently failing."

---
*Previous: [What is Express?](18-what-is-express.md) · Next: [What is Localhost?](20-what-is-localhost.md)*
