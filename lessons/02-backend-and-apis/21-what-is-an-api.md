# What is an API?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
An API is a way for two apps to talk to each other and share information.

## Real World Analogy
Think of an API like a waiter at a restaurant — you tell the waiter what you want, they go to the kitchen and get it, then bring it back to you. You never have to go into the kitchen yourself.

## Live Example
Go to [openweathermap.org](https://openweathermap.org). Any weather app you've used — on your phone or a website — is pulling its data from an API exactly like this one. The app doesn't store the weather itself; it asks the API, gets the answer, and shows it to you.

## How It Shows Up in a Real App
When a user clicks "Get Weather," your code sends a request to the API and gets back data:

```js
fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_KEY")
  .then(response => response.json())
  .then(data => {
    console.log(data.weather[0].description); // e.g. "light rain"
  });
```

Your app sends a request with a location, and the API responds with weather data in JSON format — a structured list of information your code can read and display.

## What Breaks Without It
Without an API, your app would have no way to access outside data — no weather, no maps, no login with Google, no payments. You'd have to build and maintain all of that yourself, which is rarely practical.

## What to Tell AI When You Need It
> "Show me how to fetch data from a public API in JavaScript and display the result on the page."

> "I'm getting a CORS error when calling an API from my frontend — what's causing it and how do I fix it?"
---

← [What is Localhost?](./20-what-is-localhost.md) · [What is JSON?](./22-what-is-json.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)