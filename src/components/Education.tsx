import Image from "next/image";
import { graduacao } from "@/data/education";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Education() {
  const [open, setOpen] = useState(false);
  return (
    <section id="graduacao" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Graduação</h2>
      <div className="mt-6 rounded-2xl border border-black/10 bg-background p-5 shadow-sm dark:border-white/20">
        <h3 className="text-lg font-medium">{graduacao.curso}</h3>
        <p className="text-black/70 dark:text-white/70">{graduacao.instituicao} • {graduacao.periodo}</p>
        <p className="mt-3 text-black/80 dark:text-white/80">{graduacao.descricao}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {graduacao.tecnologias.map((t) => (
            <span key={t} className="rounded-full border border-black/10 px-2 py-0.5 text-xs dark:border-white/20">{t}</span>
          ))}
        </div>
        {graduacao.diploma && (
          <button
            onClick={() => setOpen(true)}
            className="mt-4 rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            Ver diploma
          </button>
        )}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} ariaLabel="Diploma">
        {graduacao.diploma && (
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-lg border border-black/10 dark:border-white/20">
            <Image src={graduacao.diploma} alt="Diploma" fill className="object-contain p-6 dark:invert" />
          </div>
        )}
      </Modal>
    </section>
  );
}
