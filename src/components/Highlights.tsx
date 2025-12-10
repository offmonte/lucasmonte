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
        <h2 className="section-title text-2xl font-semibold">Destaques</h2>
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

      <Modal open={!!ativo} onClose={() => setOpenIndex(null)} ariaLabel="Detalhe do projeto" maxWidth="lg:max-w-[40vw]">
        {ativo && (
          <div>
            <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-t-xl">
              <Image src={ativo.imagem} alt={ativo.titulo} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-accent">{ativo.titulo}</h2>
              <p className="font-medium mb-4">{ativo.resumo}</p>
              <p className="mb-6">{ativo.descricao}</p>
              <div className="flex flex-wrap gap-3 justify-center">
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
          </div>
        )}
      </Modal>
    </section>
  );
}
