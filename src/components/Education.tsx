import Image from "next/image";
import { educacao } from "@/data/portfolioData";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Education() {
  const [open, setOpen] = useState(false);
  return (
    <section id="graduacao" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <h2 className="headline-accent text-2xl font-semibold">Graduação</h2>
      <div className="card-elevated mt-6 rounded-2xl border border-black/10 bg-background p-5 shadow-sm dark:border-white/20">
        <h3 className="text-lg font-medium">{educacao.course}</h3>
        <p className="text-black/70 dark:text-white/70">{educacao.institution} • {educacao.period}</p>
        <p className="mt-3 text-black/80 dark:text-white/80">{educacao.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {educacao.technologies.map((t) => (
            <span key={t} className="rounded-full border border-black/10 px-2 py-0.5 text-xs dark:border-white/20">{t}</span>
          ))}
        </div>
        {educacao.diplomaUrl && (
          <button
            onClick={() => setOpen(true)}
            className="chip mt-4 rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            Ver diploma
          </button>
        )}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} ariaLabel="Diploma">
        {educacao.diplomaUrl && (
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-lg border border-black/10 dark:border-white/20">
            <Image src={educacao.diplomaUrl} alt="Diploma" fill className="object-contain p-6" />
          </div>
        )}
      </Modal>
    </section>
  );
}
