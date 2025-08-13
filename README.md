# Kanban Board (Next.js + Prisma + SQLite)

An MVP Kanban board with columns and cards, drag-and-drop, and CRUD. Built with:
- Next.js (App Router, TypeScript)
- Tailwind CSS
- Prisma ORM
- SQLite (for local dev; swap to Postgres easily)
- @hello-pangea/dnd for drag-and-drop

## Quick start

1) Install deps
   npm install

2) Set up database
   cp .env.example .env
   npx prisma generate
   npx prisma migrate dev --name init

3) Run
   npm run dev
   Open http://localhost:3000

The app will auto-create a default board and redirect you to it.

## Scripts
- dev: Start Next dev server
- build/start: Production build and start
- prisma: npx prisma studio (GUI) and migrate/generate as needed

## Swap to Postgres (optional)
- Set DATABASE_URL in .env to your Postgres URL (Neon/Supabase/etc.)
- Run: npx prisma migrate dev

## Roadmap
- User auth (NextAuth)
- Labels, assignees, due dates
- Realtime updates
- Sprints/backlog, WIP limits, attachments
