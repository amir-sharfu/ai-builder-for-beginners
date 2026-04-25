# What is HTML?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
HTML is the skeleton of every webpage — it defines the structure and content (headings, paragraphs, images, buttons).

## Real World Analogy
HTML is like the frame of a building. It decides: where are the walls, where are the windows, where is the door. It has no paint, no furniture — just the structure.

## Live Example
Open **https://en.wikipedia.org/wiki/Artificial_intelligence**

Now press `Ctrl + U` (Windows) or `Cmd + Option + U` (Mac) to view the page source. What you see is raw HTML — every heading, paragraph, and link on that page defined in HTML tags.

To really see HTML without CSS: open that Wikipedia page, then open Developer Tools (`F12`), go to Console and paste:
```
document.querySelectorAll('style, link[rel="stylesheet"]').forEach(e => e.remove())
```
The page loses all styling — what's left is pure HTML structure.

## What HTML Looks Like

```html
<h1>This is a heading</h1>
<p>This is a paragraph of text.</p>
<button>Click me</button>
<img src="photo.jpg" />
```

Tags come in pairs: `<p>` opens, `</p>` closes. Everything between them is the content.

## Common HTML Tags
| Tag | What It Creates |
|-----|----------------|
| `<h1>` to `<h6>` | Headings (big to small) |
| `<p>` | Paragraph |
| `<button>` | Clickable button |
| `<input>` | Text field |
| `<div>` | A container/box |
| `<img>` | An image |
| `<a>` | A link |

## How It Shows Up in Our App
Our chat app's `index.html` is the entry point. The browser loads it first. It contains one `<div id="root">` which React then fills with the entire chat interface.

## What Breaks Without It
Without HTML, there's nothing for the browser to display. The page would be blank.

## What to Tell AI When You Need It
> "Create the HTML structure for a chat interface with a sidebar on the left and a main message area on the right."

---

← [What is a URL?](./05-what-is-a-url.md) · [What is CSS?](./07-what-is-css.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)