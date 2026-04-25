# What is React?

## One Line Answer
React is a JavaScript library for building user interfaces out of reusable pieces called components.

## Real World Analogy
Think of a LEGO set. Each LEGO brick is a **component** — a button, a message bubble, a sidebar. You build complex things by combining simple, reusable pieces. Change one brick and every place that brick is used updates automatically.

## Live Example
Open **https://www.airbnb.com**

Every listing card you see (the photo, title, price, rating) is the *same component* repeated with different data. Airbnb built one "ListingCard" component, and React renders it hundreds of times with different content. That's the power of components — build once, reuse everywhere.

## What a React Component Looks Like

```jsx
// A simple message bubble component
function MessageBubble({ text, sender }) {
  return (
    <div className="message-bubble">
      <strong>{sender}</strong>
      <p>{text}</p>
    </div>
  );
}

// Using it three times with different data
<MessageBubble text="Hello!" sender="You" />
<MessageBubble text="Hi there!" sender="AI" />
<MessageBubble text="How can I help?" sender="AI" />
```

## How It Shows Up in Our App
Our chat app is built entirely in React. The components are:

```
App.tsx              ← the whole app
├── ChatList.tsx     ← the left sidebar
│   └── ChatItem     ← each individual chat row
└── ChatWindow.tsx   ← the main chat area
    └── MessageBubble ← each message
```

When a new AI message arrives, React automatically updates the `ChatWindow` component — you don't have to manually refresh anything.

## Why React Instead of Plain JavaScript?
Plain JavaScript to build a dynamic chat interface is complex and messy. React handles:
- Updating only what changed (not the whole page)
- Managing state (which chat is selected, list of messages)
- Keeping UI in sync with data automatically

## What to Tell AI When You Need It
> "Build the UI in React. Create separate components for the sidebar and the chat window. When the messages array updates, the UI should automatically re-render."

---
*Previous: [What is a Frontend?](11-what-is-frontend.md) · Next: [What is Vite?](13-what-is-vite.md)*
