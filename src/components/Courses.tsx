import Image from "next/image";
import { cursos } from "@/data/portfolioData";
import Modal from "@/components/Modal";
import { useMemo, useState } from "react";

export default function Courses() {
  const [tag, setTag] = useState<string | null>(null);
  const [openImg, setOpenImg] = useState<string | null>(null);
  const [openFilter, setOpenFilter] = useState(false);

  const allTags = useMemo(
    () => Array.from(new Set(cursos.flatMap((c) => c.tags))).sort(),
    []
  );
  const lista = useMemo(
    () => (tag ? cursos.filter((c) => c.tags.includes(tag)) : cursos),
    [tag]
  );

  return (
    <section id="courses" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="headline-accent text-2xl font-semibold">Cursos e Certificados</h2>
        <button
          onClick={() => setOpenFilter(true)}
          className="chip rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Filtrar
        </button>
      </div>

      {tag && (
        <div className="mt-3 text-sm text-black/70 dark:text-white/70">
          Filtrando por: <span className="font-medium">{tag}</span>
          <button
            onClick={() => setTag(null)}
            className="ml-3 underline"
          >
            Limpar
          </button>
        </div>
      )}

      {/* Lista de cursos */}
      <div className="mt-6 max-h-[28rem] overflow-y-auto pr-1">
        <ul className="space-y-3">
          {lista.map((c) => (
            <li key={c.curso} className="card-elevated rounded-2xl border border-black/10 bg-background p-5 shadow-sm dark:border-white/20">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{c.curso}</h3>
                  <p className="text-sm text-black/70 dark:text-white/70">{c.plataforma}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full border border-black/10 px-2 py-0.5 text-xs dark:border-white/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {c.certificado && (
                  <button
                    onClick={() => setOpenImg(c.certificado)}
                    className="chip rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
                  >
                    Certificado
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal de filtros */}
      <Modal open={openFilter} onClose={() => setOpenFilter(false)} ariaLabel="Filtros de cursos">
        <div className="p-6">
          <h3 className="text-lg font-semibold">Filtrar por tags</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setTag(null);
                setOpenFilter(false);
              }}
              className={`chip rounded-full border px-3 py-1 text-sm ${tag === null ? "chip-active bg-foreground text-background" : "border-black/10 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"}`}
            >
              Todos
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTag(t);
                  setOpenFilter(false);
                }}
                className={`chip rounded-full border px-3 py-1 text-sm ${tag === t ? "chip-active bg-foreground text-background" : "border-black/10 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </Modal>

      {/* Modal do certificado */}
      <Modal open={!!openImg} onClose={() => setOpenImg(null)} ariaLabel="Imagem do certificado">
        {openImg && (
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-lg border border-black/10 dark:border-white/20">
            <Image src={openImg} alt="Certificado" fill className="object-contain p-6" />
          </div>
        )}
      </Modal>
    </section>
  );
}
