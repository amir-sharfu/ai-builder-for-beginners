# How to Describe User Experience to AI

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
Describe what the user does and what they see — step by step — and AI will figure out how to build it.

## Real World Analogy
A UX description is like describing a scene to someone who will draw it. You don't say "use watercolors and 140gsm paper" — you say "a woman sitting at a café table, looking out a rainy window, holding a cup." The artist handles the technical execution. You provide the vision.

## The User Experience Formula

```
When [user does X]
I want them to see/experience [Y]
If [edge case], then [Z]
```

## Full Example: Describing Our Chat App

> When the user opens the app for the first time, they should see an empty sidebar on the left with a "New Chat" button at the top. The main area should say "Select a chat or create a new one" in the center.
>
> When they click "New Chat", a new chat immediately appears in the sidebar titled "New Chat" and the main area switches to an empty chat window with a text input at the bottom.
>
> When they type a message and press Enter (or click Send), the message appears in the chat window immediately, and a loading indicator shows while waiting for the AI response.
>
> The AI response should appear word by word as it's generated, not all at once.
>
> If the AI is using a tool (like searching the web), show a small notice saying "Using WebSearch..." in a different style from regular messages.

That's everything needed to build the full chat experience. No mention of React, WebSocket, or TypeScript — but AI knows to use them.

## Describing Different States

Good UX descriptions cover all states of the interface:

| State | Describe it |
|-------|------------|
| Empty state | What shows when there's no data yet |
| Loading state | What shows while waiting |
| Error state | What shows when something goes wrong |
| Success state | What shows when it works |
| Edge cases | What if the input is empty? Too long? |

## Example: Describing a Button

**Incomplete:**
> "Add a send button"

**Complete:**
> "The send button should be:
> - Blue and enabled when the text input has content
> - Gray and disabled when the input is empty
> - Shows a spinning indicator when a message is being processed
> - Disabled again until the AI finishes responding
> - Pressing Enter in the input should do the same thing as clicking Send"

## What to Tell AI When You Need It
> "I'll describe the user experience for this feature. You translate it into working code. Ask me if anything is unclear before you start building."

---

← [Why Vague Prompts Fail](./52-why-vague-prompts-fail.md) · [How to Describe Data Flow to AI](./54-how-to-describe-data-flow.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)