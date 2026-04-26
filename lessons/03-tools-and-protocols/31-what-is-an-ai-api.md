# What is an AI API?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
An AI API is a way for your website or app to send a question to an AI and get an answer back, without you building the AI yourself.

## Real World Analogy
Think of it like a drive-through window. You pull up, place your order, and food comes back out. You never see the kitchen. An AI API works the same way — you send a request, the AI does the work behind the scenes, and you get a result back.

## Live Example
Go to [chat.openai.com](https://chat.openai.com) and type a question. That chat box is talking to OpenAI's API behind the scenes. When developers build their *own* apps that use ChatGPT, they're connecting to that same API — just without the chat interface.

## How It Shows Up in a Real App
When a user clicks "Summarize this article," your code sends their text to the API and drops the reply onto the page:

```js
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4o",
    messages: [{ role: "user", content: "Summarize this: " + articleText }]
  })
});
```

The AI's reply comes back in the response, ready to display.

## What Breaks Without It
Without an API connection, your app has no way to reach the AI — clicking your "Summarize" button would do nothing. Every AI-powered feature in your app depends on this link staying set up correctly.

## What to Tell AI When You Need It
> "Show me the simplest possible way to call the OpenAI API in JavaScript and display the response on a webpage. I'm a beginner."

> "My API call isn't returning anything. Here's my code: [paste code]. What's wrong and how do I fix it?"
---

← [What Broke When WebSocket Disconnected](./30-what-broke-when-websocket-disconnected.md) · [What is Anthropic and Claude?](./32-what-is-anthropic-claude.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)