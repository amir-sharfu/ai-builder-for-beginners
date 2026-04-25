# How to Add a Database

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
Replace the in-memory ChatStore with a real database so data persists after restarts — without changing the rest of the app.

## Why We Don't Have One Yet
Our app uses in-memory storage — everything is lost when the server restarts. This is fine for demos and prototyping. For a real app, you need data to survive restarts.

## The Right Database for This App

**SQLite** — best starting point:
- Stores data in a single file on your server
- No separate database server to run
- Free, simple, reliable
- Good for: personal tools, small apps, prototypes going to production

**PostgreSQL** — when you're ready to scale:
- Full-featured, industry-standard relational database
- Runs as a separate server (or on a hosted service like Supabase)
- Good for: apps with multiple users, high traffic

**MongoDB** — if you prefer JSON-style storage:
- Stores documents (JSON objects) instead of tables
- Flexible schema
- Good for: rapidly changing data structures

## How to Prompt AI to Add a Database

### Step 1: Choose SQLite for simplicity
```
I want to replace the in-memory ChatStore in our app with SQLite.

The current store is in server/chat-store.ts.
It stores chats (id, title, createdAt, updatedAt) and messages (id, chatId, role, content, timestamp).

Please:
1. Install the 'better-sqlite3' package
2. Create a SQLite database file at data/chats.db
3. Replace chat-store.ts with SQLite queries
4. Keep the same public methods: getAllChats, createChat, getChat, deleteChat, addMessage, getMessages
5. Don't change server.ts or session.ts — they should work without modification
```

### Step 2: Test the migration
```
I've added the SQLite database. Help me verify:
1. Creating a chat persists after server restart
2. Messages are saved and retrieved correctly
3. Deleting a chat removes all its messages too
```

## The Key Design Principle

Notice this in the prompt: **"keep the same public methods."**

This is why the ChatStore was designed as a separate class — to make replacement easy. The rest of the app calls `chatStore.createChat()` without knowing or caring whether the data lives in RAM or in SQLite. That's good architecture.

## What to Tell AI When You Need It
> "Replace our in-memory storage with SQLite. Keep the exact same interface (same methods, same return types). The rest of the app should not need to change. Show me how to verify it worked after the change."

---

← [How to Change the UI with AI](./68-how-to-change-the-ui-with-ai.md) · [How to Deploy Your App](./70-how-to-deploy-your-app.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)