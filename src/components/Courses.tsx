import Image from "next/image";
import { cursos } from "@/data/courses";
import Modal from "@/components/Modal";
import { useMemo, useState } from "react";

const TAGS = ["Frontend", "Backend", "IA"] as const;

export default function Courses() {
  const [tag, setTag] = useState<string | null>(null);
  const [openImg, setOpenImg] = useState<string | null>(null);
  const lista = useMemo(() => (tag ? cursos.filter((c) => c.tags.includes(tag)) : cursos), [tag]);

  return (
    <section id="cursos" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Cursos e Certificados</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setTag(null)}
          className={`rounded-full border px-3 py-1 text-sm ${tag === null ? "bg-foreground text-background" : "border-black/10 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"}`}
        >
          Todos
        </button>
        {TAGS.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`rounded-full border px-3 py-1 text-sm ${tag === t ? "bg-foreground text-background" : "border-black/10 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((c) => (
          <article key={c.id} className="rounded-2xl border border-black/10 bg-background p-5 shadow-sm dark:border-white/20">
            <header className="flex items-center justify-between gap-3">
              <div>
                <h3 className="font-medium">{c.curso}</h3>
                <p className="text-sm text-black/70 dark:text-white/70">{c.plataforma}</p>
              </div>
              {c.certificado && (
                <button
                  onClick={() => setOpenImg(c.certificado!)}
                  className="rounded-md border border-black/10 px-3 py-1 text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
                >
                  Certificado
                </button>
              )}
            </header>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full border border-black/10 px-2 py-0.5 text-xs dark:border-white/20">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <Modal open={!!openImg} onClose={() => setOpenImg(null)} ariaLabel="Imagem do certificado">
        {openImg && (
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-lg border border-black/10 dark:border-white/20">
            <Image src={openImg} alt="Certificado" fill className="object-contain p-6 dark:invert" />
          </div>
        )}
      </Modal>
    </section>
  );
}
