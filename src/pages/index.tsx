import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";
import { contatoInfo } from "@/data/portfolioData";

export default function Home() {
  return (
    <div>
      <ProgressBar />
      <NavBar />
      <main className="px-4">
        <Hero />
        <About />
        <Highlights />
        <Projects />
        <Courses />
        <Contact />
      </main>
      <footer className="w-full bg-background py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center text-sm text-black/70 dark:text-white/70">
            <p className="mb-4">
              © {new Date().getFullYear()} Lucas Monte Verde · Desenvolvedor Fullstack
            </p>
            <p className="mb-4">
              Feito com Next.js, React, TypeScript, Tailwind CSS e muito ☕
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <a className="hover:text-accent hover:underline" href={contatoInfo.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span>·</span>
              <a className="hover:text-accent hover:underline" href={contatoInfo.socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
              <span>·</span>
              <a className="hover:text-accent hover:underline" href={`mailto:${contatoInfo.email}`}>Email</a>
              <span>·</span>
              <a className="hover:text-accent hover:underline" href={`https://wa.me/${contatoInfo.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
