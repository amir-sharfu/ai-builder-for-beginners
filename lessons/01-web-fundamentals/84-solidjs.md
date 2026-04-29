# What is SolidJS?

> ⏱ 3 min read · 🟢 Beginner

## One Line Answer
SolidJS is a tool that helps developers build fast, interactive websites where only the parts that change actually update — nothing more, nothing less.

## Real World Analogy
Imagine a scoreboard at a basketball game. Every time a team scores, only the number changes — not the team names, the logos, or the timer. SolidJS works the same way: it finds the exact spot on your webpage that needs updating and changes just that, instead of redrawing the whole screen.

## Live Example
Visit **[solidjs.com](https://www.solidjs.com)** and click the **Playground** link in the top navigation bar. You'll see a live editor on the left and a preview on the right. Try changing the text inside the `<h1>` tag and watch the preview update instantly. That instant feedback is SolidJS doing its job.

## How It Shows Up in a Real App
A developer building a "like" button might write something like this:

```jsx
function LikeButton() {
  const [count, setCount] = createSignal(0);

  return (
    <button onClick={() => setCount(count() + 1)}>
      ❤️ {count()} Likes
    </button>
  );
}
```

Here, `createSignal` is the SolidJS magic. It tracks the number of likes and updates only that number on screen each time the button is clicked — nothing else on the page is touched.

## What Breaks Without It
Without SolidJS, a developer would have to manually find the right element on the page and write custom code to update it every single time something changes — which gets messy and slow very quickly on complex sites.

## What to Tell AI When You Need It
Copy and paste these prompts into Claude Code:

> "Create a simple SolidJS counter app with a button that increases the number by 1 each time I click it. Keep the code beginner-friendly and explain each line."

> "Build a SolidJS to-do list where I can type a task, press Enter, and see it added to a list below. Use createSignal to track the tasks."

---

← [What is a Tool in AI?](./34-what-is-a-tool-in-ai.md) · [More coming tomorrow](./README.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)