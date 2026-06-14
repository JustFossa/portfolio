"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import { auditMailto } from "@/lib/contact";
import { OrbArt } from "@/components/AbstractArt";
import { Reveal } from "@/components/Reveal";

export default function NotFound() {
	const { locale } = useLanguage();
	const strings = ui[locale];
	const auditHref = auditMailto(strings.audit.subject, strings.audit.mailBody);

	return (
		<main className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 md:px-10">
			{/* Decorative abstract art */}
			<div className="pointer-events-none absolute right-0 top-1/2 hidden aspect-square w-[460px] max-w-[46vw] -translate-y-1/2 select-none text-foreground opacity-[0.18] dark:opacity-[0.28] lg:block">
				<OrbArt className="h-full w-full" />
			</div>

			<div className="relative z-10 mx-auto w-full max-w-content">
				<Reveal>
					<p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
						Error 404
					</p>
				</Reveal>

				<Reveal delay={80}>
					<p className="mt-3 font-display leading-none tracking-tight text-foreground text-[26vw] md:text-[15rem]">
						404
					</p>
				</Reveal>

				<Reveal delay={160}>
					<h1 className="mt-6 font-display text-3xl tracking-tight md:text-4xl">
						{strings.notFound.title}
					</h1>
				</Reveal>

				<Reveal delay={220}>
					<p className="mt-4 max-w-md leading-relaxed text-muted">
						{strings.notFound.body}
					</p>
				</Reveal>

				<Reveal delay={300}>
					<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
						<Link
							href="/"
							className="group inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-background transition-transform duration-200 hover:-translate-y-0.5"
						>
							<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
							{strings.notFound.backHome}
						</Link>
					</div>
				</Reveal>
			</div>
		</main>
	);
}
