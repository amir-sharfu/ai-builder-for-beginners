# How to Describe Data Flow to AI

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
Data flow is the path information takes through your app — describing it tells AI how to connect the pieces.

## Real World Analogy
Data flow is like describing how an order moves through a restaurant: customer tells waiter → waiter writes it down → takes it to the kitchen → chef cooks → waiter delivers. Describing this flow to AI is how it knows what to build at each step.

## The Data Flow Pattern

```
Where does the data come from?
    ↓
What happens to it?
    ↓
Where does it go?
    ↓
How does the user see the result?
```

## Example: Tracing a Chat Message

> The user types a message in the input box and presses Enter.
>
> The frontend takes that text, adds a user message to the local messages list (so it appears instantly), and sends a WebSocket message to the backend containing the chat ID and the message text.
>
> The backend receives it, saves the message to the chat store, passes it to the Claude Agent SDK, and starts streaming the response.
>
> Each piece of the AI response is sent back to the frontend as a WebSocket message. The frontend appends each piece to the messages list as it arrives.
>
> When the AI finishes, the backend sends a "result" event and the frontend re-enables the send button.

This description tells AI everything it needs to build the complete feature.

## Describing Data Flow for New Features

When adding a feature, describe:

1. **The trigger** — what starts the flow? (user clicks, page loads, timer fires)
2. **The request** — what data is sent to the backend?
3. **The processing** — what does the backend do with it?
4. **The response** — what comes back?
5. **The UI update** — how does the frontend change?

## Example: Adding a "Clear Chat" Feature

> When the user clicks the trash icon next to a chat:
>
> 1. Show a confirmation dialog: "Are you sure you want to delete this chat?"
> 2. If they confirm, send DELETE /api/chats/:id to the backend
> 3. The backend removes the chat and all its messages from the store
> 4. The backend returns 200 OK
> 5. The frontend removes the chat from the sidebar list
> 6. If the deleted chat was selected, switch to an empty state

Clear data flow. AI can build this precisely.

## What to Tell AI When You Need It
> "Before building, map out the data flow: where does the data come from, what transforms it, where does it go, and how does the UI reflect the result. Then build it."

---

← [How to Describe User Experience to AI](./53-how-to-describe-user-experience.md) · [Prompt Templates for Builders](./55-prompt-templates-for-builders.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)