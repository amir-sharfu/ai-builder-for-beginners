# What is CORS?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
CORS is a browser security rule that blocks requests to a different domain unless the server explicitly allows it.

## Real World Analogy
CORS is like a nightclub with a guest list. Your frontend (the guest) wants to talk to the backend (the club). By default, the club only lets in people from the same address. If the frontend is on port 5174 and the backend is on port 3001 — different addresses — the browser blocks the request unless the backend says "yes, 5174 is on the guest list."

## Live Example
Open the browser developer tools (`F12`) on any website, go to the Console tab, and try:
```javascript
fetch("https://api.twitter.com/anything")
```
You'll see a CORS error. Twitter's API doesn't allow random websites to call it directly from the browser.

## What a CORS Error Looks Like
```
Access to fetch at 'http://localhost:3001/api/chats' from origin 
'http://localhost:5174' has been blocked by CORS policy: 
No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## Why It Exists
Without CORS protection, any website could make requests to your bank's API using your logged-in session cookies. CORS prevents malicious sites from impersonating you to other services.

## How We Fixed It in Our App

In `server/server.ts`:
```javascript
import cors from "cors";
app.use(cors()); // Allow requests from any origin
```

The `cors()` middleware adds headers to every response saying: "I allow requests from all origins."

For production, you'd restrict it:
```javascript
app.use(cors({
  origin: "https://your-real-domain.com" // only allow your frontend
}));
```

## CORS Only Applies to Browsers
CORS is a browser rule, not a server rule. Tools like Postman or your backend code can call any API freely — they're not browsers and don't enforce CORS. Only web browsers block cross-origin requests.

## What to Tell AI When You Need It
> "Add CORS middleware to the Express server. During development, allow all origins. In production, restrict it to the actual frontend domain."

---

← [What is a Port Conflict?](./47-what-is-a-port-conflict.md) · [What is a Dependency?](./49-what-is-a-dependency.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)