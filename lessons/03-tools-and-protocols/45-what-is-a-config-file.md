# What is a Config File?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
A config file is a separate file that stores settings for your app so you can change how it behaves without touching the actual code.

## Real World Analogy
Think of it like the settings menu on your phone — you don't rewire the hardware to turn on dark mode, you just flip a switch in one place.

## Live Example
Open any project on GitHub and look for files named `.env`, `config.json`, or `vite.config.js` in the root folder. These files control things like which port the app runs on, what database it connects to, or whether it's in development or production mode.

## How It Shows Up in a Real App
A typical `.env` config file might look like this:

```
PORT=3000
DATABASE_URL=mongodb://localhost/myapp
API_KEY=abc123secret
DEBUG=true
```

Your app reads these values at startup instead of having them hardcoded in your JavaScript. In Node.js, you access them with `process.env.PORT` or `process.env.API_KEY`.

## What Breaks Without It
Without a config file, sensitive values like API keys and passwords get buried inside your code — which is dangerous if you push that code to GitHub. You also lose the ability to run the same app in different environments (local, staging, live) without manually rewriting code each time.

## What to Tell AI When You Need It
> "I'm building a Node.js app. Help me set up a `.env` config file to store my API key and database URL, and show me how to read those values in my code."

> "My app is hardcoding a port number and API key directly in the code. Help me move those into a config file so they're easier to manage and safer to share."
---

← [How to Read a Project Structure](./44-how-to-read-a-project-structure.md) · [How to Read an Error Message](./46-how-to-read-an-error-message.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)