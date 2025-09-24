import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="section-offset mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center text-center">
      <h1 className="headline-accent text-4xl font-bold sm:text-6xl">{personalInfo.nome}</h1>
      <p className="mt-4 text-lg text-black/70 dark:text-white/70">{personalInfo.titulo} • {personalInfo.subtitulo}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a href="#contato" className="cta-primary rounded-full bg-foreground px-5 py-2 text-background hover:opacity-90">Contato</a>
        <a href="#projetos" className="cta-secondary rounded-full border border-black/10 px-5 py-2 hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10">Ver Projetos</a>
      </div>
    </section>
  );
}
