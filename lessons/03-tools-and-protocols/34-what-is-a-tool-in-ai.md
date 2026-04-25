# What is a Tool in AI?

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
A tool is an action an AI can take in the real world — running code, searching the web, reading files — beyond just generating text.

## Real World Analogy
Without tools, an AI is like a brilliant professor locked in a room — they can only work with what they already know and remember. With tools, they have a phone (web search), a computer (Bash), a filing cabinet (Read/Write files), and access to the building (the whole system).

## Live Example
Ask our chat app: "Search the web and tell me the latest news about AI."

Watch what happens:
1. Claude decides to use the `WebSearch` tool
2. You see a "tool use" indicator in the chat: `Using WebSearch...`
3. Claude searches, reads the results
4. Claude summarises what it found

Without tools, Claude could only say "I don't have access to current news." With the WebSearch tool, it actually goes and finds it.

## How Tools Work (Under the Hood)

```
1. User: "What files are in this directory?"
2. Claude thinks: "I should use the Bash tool"
3. Claude requests: { tool: "Bash", input: { command: "ls -la" } }
4. SDK runs: ls -la on the server
5. SDK returns: the output of the command
6. Claude reads the output
7. Claude responds: "There are 5 files: server.ts, ai-client.ts..."
```

The AI doesn't run the command itself — it requests it, the SDK runs it, and the result comes back to Claude.

## Tools in Our App

```javascript
allowedTools: [
  "Bash",      // Run terminal commands
  "Read",      // Read file contents
  "Write",     // Create new files
  "Edit",      // Modify existing files
  "Glob",      // Find files by pattern (*.ts, src/**/*.tsx)
  "Grep",      // Search text inside files
  "WebSearch", // Search the internet
  "WebFetch",  // Download and read a URL
]
```

## Why Tools Matter for Non-Coders
With tools, you can ask Claude to:
- "Read my project files and explain what each one does"
- "Search for how to add authentication and then implement it"
- "Run the tests and fix any failures"
- "Check the latest version of this package and update it"

It's not just answering — it's doing.

## What to Tell AI When You Need It
> "Show tool use events in the chat UI so the user can see when Claude is using a tool and what it's doing. Display the tool name and a brief summary of the input."

---

← [What is the Agent SDK?](./33-what-is-the-agent-sdk.md) · [What is a System Prompt?](./35-what-is-a-system-prompt.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)