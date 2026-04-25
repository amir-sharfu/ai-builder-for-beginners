# What is Streaming?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
Streaming means sending data in pieces as it becomes available — instead of waiting for everything to be ready before sending anything.

## Real World Analogy
- **Without streaming** — ordering a pizza. You wait 30 minutes. Nothing happens. Then the whole pizza arrives at once.
- **With streaming** — watching a chef cook on live TV. You see each step as it happens. You don't wait for the whole show to be recorded before watching.

## Live Example
Open **https://chat.openai.com** and ask a question.

Notice how the response appears word by word, letter by letter — not all at once. That's streaming. The AI model generates tokens (small pieces of text) as it "thinks", and they're sent to your browser as they're produced. Waiting for the full response before showing anything would feel slow and unresponsive.

## Without Streaming vs With Streaming

**Without streaming:**
```
User: "Explain quantum computing"
[8 seconds of silence]
[Full 500-word response appears all at once]
```

**With streaming:**
```
User: "Explain quantum computing"
[Immediately] "Quantum..."
[0.1s later]  "Quantum computing..."
[0.2s later]  "Quantum computing is..."
[0.3s later]  "Quantum computing is a type..."
[continues appearing word by word]
```

The second feels alive. The first feels broken.

## How Streaming Works

```
AI Model → generates tokens one by one
              ↓
Backend   → receives each token via SDK stream
              ↓ (WebSocket)
Frontend  → receives each token
              ↓
React     → appends to message, re-renders
              ↓
User      → sees text appearing in real time
```

## How It Shows Up in Our App
The Claude Agent SDK streams events. Our `session.ts` receives them and immediately broadcasts each one to the frontend via WebSocket. The frontend appends each `assistant_message` event to the messages array as it arrives.

## What to Tell AI When You Need It
> "Stream the AI responses — don't wait for the full response before showing anything. Each token or chunk should be sent to the frontend immediately as it arrives."

---

← [What is HTTP vs WebSocket?](./26-what-is-http-vs-websocket.md) · [Why Chat Apps Use WebSocket](./28-why-chatapps-use-websocket.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)