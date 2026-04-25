# What is In-Memory Storage?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
In-memory storage keeps data in your computer's RAM while the app is running — fast and simple, but everything disappears when the app stops.

## Real World Analogy
In-memory storage is like a whiteboard. You can write and read things instantly. But when the meeting ends and someone erases it, everything is gone. A real database is like a filing cabinet — slower to access, but the data is there tomorrow.

## Live Example
Run our chat app and create a few chats. Now restart the server (`Ctrl+C`, then `npm run dev` again). All your chats are gone.

That's in-memory storage. The data lived in RAM. When the process ended, RAM was cleared.

## In-Memory vs Database

| | In-Memory | Real Database |
|--|-----------|--------------|
| Speed | Instant | Fast (milliseconds) |
| Data after restart | Lost | Preserved |
| Setup needed | None | Installation + config |
| Good for | Development, prototyping | Production apps |
| Handles multiple servers | No | Yes |

## What Our App's In-Memory Storage Looks Like

```typescript
// chat-store.ts — data lives in a plain JavaScript Map
class ChatStore {
  private chats: Map<string, Chat> = new Map();
  private messages: Map<string, Message[]> = new Map();

  createChat(title?: string): Chat {
    const chat = { id: uuid(), title: title || 'New Chat', ... };
    this.chats.set(chat.id, chat);  // stored in RAM
    return chat;
  }
}
```

When the Node.js process stops, the `Map` is garbage-collected and the data is gone.

## Why We Use It Here
- **Zero setup** — no database to install or configure
- **Perfect for demos** — shows the concept without added complexity
- **Easy to replace** — the store is isolated in one file; swap it for PostgreSQL later

## What to Tell AI When You Need It
> "Use in-memory storage for now — just plain JavaScript Maps or arrays. Wrap it in a class so I can replace it with a real database later without changing the rest of the code."

---

← [What is a Database?](./23-what-is-a-database.md) · [Frontend + Backend — The Full Picture](./25-frontend-backend-full-picture.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)