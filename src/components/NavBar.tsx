import { useState } from "react";
import { navigationLinks, personalInfo } from "@/data/portfolioData";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="nav-elevated flex items-center justify-between bg-background/80 px-4 py-2 backdrop-blur dark:border-white/20">
        <a href="#hero" className="headline-accent font-semibold">{personalInfo.nome}</a>
        <button
          className="shrink-0 rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 sm:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
        >
          Menu
        </button>
        <ul className="hidden gap-4 sm:flex">
          {navigationLinks.map((l) => (
            <li key={l.href}>
              <a className="nav-link rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="mx-auto mt-2 max-w-6xl rounded-2xl border border-black/10 bg-background p-2 shadow dark:border-white/20 sm:hidden">
          {navigationLinks.map((l) => (
            <li key={l.href}>
              <a
                className="nav-link block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
