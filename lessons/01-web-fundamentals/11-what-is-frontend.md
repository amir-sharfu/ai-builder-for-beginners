# What is a Frontend?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
The frontend is everything the user sees and interacts with — it runs inside the browser.

## Real World Analogy
The frontend is the shop floor of a store — the displays, the checkout counter, the price tags. It's what customers experience. What happens in the stockroom (backend) is invisible to them.

## Live Example
Open **https://www.notion.so**

Everything you see — the sidebar, the pages, the text editor, the toolbar — that is the frontend. It runs in your browser. When you click "New Page", the frontend sends a request to Notion's backend to create and save it. But you never see that part.

## What Lives in the Frontend

| Element | Example in Our App |
|---------|-------------------|
| Layout | Sidebar + chat window split |
| Components | ChatList, ChatWindow, message bubbles |
| User interactions | Typing a message, clicking a chat |
| State | Which chat is selected, list of messages |
| Styling | Dark theme, colors, fonts |
| WebSocket connection | Receiving AI responses in real time |

## Frontend Technologies in Our App
- **React** — builds the UI from components
- **Vite** — runs the development server and builds for production
- **Tailwind CSS** — handles all the styling
- **TypeScript** — JavaScript with type checking

## What the Frontend Does NOT Do
- Store data permanently (that's the database)
- Call the AI directly (that's the backend)
- Handle authentication securely (never trust the frontend alone)

## What Breaks Without It
There's no interface. The backend could be working perfectly but the user has no way to interact with it. Like a bank with no ATMs or teller windows.

## What to Tell AI When You Need It
> "Build the frontend in React with Tailwind CSS. It should have a sidebar listing all chats and a main area showing messages. All data comes from the backend API."

---

← [What is a Webpage vs a Web App?](./10-what-is-a-webpage-vs-webapp.md) · [What is React?](./12-what-is-react.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)