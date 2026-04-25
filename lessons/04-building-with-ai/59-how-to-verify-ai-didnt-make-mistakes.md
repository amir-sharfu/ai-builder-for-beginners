# How to Verify AI Didn't Make Mistakes

> ⏱ 3 min read · 🟡 Intermediate

## One Line Answer
AI writes confident-sounding code that sometimes doesn't work — always test it, and know the three most common failure modes.

## Real World Analogy
AI is like a very fast, very confident intern. They'll write a report that looks polished and complete. But they might have made an assumption, used a slightly wrong formula, or misunderstood the brief. You review it before sending it to the client — you don't blindly forward it.

## The Three Most Common AI Mistakes

### 1. Hallucinated Package Names or APIs
AI sometimes invents function names, package versions, or API methods that don't exist.

**How to spot it:**
```
Cannot find module '@anthropic/ai-sdk'
                     ^^^^^^^^^^^^^^^^
This package name doesn't exist
```

**How to verify:**
- Search the package name on npmjs.com
- Check the real package's documentation for the actual function names

---

### 2. Outdated Syntax or APIs
AI training data has a cutoff date. It might use old package versions or deprecated methods.

**How to spot it:**
```
TypeError: query is not a function
```
Or code that looks unfamiliar compared to the package's current docs.

**How to verify:**
- Check the installed package version: `npm list package-name`
- Compare AI's code to the current official documentation

---

### 3. Logic That Looks Right But Isn't
AI can write code that runs without errors but produces wrong results.

**Example:** AI builds a "delete chat" feature. It removes the chat from the UI immediately (looks right). But it forgot to also close the WebSocket session — so the agent keeps running and consuming API credits.

**How to spot it:**
- Test every feature manually, not just "does it load"
- Test edge cases: what happens when you delete, what if the input is empty, what if two things happen at the same time

## The Verification Checklist

After AI writes code, check:

- [ ] Does the app still start? (`npm run dev` — no errors)
- [ ] Does TypeScript compile? (`npx tsc --noEmit` — no red lines)
- [ ] Does the new feature work as described?
- [ ] Does the rest of the app still work? (didn't break something else)
- [ ] Are there any new console errors in the browser?
- [ ] Does it work on the edge cases? (empty input, no data, errors)

## The Most Important Test: Use It

Run the app. Click things. Try to break it. Use it the way a real user would. Code that looks right isn't right until it works right.

## What to Tell AI When You Need It
> "Before writing any code, tell me how I should test this feature. What are the key things to verify and what edge cases should I try?"

---

← [What Questions to Ask When Stuck](./58-what-questions-to-ask-when-stuck.md) · [When to Trust AI — and When Not To](./60-when-to-trust-ai-when-not-to.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)