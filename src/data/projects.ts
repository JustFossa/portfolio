export interface Project {
  name: string;
  description: string;
  tech: string[];
  demo?: string; // live, deployed site
  source?: string; // GitHub repository
}

export const projects: Project[] = [
  {
    name: "iptools",
    description:
      "A powerful toolkit for inspecting any IP address — geolocation, network and provider details, and more, in a clean and fast interface.",
    tech: ["Next.js", "TypeScript", "Docker"],
    source: "https://github.com/JustFossa/iptools",
  },
  {
    name: "swiftnote",
    description:
      "Create and share self-destructing notes with ease — private by design, and gone the moment they've been read.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    source: "https://github.com/JustFossa/swiftnote",
  },
  {
    name: "sponsor",
    description:
      "A simple, lightweight and inviting alternative to GitHub Sponsors for accepting support from your community.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    source: "https://github.com/JustFossa/sponsor",
  },
];

export const githubUrl = "https://github.com/justfossa";
