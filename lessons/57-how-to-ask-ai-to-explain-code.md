# How to Ask AI to Explain Code

## One Line Answer
Paste the code, say your level of knowledge, and ask specific questions — AI can explain anything from "what does this file do" to "why is this one line written this way."

## The Basic Template

```
Here's some code I don't understand:

[paste code]

Please explain:
- What this does in plain English
- Why it's written this way
- What would happen if I removed it
```

## Levels of Explanation

Ask AI to match your level:

**For a complete overview:**
> "Explain this file as if I'm not a developer. Focus on what it does, not how."

**For a specific section:**
> "What does this function do? What are the inputs and outputs?"

**For a specific line:**
> "What does `ws.isAlive = true` do on line 67? Why is it there?"

**For understanding a pattern:**
> "I see `for await (const message of outputStream)` in several places. What is this pattern called and why do we use it?"

## Real Questions You Can Ask About Our App

**About the WebSocket setup:**
> "In server.ts, there's a heartbeat interval. Explain why it exists and what would happen if we removed it."

**About the message queue:**
> "In ai-client.ts, there's a MessageQueue class. Explain in plain English why we need a queue at all — why not just send messages directly?"

**About TypeScript types:**
> "In types.ts there's `WSClient extends WebSocket`. What does extending mean and why would we extend an existing type?"

**About async/await:**
> "I see `async` and `await` everywhere. Explain these to a non-developer using a real world analogy."

## Making the Explanation Stick

After AI explains something:
- **Restate it in your own words** — "So basically this is doing X because Y?"
- **Ask for an analogy** — "Can you give me a real world analogy for this?"
- **Ask for the consequence** — "What breaks if this doesn't work?"
- **Ask the opposite** — "How would you do this differently, and why didn't you?"

## What NOT to Do
Don't ask "explain all the code in this project." Too broad = too shallow.
Pick one function, one pattern, one confusing line. Deep > wide.

## What to Tell AI When You Need It
> "I'm not a developer. Explain [specific thing] as if explaining to someone with no coding background. Use a real world analogy. Tell me why it matters for this app specifically."

---
*Previous: [How to Read Code You Didn't Write](56-how-to-read-code-you-didnt-write.md) · Next: [What Questions to Ask When Stuck](58-what-questions-to-ask-when-stuck.md)*
