"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-background/0"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="font-display text-lg tracking-tight transition-opacity hover:opacity-70"
        >
          {site.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-content flex-col px-6">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-border last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-mono text-sm uppercase tracking-widest text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
