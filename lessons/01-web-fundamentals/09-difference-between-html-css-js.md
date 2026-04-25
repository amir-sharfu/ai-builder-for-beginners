# Difference Between HTML, CSS, and JavaScript

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
HTML = what's there. CSS = how it looks. JavaScript = what it does.

## The Building Analogy (Complete)

| Technology | Building Equivalent | Responsibility |
|------------|--------------------|-|
| HTML | The walls, floors, rooms | Structure and content |
| CSS | Paint, furniture, lighting | Visual appearance |
| JavaScript | Electricity, plumbing, elevators | Behaviour and interaction |

## Live Example
Open **https://www.airbnb.com**

- **HTML** — the listing titles, descriptions, prices, images, buttons. The actual content.
- **CSS** — the clean layout, the pink/red brand color, the rounded cards, the beautiful typography.
- **JavaScript** — the date picker that opens when you click, the map that updates as you scroll, the price that recalculates as you select dates.

Remove any one of these three and the experience breaks completely.

## They Work Together

```
User opens the page
       ↓
Browser loads HTML  →  Displays structure
       ↓
Browser loads CSS   →  Applies visual style
       ↓
Browser runs JS     →  Makes it interactive
```

## A Simple Example: A Send Button

**HTML** (what exists):
```html
<button id="send-btn">Send</button>
```

**CSS** (how it looks):
```css
#send-btn {
  background: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
}
```

**JavaScript** (what it does):
```javascript
document.getElementById('send-btn').addEventListener('click', () => {
  sendMessage();
});
```

## How It Shows Up in Our App
Our chat app uses all three:
- `index.html` — the HTML entry point
- Tailwind CSS classes — the styling
- React + TypeScript — the interactive logic (JavaScript)

React actually writes HTML and CSS *inside* JavaScript — which is why modern web apps look like one big JS file.

## What to Tell AI When You Need It
> "I want a button that looks blue and rounded (CSS), displays the text 'Send' (HTML), and when clicked it submits the message (JavaScript)."

---

← [What is JavaScript?](./08-what-is-javascript.md) · [What is a Webpage vs a Web App?](./10-what-is-a-webpage-vs-webapp.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)