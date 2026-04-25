# Why Do We Use Frameworks?

## One Line Answer
Frameworks solve problems that every developer faces — so you don't reinvent the wheel every time you build something.

## Real World Analogy
Imagine building a house. You *could* make your own bricks from clay, fire them yourself, and mix your own cement. Or you could buy ready-made bricks and use established building techniques. Frameworks are the ready-made bricks — tested, trusted, and efficient.

## Live Example
Visit **https://github.com** — GitHub itself is built with Ruby on Rails (a backend framework) and React (a frontend framework). With billions of users and millions of requests per day, they chose frameworks because they handle complexity reliably.

## What Problems Frameworks Solve

### Without React (plain JavaScript):
```javascript
// Every time data changes, manually update every element
document.getElementById('message-count').textContent = messages.length;
document.getElementById('last-message').textContent = messages[messages.length - 1].text;
document.getElementById('chat-list').innerHTML = generateChatHTML(chats);
// ... 50 more lines of manual DOM updates
```

### With React:
```jsx
// React handles all updates automatically
return <div>{messages.length} messages</div>
// When `messages` changes, React updates the UI. Done.
```

## Frameworks We Use and Why

| Framework | Problem It Solves |
|-----------|------------------|
| **React** | Managing complex, dynamic UIs without manual DOM updates |
| **Vite** | Fast development server, module bundling, TypeScript support |
| **Tailwind** | Consistent styling without writing custom CSS from scratch |
| **Express** | Handling HTTP requests without writing raw Node.js server code |
| **Claude Agent SDK** | Communicating with Claude AI without handling raw API calls |

## The Trade-off
Frameworks add complexity upfront (you need to learn them) but save enormous time as your app grows. For any app beyond a simple webpage, the trade-off is almost always worth it.

## What to Tell AI When You Need It
> "Use established frameworks — React for the frontend, Express for the backend, Tailwind for styling. I want well-known, well-supported tools, not custom solutions."

---
*Previous: [What is Tailwind CSS?](14-what-is-tailwind.md) · Next: [What is a Backend?](16-what-is-backend.md)*
