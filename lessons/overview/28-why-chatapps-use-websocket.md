# Why Chat Apps Use WebSocket

## One Line Answer
Chat requires instant, two-way communication — WebSocket is the only web technology designed exactly for that.

## Real World Analogy
Imagine using a walkie-talkie vs mailing letters to have a conversation. HTTP is like mailing letters — fine for non-urgent communication. WebSocket is the walkie-talkie — instant, both directions, no delays.

## Live Examples of WebSocket in the Wild

| App | What WebSocket Enables |
|-----|----------------------|
| **https://slack.com** | Messages appear instantly for all participants |
| **https://figma.com** | See teammates' cursors move in real time |
| **https://lichess.org** | Chess moves update live on both players' screens |
| **https://tradingview.com** | Stock prices update every second |
| **Our chat app** | AI responses stream word by word |

## Why HTTP Alone Doesn't Work for Chat

**Polling (the bad alternative):**
```
Every 2 seconds:
Browser → "Any new messages?" → Server
Browser ←  "No"               ← Server

Browser → "Any new messages?" → Server
Browser ←  "No"               ← Server

Browser → "Any new messages?" → Server
Browser ←  "Yes! Here's 1"    ← Server
```
This wastes bandwidth, hammers the server, and still has up to 2 seconds of delay.

**WebSocket (the right approach):**
```
[Connection stays open]
Server → "New message!" → Browser  (instantly, the moment it arrives)
```

## The WebSocket Lifecycle in Our App

```
1. Browser opens: ws://[host]/ws
2. Server confirms: { type: "connected" }
3. Browser subscribes: { type: "subscribe", chatId: "..." }
4. Server sends history: { type: "history", messages: [...] }
5. User sends: { type: "chat", content: "Hello" }
6. Server streams: { type: "assistant_message", content: "Hi..." }
7. Server streams: { type: "assistant_message", content: "Hi there..." }
8. Server signals done: { type: "result", success: true }
```

## What to Tell AI When You Need It
> "Use WebSocket for all real-time communication. The client subscribes to a chat by ID, then sends messages and receives streamed AI responses through the same connection. Include a heartbeat to detect dead connections."

---
*Previous: [What is Streaming?](27-what-is-streaming.md) · Next: [What is a Proxy?](29-what-is-a-proxy.md)*
