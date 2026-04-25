# What is Anthropic and Claude?

## One Line Answer
Anthropic is the company that built Claude — an AI assistant that can have conversations, write code, analyse data, and use tools to take actions.

## Real World Analogy
Anthropic is like a car manufacturer. Claude is the car. You don't build the engine yourself — you use the vehicle Anthropic built. The Claude Agent SDK is the key that starts the car.

## Live Example
Open **https://claude.ai** and have a conversation.

Everything you experience there — the intelligence, the helpfulness, the ability to write code and explain concepts — that same capability is available to your app through the API. We're not building the AI; we're using it.

## The Claude Model Family

| Model | Speed | Intelligence | Best For |
|-------|-------|-------------|---------|
| Claude Haiku | Fastest | Good | Simple tasks, high volume |
| Claude Sonnet | Balanced | Great | Most use cases |
| Claude Opus | Slower | Best | Complex reasoning, hard problems |

Our app uses `"opus"` model in `ai-client.ts` — the most capable option.

## What Makes Claude Different
- **Tools** — Claude can use tools (run code, search the web, read files) not just answer questions
- **Safety** — Anthropic focuses on building AI that is safe and beneficial
- **Long context** — can read and reason over very long documents
- **Honesty** — trained to say when it doesn't know something

## The Agent SDK vs Raw API

| | Raw Anthropic API | Claude Agent SDK |
|--|---|---|
| What it is | Direct HTTP calls to claude | Higher-level wrapper |
| Tool use | Manual setup | Built-in tools (Bash, Read, Write…) |
| Multi-turn | You manage conversation history | SDK manages it |
| Complexity | More control, more code | Simpler, faster to build |

For our chat app, we use the Agent SDK because we want Claude to have tools (like Bash and WebSearch) out of the box.

## What to Tell AI When You Need It
> "Use the @anthropic-ai/claude-agent-sdk package. Import the query function. Allow the agent to use Bash, Read, Write, and WebSearch tools. Use claude-sonnet-4-6 as the model."

---
*Previous: [What is an AI API?](31-what-is-an-ai-api.md) · Next: [What is the Agent SDK?](33-what-is-the-agent-sdk.md)*
