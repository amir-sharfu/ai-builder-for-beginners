# What is a Prompt?

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
A prompt is the instruction you give to an AI — the quality of what you get back is directly determined by the quality of what you ask.

## Real World Analogy
A prompt is like a brief to a contractor. If you say "build me a house", you'll get something generic. If you say "build me a 3-bedroom house with an open kitchen, south-facing windows, and a home office on the ground floor", you'll get exactly what you want. Same skill level, completely different result.

## Live Example
Open **https://claude.ai** and compare these two prompts:

**Vague:**
> "Make a website"

**Specific:**
> "Build a single-page website for a coffee shop called 'Morning Brew'. It needs a hero section with a headline and a 'View Menu' button, a section listing 3 featured drinks with names and prices, and a footer with the address and opening hours. Use a warm brown and cream color scheme. Make it mobile-friendly."

Same AI. The second prompt will give you something you can actually use.

## The Anatomy of a Good Prompt

```
[Context]    — What are you building? Who is it for?
[Goal]       — What specifically do you want?
[Constraints] — What technology, style, or limits?
[Format]     — How should the output be structured?
```

**Example:**
```
Context:    I'm building a chat app for customer support.
Goal:       I need a message input component with a send button.
Constraints: Use React and Tailwind CSS. The button should be 
             disabled when the input is empty.
Format:     Give me the complete component file, TypeScript.
```

## What AI Needs to Help You Build

| You provide | AI provides |
|------------|------------|
| The goal | How to achieve it |
| The constraints | The implementation |
| The user experience | The code |
| The context | The technical decisions |

## The Iterative Approach
You don't need a perfect prompt the first time. Start with what you know, see what AI produces, then refine:

1. "Build a basic chat input component"
2. "Now make the send button blue and disabled when empty"
3. "Add a character counter below the input showing X/500"
4. "When the user presses Enter it should also submit"

Each iteration builds on the last.

## What to Tell AI When You Need It
> "I'll describe what I want and you ask me clarifying questions before building anything. I'm a beginner so explain your choices briefly as you go."

---

← [Common Beginner Mistakes](../03-tools-and-protocols/50-common-beginner-mistakes.md) · [Why Vague Prompts Fail](./52-why-vague-prompts-fail.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)