# What is a Backend?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
The backend is the part of a website that runs on a server — it stores data, handles logins, and sends information to what users see on screen.

## Real World Analogy
A restaurant kitchen is the backend. Customers never see it, but it's where all the real work happens — storing ingredients, preparing food, and sending it out to the table.

## Live Example
Go to **reddit.com** and scroll your feed. Every post, username, and vote count was fetched from Reddit's backend the moment the page loaded. None of that lives in your browser — it's pulled from a database on a server.

## How It Shows Up in a Real App
When a user logs in, the backend checks their credentials and responds:

```js
// Backend receives login request and replies
app.post('/login', (req, res) => {
  const user = findUser(req.body.email);
  if (user && passwordMatches(req.body.password)) {
    res.send({ success: true, token: generateToken(user) });
  } else {
    res.send({ success: false, message: 'Invalid credentials' });
  }
});
```

The frontend never handles this logic — it just sends the request and waits for an answer.

## What Breaks Without It
Without a backend, your app can't save data, verify users, or talk to a database. Every user would see the same static page with no personalisation, no accounts, and no memory of previous visits.

## What to Tell AI When You Need It
> "I'm building a beginner web app with a login page. Help me set up a simple backend using Node.js and Express that checks a username and password."

> "Explain what a backend does in a simple web app and show me a basic example with one route that returns some data."
---

← [Why Do We Use Frameworks?](../01-web-fundamentals/15-why-we-use-frameworks.md) · [What is Node.js?](./17-what-is-nodejs.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)