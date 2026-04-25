# What is an API?

> ⏱ 2 min read · 🟢 Beginner

## One Line Answer
An API is a way for one piece of software to talk to another — it's the messenger that takes requests and brings back responses.

## Real World Analogy
An API is like a waiter in a restaurant. You (the app) don't go into the kitchen (the other system) directly. You tell the waiter (API) what you want, they go to the kitchen, and bring back what you ordered. You never need to know how the kitchen works.

## Live Example
Open **https://wttr.in/London?format=3** in your browser.

You just called a weather API. Your browser sent a request to `wttr.in`, a weather service, and it returned the current weather for London. Any app in the world can use that same URL to get weather data — that's an API.

## Types of APIs

| Type | Example | What It Does |
|------|---------|-------------|
| Weather API | wttr.in, OpenWeather | Returns weather data |
| Maps API | Google Maps | Shows maps, calculates routes |
| Payment API | Stripe | Processes credit card payments |
| AI API | Anthropic Claude | Generates AI responses |
| Our own API | `/api/chats` | Manages our app's chat data |

## What an API Request Looks Like
```
Request:  GET https://api.example.com/weather?city=London
Response: { "city": "London", "temp": 18, "condition": "Cloudy" }
```

## How It Shows Up in Our App

Our app uses two types of APIs:

**1. Our own API** (built with Express):
```
GET /api/chats          → returns list of chats
POST /api/chats         → creates a new chat
DELETE /api/chats/:id   → deletes a chat
```

**2. Anthropic's API** (called by the Agent SDK):
The backend sends your messages to `api.anthropic.com` and gets Claude's responses back. Your API key (`ANTHROPIC_API_KEY`) is the password that lets us use this service.

## What Breaks Without It
No API = no communication between parts. The frontend can't get data. The backend can't reach Claude. The whole app stops working.

## What to Tell AI When You Need It
> "Create a REST API with Express. I need endpoints to list, create, and delete chats. Each should return JSON. Also integrate the Anthropic API using my API key from the .env file."

---

← [What is Localhost?](./20-what-is-localhost.md) · [What is JSON?](./22-what-is-json.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)