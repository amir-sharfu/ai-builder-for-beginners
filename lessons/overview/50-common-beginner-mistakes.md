# Common Beginner Mistakes

## One Line Answer
Most beginner mistakes are not about code — they're about setup, secrets, and assumptions that nobody told you about.

---

## Mistake 1: Forgetting to Run `npm install`
**What happens:** You get "Cannot find module" errors.
**Why:** The packages in `package.json` haven't been downloaded yet.
**Fix:** Run `npm install` whenever you clone a project or add new packages.

---

## Mistake 2: Hardcoding Ports in Frontend Code
**What happened to us:** `ws://localhost:3001/ws` worked locally but broke in Codespaces.
**Why:** Different environments have different network rules.
**Fix:** Always use relative URLs (`/api/chats`) or the current `window.location.host`. Let Vite's proxy handle routing.

---

## Mistake 3: Committing the .env File
**What happens:** Your API key becomes public on GitHub. Bots find it within minutes.
**Why:** Developers forget to add `.env` to `.gitignore`.
**Fix:** Check `.gitignore` before your first `git push`. Never commit secrets.

---

## Mistake 4: Not Stopping Old Processes
**What happened to us:** Port 3001 was occupied by a previous server instance.
**Why:** Running `npm run dev` twice without stopping the first.
**Fix:** Always `Ctrl+C` to stop a running process before restarting. Check with `lsof -ti:3001`.

---

## Mistake 5: Editing `node_modules` Files
**What happens:** Your change is overwritten next time you run `npm install`.
**Why:** `node_modules` is auto-generated. It's not your code.
**Fix:** Never edit files inside `node_modules`. Edit your own code or the package's config instead.

---

## Mistake 6: Using Vague Prompts with AI
**What happens:** AI builds something completely different from what you imagined.
**Why:** AI can't read your mind — it interprets vague requests broadly.
**Fix:** Describe the user experience, the data flow, and the specific technology. See Week 3 lessons for prompt templates.

---

## Mistake 7: Not Reading the Error Message
**What happens:** You spend 20 minutes confused when the answer was in the terminal.
**Why:** Error messages look scary at first.
**Fix:** Read the first line. Find your filename. Go to that line. Paste the full error into AI if you're still stuck.

---

## Mistake 8: Assuming the Frontend Can Store Secrets
**What happens:** Your API key is visible to anyone who opens DevTools.
**Why:** Browser code is fully readable by users — there are no secrets in the frontend.
**Fix:** All API keys, passwords, and secrets live on the backend. Always.

---

## Mistake 9: Skipping the README
**What happens:** Hours of confusion that the README would have prevented.
**Why:** Beginners often go straight to the code.
**Fix:** README first. Always. It tells you how to set up, what to install, and how to run.

---

## Mistake 10: Trying to Understand Everything at Once
**What happens:** Overwhelm. Nothing gets built.
**Why:** Modern web apps have many layers. Understanding all of them simultaneously is impossible.
**Fix:** Follow the 3-week plan. Understand concepts progressively. Build first, understand as you go.

---

**Week 2 Complete.** You now understand all the tools. Week 3 is about building confidently with AI.

*Previous: [What is a Dependency?](49-what-is-a-dependency.md) · Next: [What is a Prompt?](51-what-is-a-prompt.md)*
