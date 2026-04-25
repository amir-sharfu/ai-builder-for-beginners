# What is a .env File?

## One Line Answer
A `.env` file stores secret configuration values (like API keys) that your app reads at startup — and that you never share publicly.

## Real World Analogy
A `.env` file is like a safe in your office. Inside is the combination to the bank vault (API key), the alarm code (database password), and other secrets. The safe exists on the premises but is never described in any public document. Your employees know to look in the safe, but outsiders don't know it exists.

## Live Example
Look at the `.env` file in our project (it's hidden by default — you may need to show hidden files).

It contains:
```
ANTHROPIC_API_KEY=sk-ant-...
```

The server reads this at startup:
```javascript
import "dotenv/config"; // reads .env file
// Now process.env.ANTHROPIC_API_KEY is available
```

## What .env Files Contain

```bash
# API Keys
ANTHROPIC_API_KEY=sk-ant-api03-...
STRIPE_SECRET_KEY=sk_live_...

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/mydb

# App Config
PORT=3001
NODE_ENV=development
APP_SECRET=random-secret-string-here
```

## The Golden Rule: Never Commit .env to Git

If you push your `.env` to GitHub:
- Your API key is public
- Bots scan GitHub 24/7 looking for leaked keys
- Someone will use your key within minutes
- You will be billed for their usage

This is why `.gitignore` includes `.env`:
```
# .gitignore
.env
node_modules/
dist/
```

## .env vs .env.example
Most projects include a `.env.example` file — a template showing what variables are needed, without the actual values:

```bash
# .env.example (safe to commit)
ANTHROPIC_API_KEY=your_api_key_here
PORT=3001
```

New team members copy this file, rename it to `.env`, and fill in real values.

## What to Tell AI When You Need It
> "Store all secrets in a .env file. Load them with dotenv. Never hardcode API keys in the source code. Add .env to .gitignore. Create a .env.example with placeholder values."

---
*Previous: [What is package.json?](38-what-is-package-json.md) · Next: [What is TypeScript?](40-what-is-typescript.md)*
