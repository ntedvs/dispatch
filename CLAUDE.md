# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a mobile news/media app prototype for "The Dispatch" publication. It simulates a native mobile experience within a browser using a realistic phone frame UI with iPhone design elements (dynamic island, status bar, home indicator).

## Package Manager

**Use Bun exclusively** for all package management and script execution:
- Install dependencies: `bun install`
- Run dev server: `bun dev`
- Build for production: `bun run build`
- Run linter: `bun run lint`
- Preview production build: `bun run preview`

## Architecture

### State Management
- No external state management library (Redux, Zustand, etc.)
- All app state lives in `src/app.tsx` and flows down through props
- State includes: current tab, article being viewed, saved article IDs, podcast player state
- Use `useState` and `useCallback` for state and handlers

### Navigation Pattern
- **No routing library** - navigation is state-based
- Five main tabs: home, podcasts, newsletters, saved, profile
- Article viewing overlays the current tab (doesn't replace it)
- Bottom navigation conditionally hides when viewing an article
- To add new screens: create in `src/screens/`, add to tab type union in `app.tsx`, and update `renderScreen()` switch statement

### Data Layer
- Mock data defined in `src/data.ts` with TypeScript interfaces
- Three main data types: `Article`, `PodcastShow`/`PodcastEpisode`, `Newsletter`
- No API calls or data fetching - everything is static mock data
- To add new content: update the exported arrays in `data.ts`

### Component Structure
- `src/components/` - Reusable UI components (PhoneFrame, BottomNav)
- `src/screens/` - Full-screen views for each tab
- PhoneFrame component handles responsive scaling and iPhone simulation
- All screens receive callback props for navigation/actions (no context providers)

### Styling
- Tailwind CSS v4 with custom theme defined in `src/index.css` using `@theme` directive
- Brand colors: `dispatch-red` (#d1221f), `dispatch-navy` (#050c23), `dispatch-gray`, `dispatch-border`, etc.
- Custom fonts: `font-serif` (Source Serif 4), `font-display` (Playfair Display)
- Use `hide-scrollbar` utility class to hide scrollbars while maintaining scroll functionality
- Prettier automatically organizes imports and sorts Tailwind classes on save

## Code Style

### Prettier Configuration
- No semicolons (`semi: false`)
- Auto-import organization enabled
- Tailwind class sorting enabled (references `src/index.css`)
- Format files before committing

### ESLint Rules
- TypeScript strict mode enabled
- React Hooks rules enforced
- React Refresh (Fast Refresh) optimizations enabled
- Run `bun run lint` to check for issues

## Key Implementation Details

### PhoneFrame Component
- Simulates iPhone with fixed dimensions: 393x852px screen + 12px bezel
- Dynamically scales to fit viewport (max 92% height, 90% width)
- Includes side buttons, dynamic island, status bar, and home indicator
- Content area height: 798px (852px - 54px status bar)

### Article Flow
- Click article → sets `articleId` state → renders `ArticleScreen`
- `ArticleScreen` receives article data, back handler, and save/unsave handler
- Back action clears `articleId`, returning to previous tab
- Bottom nav automatically hidden while viewing article

### Podcast Player
- Mini player appears at bottom when episode is playing
- Persists across tab navigation (but hidden during article viewing)
- Play/pause state and current episode tracked in App state
- Player shows above bottom nav in the z-order

## TypeScript Configuration
- Uses TypeScript 5.9 with strict mode
- Project references split between `tsconfig.app.json` (src) and `tsconfig.node.json` (config files)
- Vite handles TypeScript compilation - no separate `tsc` watch needed for dev
- Build command runs TypeScript check before Vite build to catch type errors
