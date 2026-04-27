# What is Vue.js?

> ⏱ 3 min read · 🟢 Beginner

## One Line Answer
Vue.js is a tool that makes your website automatically update what people see on screen when the information behind it changes, without needing to reload the page.

## Real World Analogy
Think of a scoreboard at a live sports game. When a team scores, only the score changes — not the entire stadium sign. Vue.js works like the system powering that scoreboard: it watches for changes and swaps out just the right piece, instantly.

## Live Example
Visit **[vuejs.org](https://vuejs.org)** and scroll to the homepage demo. You'll see a live input box — type your name into it. Notice how the greeting below updates as you type, instantly, with no page refresh. That's Vue in action.

## How It Shows Up in a Real App
A developer building a shopping cart might write something like this:

```html
<p>You have {{ cartCount }} items in your cart.</p>
```

When a user adds a product, `cartCount` updates automatically — and Vue instantly shows the new number in the paragraph. No page reload, no extra code to hunt down and update every place the number appears.

## What Breaks Without It
Without Vue (or a similar tool), a developer would have to manually find the right spot on the page using JavaScript and rewrite it every time something changed. For a complex app with dozens of moving parts — user names, prices, notifications — that manual approach becomes slow, fragile, and very easy to break.

## What to Tell AI When You Need It
Copy and paste either of these into Claude Code to get started:

**Prompt 1:**
> "Create a simple Vue.js page where I can type my name into a box and see a personalized greeting appear below it as I type."

**Prompt 2:**
> "Build a basic Vue.js to-do list app where I can add items and check them off. Keep it simple and explain each part in comments."

---

← [How to Read Code You Didn't Write](./56-how-to-read-code-you-didnt-write.md) · [More coming tomorrow](./README.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)