# The Workshop, Production Edition — Starter Repo

The official code-along starter for [AI University](https://learn.actiforge.ai)'s
**The Workshop, Production Edition** course (part of the Developer Track).

This course teaches you to architect a real Next.js app with Claude Code —
enforceable boundaries, a domain layer, production-grade error handling and
testing. It doesn't hand you a fixed app to build: you bring your own project
idea and apply each lesson to it as you go.

## Getting started

1. Clone this repo and open it in Claude Code.
2. Fill in `PRD.md` with your project idea before Lesson 1 — the course assumes
   you already know what you're building.
3. Fill in the brackets in `CLAUDE.md`.
4. Copy `.env.example` to `.env.local` and add your own Supabase project's
   keys (Settings → API in your Supabase dashboard).
5. `npm install`, then `npm run dev`.

## What's here

A minimal Next.js (App Router) + Supabase skeleton, pre-wired with the
three-layer boundary the course's first lesson teaches (`app/` → delivery,
`lib/domain/` → domain, `lib/data/` → data — see `CLAUDE.md` for the full
rule). Everything past that is yours to build, lesson by lesson.

## Security

Read `SECURITY.md` before you add your first real credential. The short
version: secrets live in `.env.local`, never in code, never committed.
