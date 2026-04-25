# What is JSON?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
JSON is the universal language that apps use to send data to each other — it's structured text that both humans and computers can read.

## Real World Analogy
JSON is like a standardised form. Whether you're filling out a bank form or a hospital form, the structure is the same — fields with labels and values. JSON is the digital version of that: labelled data that any system can read and understand.

## Live Example
Open **https://api.github.com/users/amir-sharfu** in your browser.

What you see is JSON — GitHub's server sending back information about this user account in a structured, readable format. Any app in the world can request this URL and read the data.

## What JSON Looks Like

```json
{
  "id": "chat-123",
  "title": "My First Chat",
  "createdAt": "2024-01-15T10:30:00Z",
  "messages": [
    {
      "role": "user",
      "content": "Hello!"
    },
    {
      "role": "assistant",
      "content": "Hi there! How can I help?"
    }
  ]
}
```

## JSON Rules
- Data comes in **key: value** pairs
- Keys are always in **"quotes"**
- Values can be: text `"hello"`, numbers `42`, true/false, lists `[...]`, or nested objects `{...}`
- Items in a list are separated by commas

## How It Shows Up in Our App

**When the frontend asks for chats:**
```
Request:  GET /api/chats
Response: [
  { "id": "1", "title": "Chat 1", "createdAt": "..." },
  { "id": "2", "title": "Chat 2", "createdAt": "..." }
]
```

**When WebSocket sends a message:**
```json
{ "type": "chat", "chatId": "123", "content": "What is React?" }
```

Everything going back and forth between our frontend and backend is JSON.

## What to Tell AI When You Need It
> "All API responses should be JSON. Use consistent field names — camelCase for JavaScript. Include an id field on every object."

---

← [What is an API?](./21-what-is-an-api.md) · [What is a Database?](./23-what-is-a-database.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)