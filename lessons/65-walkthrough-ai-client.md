# Walkthrough — AI Client

## Files: `server/ai-client.ts`, `server/session.ts`

These two files together form the bridge between your app and Claude.

## ai-client.ts — Talking to Claude

### The MessageQueue
```typescript
class MessageQueue {
  private messages: UserMessage[] = [];
  private waiting: ((msg: UserMessage) => void) | null = null;

  push(content: string) { ... }
  async *[Symbol.asyncIterator]() { ... }
}
```

**In plain English:** A queue is a line. Messages go in one end, and the AI reads from the other end one at a time. The tricky part: the AI is always running (waiting for messages), so we need a queue that can "pause" when empty and "wake up" when a new message arrives.

This is like a customer service phone line. The operator is always there. When you call (push a message), they answer immediately. When nobody is calling, they wait.

### Starting the Agent
```typescript
export class AgentSession {
  constructor() {
    this.outputIterator = query({
      prompt: this.queue as any,
      options: {
        maxTurns: 100,
        model: "opus",
        allowedTools: ["Bash", "Read", "Write", "Edit", "Glob", "Grep", "WebSearch", "WebFetch"],
        systemPrompt: SYSTEM_PROMPT,
      },
    })[Symbol.asyncIterator]();
  }
```

**In plain English:** When we create a new `AgentSession`, we immediately start the Claude agent and tell it: "Read messages from this queue, you're allowed to use these tools, you are this kind of assistant." The agent is now running, waiting for the first message.

### Getting the Output
```typescript
async *getOutputStream() {
  while (true) {
    const { value, done } = await this.outputIterator.next();
    if (done) break;
    yield value;  // send each event as it arrives
  }
}
```
Reads events from the agent one at a time as they stream in, and passes each one along. Like a conveyor belt — items move through as soon as they're ready.

## session.ts — Managing One Chat

### The Job of Session
Each chat has one `Session`. The Session:
1. Receives user messages from the server
2. Saves them to the ChatStore
3. Forwards them to the AgentSession
4. Listens for the agent's response
5. Broadcasts each event to all subscribers (browser connections watching this chat)

### Handling SDK Messages
```typescript
private handleSDKMessage(message: any) {
  if (message.type === "assistant") {
    const content = message.message.content;
    if (typeof content === "string") {
      this.broadcast({ type: "assistant_message", content });
    } else if (Array.isArray(content)) {
      for (const block of content) {
        if (block.type === "text") {
          this.broadcast({ type: "assistant_message", content: block.text });
        } else if (block.type === "tool_use") {
          this.broadcast({ type: "tool_use", toolName: block.name, ... });
        }
      }
    }
  }
}
```
The SDK sends events. Each event is translated into a WebSocket message for the browser.

## The Complete Flow (One More Time)

```
User message
  → session.sendMessage()
  → agentSession.sendMessage()
  → queue.push()
  → Claude Agent SDK receives it
  → Claude thinks, uses tools
  → SDK emits events (text chunks, tool use)
  → session.handleSDKMessage()
  → session.broadcast()
  → WebSocket to browser
  → App.tsx updates messages state
  → React re-renders
  → User sees response
```

---
*Previous: [Walkthrough — Frontend](64-walkthrough-frontend.md) · Next: [How to Add a Feature with AI](66-how-to-add-a-feature-with-ai.md)*
