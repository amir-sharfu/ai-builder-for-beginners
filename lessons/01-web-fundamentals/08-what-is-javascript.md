# What is JavaScript?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
JavaScript makes websites interactive — it responds to clicks, fetches data, updates the page without reloading, and runs logic in the browser.

## Real World Analogy
If HTML is the building frame and CSS is the interior design, JavaScript is the electricity. It makes the lights turn on when you flip a switch, opens the door when you press a button, and shows the elevator floor number as it moves.

## Live Example
Open **https://www.google.com** and start typing in the search box.

Notice how suggestions appear instantly as you type — without the page reloading. That is JavaScript. It detects every keystroke, sends a request to Google's server, gets suggestions back, and updates the dropdown — all in real time.

## What JavaScript Can Do

| Action | Example |
|--------|---------|
| React to clicks | Submit button sends a message |
| Update the page | New messages appear without reload |
| Fetch data | Load chat history from the server |
| Validate input | Check that the message isn't empty |
| Open/close things | Toggle a dropdown menu |
| Connect to WebSocket | Maintain live connection to server |

## What JavaScript Looks Like

```javascript
// When the button is clicked, send the message
button.addEventListener('click', function() {
  const text = inputField.value;
  sendMessage(text);
  inputField.value = ''; // clear the input
});
```

## How It Shows Up in Our App
Every interactive part of our chat app is JavaScript (written as TypeScript and React):
- Sending a message when you press Enter
- Showing the AI response as it arrives
- Switching between chats
- Connecting to the WebSocket

## What Breaks Without It
The page would be completely static. You could look at it but nothing would respond to anything you do. No messages could be sent.

## What to Tell AI When You Need It
> "When the user presses Enter in the input box, send the message to the server and clear the input field. Show a loading indicator while waiting for a response."

---

← [What is CSS?](./07-what-is-css.md) · [Difference Between HTML, CSS, and JavaScript](./09-difference-between-html-css-js.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)