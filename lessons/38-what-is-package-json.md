# What is package.json?

## One Line Answer
`package.json` is the project's ID card — it lists what the project is, what it needs (dependencies), and how to run it (scripts).

## Real World Analogy
`package.json` is like a recipe card. It doesn't contain the food (the actual code libraries) — it lists the ingredients. When you share the recipe with someone (share the repo), they run `npm install` to go buy the ingredients and recreate the dish.

## Live Example
Look at our project's `package.json` (in the root of the repo). Every single package we installed — React, Express, Tailwind, the Claude SDK — is listed there with its version. When someone else clones this repo and runs `npm install`, they get exactly the same packages.

## The Structure

```json
{
  "name": "simple-chatapp",
  "version": "1.0.0",
  "scripts": {
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:client\"",
    "dev:server": "tsx watch server/server.ts",
    "dev:client": "vite --port 5173",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.3.1",
    "express": "^4.21.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "vite": "^5.4.0"
  }
}
```

## Key Sections

| Section | Purpose |
|---------|---------|
| `name` | Project name |
| `version` | Current version |
| `scripts` | Shortcuts for terminal commands |
| `dependencies` | Packages needed to run the app |
| `devDependencies` | Packages only needed during development |

## Scripts — The Shortcuts
When you type `npm run dev`, NPM looks in `scripts.dev` and runs whatever is there. It's a shortcut for a longer command you'd otherwise have to type.

```
npm run dev         → runs: concurrently "npm run dev:server" "npm run dev:client"
npm run dev:server  → runs: tsx watch server/server.ts
npm run build       → runs: vite build
```

## Dependencies vs DevDependencies
- **dependencies** — needed in production (React, Express, Claude SDK)
- **devDependencies** — only needed while developing (TypeScript, Vite, type definitions)

When you deploy, only `dependencies` are installed on the server.

## What to Tell AI When You Need It
> "Add the necessary packages to package.json. Put runtime packages in dependencies and build/dev tools in devDependencies. Add a start script for production."

---
*Previous: [What is NPM?](37-what-is-npm.md) · Next: [What is a .env File?](39-what-is-an-env-file.md)*
