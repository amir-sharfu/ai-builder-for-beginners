# What is the Agent SDK?

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
The Claude Agent SDK is a package that lets Claude not just answer questions — but actually take actions: run code, read files, search the web, and more.

## Real World Analogy
A basic AI API is like asking a very knowledgeable person a question and getting an answer. The Agent SDK is like hiring that same person as an employee — they can answer questions *and* actually do things: open files, run programs, search the internet, write documents.

## Live Example
Try asking our chat app: "What is the current date and time?"

Without the Agent SDK, Claude would have to guess or say it doesn't know (its training has a cutoff date). **With** the Agent SDK, Claude can run a Bash command (`date`) on the server and tell you the exact current time. It actually *does* something rather than just generating text.

## What the Agent SDK Provides

```javascript
import { query } from "@anthropic-ai/claude-agent-sdk";

// query() starts a conversation where Claude can use tools
const outputStream = query({
  prompt: userMessages,
  options: {
    model: "opus",
    allowedTools: ["Bash", "Read", "Write", "WebSearch"],
    systemPrompt: "You are a helpful assistant...",
    maxTurns: 100,
  }
});

// Each event is streamed back
for await (const event of outputStream) {
  // event could be: text response, tool use, tool result, final result
}
```

## Available Tools

| Tool | What It Can Do |
|------|---------------|
| `Bash` | Run shell commands on the server |
| `Read` | Read files from the filesystem |
| `Write` | Write or create files |
| `Edit` | Modify existing files |
| `WebSearch` | Search the internet |
| `WebFetch` | Download and read a webpage |
| `Glob` | Find files by pattern |
| `Grep` | Search inside files |

## The Event Stream
When Claude uses a tool, you see it happening:
```
{ type: "assistant", message: { content: [{ type: "tool_use", name: "Bash", input: { command: "date" } }] } }
{ type: "tool_result", content: "Fri Apr 25 10:30:00 UTC 2026" }
{ type: "assistant", message: { content: "The current date and time is Friday, April 25, 2026..." } }
```

## What to Tell AI When You Need It
> "Use the query() function from @anthropic-ai/claude-agent-sdk. Allow Bash, Read, Write, Edit, Glob, Grep, WebSearch, and WebFetch tools. Stream the output and handle tool_use events to show the user what Claude is doing."

---

← [What is Anthropic and Claude?](./32-what-is-anthropic-claude.md) · [What is a Tool in AI?](./34-what-is-a-tool-in-ai.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)