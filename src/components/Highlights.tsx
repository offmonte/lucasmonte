import Image from "next/image";
import { projetos } from "@/data/portfolioData";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Highlights() {
  const destaque = projetos.slice(0, 3);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ativo = openIndex !== null ? destaque[openIndex] : null;

  return (
    <section id="destaques" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between">
        <h2 className="headline-accent text-2xl font-semibold">Destaques</h2>
        <a href="#projetos" className="text-sm underline">Ver todos</a>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destaque.map((p, idx) => (
          <button
            key={`${p.titulo}-${idx}`}
            onClick={() => setOpenIndex(idx)}
            className="group card-elevated hover-lift rounded-2xl border border-black/10 bg-background text-left shadow-sm transition hover:shadow-md dark:border-white/20"
          >
            <div className="image-zoom relative h-40 w-full overflow-hidden rounded-t-2xl border-b border-black/10 dark:border-white/20">
              <Image src={p.imagem} alt={p.titulo} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{p.titulo}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.resumo}</p>
            </div>
          </button>
        ))}
      </div>

      <Modal open={!!ativo} onClose={() => setOpenIndex(null)} ariaLabel="Detalhe do projeto">
        {ativo && (
          <div>
            <div className="relative w-full overflow-hidden rounded-lg modal-hero aspect-[4/3] sm:aspect-square">
              <Image src={ativo.imagem} alt={ativo.titulo} fill className="object-contain p-8" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-accent">{ativo.titulo}</h3>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70">{ativo.resumo}</p>
            <p className="mt-2 text-black/80 dark:text-white/80">{ativo.descricao}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 border-t border-black/10 pt-4 dark:border-white/20">
              {Object.entries(ativo.links).map(([name, url]) =>
                url ? (
                  <a
                    key={name}
                    className="inline-block font-medium py-2 px-4 rounded-md btn-accent"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {name}
                  </a>
                ) : null
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
