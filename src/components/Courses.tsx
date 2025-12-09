import Image from "next/image";
import { cursos } from "@/data/portfolioData";
import Modal from "@/components/Modal";
import { useMemo, useState } from "react";

export default function Courses() {
  const [selected, setSelected] = useState<string[]>([]);
  const [openImg, setOpenImg] = useState<string | null>(null);
  const [openFilter, setOpenFilter] = useState(false);

  const allTags = useMemo(
    () => Array.from(new Set(cursos.flatMap((c) => c.tags))).sort(),
    []
  );
  const lista = useMemo(
    () => (selected.length ? cursos.filter((c) => c.tags.some((t) => selected.includes(t))) : cursos),
    [selected]
  );

  return (
    <section id="courses" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="section-title text-2xl font-semibold">Cursos e Certificados</h2>
        <button
          onClick={() => setOpenFilter((s) => !s)}
          aria-expanded={openFilter}
          aria-controls="course-filters"
          className="chip rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 font-bold"
        >
          Filtrar
        </button>
      </div>

      {openFilter && (
        <div id="course-filters" className="mt-3 rounded-2xl border border-black/10 bg-background p-4 shadow-sm dark:border-white/20">
          <p className="text-sm text-black/70 dark:text-white/70 italic">Selecione uma ou mais tags. Serão mostrados cursos que contenham qualquer uma delas.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() =>
                  setSelected((prev) =>
                    prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
                  )
                }
                className={`chip rounded-full border px-3 py-1 text-sm ${selected.includes(t) ? "chip-active bg-foreground text-background" : "border-black/10 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-start">
            <button
              onClick={() => setSelected([])}
              className="chip rounded-md border border-red-500 text-red-600 hover:bg-red-500/10 dark:border-red-400 dark:text-red-400 font-bold"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      )}

      {/* Lista de cursos em contêiner estilizado */}
      <div className="mt-6 rounded-2xl border border-black/10 bg-background shadow-sm card-elevated overflow-hidden dark:border-white/20">
        <div className="flex items-center justify-between px-5 py-3 border-b border-black/10 dark:border-white/20">
          <p className="text-sm font-medium">
            {selected.length ? (
              <>
                Cursos — <span className="text-accent">{selected.join(", ")}</span>
              </>
            ) : (
              "Todos os Cursos"
            )} ({lista.length} certificados)
          </p>
        </div>
        <div className="max-h-[28rem] overflow-y-auto">
          <ul className="divide-y divide-black/10 dark:divide-white/20">
            {lista.map((c) => (
              <li key={c.curso} className="px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-foreground hover:underline cursor-default select-text">{c.curso}</h3>
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
                      className="chip rounded-md border border-accent text-accent px-3 py-1 text-sm hover:bg-black/5 font-bold"
                    >
                      Ver Certificado
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Modal do certificado */}
      <Modal open={!!openImg} onClose={() => setOpenImg(null)} ariaLabel="Imagem do certificado">
        {openImg && (
          <div className="relative w-full max-h-[75vh]">
            <Image src={openImg} alt="Certificado" fill className="object-contain" />
          </div>
        )}
      </Modal>
    </section>
  );
}
