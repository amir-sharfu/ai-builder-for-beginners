# What is NPM?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
NPM (Node Package Manager) is the tool that downloads and manages the external code libraries your project uses.

## Real World Analogy
NPM is like an app store for code. Instead of building every feature yourself, you find a package someone else already built, install it with one command, and use it in your project. Millions of free packages exist for almost anything.

## Live Example
Visit **https://www.npmjs.com** and search for "react".

You'll see the React package — 20+ million downloads per week. Anyone building a React app runs `npm install react` and instantly gets the same React that powers Facebook, Airbnb, and millions of other apps.

## Key NPM Commands

| Command | What It Does |
|---------|-------------|
| `npm install` | Install all packages listed in package.json |
| `npm install react` | Install a specific package |
| `npm run dev` | Run the "dev" script from package.json |
| `npm run build` | Run the "build" script |
| `npm list` | Show installed packages |

## Where NPM Puts Things

```
your-project/
├── package.json       ← list of what you need
├── package-lock.json  ← exact versions installed (auto-generated)
└── node_modules/      ← the actual downloaded code (259 packages!)
    ├── react/
    ├── express/
    ├── tailwindcss/
    └── ... (256 more)
```

`node_modules` can be gigabytes. You never edit it. You never commit it to git. You just run `npm install` and it rebuilds from `package.json`.

## How It Shows Up in Our App
When you ran `npm install`, NPM:
1. Read `package.json`
2. Downloaded 259 packages (React, Express, Tailwind, WebSocket, Claude SDK, etc.)
3. Put them all in `node_modules/`

The app can now import any of them:
```javascript
import express from "express";       // from node_modules/express
import { query } from "@anthropic-ai/claude-agent-sdk"; // from node_modules/...
```

## What to Tell AI When You Need It
> "List the npm packages I need to install for this feature. Give me the exact npm install command."

---

← [What is a Terminal?](./36-what-is-a-terminal.md) · [What is package.json?](./38-what-is-package-json.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)