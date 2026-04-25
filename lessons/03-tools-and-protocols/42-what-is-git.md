# What is Git?

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
Git is the tool that tracks every change to your code — who changed what, when, and why — so you can always go back to any point in history.

## Real World Analogy
Git is like a time machine for your project. Made a change that broke everything? Go back to yesterday. Want to try a risky experiment? Branch off, experiment, and if it fails — just delete the branch. Nothing is ever truly lost.

## Live Example
Open **https://github.com/anthropics/claude-agent-sdk-demos/commits/main**

Every row in that list is a commit — a saved snapshot with a message explaining what changed. Click any one to see exactly what lines were added (green) or removed (red). This is the full history of the project.

## The Three States of Files in Git

```
Working Directory → Staging Area → Repository
(you edit files)    (you choose     (you save a
                     what to save)   snapshot)

git add file.ts  → moves to staging
git commit       → saves to repository
git push         → uploads to GitHub
```

## Most Used Git Commands

| Command | What It Does |
|---------|-------------|
| `git init` | Start tracking a folder with Git |
| `git status` | Show what's changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save a snapshot with a description |
| `git push` | Upload to GitHub |
| `git pull` | Download latest from GitHub |
| `git log` | See commit history |
| `git diff` | See exactly what changed |

## What a Good Commit Message Looks Like

```bash
git commit -m "Fix WebSocket disconnection in Codespaces"
```

Not:
```bash
git commit -m "fix stuff"   # bad — tells you nothing
git commit -m "."           # worse
```

The message is for future you (and teammates) to understand why the change was made.

## How It Shows Up in Our Work
When we publish all 75 lessons to GitHub:
1. `git init` — start tracking
2. `git add .` — stage all 75 files
3. `git commit -m "Add all 75 lessons"` — save snapshot
4. `git push` — publish to GitHub

## What to Tell AI When You Need It
> "After making changes, show me the git commands to commit and push. Write a clear, descriptive commit message that explains what changed and why."

---

← [What is a Repo?](./41-what-is-a-repo.md) · [What is GitHub?](./43-what-is-github.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)