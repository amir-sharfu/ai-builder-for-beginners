# How to Add a Feature with AI

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
Describe the feature as a user experience, name the files involved, and ask AI to implement it without breaking existing functionality.

## The Process (Step by Step)

### Step 1: Describe What You Want
Write out the user experience before touching any code:
> "I want users to be able to rename a chat. When they double-click a chat name in the sidebar, it should become an editable text field. When they press Enter or click away, it saves the new name."

### Step 2: Identify the Files Involved
Ask yourself (or AI): which files would need to change?
- `ChatList.tsx` — the sidebar component that shows chat names
- `server.ts` — needs a new REST endpoint to save the name
- `chat-store.ts` — needs an `updateChat` method

### Step 3: Ask AI to Plan First
> "I want to add chat renaming (double-click to edit). Which files need to change and what will you do to each? Don't write code yet — just describe the plan."

Review the plan. If something seems off, correct it now.

### Step 4: Ask AI to Build It
> "Now implement the plan. Change only what's needed. Don't refactor or improve unrelated code."

### Step 5: Test It
- Does the rename work?
- Does pressing Escape cancel the rename?
- Does the app still work if you don't rename anything?
- Does a refresh keep the new name?

## A Real Feature Prompt Example

```
I want to add a message copy button to our chat app.

User experience:
- When I hover over any message, a small copy icon appears in the top-right corner
- When I click it, the message text is copied to clipboard
- A brief "Copied!" tooltip shows for 1 second, then disappears

Files likely involved:
- client/components/ChatWindow.tsx (the message rendering)

Technical notes:
- Use navigator.clipboard.writeText() for copying
- Keep existing message styling intact
- Use Tailwind for the button and tooltip

Please implement this.
```

## What NOT to Say
- ~~"Improve the chat app"~~ — too vague
- ~~"Make it better"~~ — AI will change things you didn't want changed
- ~~"Add a bunch of features"~~ — do one at a time

## The One-Feature-at-a-Time Rule
Add one feature. Test it. Commit it. Then add the next. This way:
- You always have a working version to go back to
- Bugs are easy to locate (they're in the last feature you added)
- You understand each piece as you build

## What to Tell AI When You Need It
> "Add [one specific feature]. Only change the files necessary. Show me what changed and why. Don't improve or refactor anything I didn't ask about."

---

← [Walkthrough — AI Client](./65-walkthrough-ai-client.md) · [How to Fix a Bug with AI](./67-how-to-fix-a-bug-with-ai.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)