# 76. What is Docker?

## What is it?
Docker is a tool that packages your entire app — code, settings, and everything it needs to run — into one tidy bundle called a **container**. This container runs the same way on any computer, whether it's your laptop or a server halfway around the world. It solves the classic "but it works on my machine!" problem.

## Real World Analogy
Imagine shipping a meal kit instead of just a recipe. The recipe alone might fail if someone doesn't have the right pan. But the meal kit includes everything — ingredients, tools, and instructions — so anyone can make it successfully, anywhere.

## Live Example
Visit **Railway.app** (railway.app) and deploy a sample project. Behind the scenes, Railway uses Docker containers to run your app on their servers exactly the same way it ran on your computer. You never see the container directly, but it's why deployment "just works."

## How It Shows Up in a Real App
A Docker project includes a file called `Dockerfile` in the root folder:

```dockerfile
FROM node:20
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]
```

This file is like a recipe that tells Docker: *"Start with Node.js, copy my code in, install dependencies, then start the server."* Docker reads this and builds a container from it.

## What Breaks Without It
Without Docker, your app might run perfectly on your computer but crash on a teammate's machine or a live server because of different software versions or missing tools. Debugging these invisible environment differences can waste hours or days.

## What to Tell AI When You Need It
> *"I have a simple Node.js app. Can you write me a basic Dockerfile so I can run it with Docker? Explain each line simply."*

> *"My app works on my computer but breaks when I deploy it. Can you help me set up Docker so it runs the same everywhere? I'm a beginner."*

---

*Part of the [AI Builder for Beginners](../../README.md) course.*