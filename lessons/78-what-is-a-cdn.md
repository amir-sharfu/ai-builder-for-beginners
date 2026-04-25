# 78. What is a CDN?

## What is it?
A CDN (Content Delivery Network) is a system of servers spread around the world that stores copies of your website's files. When someone visits your site, they get the files from the server closest to them instead of one far away. This makes your website load faster for everyone, no matter where they live.

## Real World Analogy
Imagine a popular book. Instead of everyone ordering it from one warehouse in New York, bookstores all over the world stock it locally. Someone in Tokyo gets their copy from Tokyo, not New York — much faster!

## Live Example
Go to **Bootstrap's website** (getbootstrap.com) and look at their "Get Started" section. They show you a CDN link — a URL you paste into your HTML to load their styling tools. The URL includes words like `cdn.jsdelivr.net`, which is the CDN doing the work.

## How It Shows Up in a Real App
You'll see CDN links in the `<head>` section of an HTML file, like this:

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  />
</head>
```

Instead of downloading Bootstrap and hosting it yourself, you just point to it. The CDN handles the rest.

## What Breaks Without It
If you skip the CDN link and don't host the files yourself, your page will load with no styles or missing features — things will look broken and unstyled. Slow or missing CDN connections can also make your entire site feel sluggish for users far from your server.

## What to Tell AI When You Need It

> "My website loads slowly for people outside my country. Can you explain how to use a CDN to fix this, and show me an example for a beginner?"

> "I'm using Bootstrap in my HTML project. Can you give me the CDN link to add it and explain where exactly to paste it?"

---

*Part of the [AI Builder for Beginners](../../README.md) course.*