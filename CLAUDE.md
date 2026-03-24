# Orbit HR Design System

A React + TypeScript component library and design token system for Orbit HR, documented via Storybook and deployed to Vercel.

## Stack

- **React 19** + **TypeScript 5.9**
- **Vite 7** (dev server + Vite app build)
- **Storybook 10** with `@storybook/react-vite` framework
- **Vitest 4** + Playwright (browser-mode story tests via `@storybook/addon-vitest`)
- **ESLint 9** (flat config in `eslint.config.js`)
- **Vercel** — production host at `https://orbit-hr-design-system.vercel.app`
- **GitHub** — source at `github.com/nerolo/Orbit-HR-Design-System`

## Commands

```bash
npm run storybook        # dev server on :6006
npm run build-storybook  # production build → storybook-static/
npm run dev              # Vite app dev server
npm run build            # tsc + Vite app build
npm run lint             # ESLint
npx vitest               # run story tests (requires Playwright / headless Chromium)
```

> **Note:** `node_modules` was originally installed on macOS. On Linux ARM64 you must reinstall:
> `npm install` (the optional dep `@rollup/rollup-linux-arm64-gnu` handles the platform binary).

## Project Layout

```
src/
  tokens/
    colors.ts       # All color tokens — primitives, alias, mapped — exported as typed groups
    typography.ts   # Type scale, font weights, font family constant
  stories/
    Button.tsx / Button.stories.ts
    Header.tsx / Header.stories.ts
    Page.tsx   / Page.stories.ts
    foundation/
      Colors.stories.tsx      # Full color palette visualizer
      Typography.stories.tsx  # Type scale + weight specimen
.storybook/
  main.ts           # Framework: react-vite; addons list
  preview.ts        # Global decorators / parameters
  vitest.setup.ts   # Vitest browser-mode setup
vercel.json         # buildCommand + outputDirectory + SPA rewrite rule
```

## Design Tokens

Tokens are extracted directly from Figma variables and live in `src/tokens/`. They follow a three-tier model:

| Tier | File section | Purpose |
|------|-------------|---------|
| 1 — Primitives | `primitiveBrand`, `primitiveNeutral`, … | Raw named colours (e.g. "Lipstick Berry `#B60058`") |
| 2 — Alias | `aliasGroups` | Semantic roles mapped to primitives (e.g. `Primary/400`) |
| 3 — Mapped | `mappedGroups` | Component-level tokens (e.g. `Buttons/button-primary`) |

Typography uses **Hanken Grotesk** as the base font, with a 9-step scale from `text-xs` (10.5 px) to `text-5xl` (36 px), all exported as `TypeStep[]` from `src/tokens/typography.ts`.

## Adding a New Component

1. Create `src/stories/MyComponent.tsx` (the component itself).
2. Create `src/stories/MyComponent.stories.ts` — export a default `Meta<typeof MyComponent>` and named `StoryObj` exports for each variant.
3. Import tokens directly from `../../tokens/colors` or `../../tokens/typography` — no CSS variables in story files, keep logic in token files.
4. Run `npm run storybook` and verify the story renders and passes a11y checks.

## Deployment

Vercel is configured via `vercel.json`:
- **Build:** `npm run build-storybook`
- **Output:** `storybook-static/`
- **Rewrite:** all paths → `/index.html` (SPA routing)

Deploys are triggered manually via the Vercel API (no Git auto-deploy — the account uses Google sign-in without a GitHub Login Connection). To redeploy, push source changes to GitHub and use the Vercel dashboard **Redeploy** button, or call the API directly.

## Known Issues

- `src/stories/Configure.mdx` — the default Storybook welcome page. Keep it import-free (no `@storybook/blocks` imports) because the package is not a direct dependency and Rollup will fail to resolve it during `storybook build`.
- Binary story assets (`src/stories/assets/`) are not committed to GitHub. They are only in the local workspace. File-based Vercel deployments must include them explicitly.
