import Image from "next/image";
import { projetos } from "@/data/projects";
import Modal from "@/components/Modal";
import { useMemo, useState } from "react";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [all, setAll] = useState(false);
  const lista = useMemo(() => (all ? projetos : projetos.slice(0, 4)), [all]);
  const ativo = projetos.find((p) => p.id === openId) || null;

  return (
    <section id="projetos" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Projetos</h2>
        <button
          onClick={() => setAll((s) => !s)}
          className="rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          {all ? "Mostrar menos" : "Mostrar todos"}
        </button>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((p) => (
          <button
            key={p.id}
            onClick={() => setOpenId(p.id)}
            className="group rounded-2xl border border-black/10 bg-background text-left shadow-sm transition hover:shadow-md dark:border-white/20"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-t-2xl border-b border-black/10 dark:border-white/20">
              <Image src={p.imagem} alt="Imagem do projeto" fill className="object-contain p-6 dark:invert" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{p.titulo}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.resumo}</p>
            </div>
          </button>
        ))}
      </div>

      <Modal open={!!ativo} onClose={() => setOpenId(null)} ariaLabel="Detalhe do projeto">
        {ativo && (
          <div>
            <div className="relative h-48 w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/20">
              <Image src={ativo.imagem} alt="Imagem do projeto" fill className="object-contain p-6 dark:invert" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{ativo.titulo}</h3>
            <p className="mt-2 text-black/80 dark:text-white/80">{ativo.descricao}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {ativo.github && (
                <a className="rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10" href={ativo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {ativo.link && (
                <a className="rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10" href={ativo.link} target="_blank" rel="noreferrer">
                  Acessar
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
