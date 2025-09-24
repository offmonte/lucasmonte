import { habilidades } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="habilidades" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <h2 className="headline-accent text-2xl font-semibold">Habilidades</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {habilidades.map((h, i) => (
          <article
            key={`${h.title}-${i}`}
            className="group card-elevated hover-lift rounded-2xl border border-black/10 bg-background p-5 shadow-sm transition hover:shadow-md dark:border-white/20"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 text-blue-600 dark:border-white/20">
                <i className={h.icon} aria-hidden />
              </div>
              <h3 className="font-medium">{h.title}</h3>
              <span className="ml-auto rounded-full border border-black/10 px-2 py-0.5 text-xs dark:border-white/20">
                {h.badge}
              </span>
            </div>
            <p className="mt-3 text-sm text-black/70 dark:text-white/70">{h.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
