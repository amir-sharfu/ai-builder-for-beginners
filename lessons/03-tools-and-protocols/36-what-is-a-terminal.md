# What is a Terminal?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
The terminal is a text-based way to control your computer — type a command, press Enter, the computer does it.

## Real World Analogy
A terminal is like texting commands to your computer instead of clicking. Instead of clicking File > New Folder, you type `mkdir new-folder` and hit Enter. Less visual, but much faster for many tasks — especially running code.

## Live Example
In GitHub Codespaces (where this project runs), look for the **Terminal** panel at the bottom of the screen. That black window where you type commands is the terminal.

Try typing:
```bash
ls
```
Press Enter. It lists all files in the current directory — the same files you see in the file explorer on the left, but listed as text.

## Common Commands You'll Actually Use

| Command | What It Does | Example |
|---------|-------------|---------|
| `ls` | List files in current folder | `ls` |
| `cd` | Change directory (navigate folders) | `cd server` |
| `pwd` | Show current location | `pwd` |
| `npm install` | Install project dependencies | `npm install` |
| `npm run dev` | Start the development server | `npm run dev` |
| `Ctrl + C` | Stop a running process | Stop the server |
| `clear` | Clear the terminal screen | `clear` |

## Why Developers Use It
- **Speed** — many operations are faster typed than clicked
- **Automation** — you can chain commands together
- **No GUI needed** — remote servers don't have a desktop; everything is terminal
- **Precision** — exact commands with exact options

## Terminal in Our App
Everything we did to set up this project was through the terminal:
```bash
npm install          # installed all dependencies
npm run dev          # started the app
kill $(lsof -ti:3001) # killed the process on port 3001
```

## What to Tell AI When You Need It
> "Show me the exact terminal commands I need to run. One command per line. Tell me what each one does before I run it."

---

← [What is a System Prompt?](./35-what-is-a-system-prompt.md) · [What is NPM?](./37-what-is-npm.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)