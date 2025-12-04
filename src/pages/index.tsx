import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";

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
      <footer className="w-full px-4 py-10 bg-background">
        <div className="rounded-2xl border border-black/10 p-5 text-center text-sm text-black/70 dark:border-white/20 dark:text-white/70">
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
