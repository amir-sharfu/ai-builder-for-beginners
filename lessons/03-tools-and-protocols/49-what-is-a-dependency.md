# What is a Dependency?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
A dependency is an external package your project relies on — code someone else wrote that you use to avoid building everything from scratch.

## Real World Analogy
A dependency is like an ingredient in a recipe. You don't grow your own wheat to make bread — you buy flour. Your project doesn't build React from scratch — it depends on the React package. If the flour is unavailable (package is broken/removed), your bread (app) can't be made.

## Live Example
Visit **https://npmjs.com/package/express**

Express has been downloaded over 100 million times per week. It's a dependency for millions of Node.js projects worldwide. Instead of everyone writing their own HTTP server from scratch, everyone depends on Express.

## Our Project's Dependencies

**Runtime dependencies** (needed to run the app):
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "express": "^4.21.0",
  "@anthropic-ai/claude-agent-sdk": "^0.1.28",
  "ws": "^8.18.0",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "uuid": "^10.0.0"
}
```

**Dev dependencies** (only for development):
```json
{
  "typescript": "^5.5.0",
  "vite": "^5.4.0",
  "tailwindcss": "^3.4.14",
  "tsx": "^4.19.0"
}
```

## The Version Numbers Explained

`"react": "^18.3.1"`

| Symbol | Meaning |
|--------|---------|
| `18.3.1` | Major.Minor.Patch |
| `^18.3.1` | Accept 18.x.x (minor updates ok, major version locked) |
| `~18.3.1` | Accept 18.3.x (patch updates only) |
| `18.3.1` | Exactly this version, nothing else |

## Dependency Risks
- **Breaking changes** — a new version might change how things work
- **Security vulnerabilities** — old packages can have security holes
- **Abandoned packages** — maintainers stop updating them
- **Deep chains** — your 10 packages might depend on 259 others (as in our case)

## What to Tell AI When You Need It
> "What dependencies do I need for [feature]? Show me the npm install command and explain what each package does."

---

← [What is CORS?](./48-what-is-cors.md) · [Common Beginner Mistakes](./50-common-beginner-mistakes.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)