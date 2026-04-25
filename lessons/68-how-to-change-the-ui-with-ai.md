# How to Change the UI with AI

## One Line Answer
Describe what you see now, what you want instead, and what should stay the same — AI will handle the CSS and layout.

## You Don't Need to Know CSS

This is one of the biggest wins for non-coders. You describe the visual result, AI writes the Tailwind classes. You don't need to memorize `flex`, `grid`, `z-index`, or `overflow` — you describe what you want to see.

## The UI Change Template

```
Current state:
[describe how it looks now]

Desired state:
[describe how you want it to look]

Keep unchanged:
[list what should not move/change]

Technical:
- File: [which component file]
- Use Tailwind CSS only
- Don't change any functionality
```

## Examples

### Example 1: Change Colors
```
Current: The sidebar has a plain white background.
Desired: Dark gray sidebar (#1a1a2e), white text, with a subtle border on the right.
Keep: All the chat list functionality and layout.
File: client/components/ChatList.tsx
```

### Example 2: Improve Message Bubbles
```
Current: Messages are plain text lines with no visual distinction between user and AI.
Desired:
- User messages: right-aligned, blue rounded bubble, white text
- AI messages: left-aligned, light gray rounded bubble, dark text
- Tool use messages: centered, smaller text, italic, yellow tint background
Keep: The message text content and order.
File: client/components/ChatWindow.tsx
```

### Example 3: Add Responsive Layout
```
Current: Fixed 256px sidebar that doesn't work well on mobile.
Desired: On screens narrower than 768px, hide the sidebar by default and show a hamburger menu icon. Clicking it slides the sidebar in from the left.
Keep: All desktop behaviour unchanged.
File: client/App.tsx and client/components/ChatList.tsx
```

## Describing UI Without Design Vocabulary

If you don't know design terms, describe it like you'd describe it to a friend:

> "The send button is too small and easy to miss. Make it bigger and more prominent. It should feel like a clear call-to-action — the kind of button your eye goes to immediately."

> "The messages feel cramped. Give them more breathing room so it's easier to read a long conversation."

> "The loading indicator is just a spinner. I want it to look more like Claude is actually thinking — maybe animated dots or some kind of pulse."

All of these are enough for AI to produce a good result.

## After AI Makes Changes

Run the app and look at every part of the UI:
- Does the changed part look right?
- Does everything else still look right?
- Test on mobile if it's relevant (resize your browser window)

## What to Tell AI When You Need It
> "Here's the file: [paste]. I want the visual result to look like: [describe]. Don't change any functionality. Only use Tailwind classes. Show me a brief before/after of the key changes."

---
*Previous: [How to Fix a Bug with AI](67-how-to-fix-a-bug-with-ai.md) · Next: [How to Add a Database](69-how-to-add-a-database.md)*
