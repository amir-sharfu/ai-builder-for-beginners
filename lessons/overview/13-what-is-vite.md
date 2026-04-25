# What is Vite?

## One Line Answer
Vite is a tool that runs your React app during development and packages it for production — you almost never need to think about it.

## Real World Analogy
Vite is like the engine room of a ship. Passengers (developers) don't see it or interact with it directly — they just experience a smooth, fast ride. Vite makes your development experience fast and handles the technical packaging behind the scenes.

## Live Example
When you run `npm run dev` in our project, Vite starts a local web server at **http://localhost:5174**.

It:
- Serves your React files to the browser
- Watches for changes in your code
- Instantly refreshes the browser when you save a file (Hot Module Replacement)
- Proxies API requests to your backend

## What Vite Does

| Task | What It Means |
|------|--------------|
| Dev server | Runs your app locally so you can test it |
| Hot reload | Updates the browser instantly when you save |
| Proxy | Forwards `/api` and `/ws` requests to your backend |
| Build | Packages everything into optimised files for deployment |
| TypeScript | Converts TypeScript to JavaScript the browser understands |

## The Proxy — Why It Mattered in Our App
This is in `vite.config.ts`:
```javascript
proxy: {
  "/api": "http://localhost:3001",
  "/ws": { target: "ws://localhost:3001", ws: true }
}
```

This tells Vite: "If the browser asks for `/api/anything`, secretly forward it to `localhost:3001`." This is why fixing the WebSocket URL to use the same host fixed the disconnection — the request now goes through Vite's proxy instead of directly to port 3001 (which wasn't accessible in Codespace).

## What Breaks Without It
Without Vite, you'd have no development server, no hot reload, and no way to run your React app locally. You'd be writing raw HTML files like it's 2005.

## What to Tell AI When You Need It
> "Use Vite as the build tool. Set up a proxy in vite.config.ts so that /api requests go to the backend at localhost:3001 and /ws WebSocket connections do too."

---
*Previous: [What is React?](12-what-is-react.md) · Next: [What is Tailwind CSS?](14-what-is-tailwind.md)*
