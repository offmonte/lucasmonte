import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";
import Courses from "@/components/Courses";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <ProgressBar />
      <NavBar />
      <main className="px-4">
        <Hero />
        <About />
        <Skills />
        <Highlights />
        <Projects />
        <Courses />
        <Education />
        <Contact />
      </main>
      <footer className="mx-auto my-10 max-w-6xl px-4">
        <div className="rounded-2xl border border-black/10 bg-background p-5 text-center text-sm text-black/70 dark:border-white/20 dark:text-white/70">
          <p>© {new Date().getFullYear()} Lucas Monte. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a className="hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
