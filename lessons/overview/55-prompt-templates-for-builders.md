# Prompt Templates for Builders

## One Line Answer
Copy-paste these templates, fill in your details, and you'll get consistently useful results from AI.

---

## Template 1: Build a New Feature

```
I'm building [describe your app].

I want to add [feature name].

User experience:
- When [user does X], they should see [Y]
- When [edge case], show [Z]

Technical context:
- Frontend: React + Tailwind CSS
- Backend: Node.js + Express
- The relevant files are: [list files]

Please build this feature. Explain any non-obvious decisions.
```

---

## Template 2: Fix a Bug

```
I have a bug in my app.

What I expected: [describe expected behaviour]
What actually happens: [describe actual behaviour]

Error message (if any):
[paste full error here]

Relevant code:
[paste the relevant section]

What I've already tried: [list anything you've done]

Please find and fix the root cause.
```

---

## Template 3: Understand Existing Code

```
I'm looking at this code and I don't understand it:

[paste code]

Please explain:
1. What this code does in plain English
2. Why it's written this way
3. What would break if I removed it
4. If there's anything here that could be improved
```

---

## Template 4: Start a New Project from Scratch

```
I want to build [describe the app in 2-3 sentences].

Target users: [who will use it]

Key features:
1. [feature 1]
2. [feature 2]
3. [feature 3]

Technical preferences:
- Use React + Vite + Tailwind for the frontend
- Use Node.js + Express for the backend
- Use WebSocket for real-time features
- Store data in-memory for now (easy to replace later)
- TypeScript throughout
- API keys from .env file

Please create the project structure and all files needed to get started.
Explain each file briefly as you create it.
```

---

## Template 5: Change the UI

```
I want to change how [component/page] looks.

Currently: [describe how it looks now]
I want: [describe how you want it to look]

Keep: [list what should stay the same]
Change: [list what should be different]

The file is: [filename]
Use Tailwind CSS for all styling.
```

---

## Template 6: Ask for an Explanation Before Building

```
I want to [goal]. Before you write any code:

1. Explain your approach in plain English
2. List the files you'll create or modify
3. Describe any trade-offs or risks

Once I confirm, then build it.
```

---

## Template 7: Deploy / Go Live

```
My app is ready to deploy. It's currently:
- Frontend: React + Vite (builds to /dist)
- Backend: Node.js + Express (runs on port 3001)

I want to deploy to [platform: Vercel / Railway / Render / etc.]

Please give me step-by-step instructions including:
- Any environment variables I need to set
- Build commands
- Start commands
- How to connect frontend to backend in production
```

---

## The Golden Rule
The more specific your input, the more useful the output.

When in doubt: describe the **user experience**, not the technical implementation. AI can always figure out the code — it can't figure out what you actually want.

---
*Previous: [How to Describe Data Flow to AI](54-how-to-describe-data-flow.md) · Next: [How to Read Code You Didn't Write](56-how-to-read-code-you-didnt-write.md)*
