import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="sobre" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title text-2xl font-semibold">Sobre Mim</h2>
      <div className="mt-6 grid items-center gap-8 sm:grid-cols-2">
        <div className="media-frame relative aspect-square w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/20">
          <Image src="/placeholder.svg" alt="Foto de perfil" fill className="object-cover" />
        </div>
        <div className="text-black/80 dark:text-white/80">
          <p>
            {personalInfo.sobre.paragrafo1}
          </p>
          <p className="mt-4">
            {personalInfo.sobre.paragrafo2}
          </p>
        </div>
      </div>
    </section>
  );
}
