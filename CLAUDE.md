# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server on port 3000
pnpm build        # Build for production
pnpm test         # Run tests (Vitest)
pnpm lint         # Run ESLint
pnpm format       # Run Prettier
pnpm check        # Format and lint fix in one command
```

Add shadcn components:
```bash
pnpm dlx shadcn@latest add <component>
```

## Architecture

This is a React landing page built with TanStack Start (SSR framework) using file-based routing.

**Stack:**
- TanStack Start + Router for SSR and file-based routing
- Tailwind CSS v4 for styling
- shadcn/ui (new-york style, zinc base color) for UI components
- Vitest for testing

**Key Paths:**
- `src/routes/` - File-based routes; `__root.tsx` is the root layout, `index.tsx` is the home page
- `src/components/ui/` - shadcn components
- `src/lib/utils.ts` - `cn()` utility for className merging
- `src/lib/i18n.ts` - i18n system with `useI18n()` hook; supports `ru` and `en` languages

**Path Alias:** `@/*` maps to `./src/*`

**Routing:** Routes are auto-generated in `src/routeTree.gen.ts` - do not edit manually. Add new routes by creating files in `src/routes/`.

**i18n:** The `useI18n()` hook returns `{ lang, setLang, copy }`. All UI text lives in `translations` object in `src/lib/i18n.ts`. Language is persisted to localStorage and can be set via `?lang=` query param.
