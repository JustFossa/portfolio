import type { Localized } from "@/i18n/config";

export type ServiceIcon = "website" | "app" | "growth";

export interface Service {
  icon: ServiceIcon;
  title: Localized;
  description: Localized;
}

export const services: Service[] = [
  {
    icon: "website",
    title: { cs: "Firemní weby", en: "Business websites" },
    description: {
      cs: "Rychlé, moderní weby, které skvěle vypadají na mobilu i počítači a jsou postavené tak, aby z návštěvníků dělaly platící zákazníky.",
      en: "Fast, modern websites that look great on phone and desktop and are built to turn visitors into paying customers.",
    },
  },
  {
    icon: "app",
    title: { cs: "Aplikace a software na míru", en: "Custom web apps & software" },
    description: {
      cs: "Rezervační a objednávkové systémy, interní nástroje, dashboardy a automatizace, které vám šetří čas i peníze.",
      en: "Booking and ordering systems, internal tools, dashboards and automation that save you time and money.",
    },
  },
  {
    icon: "growth",
    title: { cs: "Redesign, rychlost a SEO", en: "Redesign, speed & SEO" },
    description: {
      cs: "Zrychlím a vyladím váš stávající web, aby se lépe umisťoval ve vyhledávání a přinášel víc poptávek.",
      en: "I speed up and refine your existing site so it ranks higher in search and brings in more enquiries.",
    },
  },
];
