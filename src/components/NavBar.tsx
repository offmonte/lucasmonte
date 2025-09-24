import { useState } from "react";

const LINKS = [
  { href: "#sobre", label: "Sobre Mim" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#destaques", label: "Destaques" },
  { href: "#projetos", label: "Projetos" },
  { href: "#cursos", label: "Cursos" },
  { href: "#graduacao", label: "Graduação" },
  { href: "#contato", label: "Contato" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-1 left-0 right-0 z-40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/10 bg-background/80 px-4 py-2 backdrop-blur dark:border-white/20">
        <a href="#hero" className="font-semibold">Lucas Monte</a>
        <button
          className="shrink-0 rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 sm:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
        >
          Menu
        </button>
        <ul className="hidden gap-4 sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a className="rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="mx-auto mt-2 max-w-6xl rounded-2xl border border-black/10 bg-background p-2 shadow dark:border-white/20 sm:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                className="block rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
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
