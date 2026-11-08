# CLAUDE.md — [Your Project Name]

> Starter repo for AI University's **The Workshop, Production Edition** course.
> Fill the brackets below once you've named your project in `PRD.md`.

## What this is
[One sentence: what your project does — see PRD.md]

## Stack
- Language: TypeScript
- Framework: Next.js (App Router) + React
- Datastore: Supabase (Postgres)
- Package manager: npm

## Run & test
- Install: `npm install`
- Dev: `npm run dev`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`

## Architecture (this course's core lesson — keep this boundary real, not aspirational)
Three concentric layers, dependencies point inward only:
- `app/` — **delivery layer**: routes, Server Components, Route Handlers. Talks to the domain layer, never to Supabase directly.
- `lib/domain/` — **domain layer**: plain TypeScript functions that own business rules. Knows nothing about HTTP or React.
- `lib/data/` — **data layer**: the only place that imports `lib/supabase/*`. Nothing outside this folder runs a Supabase query.

## Coding style
- ES modules / async-await, 2-space indent, descriptive names
- Comment WHY, not WHAT — skip obvious comments

## How to work here
- Read existing code before changing anything
- Small, focused changes — not big rewrites
- Run `npm run typecheck` after changes before saying done
- If a request seems wrong, ask before proceeding

## Security
- Secrets go in `.env.local` only — see SECURITY.md
- `.env.local` is gitignored; never commit it
- `SUPABASE_SERVICE_ROLE_KEY` is server-only — never import `lib/supabase/server.ts` from a Client Component

## Project-specific notes
[Anything non-obvious about your specific project: conventions, gotchas, key directories]
