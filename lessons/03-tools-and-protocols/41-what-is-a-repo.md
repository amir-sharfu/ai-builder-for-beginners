# What is a Repo?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
A repo (repository) is a folder that contains your project's files along with the full history of every change ever made to them.

## Real World Analogy
A repo is like a Google Doc with perfect version history. Every time you save, it records exactly what changed, who changed it, and when. Unlike Google Docs, you can have thousands of collaborators, branch off to experiment, and merge changes back — all without losing anything.

## Live Example
Visit **https://github.com/anthropics/claude-agent-sdk-demos**

What you see is a repo. Every folder, every file, every commit message, every change — all tracked and visible. Click on a file, then click "History" to see every change ever made to it.

## What a Repo Contains

```
my-project/          ← the repo folder
├── .git/            ← hidden folder Git uses to track everything (don't touch)
├── .gitignore       ← list of files NOT to track (node_modules, .env)
├── README.md        ← description of the project
├── package.json     ← project config
├── src/             ← your source code
└── ...
```

## Local vs Remote Repo

| | Local Repo | Remote Repo |
|--|---|---|
| Lives | Your computer | GitHub, GitLab, etc. |
| Access | You only | Anyone you grant access |
| Backup | No (if computer dies) | Yes |
| Collaboration | No | Yes |

You work locally, then push to the remote to share and back up.

## Common Repo Actions

| Action | What It Means |
|--------|-------------|
| `clone` | Download a repo from GitHub to your computer |
| `commit` | Save a snapshot of your changes |
| `push` | Upload your commits to GitHub |
| `pull` | Download latest changes from GitHub |
| `branch` | Create a parallel copy to experiment |
| `merge` | Combine changes from two branches |

## How It Shows Up in Our Work
This entire lesson repo (`ai-builder-for-beginners`) is a repo. Every lesson file is tracked. When you push to GitHub, anyone in the world can read, learn from, and contribute to it.

## What to Tell AI When You Need It
> "Initialize a git repo, create a .gitignore that excludes node_modules and .env, make an initial commit with all project files, and push to GitHub."

---

← [What is TypeScript?](./40-what-is-typescript.md) · [What is Git?](./42-what-is-git.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)