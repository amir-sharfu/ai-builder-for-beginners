# What is a Config File?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
A config file controls how a tool behaves — without changing the tool's source code, you change its settings.

## Real World Analogy
A config file is like the settings menu on your phone. You don't reprogram the phone to change the ringtone — you go to Settings and change a value. Config files are the settings menu for developer tools.

## Live Example
In our project, `vite.config.ts` controls how Vite behaves:

```typescript
export default defineConfig({
  plugins: [react()],    // "Use the React plugin"
  root: "client",        // "The frontend files are in /client"
  server: {
    proxy: {             // "Forward these requests to the backend"
      "/api": "http://localhost:3001",
    },
  },
  build: {
    outDir: "../dist",   // "Put built files in /dist"
  },
});
```

Without changing Vite's code, we've told it: where files are, how to proxy requests, where to output the build.

## Config Files in Our Project

| File | Tool | What It Configures |
|------|------|--------------------|
| `vite.config.ts` | Vite | Dev server, proxy, build output |
| `tsconfig.json` | TypeScript | Which JS version to compile to, strictness |
| `tailwind.config.js` | Tailwind CSS | Which files to scan for class names |
| `postcss.config.js` | PostCSS | CSS processing pipeline |
| `.env` | Your app | Environment variables and secrets |
| `package.json` | NPM | Dependencies, scripts, project metadata |

## What tsconfig.json Does
```json
{
  "compilerOptions": {
    "target": "ES2020",      // compile to this JavaScript version
    "module": "ESNext",      // use modern import/export syntax
    "strict": true,          // enable strict type checking
    "jsx": "react-jsx"       // understand React JSX syntax
  }
}
```

## The Rule: AI Handles Config
Config files are notoriously tedious to get right. They have dozens of options, version incompatibilities, and interactions between tools. This is exactly what AI handles well — always ask AI to write or fix config files.

## What to Tell AI When You Need It
> "Update the vite.config.ts to also proxy /auth requests to localhost:3001. Don't change anything else."

Or:

> "My TypeScript is showing errors about module resolution. Check and fix my tsconfig.json."

---

← [How to Read a Project Structure](./44-how-to-read-a-project-structure.md) · [How to Read an Error Message](./46-how-to-read-an-error-message.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)