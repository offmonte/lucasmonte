import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Sobre Mim</h2>
      <div className="mt-6 grid items-center gap-8 sm:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/20">
          <Image src="/next.svg" alt="Foto de perfil" fill className="object-contain p-8 dark:invert" />
        </div>
        <div className="text-black/80 dark:text-white/80">
          <p>
            Sou apaixonado por criar interfaces elegantes e experiências digitais acessíveis. Gosto de transformar ideias em produtos reais com foco em clareza e performance.
          </p>
          <p className="mt-4">
            Tenho experiência com React, Next.js, TypeScript e CSS moderno. Trabalho com componentização, testes e boas práticas para entregar soluções escaláveis.
          </p>
        </div>
      </div>
    </section>
  );
}
