export interface Project {
  titulo: string;
  imagem: string;
  resumo: string;
  descricao: string;
  links: { GitHub?: string; LinkedIn?: string; [key: string]: string | undefined };
}

export interface Course {
  curso: string;
  plataforma: string;
  tags: string[];
  certificado: string;
}

export interface Skill {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface Education {
  course: string;
  institution: string;
  period: string;
  description: string;
  technologies: string[];
  diplomaUrl: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: { linkedin: string; github: string };
}

export const projetos: Project[] = [
  {
    titulo: "Green Light",
    imagem: "/placeholder.svg",
    resumo: "Aplicação de gestão de projetos sustentáveis com dashboard interativo",
    descricao:
      "Sistema completo para gerenciamento de projetos sustentáveis, incluindo dashboard com métricas em tempo real, sistema de autenticação, integração com APIs externas para dados ambientais e relatórios personalizáveis. Desenvolvido com React, Node.js e PostgreSQL.",
    links: {
      GitHub: "https://github.com/lucasmonte",
      LinkedIn: "https://linkedin.com/in/lucasmonte",
    },
  },
  {
    titulo: "Blue Horizon",
    imagem: "/placeholder.svg",
    resumo: "Plataforma de e-commerce com foco em produtos marinhos e sustentabilidade",
    descricao:
      "E-commerce completo especializado em produtos marinhos sustentáveis. Conta com carrinho de compras, sistema de pagamentos, painel administrativo, gestão de estoque e sistema de avaliações. Built with Next.js, Stripe e MongoDB.",
    links: {
      GitHub: "https://github.com/lucasmonte",
      LinkedIn: "https://linkedin.com/in/lucasmonte",
    },
  },
  {
    titulo: "Tech Portfolio",
    imagem: "/placeholder.svg",
    resumo: "Portfolio responsivo com animações avançadas e modo escuro",
    descricao:
      "Portfolio pessoal desenvolvido com foco em performance e experiência do usuário. Inclui animações suaves, modo escuro/claro, formulário de contato funcional e otimização para SEO. Desenvolvido com React, TypeScript e Tailwind CSS.",
    links: {
      GitHub: "https://github.com/lucasmonte",
      LinkedIn: "https://linkedin.com/in/lucasmonte",
    },
  },
  {
    titulo: "Smart Analytics",
    imagem: "/placeholder.svg",
    resumo: "Sistema de análise de dados com IA para insights empresariais",
    descricao:
      "Plataforma de business intelligence com machine learning integrado para análise preditiva e geração de relatórios automatizados. Desenvolvido com Python, FastAPI e React.",
    links: {
      GitHub: "https://github.com/lucasmonte",
      LinkedIn: "https://linkedin.com/in/lucasmonte",
    },
  },
  {
    titulo: "EduConnect",
    imagem: "/placeholder.svg",
    resumo: "Plataforma educacional com videoconferência e gamificação",
    descricao:
      "Sistema completo de ensino à distância com salas virtuais, sistema de gamificação, avaliações online e acompanhamento de progresso. Built with C# ASP.NET Core e React.",
    links: {
      GitHub: "https://github.com/lucasmonte",
      LinkedIn: "https://linkedin.com/in/lucasmonte",
    },
  },
  {
    titulo: "FinanceTracker",
    imagem: "/placeholder.svg",
    resumo: "App de controle financeiro pessoal com análise de gastos",
    descricao:
      "Aplicativo móvel e web para gestão financeira pessoal com categorização automática de gastos, metas de economia e relatórios detalhados. Desenvolvido com React Native e Node.js.",
    links: {
      GitHub: "https://github.com/lucasmonte",
      LinkedIn: "https://linkedin.com/in/lucasmonte",
    },
  },
  {
    titulo: "MedConnect",
    imagem: "/placeholder.svg",
    resumo: "Sistema de agendamento médico com telemedicina",
    descricao:
      "Plataforma completa para clínicas médicas com agendamento online, prontuário eletrônico, telemedicina e sistema de pagamentos. Desenvolvido com C# ASP.NET Core e TypeScript.",
    links: {
      GitHub: "https://github.com/lucasmonte",
      LinkedIn: "https://linkedin.com/in/lucasmonte",
    },
  },
  {
    titulo: "AI Image Processor",
    imagem: "/placeholder.svg",
    resumo: "Processamento de imagens com OpenCV e machine learning",
    descricao:
      "Ferramenta de processamento e análise de imagens usando OpenCV e algoritmos de machine learning para detecção de objetos e classificação automática. Desenvolvido com Python e Flask.",
    links: {
      GitHub: "https://github.com/lucasmonte",
      LinkedIn: "https://linkedin.com/in/lucasmonte",
    },
  },
];

export const cursos: Course[] = [
  { curso: "Customer Experience Management", plataforma: "FIAP", tags: ["CX", "UX", "Management", "Business"], certificado: "/placeholder.svg" },
  { curso: "Front-End", plataforma: "FIAP", tags: ["Frontend", "Web", "UI"], certificado: "/placeholder.svg" },
  { curso: "Técnicas de Negociação", plataforma: "FIAP", tags: ["Negociação", "Business", "Soft Skills"], certificado: "/placeholder.svg" },
  { curso: "User Experience", plataforma: "FIAP", tags: ["UX", "Design", "Frontend"], certificado: "/placeholder.svg" },
  { curso: "Estratégia e Inovação Tecnológica com aplicações em IA e IoT", plataforma: "FIAP", tags: ["IA", "IoT", "Estratégia", "Inovação"], certificado: "/placeholder.svg" },
  { curso: "Cloud Fundamentals, Administration and Solution Architect", plataforma: "FIAP", tags: ["AWS", "Cloud", "DevOps", "Architecture"], certificado: "/placeholder.svg" },
  { curso: "Desenvolvimento .NET", plataforma: "FIAP", tags: [".NET", "C#", "Backend", "Web"], certificado: "/placeholder.svg" },
  { curso: "DevOps & Agile Culture", plataforma: "FIAP", tags: ["DevOps", "Agile", "Infrastructure", "CI/CD"], certificado: "/placeholder.svg" },
  { curso: "Gestão de Infraestrutura de TI", plataforma: "FIAP", tags: ["Infrastructure", "IT", "DevOps", "Management"], certificado: "/placeholder.svg" },
  { curso: "Inteligência Artificial e Computacional", plataforma: "FIAP", tags: ["IA", "Machine Learning", "Python", "AI"], certificado: "/placeholder.svg" },
  { curso: "Python", plataforma: "FIAP", tags: ["Python", "Programming", "Backend", "Data Science"], certificado: "/placeholder.svg" },
  { curso: "Desenvolvimento de Aplicações Móveis", plataforma: "FIAP", tags: ["Mobile", "Flutter", "React Native", "Development"], certificado: "/placeholder.svg" },
  { curso: "Desenvolvimento e Designer Web 2.0", plataforma: "FIAP", tags: ["Web", "Design", "Frontend", "UX/UI"], certificado: "/placeholder.svg" },
  { curso: "Análise de Sistemas e Prototipação Web", plataforma: "FIAP", tags: ["Web", "Analysis", "Design", "Frontend"], certificado: "/placeholder.svg" },
  { curso: "Formação Social e Sustentabilidade", plataforma: "FIAP", tags: ["Social", "Sustainability", "Business", "Management"], certificado: "/placeholder.svg" },
];

export const habilidades: Skill[] = [
  { icon: "fas fa-layer-group", title: "Desenvolvimento Fullstack", description: "C# (ASP.NET Core), Python (Flask, FastAPI), React, Next.js, TypeScript", badge: "Avançado" },
  { icon: "fas fa-cogs", title: "Engenharia de Software", description: "Arquitetura de sistemas, APIs escaláveis, TypeORM, Zod, padrões de design", badge: "Avançado" },
  { icon: "fas fa-brain", title: "Inteligência Artificial", description: "OpenCV, Jupyter Notebook, Machine Learning, integração de soluções IA", badge: "Intermediário" },
];

export const navigationLinks: NavigationLink[] = [
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Destaques", href: "#destaques" },
  { label: "Projetos", href: "#projetos" },
  { label: "Cursos", href: "#courses" },
  { label: "Contato", href: "#contato" },
];

export const educacao: Education = {
  course: "Análise e Desenvolvimento de Sistemas",
  institution: "Universidade Tecnológica Federal do Paraná",
  period: "2020 - 2023",
  description:
    "Graduação focada em desenvolvimento de software, análise de sistemas, banco de dados, engenharia de software e gestão de projetos de TI.",
  technologies: ["Java", "Python", "SQL", "UML", "Scrum", "Git"],
  diplomaUrl: "/placeholder.svg",
};

export const contatoInfo: ContactInfo = {
  email: "contato@lucasmonteverde.com",
  phone: "+55 (11) 99999-9999",
  location: "São Paulo, SP - Brasil",
  socialLinks: {
    linkedin: "https://linkedin.com/in/lucasmonteverde",
    github: "https://github.com/lucasmonteverde",
  },
};

export const personalInfo = {
  nome: "Lucas Monte Verde",
  titulo: "Desenvolvedor Full-Stack",
  subtitulo: "Especialista em Soluções Digitais",
  sobre: {
    paragrafo1:
      "Sou Desenvolvedor Full-Stack com 3 anos de atuação no desenvolvimento de sistemas web e APIs de alta performance. Trabalho diariamente com C# (.NET), Python (Flask, FastAPI, OpenCV) e JavaScript/TypeScript (Node.js, Express, React, Next.js), sempre buscando soluções eficientes e arquitetura bem estruturada. Também possuo experiência em análise de dados e automações usando Jupyter Notebook.",
    paragrafo2:
      "Atuei em startups e no setor financeiro, onde lidei com grandes volumes de dados, integrações com plataformas de CRM e desafios técnicos complexos em equipe. Tenho domínio de Git, PostgreSQL, MySQL, Flutter/Dart e serviços em nuvem (AWS e Azure), mantendo um forte compromisso com boas práticas, organização do código, testes e processos de entrega contínua.",
  },
};
