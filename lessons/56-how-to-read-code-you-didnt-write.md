# How to Read Code You Didn't Write

## One Line Answer
You don't need to understand every line — you need to understand the shape: what goes in, what comes out, and what it's responsible for.

## Real World Analogy
Reading unfamiliar code is like reading a map of a city you've never visited. You don't need to know every building — you need to know: where am I, what are the major landmarks, and how do I get from A to B. The details fill in with time.

## The Three Questions

For any piece of code, ask:
1. **What does this receive?** (inputs, parameters)
2. **What does it do?** (the transformation)
3. **What does it produce?** (outputs, return values)

## Reading a Real File from Our App

`server/session.ts` — let's read it as a beginner:

```typescript
export class Session {
  public readonly chatId: string;
  private subscribers: Set<WSClient> = new Set();
  private agentSession: AgentSession;
  private isListening = false;
```

Reading this:
- It's a `class` called `Session` — a reusable template
- It has a `chatId` (which chat this is for)
- It has `subscribers` (a list of browser connections watching this chat)
- It has an `agentSession` (the AI agent for this chat)

You don't need to know what `Set<WSClient>` means exactly — you can read "a collection of browser connections."

```typescript
  sendMessage(content: string) {
    chatStore.addMessage(this.chatId, { role: "user", content });
    this.agentSession.sendMessage(content);
    if (!this.isListening) this.startListening();
  }
```

Reading this:
- `sendMessage` takes a string (the user's message)
- Saves it to storage
- Sends it to the AI agent
- Starts listening for the response if not already

Three lines. You can understand the concept without knowing every syntax detail.

## Reading Strategy: Top to Bottom

1. **Read the filename** — `chat-store.ts` = storage for chats
2. **Read the imports** — what dependencies does this file use?
3. **Read the class/function names** — `createChat`, `deleteChat`, `getMessages`
4. **Read one function at a time** — don't try to understand everything at once
5. **Ask AI about anything specific** — "What does this line do?"

## Signs You're Reading Well
- You can explain what a file does in one sentence
- You know which file to look at when something breaks
- You can point to where a new feature would go

## What to Tell AI When You Need It
> "Explain this file to me like I'm not a developer. Don't explain every line — just tell me what it does, what calls it, and what depends on it."

---
*Previous: [Prompt Templates for Builders](55-prompt-templates-for-builders.md) · Next: [How to Ask AI to Explain Code](57-how-to-ask-ai-to-explain-code.md)*
