# Blog Post Template: How I Built Ask to Doc

Use this template to add your first blog post to Supabase.

## Supabase Table: `blogs`

Add a new row with these values:

```
slug: "how-i-built-ask-to-doc"
title: "How I Built Ask to Doc: From Idea to SaaS in 30 Days"
excerpt: "The journey of building an AI-powered PDF assistant—from the initial spark to a production SaaS with paying users."
content: (see full content below)
cover_image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80"
published: true
created_at: (auto-generated)
updated_at: (auto-generated)
```

## Full Content (copy this to the `content` field):

---

# How I Built Ask to Doc: From Idea to SaaS in 30 Days

Ever stared at a 100-page PDF and thought, "I just need to find that ONE thing"? That's exactly the frustration that sparked Ask to Doc.

## The Problem

We've all been there:
- Ctrl+F doesn't understand context
- Scrolling through pages is exhausting
- You know the answer is *somewhere* in the document

I wanted something smarter. Something that could understand what I was really asking.

## The "Aha!" Moment

I was deep into LangChain tutorials when it clicked: **What if PDFs could talk back?**

Not just keyword matching, but actual understanding. Ask a question in plain English, get a real answer with context.

## Tech Stack Decisions

Here's what I landed on and why:

### Next.js 14
- Server components for fast initial loads
- App router for clean routing
- Great DX with TypeScript

### Convex
- Real-time database out of the box
- No backend boilerplate
- Websockets just work

### LangChain
- Handles the AI orchestration
- Easy to swap models
- Great for RAG (Retrieval-Augmented Generation)

### Clerk
- Auth in 10 minutes, not 10 hours
- Social logins built-in
- User management dashboard

### PayPal
- Subscription handling
- Works internationally
- Users trust it

## The Build Process

### Week 1: Core Functionality
- PDF upload and parsing
- Basic chat interface
- LangChain integration

### Week 2: Polish
- Real-time updates with Convex
- Better UI/UX
- Error handling

### Week 3: Monetization
- Clerk authentication
- PayPal subscription tiers
- Free vs Pro limits

### Week 4: Launch
- Deployed to Vercel
- Fixed edge cases
- Shared on Twitter

## Lessons Learned

1. **Start with the core feature** - Everything else can wait
2. **Real-time feels like magic** - Convex made this trivial
3. **Auth is hard, use a service** - Clerk saved me days
4. **Ship fast, iterate faster** - v1 doesn't need to be perfect

## What's Next

Currently working on:
- Multi-document chat (compare PDFs)
- Better context handling
- Mobile app

## Try It Yourself

Check out [Ask to Doc](https://ask-to-doc.vercel.app/) and let me know what you think!

---

*Building something cool? Let's connect on [Twitter](https://x.com/nikhil_twt).*

---

## Also Update Homepage Featured Blog

Change the BlogCard on homepage from "The Long Flight Test" to this new post once you add it to Supabase.
