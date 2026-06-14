import type { Locale } from "./config";

export type NavKey = "services" | "projects" | "about" | "contact";

export type SectionKey =
  | "services"
  | "caseStudies"
  | "process"
  | "projects"
  | "about"
  | "skills"
  | "experience"
  | "contact";

interface UiStrings {
  nav: Record<NavKey, string>;
  sections: Record<SectionKey, string>;
  hero: {
    audit: string;
    seeWork: string;
  };
  projects: {
    featured: string;
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
  audit: {
    heading: string;
    body: string;
    cta: string;
    reassurance: string;
    subject: string;
    mailBody: string;
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
  notFound: {
    title: string;
    body: string;
    backHome: string;
  };
}

export const ui: Record<Locale, UiStrings> = {
  cs: {
    nav: {
      services: "Služby",
      projects: "Práce",
      about: "O mně",
      contact: "Kontakt",
    },
    sections: {
      services: "Co pro vás udělám",
      caseStudies: "Vybrané výsledky",
      process: "Jak to probíhá",
      projects: "Vybrané práce",
      about: "O mně",
      skills: "Dovednosti",
      experience: "Zkušenosti",
      contact: "Kontakt",
    },
    hero: {
      audit: "Získat bezplatný audit webu",
      seeWork: "Podívat se na práci",
    },
    projects: {
      featured: "Vlajková loď",
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
    audit: {
      heading: "Nevíte, kde váš web ztrácí zákazníky?",
      body: "Zdarma se podívám na váš web a pošlu vám 3–5 konkrétních věcí, které můžete zlepšit hned. Bez závazků.",
      cta: "Chci bezplatný audit",
      reassurance: "Odpověď do 24 hodin · Žádné závazky",
      subject: "Žádost o bezplatný audit webu",
      mailBody:
        "Dobrý den Marku,\n\nrád/a bych bezplatný audit webu.\n\nNaše firma: \nWeb (pokud máme): \nCo bychom chtěli zlepšit: \n\nDíky!",
    },
    contact: {
      heading: "Pojďme získat víc zákazníků pro vaši firmu.",
      body: "Napište mi pár slov o své firmě nebo webu — ozvu se do 24 hodin s bezplatným auditem a návrhem dalších kroků.",
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
    notFound: {
      title: "Stránka nenalezena",
      body: "Zdá se, že tahle adresa neexistuje — možná byla přesunuta nebo odstraněna. Pojďme vás vrátit zpět na správné místo.",
      backHome: "Zpět na úvod",
    },
  },
  en: {
    nav: {
      services: "Services",
      projects: "Work",
      about: "About",
      contact: "Contact",
    },
    sections: {
      services: "What I build for you",
      caseStudies: "Selected results",
      process: "How it works",
      projects: "Selected Work",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      audit: "Get a free website audit",
      seeWork: "See my work",
    },
    projects: {
      featured: "Flagship",
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
    audit: {
      heading: "Not sure where your site is losing customers?",
      body: "I'll review your site for free and send you 3–5 concrete things you can improve right away. No strings attached.",
      cta: "Get my free audit",
      reassurance: "Reply within 24 hours · No obligation",
      subject: "Free website audit request",
      mailBody:
        "Hi Marek,\n\nI'd like a free website audit.\n\nMy business: \nCurrent site (if any): \nWhat we'd like to improve: \n\nThanks!",
    },
    contact: {
      heading: "Let's get your business more customers.",
      body: "Tell me a bit about your business or site — I'll get back within 24 hours with a free audit and suggested next steps.",
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
    notFound: {
      title: "Page not found",
      body: "Looks like this page doesn't exist — it may have been moved or removed. Let's get you back on track.",
      backHome: "Back to home",
    },
  },
};
