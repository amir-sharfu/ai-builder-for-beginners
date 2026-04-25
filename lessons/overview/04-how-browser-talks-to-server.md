# How Does a Browser Talk to a Server?

## One Line Answer
The browser sends a **request** and the server sends back a **response** — this back-and-forth is called HTTP.

## Real World Analogy
It's like sending a text message and getting a reply:
- You send: "What's the weather today?" (request)
- They reply: "Sunny, 28°C" (response)

The browser and server have a similar conversation, millions of times a day.

## Live Example
Open **https://httpbin.org/get** in your browser.

That page shows you exactly what your browser sent to the server — your browser type, your location, what it was asking for. The server reflected it back so you can see the conversation.

## The Request-Response Cycle

```
Browser                          Server
  |                                |
  |--- "GET /api/chats" ---------> |
  |                                | (looks up chats)
  |<-- "200 OK, here's the data" --|
  |                                |
```

### What's in a Request?
- **Method** — what you want to do (GET = fetch, POST = create, DELETE = remove)
- **URL** — which resource you want
- **Body** — data you're sending (only on POST, PUT)

### What's in a Response?
- **Status code** — did it work? (200 = yes, 404 = not found, 500 = server error)
- **Body** — the actual data or webpage

## How It Shows Up in Our App
Every time our React frontend fetches the list of chats, it sends a GET request to `/api/chats`. The Express server receives it, looks up the chats, and sends them back as JSON.

## What to Tell AI When You Need It
> "The frontend needs to fetch data from the backend. Create a GET endpoint on the server and call it from the React app."

---
*Previous: [What is a Server?](03-what-is-a-server.md) · Next: [What is a URL?](05-what-is-a-url.md)*
