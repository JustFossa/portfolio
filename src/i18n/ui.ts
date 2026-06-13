import type { Locale } from "./config";

export type NavKey = "about" | "skills" | "experience" | "projects" | "contact";

interface UiStrings {
  nav: Record<NavKey, string>;
  sections: Record<NavKey, string>;
  hero: {
    viewWork: string;
    getInTouch: string;
  };
  projects: {
    liveDemo: string;
    code: string;
    seeMore: string;
    emptyHeading: string;
    emptyBody: string;
    browse: string;
  };
  experience: {
    certsTitle: string;
  };
  contact: {
    heading: string;
    body: string;
  };
  footer: {
    backToTop: string;
    builtWith: string;
  };
  a11y: {
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    switchLanguage: string;
  };
}

export const ui: Record<Locale, UiStrings> = {
  cs: {
    nav: {
      about: "O mně",
      skills: "Dovednosti",
      experience: "Zkušenosti",
      projects: "Projekty",
      contact: "Kontakt",
    },
    sections: {
      about: "O mně",
      skills: "Dovednosti",
      experience: "Zkušenosti",
      projects: "Vybrané práce",
      contact: "Kontakt",
    },
    hero: {
      viewWork: "Zobrazit práci",
      getInTouch: "Napsat mi",
    },
    projects: {
      liveDemo: "Živá ukázka",
      code: "Kód",
      seeMore: "Více na GitHubu",
      emptyHeading: "Pečlivě vybrané projekty jsou na cestě.",
      emptyBody: "Mezitím můj kód žije veřejně na GitHubu.",
      browse: "Otevřít GitHub",
    },
    experience: {
      certsTitle: "Licence a certifikace",
    },
    contact: {
      heading: "Pojďme vytvořit něco, co stojí za to vydat.",
      body: "Máte v hlavě projekt, volné místo k obsazení, nebo si jen chcete popovídat? Moje schránka je vždy otevřená.",
    },
    footer: {
      backToTop: "Nahoru",
      builtWith: "Vytvořeno s Next.js a Tailwind CSS",
    },
    a11y: {
      openMenu: "Otevřít menu",
      closeMenu: "Zavřít menu",
      toggleTheme: "Přepnout barevné téma",
      switchLanguage: "Přepnout jazyk",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    sections: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Selected Work",
      contact: "Contact",
    },
    hero: {
      viewWork: "View work",
      getInTouch: "Get in touch",
    },
    projects: {
      liveDemo: "Live demo",
      code: "Code",
      seeMore: "See more on GitHub",
      emptyHeading: "A curated set of projects is on its way.",
      emptyBody: "In the meantime, my code lives in the open on GitHub.",
      browse: "Browse GitHub",
    },
    experience: {
      certsTitle: "Licenses & Certifications",
    },
    contact: {
      heading: "Let's build something worth shipping.",
      body: "Have a project in mind, a role to fill, or just want to talk shop? My inbox is always open.",
    },
    footer: {
      backToTop: "Back to top",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
    a11y: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toggleTheme: "Toggle color theme",
      switchLanguage: "Switch language",
    },
  },
};
