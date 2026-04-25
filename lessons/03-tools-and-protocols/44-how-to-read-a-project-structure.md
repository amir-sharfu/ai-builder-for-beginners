# How to Read a Project Structure

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
A project structure is a map — the folder and file names tell you where everything lives and what role each piece plays.

## Real World Analogy
Reading a project structure is like reading a building floor plan. You don't need to read every room description — the labels tell you: "Kitchen", "Bedroom 1", "Bathroom". Similarly, `server/` tells you backend code lives there, `client/` means frontend.

## Our App's Structure, Explained

```
simple-chatapp/
│
├── client/                    ← Everything the browser runs
│   ├── App.tsx               ← The main application component
│   ├── index.tsx             ← Entry point (React mounts here)
│   ├── index.html            ← The HTML page that loads the app
│   ├── globals.css           ← Global styles
│   ├── hooks/                ← Reusable React logic
│   └── components/           ← UI building blocks
│       ├── ChatList.tsx      ← Left sidebar
│       └── ChatWindow.tsx    ← Main chat area
│
├── server/                    ← Everything that runs on the server
│   ├── server.ts             ← The server entry point
│   ├── ai-client.ts          ← Talks to Claude Agent SDK
│   ├── session.ts            ← Manages one chat's agent session
│   ├── chat-store.ts         ← In-memory data storage
│   └── types.ts              ← TypeScript type definitions
│
├── package.json              ← Project config + dependencies
├── tsconfig.json             ← TypeScript configuration
├── vite.config.ts            ← Frontend build + dev server config
├── tailwind.config.js        ← Tailwind CSS configuration
├── postcss.config.js         ← CSS processing (used by Tailwind)
└── .env                      ← Secret config (never committed)
```

## Patterns to Recognise

| Convention | Meaning |
|------------|---------|
| `client/` or `src/` | Frontend code |
| `server/` or `api/` | Backend code |
| `components/` | UI building blocks |
| `hooks/` | Reusable React logic |
| `types.ts` | TypeScript type definitions |
| `*.config.*` | Configuration files |
| `index.*` | Entry points |
| `.gitignore` | Files Git should ignore |

## How to Explore a New Project
1. Read the `README.md` first — it explains the project
2. Look at `package.json` — what packages are used tells you the tech stack
3. Find the entry point — usually `index.ts`, `main.ts`, or `server.ts`
4. Follow imports — `import X from './y'` shows you what connects to what

## What to Tell AI When You Need It
> "Explain this project structure to me in plain English. Tell me what each folder and file does, and which file I should look at first to understand how it works."

---

← [What is GitHub?](./43-what-is-github.md) · [What is a Config File?](./45-what-is-a-config-file.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)