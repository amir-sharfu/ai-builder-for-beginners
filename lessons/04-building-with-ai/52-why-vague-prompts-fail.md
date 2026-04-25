# Why Vague Prompts Fail

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
Vague prompts fail because AI fills in blanks with assumptions — and those assumptions are almost never what you had in mind.

## Real World Analogy
Ordering food by saying "I want something good" at a restaurant. The waiter brings something. It might be fine. But it's not what you were craving because you never said what that was. The waiter isn't bad — you just gave them nothing to work with.

## Real Examples: Vague vs Specific

### Example 1 — Building a form

**Vague prompt:**
> "Add a form to the app"

AI might build: a contact form, a login form, a search form, or a settings form. You have no idea which until you see it. It probably won't match what you needed.

**Specific prompt:**
> "Add a form in the sidebar where users can create a new chat. It needs one text input for the chat title (optional, placeholder: 'New Chat') and a Create button. When submitted, call POST /api/chats and refresh the chat list."

Now AI has no ambiguity. It builds exactly that.

---

### Example 2 — Fixing a bug

**Vague prompt:**
> "My app is broken, fix it"

AI doesn't know: what's broken, what error you see, what you expected, what actually happened.

**Specific prompt:**
> "When I click 'Delete Chat', the chat disappears from the sidebar but if I refresh the page it comes back. The DELETE /api/chats/:id endpoint should remove it permanently. Here's the relevant code: [paste code]"

Now AI knows exactly what to look at.

---

### Example 3 — Design

**Vague:**
> "Make it look better"

**Specific:**
> "The chat messages feel cramped. Add more vertical padding between messages. Make the user's messages right-aligned with a blue bubble, and AI messages left-aligned with a gray bubble. Keep the existing font."

---

## The Five Things a Good Prompt Includes

1. **What you're building** — the context
2. **What you want** — the specific outcome
3. **What it should look like** — UI description or example
4. **What technology** — React? Express? Which files?
5. **What should NOT change** — so AI doesn't break things that work

## The Beginner's Secret Weapon

If you don't know how to describe something technically, describe the **user experience** instead:

> "When the user opens the app, I want them to see a list of their previous chats on the left. When they click one, the messages from that chat appear on the right. If they haven't started any chats, the left panel should say 'No chats yet' with a + button to create one."

This is a perfect prompt. No technical jargon needed.

## What to Tell AI When You Need It
> "Before you build anything, restate my requirements back to me in your own words. Tell me if anything is unclear."

---

← [What is a Prompt?](./51-what-is-a-prompt.md) · [How to Describe User Experience to AI](./53-how-to-describe-user-experience.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)