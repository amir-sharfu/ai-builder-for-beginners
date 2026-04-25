# 79. What is Authentication vs Authorization?

## What is it?
Authentication is proving *who you are* — like logging in with your email and password. Authorization is deciding *what you're allowed to do* once you're inside. They work together, but they're two separate jobs.

## Real World Analogy
Authentication is showing your ticket at a concert to prove you belong there. Authorization is whether your ticket gets you into the VIP section or just the general area.

## Live Example
Visit **Notion** (notion.so). When you sign in with Google, that's authentication — Notion is confirming your identity. Once you're in, you can edit pages you own but only *view* pages someone shared with you as read-only. That read-only restriction is authorization at work.

## How It Shows Up in a Real App

In most web apps, you'll see two separate checks in the code:

```
// Authentication check
if user is not logged in → redirect to /login

// Authorization check
if user is not an admin → show "Access Denied"
```

These often appear in the backend routes or middleware — the part of your app that runs before a page loads.

## What Breaks Without It
Without authentication, anyone can access private data just by guessing a URL. Without authorization, every logged-in user can see and do everything — including deleting other people's accounts or accessing admin dashboards.

## What to Tell AI When You Need It

> "I'm building a simple web app. Can you show me how to check if a user is logged in before they can see a dashboard page? I'm using [your framework here]."

> "My app has regular users and admins. How do I make it so only admins can delete content? Explain it simply — I'm not a developer."

---

*Part of the [AI Builder for Beginners](../../README.md) course.*