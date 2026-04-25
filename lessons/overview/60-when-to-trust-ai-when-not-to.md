# When to Trust AI — and When Not To

## One Line Answer
Trust AI for implementation. Don't trust AI for judgment about your specific situation, security decisions, or anything it can't verify.

## The Trust Matrix

| Trust AI for | Don't trust AI for |
|-------------|-------------------|
| Syntax and code patterns | Whether your app is secure |
| Setting up frameworks and configs | Decisions about your users' data |
| Explaining how things work | Whether a vendor/service is right for you |
| Debugging error messages | Production-readiness of code |
| Writing boilerplate | Compliance and legal requirements |
| General best practices | Specific business logic you defined |

## When AI Is Highly Reliable

**Writing standard code patterns:**
> React components, Express routes, TypeScript interfaces, Tailwind styling

AI has seen millions of examples of these. The output is almost always correct and follows conventions.

**Explaining concepts:**
> What is a WebSocket? How does CORS work? Why would I use a proxy?

AI explanations are generally accurate for established concepts. Cross-check against official docs for anything critical.

**Fixing clear, specific bugs:**
> "I get EADDRINUSE on port 3001" → fix is reliable
> "The WebSocket URL was hardcoded" → fix is reliable

---

## When to Be More Careful

**Security:**
> Never blindly trust AI's "this is secure." Ask specifically: "What are the security risks in this code? What could an attacker do?" Pressure-test it.

**"This is production-ready":**
> Our chat app is a demo. In-memory storage, no authentication, no rate limiting. AI might call it "production-ready" because the code works. It isn't.

**Cutting-edge features:**
> If a package released a major version 3 months ago, AI might not know the new API. Always check current docs.

**Anything that costs money or sends data:**
> AI can't see your Anthropic usage dashboard. It doesn't know if a loop is generating 10,000 API calls.

---

## The Practical Rule

> If it breaks, you lose time.
> → Trust AI, verify with testing.

> If it breaks, you lose money or data.
> → Trust AI, verify with documentation and security review.

> If it breaks, users get hurt.
> → Don't rely on AI alone. Bring in a professional.

## What to Tell AI When You Need It
> "Is there anything in this code that could be a security risk or cause unexpected costs? Be specific about what could go wrong."

---
*Previous: [How to Verify AI Didn't Make Mistakes](59-how-to-verify-ai-didnt-make-mistakes.md) · Next: [Project Overview — Simple Chat App](61-project-overview-simple-chatapp.md)*
