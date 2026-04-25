# How to Deploy Your App

## One Line Answer
Deployment means putting your app on a real server so anyone on the internet can use it — not just you on localhost.

## The Deployment Landscape

| Platform | Best For | Free Tier | Complexity |
|----------|---------|-----------|-----------|
| **Railway** | Full-stack apps (frontend + backend together) | Yes | Low |
| **Render** | Backend services + databases | Yes | Low |
| **Vercel** | Frontend only (React, Next.js) | Yes | Very Low |
| **Fly.io** | Containers, full control | Yes | Medium |
| **DigitalOcean** | Full control, more power | No | High |

**For our app (React frontend + Node.js backend): Railway or Render.**

## What Changes When You Deploy

| Development | Production |
|-------------|-----------|
| `http://localhost:5174` | `https://your-app.railway.app` |
| Vite dev server | Built static files served by Express |
| `.env` file | Environment variables set in dashboard |
| `npm run dev` | `npm run build` + `npm start` |
| Any errors are yours alone | Errors affect real users |

## Deploying to Railway (Simplest Option)

### Step 1: Build the frontend
Vite compiles the React app into plain HTML/CSS/JS files:
```bash
npm run build
# Creates /dist folder with compiled frontend
```

### Step 2: Serve the built frontend from Express
Add this to `server.ts`:
```typescript
// Serve built frontend files
app.use(express.static(path.join(__dirname, "../dist")));
// For any unmatched route, serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
```

### Step 3: Deploy
```
1. Push code to GitHub
2. Go to railway.app → New Project → Deploy from GitHub
3. Select your repo
4. Add environment variable: ANTHROPIC_API_KEY = your key
5. Railway builds and deploys automatically
```

## The Prompt to Get AI to Help Deploy

```
I want to deploy this app to Railway.

Current setup:
- Frontend: React + Vite (builds to /dist)
- Backend: Node.js + Express on port 3001
- WebSocket on the same server

Please:
1. Update server.ts to serve the built frontend
2. Add a start script to package.json for production
3. Give me the exact steps to deploy to Railway
4. Tell me which environment variables to set in the dashboard
```

## Critical: Environment Variables

Never hardcode secrets in production. Set them in the platform's dashboard:
- `ANTHROPIC_API_KEY` — your Claude API key
- `NODE_ENV=production`
- `PORT` — usually set automatically by the platform

## What to Tell AI When You Need It
> "Help me prepare this app for deployment. Tell me what needs to change between development and production, then give me step-by-step deployment instructions for Railway."

---
*Previous: [How to Add a Database](69-how-to-add-a-database.md) · Next: [Glossary](71-glossary.md)*
