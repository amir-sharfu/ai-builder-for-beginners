# What is a Server?

## One Line Answer
A server is a computer that waits for requests and sends back responses — it "serves" information to whoever asks.

## Real World Analogy
A server is like a waiter at a restaurant. You (the browser) sit at the table and place an order (send a request). The waiter (server) goes to the kitchen, gets your food (data), and brings it back to you (sends a response). The waiter doesn't eat the food — it just delivers it.

## Live Example
Open **https://api.github.com/users/amir-sharfu**

What you see is raw data that GitHub's server sent back when your browser asked for it. No design, no buttons — just the information the server returned. A real browser would normally dress this up into a webpage.

## Types of Servers
| Type | What It Does | Example |
|------|-------------|---------|
| Web server | Sends HTML/CSS/JS files | github.com |
| API server | Sends raw data (JSON) | api.github.com |
| Database server | Stores and retrieves data | PostgreSQL, MongoDB |

## How It Shows Up in Our App
Our Express backend (`server/server.ts`) is a server. It:
- Listens for requests from the browser
- Talks to the Claude AI API
- Sends responses back to the browser via WebSocket

## What Breaks Without It
The browser has nowhere to send messages. The AI is never reached. The app is just a pretty interface with no brain.

## What to Tell AI When You Need It
> "I need a backend server that receives messages from the browser, processes them, and sends responses back. Use Node.js and Express."

---
*Previous: [What is a Browser?](02-what-is-a-browser.md) · Next: [How Does a Browser Talk to a Server?](04-how-browser-talks-to-server.md)*
