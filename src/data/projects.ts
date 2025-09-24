export interface Projeto {
  id: string;
  titulo: string;
  resumo: string;
  descricao: string;
  imagem: string; // public path
  tags: string[];
  github?: string;
  link?: string;
}

export const projetos: Projeto[] = [
  {
    id: "dashboard-vendas",
    titulo: "Dashboard de Vendas",
    resumo: "Visualização interativa de métricas comerciais.",
    descricao:
      "Aplicação com gráficos, filtros dinâmicos e exportação de relatórios. Implementada com Next.js, React 19 e Tailwind.",
    imagem: "/globe.svg",
    tags: ["Frontend", "DataViz"],
    github: "https://github.com/",
    link: "https://example.com",
  },
  {
    id: "portfolio",
    titulo: "Portfólio Interativo",
    resumo: "Site pessoal com animações, modais e rolagem suave.",
    descricao:
      "Layout responsivo, seções ancoradas e modais acessíveis. Integração futura com CMS para conteúdo dinâmico.",
    imagem: "/window.svg",
    tags: ["Frontend", "UI/UX"],
    github: "https://github.com/",
  },
  {
    id: "ia-helper",
    titulo: "Assistente IA",
    resumo: "Ferramenta web para auxiliar fluxos de trabalho.",
    descricao:
      "Componentização, estados complexos e otimizações de renderização com React Server Components.",
    imagem: "/file.svg",
    tags: ["IA", "Ferramentas"],
  },
  {
    id: "landing-produto",
    titulo: "Landing de Produto",
    resumo: "Página de marketing com testes A/B.",
    descricao:
      "SEO, performance e experimentação. Construída com boas práticas de acessibilidade.",
    imagem: "/next.svg",
    tags: ["Marketing"],
  },
  {
    id: "catalogo",
    titulo: "Catálogo Responsivo",
    resumo: "Listagem com filtros e paginação.",
    descricao:
      "Grid fluido, filtros por tags e modais de detalhe. Pensado para mobile-first.",
    imagem: "/globe.svg",
    tags: ["Frontend", "UI"],
  },
];
