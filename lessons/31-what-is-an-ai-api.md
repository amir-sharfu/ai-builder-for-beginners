# What is an AI API?

## One Line Answer
An AI API lets your app send text to an AI model and get intelligent responses back — without running the AI yourself.

## Real World Analogy
An AI API is like hiring a consultant who is an expert in everything. You write them a letter (API request), they think about it, and write back a response (API response). You don't need to know how they think or where they studied — you just send the question and receive the answer.

## Live Example
Open **https://console.anthropic.com** (create a free account if needed).

The API Playground there lets you send messages to Claude and see the raw responses. What you're doing manually in the playground is exactly what our app does automatically — sending your messages as API requests and displaying the responses.

## How an AI API Call Works

```
Your App                        Anthropic's Servers
   │                                    │
   │── "What is React?" ──────────────> │
   │   + API key (authentication)       │ (Claude thinks...)
   │   + model name                     │
   │   + any instructions               │
   │                                    │
   │<── "React is a JavaScript library  │
   │     for building user interfaces…" │
```

## The Request Contains:
- **Your message** — what you're asking
- **API key** — proves you're authorised to use the service
- **Model** — which AI to use (claude-opus-4-7, claude-sonnet-4-6, etc.)
- **System prompt** — instructions that define how the AI should behave
- **Max turns/tokens** — limits on how long it can respond

## Cost
AI APIs charge per use — usually per 1,000 tokens (roughly 750 words). A short conversation costs fractions of a cent. This is why the API key must stay secret — anyone with your key can run up charges on your account.

## How It Shows Up in Our App
`server/ai-client.ts` uses the Claude Agent SDK which internally calls `api.anthropic.com`. The SDK handles all the HTTP requests, authentication, and response parsing.

## What to Tell AI When You Need It
> "Use the Anthropic Claude API via the Agent SDK. Load the API key from an environment variable. Use the claude-sonnet-4-6 model. Stream the responses."

---
*Previous: [What Broke When WebSocket Disconnected](30-what-broke-when-websocket-disconnected.md) · Next: [What is Anthropic and Claude?](32-what-is-anthropic-claude.md)*
