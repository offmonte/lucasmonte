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
          className="chip rounded-md border px-3 py-1 text-sm transition"
        >
          {all ? "Mostrar menos" : "Mostrar todos"}
        </button>
      </div>

      {/* Grid de cards */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((p, idx) => (
          <button
            key={`${p.titulo}-${idx}`}
            onClick={() => setOpenIndex(idx)}
            className="group rounded-2xl border text-left shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-t-2xl border-b">
              <Image src={p.imagem} alt={p.titulo} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{p.titulo}</h3>
              <p className="mt-2 text-sm">{p.resumo}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal do projeto */}
      <Modal open={!!ativo} onClose={() => setOpenIndex(null)} ariaLabel="Detalhe do projeto">
        {ativo && (
          <div className="relative rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
            {/* Botão de fechar */}
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute top-4 right-4 text-3xl z-10 cursor-pointer"
            >
              ×
            </button>

            {/* Capa */}
            <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-t-lg">
              <Image src={ativo.imagem} alt={ativo.titulo} fill className="object-cover" />
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{ativo.titulo}</h2>
              <p className="font-medium mb-4">{ativo.resumo}</p>
              <p className="mb-6">{ativo.descricao}</p>

              {/* Links */}
              <div className="flex flex-wrap gap-3 justify-center">
                {Object.entries(ativo.links).map(([platform, url]) =>
                  url ? (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-medium py-2 px-4 rounded transition duration-300"
                    >
                      {platform}
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
