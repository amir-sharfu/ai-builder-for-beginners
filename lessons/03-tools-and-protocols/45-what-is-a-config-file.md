# What is a Config File?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
A config file is a separate file that holds your app's settings so you can change how it behaves without touching the actual code.

## Real World Analogy
Think of it like the settings menu on your phone — you don't rewire the phone to change the volume, you just adjust a value in one place.

## Live Example
Open any project on GitHub and look for a file called `.env`, `config.json`, or `settings.py` near the top of the file list. Those files store things like the app's name, which port it runs on, or which database it connects to.

## How It Shows Up in a Real App
A typical config file might look like this:

```json
{
  "appName": "My Portfolio",
  "port": 3000,
  "darkModeDefault": true
}
```

Your code then reads those values instead of having them scattered and hardcoded everywhere. If you want to change the port, you update the config file — not every file that uses it.

## What Breaks Without It
Without a config file, settings get buried inside your code, so changing something small means hunting through dozens of files. It also makes it dangerously easy to accidentally share passwords or API keys when you push your code online.

## What to Tell AI When You Need It
> "My project has no config file yet. Can you help me create a simple one for a [Node.js / Python / HTML] project and show me how to read values from it?"

> "I have an API key hardcoded in my JavaScript file. How do I move it to a config or .env file so it stays private?"
---

← [How to Read a Project Structure](./44-how-to-read-a-project-structure.md) · [How to Read an Error Message](./46-how-to-read-an-error-message.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)