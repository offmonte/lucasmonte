import Image from "next/image";
import { projetos } from "@/data/portfolioData";
import Modal from "@/components/Modal";
import { useMemo, useState } from "react";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [all, setAll] = useState(false);
  const lista = useMemo(() => (all ? projetos : projetos.slice(0, 4)), [all]);
  const ativo = openIndex !== null ? lista[openIndex] : null;

  return (
    <section id="projetos" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between">
        <h2 className="headline-accent text-2xl font-semibold">Projetos</h2>
        <button
          onClick={() => setAll((s) => !s)}
          className="chip rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          {all ? "Mostrar menos" : "Mostrar todos"}
        </button>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((p, idx) => (
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
            <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-t-xl -mt-4 -mx-4">
              <Image src={ativo.imagem} alt={ativo.titulo} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-accent">{ativo.titulo}</h2>
              <p className="font-medium mb-4">{ativo.resumo}</p>
              <p className="mb-6">{ativo.descricao}</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {Object.entries(ativo.links).map(([platform, url]) => (
                  url ? (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-medium py-2 px-4 rounded-md btn-accent"
                    >
                      {platform}
                    </a>
                  ) : null
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
