export default function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = data.get("nome");
    const email = data.get("email");
    const mensagem = data.get("mensagem");
    const subject = encodeURIComponent(`Contato do portfólio - ${nome}`);
    const body = encodeURIComponent(`${mensagem}\n\n${nome} - ${email}`);
    window.location.href = `mailto:lucasmonte@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="section-offset mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Contato</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 bg-background p-5 shadow-sm dark:border-white/20">
          <div className="grid gap-3">
            <label className="grid gap-1 text-sm">
              <span>Nome</span>
              <input name="nome" required className="rounded-md border border-black/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:border-white/20 dark:focus:ring-white/20" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Email</span>
              <input type="email" name="email" required className="rounded-md border border-black/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:border-white/20 dark:focus:ring-white/20" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Mensagem</span>
              <textarea name="mensagem" required rows={5} className="rounded-md border border-black/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:border-white/20 dark:focus:ring-white/20" />
            </label>
            <button className="mt-2 rounded-md bg-foreground px-4 py-2 text-background hover:opacity-90">Enviar</button>
          </div>
        </form>
        <div className="rounded-2xl border border-black/10 bg-background p-5 shadow-sm dark:border-white/20">
          <h3 className="font-medium">Informações</h3>
          <ul className="mt-3 space-y-2 text-black/80 dark:text-white/80">
            <li>Email: <a className="underline" href="mailto:lucasmonte@example.com">lucasmonte@example.com</a></li>
            <li>Telefone: <a className="underline" href="tel:+550000000000">+55 00 0000-0000</a></li>
            <li>Localização: Brasil</li>
            <li>LinkedIn: <a className="underline" href="https://linkedin.com/" target="_blank" rel="noreferrer">linkedin.com</a></li>
            <li>GitHub: <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">github.com</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
