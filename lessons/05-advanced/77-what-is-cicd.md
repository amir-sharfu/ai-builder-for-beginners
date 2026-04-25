# 77. What is CI/CD?

## What is it?
CI/CD stands for Continuous Integration and Continuous Deployment. It's an automatic process that tests your code and publishes it to your live website whenever you make changes. Think of it as a robot assistant that checks your work and ships it for you.

## Real World Analogy
Imagine every time you save a book report, a helper automatically checks your spelling, prints it, and puts it in your teacher's mailbox — without you having to do anything extra. That's CI/CD for websites.

## Live Example
**GitHub Actions** (github.com) is one of the most popular CI/CD tools. When you visit a project's repository, click the **Actions** tab at the top. You'll see a log of every time code was tested and deployed — green checkmarks mean it passed, red X's mean something broke.

## How It Shows Up in a Real App
Most projects have a special file that tells CI/CD what to do. Here's a simplified example:

```yaml
# .github/workflows/deploy.yml

name: Deploy Website
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: npm install
      - run: npm test
      - run: npm run build
```

This file says: "Every time someone pushes new code, install the app, run the tests, and build it." Platforms like Vercel and Netlify can do this automatically with zero configuration.

## What Breaks Without It
Without CI/CD, developers have to manually test and upload changes every time — which means human error easily sneaks in. Broken code can go live unnoticed and take down your whole website.

## What to Tell AI When You Need It
> "I have a project on GitHub and I want it to automatically deploy to Vercel every time I push new code. Can you walk me through setting that up step by step?"

> "My GitHub Actions workflow is failing with a red X. Here's the error message: [paste error]. What does this mean and how do I fix it?"

---

*Part of the [AI Builder for Beginners](../../README.md) course.*