# 80. What is GraphQL?

## What is it?
GraphQL is a way for your app to ask a server for exactly the data it needs — nothing more, nothing less. Instead of getting a huge pile of information and digging through it, you write a specific request that says "just give me these three things." It was created by Facebook and is now used across the web.

## Real World Analogy
Imagine ordering at a restaurant. With a regular API, the kitchen sends you the entire menu's worth of food whether you want it or not. With GraphQL, you say "just bring me a burger and a water" — and that's exactly what arrives.

## Live Example
Visit **GitHub's API Explorer** at `docs.github.com/en/graphql/overview/explorer`. Sign in and you can type a GraphQL query to ask for your username, your repositories, or your followers — only the fields you choose show up in the response.

## How It Shows Up in a Real App
In a project, you might see a query file like this:

```graphql
query {
  user(id: "42") {
    name
    email
    profilePhoto
  }
}
```

This lives in your frontend code and gets sent to a GraphQL endpoint (usually something like `/graphql`). Your server responds with just those three fields — no extra clutter.

## What Breaks Without It
Without GraphQL, your app might over-fetch data — loading 50 fields when you only needed 3 — which slows things down and wastes bandwidth. You might also have to make multiple separate requests where one GraphQL query would have done the job.

## What to Tell AI When You Need It
> "I'm building a simple app and want to use GraphQL to fetch just a user's name and email. Can you write a basic query and explain each line like I'm new to coding?"

> "Can you show me how to connect a GraphQL API to a React app and display the results on screen? Please keep it beginner-friendly."

---

*Part of the [AI Builder for Beginners](../../README.md) course.*