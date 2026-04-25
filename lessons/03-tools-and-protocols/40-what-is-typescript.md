# What is TypeScript?

> ⏱ 2 min read · 🟡 Intermediate

## One Line Answer
TypeScript is JavaScript with labels — it lets you say what type of data each variable should hold, catching mistakes before the code runs.

## Real World Analogy
Imagine a form where you must enter your age. Plain JavaScript is like a form with no validation — you could accidentally type "twenty-five" and it would accept it. TypeScript is like a form that only accepts numbers in the age field — it catches the mistake immediately.

## Live Example
Visit **https://www.typescriptlang.org/play** — the TypeScript playground.

Try typing:
```typescript
function add(a: number, b: number): number {
  return a + b;
}

add("hello", 5); // Red underline immediately — wrong type!
```

TypeScript shows the error before you even run the code. Plain JavaScript would only fail at runtime.

## JavaScript vs TypeScript

**JavaScript (no types):**
```javascript
function createChat(title) {
  return { id: uuid(), title };
}
// What is `title`? A string? A number? An object?
// You won't know until it breaks.
```

**TypeScript (with types):**
```typescript
function createChat(title: string): Chat {
  return { id: uuid(), title, createdAt: new Date().toISOString() };
}
// title must be a string. Returns a Chat object.
// If you pass a number, TypeScript tells you immediately.
```

## TypeScript in Our App
Every file ending in `.ts` or `.tsx` is TypeScript. The types help AI write better code and help you understand what each piece expects:

```typescript
// types.ts — defines the shape of a Chat
interface Chat {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
```

When you see `Chat` used anywhere in the code, you know exactly what properties it has.

## Do You Need to Learn TypeScript?
Not deeply — AI handles the types. But knowing that `: string`, `: number`, `interface`, and `type` are TypeScript constructs helps you understand what you're reading.

## What to Tell AI When You Need It
> "Use TypeScript throughout. Define interfaces for all data shapes (Chat, Message, etc.). Enable strict mode in tsconfig.json."

---

← [What is a .env File?](./39-what-is-an-env-file.md) · [What is a Repo?](./41-what-is-a-repo.md) →

**Was this helpful?** [❤️ Leave a reaction on GitHub Discussions](https://github.com/amir-sharfu/ai-builder-for-beginners/discussions) — it helps others know which lessons are most valuable.

[↑ Back to course](../../README.md)