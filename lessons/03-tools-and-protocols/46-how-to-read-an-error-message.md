# How to Read an Error Message

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
Error messages tell you exactly what went wrong and where — once you know how to read them, they're helpful, not scary.

## Real World Analogy
An error message is like a doctor's diagnosis. At first it sounds scary ("EADDRINUSE", "Cannot find module"). But broken down, it's precise information: what the problem is, where it is, and often how to fix it.

## Anatomy of an Error Message

```
Error: listen EADDRINUSE: address already in use :::3001
    at Server.setupListenHandle [as _listen2] (node:net:2008:16)
    at Server.listen (node:net:2170:7)
    at <anonymous> (/workspaces/agent-sdk/server/server.ts:146:8)
```

**Breaking it down:**

| Part | What It Means |
|------|--------------|
| `Error:` | Type of error |
| `EADDRINUSE` | Error code (address in use) |
| `address already in use :::3001` | Something is already on port 3001 |
| `server/server.ts:146:8` | The problem is in server.ts, line 146, column 8 |

## Common Error Types and What They Mean

| Error | Plain English |
|-------|--------------|
| `EADDRINUSE` | A port is already being used by another process |
| `ENOENT` | File or folder not found |
| `Cannot find module` | You're importing something that isn't installed |
| `is not a function` | You're calling something that isn't a function |
| `undefined is not an object` | You're accessing a property on something that doesn't exist |
| `404 Not Found` | The URL you requested doesn't exist on the server |
| `500 Internal Server Error` | The server crashed while handling your request |
| `CORS error` | The browser blocked the request due to security policy |

## The Most Useful Line in a Stack Trace

A stack trace is the list of function calls that led to the error. The most useful line is usually the **first one that mentions your own code** (not `node_modules`):

```
at <anonymous> (/workspaces/agent-sdk/server/server.ts:146:8)
                                                  ^^^^^^^^^^^
                                          Your file: line 146
```

Go to that file and line. That's where the problem is.

## What to Do With an Error

1. **Read the first line** — what type of error?
2. **Find your file** — ignore node_modules lines
3. **Go to that line** — what does the code look like?
4. **Search or ask AI** — paste the full error message

## What to Tell AI When You Need It
> "[Paste the full error message here]. I'm getting this error when I run npm run dev. Here's the code around line 146: [paste code]. What's causing this and how do I fix it?"

---

← [What is a Config File?](./45-what-is-a-config-file.md) · [What is a Port Conflict?](./47-what-is-a-port-conflict.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)