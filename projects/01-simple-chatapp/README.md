# Project: Simple Chat App

A fully working AI chat application built with the Claude Agent SDK.

## What It Does
- Multiple chat sessions, each with an independent Claude AI agent
- Real-time streaming responses via WebSocket
- Claude can use tools: Bash, Read, Write, WebSearch, WebFetch
- Tool use is visible in the chat as it happens

## Tech Stack
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express + WebSocket
- **AI**: Claude Agent SDK (`@anthropic-ai/claude-agent-sdk`)

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Add your API key
echo "ANTHROPIC_API_KEY=your_key_here" > .env

# 3. Start the app
npm run dev
```

Open http://localhost:5174

## Project Files Explained

See the full walkthroughs in the lessons folder:
- [Server walkthrough](../../lessons/62-walkthrough-server.md)
- [WebSocket walkthrough](../../lessons/63-walkthrough-websocket.md)
- [Frontend walkthrough](../../lessons/64-walkthrough-frontend.md)
- [AI Client walkthrough](../../lessons/65-walkthrough-ai-client.md)

## Key Concepts Used
- [What is WebSocket?](../../lessons/26-what-is-http-vs-websocket.md)
- [What is the Agent SDK?](../../lessons/33-what-is-the-agent-sdk.md)
- [What is a Proxy?](../../lessons/29-what-is-a-proxy.md)
- [What is In-Memory Storage?](../../lessons/24-what-is-in-memory-storage.md)
