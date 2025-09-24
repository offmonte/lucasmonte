import Image from "next/image";
import { habilidades } from "@/data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Habilidades</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {habilidades.map((h) => (
          <article
            key={h.id}
            className="group rounded-2xl border border-black/10 bg-background p-5 shadow-sm transition hover:shadow-md dark:border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-md border border-black/10 dark:border-white/20">
                <Image src={h.icon} alt="Ícone" fill className="object-contain p-1 dark:invert" />
              </div>
              <h3 className="font-medium">{h.titulo}</h3>
              <span className="ml-auto rounded-full border border-black/10 px-2 py-0.5 text-xs dark:border-white/20">
                {h.nivel}
              </span>
            </div>
            <p className="mt-3 text-sm text-black/70 dark:text-white/70">{h.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
