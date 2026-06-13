// -----------------------------------------------------------------------------
// Central site content. Edit the values here to update the whole site.
// -----------------------------------------------------------------------------

export type IconName = "mail" | "github" | "linkedin" | "instagram";

export interface SocialLink {
	label: string;
	href: string;
	handle: string;
	icon: IconName;
}

export interface Fact {
	label: string;
	value: string;
}

export const site = {
	name: "Marek Paňko",
	handle: "JustFossa",
	role: "Full-Stack Software Engineer",
	location: "Ústí nad Labem, Czechia",
	availability: "Open to select freelance & collaboration",

	// Hero
	tagline: "I design and ship software, end to end.",
	heroIntro:
		"I build fast, high-converting websites and web apps that turn visitors into customers — backed by clean, reliable engineering. Full-stack, from first pixel to production.",

	// Short client-facing value props shown in the hero
	valueProps: ["High-converting design", "Fast, SEO-ready builds", "Built to scale"],

	// About — each string is its own paragraph
	bio: [
		"I'm Marek, a full-stack software engineer with more than five years spent building products from the first line of code to production. I help businesses turn ideas into fast, high-converting websites and web apps — software that looks sharp, loads quickly, and actually drives results.",
		"My work spans the whole stack: crafting interfaces in Next.js and React, designing APIs and services in Go and Node.js, and modeling data with PostgreSQL and Prisma. I'm equally comfortable owning architecture decisions and sweating the small details of a UI.",
		"Today I lead engineering as CEO of Asuna Labs and build software at Ideacomp s.r.o. When I'm not shipping, I'm usually digging into something new — most recently security and agentic AI.",
	],

	facts: [
		{ label: "Based in", value: "Ústí nad Labem, CZ" },
		{ label: "Focus", value: "Full-stack web & infrastructure" },
		{ label: "Currently", value: "CEO @ Asuna Labs · Dev @ Ideacomp" },
		{ label: "Experience", value: "5+ years shipping software" },
	] as Fact[],

	metaDescription:
		"Marek Paňko (JustFossa) is a full-stack software engineer building fast, reliable web products with Next.js, Go, and Node.js.",

	links: [
		{
			label: "Email",
			href: "mailto:panko.marek@icloud.com",
			handle: "panko.marek@icloud.com",
			icon: "mail",
		},
		{
			label: "GitHub",
			href: "https://github.com/justfossa",
			handle: "@justfossa",
			icon: "github",
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/justfossa/",
			handle: "in/justfossa",
			icon: "linkedin",
		},
		{
			label: "Instagram",
			href: "https://instagram.com/marekk.panko",
			handle: "@marekk.panko",
			icon: "instagram",
		},
	] as SocialLink[],
} as const;

export const navItems = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
] as const;
