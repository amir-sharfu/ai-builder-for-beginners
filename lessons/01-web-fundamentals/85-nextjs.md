# What is Next.js?

> ⏱ 3 min read · 🟢 Beginner

## One Line Answer
Next.js is a toolkit built on top of React that makes it easier to build fast, fully functional websites without having to set up everything from scratch.

## Real World Analogy
Think of building a website like cooking a meal. React gives you raw ingredients. Next.js is like a meal kit delivery service — the ingredients are already measured, the instructions are clear, and your meal comes out faster and more reliably.

## Live Example
Visit **[nextjs.org](https://nextjs.org)** and click **"Start Building"**. Notice how the site itself loads almost instantly — no blank screen, no waiting. That instant loading is Next.js at work. Scroll down to see examples of real companies like Vercel, TikTok, and Hulu who use it in production.

## How It Shows Up in a Real App
In Next.js, every file you create inside a folder called `app` automatically becomes a page on your website:

```
app/
  page.js        → yoursite.com/
  about/
    page.js      → yoursite.com/about
  blog/
    page.js      → yoursite.com/blog
```

No extra setup. No config files. Just create the file and the route exists. A developer building a blog would simply add a new file, and the new page is live.

## What Breaks Without It
Without Next.js, a developer would have to manually wire up page routing, figure out how to make pages load fast, set up their own server, and handle dozens of configuration decisions before writing a single line of real app code. It could take days just to get started.

## What to Tell AI When You Need It
Copy and paste either of these into Claude Code:

> "Create a new Next.js app with a homepage, an about page, and a contact page. Use the App Router structure. Make it beginner-friendly with simple placeholder text."

> "I have a Next.js project. Add a new page at /services that shows a list of three services with a title and description for each."

---

← [How to Add a Database](./69-how-to-add-a-database.md) · [More coming tomorrow](./README.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)