# Marek Paňko — Portfolio

A personal portfolio for **Marek Paňko** (JustFossa), full-stack software engineer.
Built with Next.js (App Router), TypeScript, and Tailwind CSS. Monochrome,
editorial, serif-led design with a light/dark toggle.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** for styling, with CSS-variable design tokens
- **next-themes** for the light/dark toggle
- **lucide-react** for icons
- Fonts via `next/font`: Fraunces (display), Newsreader (body), JetBrains Mono (labels)

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

To create a production build:

```bash
npm run build
npm run start
```

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # Root layout: fonts, metadata, theme provider
│  ├─ page.tsx          # Composes the sections in order
│  └─ globals.css       # Design tokens + base styles + reveal animation
├─ components/          # One file per UI piece (presentation only)
│  ├─ Navbar.tsx        Hero.tsx        About.tsx
│  ├─ Skills.tsx        Experience.tsx  Projects.tsx
│  ├─ Contact.tsx       Footer.tsx
│  ├─ Section.tsx       # Shared section header wrapper
│  ├─ Reveal.tsx        # Scroll-into-view animation wrapper
│  ├─ ThemeProvider.tsx ThemeToggle.tsx SocialIcon.tsx
└─ data/                # All editable content lives here
   ├─ site.ts           # Name, role, bio, facts, social links, nav
   ├─ skills.ts         # Skill groups
   ├─ experience.ts     # Roles
   ├─ certifications.ts # Licenses & certifications
   └─ projects.ts       # Projects (currently empty)
```

## Editing content

All copy is separated from presentation. To change what the site says, edit the
files in `src/data/` — you rarely need to touch the components.

- **Bio, tagline, social links, quick facts** → `src/data/site.ts`
- **Skills** → `src/data/skills.ts`
- **Experience** → `src/data/experience.ts`
- **Certifications** → `src/data/certifications.ts`
- **Projects** → `src/data/projects.ts`

### Adding projects

The Projects section is empty for now and shows a tasteful placeholder with a
link to GitHub. Your pinned repositories are included as commented-out examples
in `src/data/projects.ts` — uncomment any you want to feature, or add your own:

```ts
export const projects: Project[] = [
  {
    name: "swiftnote",
    description: "Create and share self-destructing notes with ease.",
    tech: ["TypeScript", "Next.js"],
    href: "https://github.com/JustFossa/swiftnote",
  },
];
```

## Deploying

The easiest path is [Vercel](https://vercel.com): push this folder to a GitHub
repo and import it, or run `vercel` from the project root. Any host that
supports Next.js will work.
