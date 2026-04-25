# What is a Database?

## One Line Answer
A database is organised storage for your app's data — it keeps information safe, searchable, and available even after the app restarts.

## Real World Analogy
A database is like a filing cabinet. Documents (data) are stored in labelled folders (tables), organised so you can quickly find what you need. Unlike a pile of papers on a desk, a filing cabinet lets you search, sort, and retrieve specific documents reliably.

## Live Example
Every time you search on **https://www.amazon.com**, you're querying a database. Amazon's database stores millions of products, and the search finds relevant ones in milliseconds. Every product you've ever viewed, every order you've placed — all stored in databases.

## Types of Databases

| Type | Examples | Best For |
|------|---------|---------|
| Relational (SQL) | PostgreSQL, MySQL, SQLite | Structured data with relationships |
| Document (NoSQL) | MongoDB, Firebase | Flexible, JSON-like data |
| Key-Value | Redis | Fast caching, sessions |
| In-Memory | Our app's ChatStore | Temporary data during development |

## How Databases Compare to Regular Files

| | Files | Database |
|--|-------|---------|
| Search | Read entire file | Find in milliseconds |
| Multiple users | Can conflict | Handles concurrent access |
| Data integrity | Manual | Enforced automatically |
| Relationships | Hard to manage | Built-in |

## How It Shows Up in Our App
Our app uses **in-memory storage** (not a real database) — data is stored in JavaScript objects in RAM. It's fast and simple for development, but:
- All data is lost when the server restarts
- Doesn't scale to multiple servers
- Not suitable for production

The `server/chat-store.ts` file acts as our fake database. A real app would replace it with PostgreSQL or MongoDB.

## What to Tell AI When You Need It
> "For now use in-memory storage for development. Structure the code so it's easy to swap in a real database later. Each chat should have an id, title, createdAt timestamp, and an array of messages."

---
*Previous: [What is JSON?](22-what-is-json.md) · Next: [What is In-Memory Storage?](24-what-is-in-memory-storage.md)*
