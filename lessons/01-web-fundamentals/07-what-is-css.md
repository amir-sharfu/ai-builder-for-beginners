# What is CSS?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
CSS is what makes websites look good — it controls colors, fonts, spacing, layout, and animations.

## Real World Analogy
If HTML is the frame of a building, CSS is the interior design. Same structure, completely different look. You can take the same HTML and make it look like a bank website or a gaming website just by changing the CSS.

## Live Example
Open **https://www.stripe.com**

Everything you see that looks beautiful — the gradient backgrounds, the precise spacing, the clean white cards, the smooth animations — that is all CSS. The words themselves are HTML. The visual presentation is CSS.

Now imagine Stripe with zero CSS: plain black text on a white background, no layout, no colors. It would look like a plain text document.

## What CSS Looks Like

```css
/* Make the background dark and text white */
body {
  background-color: #1a1a1a;
  color: white;
  font-size: 16px;
}

/* Style a button */
button {
  background-color: blue;
  padding: 10px 20px;
  border-radius: 8px;
}
```

## How It Shows Up in Our App
Our app uses **Tailwind CSS** — a special way of writing CSS where instead of writing separate style rules, you add short class names directly to HTML elements:

```html
<!-- Tailwind CSS classes applied directly -->
<div class="flex h-screen bg-gray-900 text-white">
  <button class="bg-blue-500 px-4 py-2 rounded">Send</button>
</div>
```

Each class (`bg-blue-500`, `px-4`, `rounded`) is a tiny pre-written CSS rule. Tailwind generates the CSS automatically.

## What Breaks Without It
The app still works — but it looks like a plain unstyled document from 1995. All the layout, colors, and spacing disappear.

## What to Tell AI When You Need It
> "Style this using Tailwind CSS. Dark background, clean white text, blue send button. The sidebar should be fixed width on the left, chat area takes the rest of the screen."

---

← [What is HTML?](./06-what-is-html.md) · [What is JavaScript?](./08-what-is-javascript.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)