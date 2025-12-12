import { contatoInfo } from "@/data/portfolioData";

export default function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = data.get("nome");
    const email = data.get("email");
    const mensagem = data.get("mensagem");
    const subject = encodeURIComponent(`Contato do portfólio - ${nome}`);
    const body = encodeURIComponent(`${mensagem}\n\n${nome} - ${email}`);
    window.location.href = `mailto:${contatoInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title text-2xl font-semibold">Contato</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {/* Formulário */}
        <form onSubmit={onSubmit} className="card-elevated rounded-2xl border border-black/10 bg-background p-6 shadow-sm dark:border-white/20">
          <h3 className="text-xl font-bold">Envie uma mensagem</h3>
          <div className="mt-4 grid gap-3">
            <label className="grid gap-1 text-sm">
              <span>Seu nome</span>
              <input name="nome" placeholder="Seu nome" required className="field-focus rounded-md border border-black/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:border-white/20 dark:focus:ring-white/20" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Seu e-mail</span>
              <input type="email" name="email" placeholder="Seu e-mail" required className="field-focus rounded-md border border-black/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:border-white/20 dark:focus:ring-white/20" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Sua mensagem</span>
              <textarea name="mensagem" placeholder="Escreva sua mensagem" required rows={5} className="field-focus rounded-md border border-black/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:border-white/20 dark:focus:ring-white/20" />
            </label>
            <button className="cta-primary mt-2 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-background hover:opacity-90">
              Enviar Mensagem
            </button>
          </div>
        </form>

        {/* Informações */}
        <div className="card-elevated rounded-2xl border border-black/10 bg-background p-6 shadow-sm dark:border-white/20">
          <h3 className="text-xl font-bold">Informações de Contato</h3>
          <ul className="mt-6 space-y-5">
            <li>
              <div className="text-base font-bold text-accent mb-1.5">E-mail</div>
              <a className="text-base hover:underline text-black/80 dark:text-white/80" href={`mailto:${contatoInfo.email}`}>{contatoInfo.email}</a>
            </li>
            <li>
              <div className="text-base font-bold text-accent mb-1.5">Telefone</div>
              <a className="text-base hover:underline text-black/80 dark:text-white/80" href={`tel:${contatoInfo.phone}`}>{contatoInfo.phone}</a>
            </li>
            <li>
              <div className="text-base font-bold text-accent mb-1.5">Localização</div>
              <span className="text-base text-black/80 dark:text-white/80">{contatoInfo.location}</span>
            </li>
          </ul>

          <div className="mt-7">
            <div className="text-base font-bold text-accent mb-3">Redes Sociais</div>
            <div className="flex flex-wrap gap-2">
              <a className="btn-accent-2 rounded-md px-3 py-2" href={contatoInfo.socialLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn-accent rounded-md px-3 py-2" href={contatoInfo.socialLinks.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn-accent-2 rounded-md px-3 py-2" href={contatoInfo.socialLinks.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
