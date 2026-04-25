# What is Tailwind CSS?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
Tailwind is a way of styling your app by adding short class names directly to your HTML instead of writing separate CSS files.

## Real World Analogy
Normal CSS is like going to a tailor — you describe exactly what you want and they make it from scratch. Tailwind is like IKEA — there are thousands of pre-made pieces, and you just pick and combine what you need.

## Live Example
Open **https://tailwindui.com/components**

Every component preview you see there (buttons, cards, navigation bars, forms) is built purely with Tailwind CSS classes. No custom CSS files — just class names applied directly to HTML elements.

## Normal CSS vs Tailwind

**Normal CSS:**
```css
/* In a separate .css file */
.send-button {
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
}
```
```html
<button class="send-button">Send</button>
```

**Tailwind CSS:**
```html
<!-- Everything in one place -->
<button class="bg-blue-500 text-white px-4 py-2 rounded font-semibold">
  Send
</button>
```

Same result. Tailwind is just faster to write once you know the class names (and AI knows all of them).

## Common Tailwind Classes
| Class | What It Does |
|-------|-------------|
| `bg-blue-500` | Blue background |
| `text-white` | White text |
| `p-4` | Padding on all sides |
| `px-4 py-2` | Horizontal / vertical padding |
| `rounded` | Rounded corners |
| `flex` | Flexbox layout |
| `h-screen` | Full screen height |
| `w-64` | Fixed width (256px) |
| `font-bold` | Bold text |
| `hover:bg-blue-600` | Darker blue when hovered |

## How It Shows Up in Our App
Every styled element in our chat app uses Tailwind. The dark sidebar, the message bubbles, the input box — all Tailwind classes.

## What to Tell AI When You Need It
> "Style everything with Tailwind CSS. Dark gray sidebar on the left, white message bubbles for user, gray bubbles for AI. Blue send button. Mobile friendly."

---

← [What is Vite?](./13-what-is-vite.md) · [Why Do We Use Frameworks?](./15-why-we-use-frameworks.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)