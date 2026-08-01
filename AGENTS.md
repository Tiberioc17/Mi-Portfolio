# AI Agent Instructions

## Project overview
- This is a React + TypeScript portfolio site scaffolded with Vite.
- Styling uses Tailwind CSS and the app is structured around reusable UI components.
- The app is client-side only; there is no backend in this repository.

## Key commands
- `npm run dev` — start local development server
- `npm run build` — build production output
- `npm run lint` — run ESLint across the repo
- `npm run preview` — preview the production build locally

## Important files
- `src/App.tsx` — root layout and section ordering
- `src/components/` — main UI components: `Header`, `Hero`, `Projects`, `Skills`, `About`, `Contact`, `Footer`
- `src/data/` — content data for projects and skills
- `src/types/index.ts` — shared TypeScript interfaces
- `src/main.tsx` — app entry point
- `index.html`, `vite.config.ts` — Vite app config
- `tailwind.config.js`, `postcss.config.js` — CSS tooling config

## Conventions
- Use functional React components with TypeScript.
- Keep component-specific UI in `src/components/` and content in `src/data/`.
- Tailwind utility classes are used directly in JSX.
- Prefer typed props and shared interfaces from `src/types/index.ts`.

## Guidance for edits
- Preserve the existing single-page structure and section IDs used for navigation.
- Ensure `Header` still receives the current `activeSection` prop from `App`.
- If updating the contact form, note it uses `emailjs-com` in `src/components/Contact.tsx`.
- For new content, add structured data to `src/data/projects.ts` or `src/data/skills.ts` rather than hardcoding it in components.

## Documentation reference
- The repository currently has only a minimal `README.md`.
- Keep instructions concise and rely on code structure rather than duplicating README details.

## Do not
- Do not add server-side or backend code to this frontend-only repository.
- Do not change the package manager or add new package management paradigms.
- Do not remove TypeScript types without a strong reason.
