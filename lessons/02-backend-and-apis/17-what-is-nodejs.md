# What is Node.js?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
Node.js lets you run JavaScript on a server — not just in the browser.

## Real World Analogy
JavaScript was originally like an employee who could only work in one specific office (the browser). Node.js gave that employee a laptop so they can work anywhere — on a server, on your computer, in the cloud. Same skills, new locations.

## Live Example
Open **https://www.netflix.com**

Netflix's backend uses Node.js. When millions of users stream simultaneously, Node.js handles the massive number of concurrent connections efficiently — because it's designed to handle many things at once without slowing down.

## JavaScript: Browser vs Node.js

| | Browser JavaScript | Node.js |
|--|---|---|
| Runs on | User's browser | Server/computer |
| Can access | Web page, DOM | File system, network, databases |
| Used for | UI interactions | Backend logic, APIs, scripts |
| Has access to | `window`, `document` | `fs`, `http`, `process` |

## What Node.js Can Do That Browsers Can't

```javascript
// Read a file from the hard drive (Node.js only)
import { readFileSync } from 'fs';
const data = readFileSync('./data.json', 'utf-8');

// Start a web server (Node.js only)
import { createServer } from 'http';
createServer((req, res) => {
  res.end('Hello World');
}).listen(3001);
```

Browsers can't do either of these — for security reasons, a website can't read files from your computer.

## How It Shows Up in Our App
Our entire backend runs on Node.js:
- `server.ts` runs on Node.js (not in the browser)
- It reads the `.env` file for the API key
- It starts an HTTP server on port 3001
- It manages WebSocket connections

## What to Tell AI When You Need It
> "The backend should run on Node.js. Use ES modules (import/export syntax), not CommonJS (require). Target Node.js version 18 or higher."

---

← [What is a Backend?](./16-what-is-backend.md) · [What is Express?](./18-what-is-express.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)