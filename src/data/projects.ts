export interface Project {
  name: string;
  description: string;
  tech: string[];
  href?: string;
}

// Projects are intentionally left empty for now.
// When you're ready, add entries to the array below — the Projects section
// will render them automatically. Your pinned GitHub repos are pre-filled
// as ready-to-use examples; just uncomment the ones you want to show.
export const projects: Project[] = [
  // {
  //   name: "swiftnote",
  //   description: "Create and share self-destructing notes with ease.",
  //   tech: ["TypeScript", "Next.js"],
  //   href: "https://github.com/JustFossa/swiftnote",
  // },
  // {
  //   name: "sponsor",
  //   description:
  //     "A simple, lightweight and inviting alternative to GitHub Sponsors.",
  //   tech: ["TypeScript"],
  //   href: "https://github.com/JustFossa/sponsor",
  // },
  // {
  //   name: "sentinel",
  //   description: "Security-focused tooling.",
  //   tech: ["Python"],
  //   href: "https://github.com/JustFossa/sentinel",
  // },
  // {
  //   name: "justfossa.app",
  //   description: "My own little corner of the internet.",
  //   tech: ["TypeScript", "Next.js"],
  //   href: "https://github.com/JustFossa/justfossa.app",
  // },
];

export const githubUrl = "https://github.com/justfossa";
