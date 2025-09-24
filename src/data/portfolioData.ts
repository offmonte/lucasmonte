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
  { curso: "Inteligência Artificial", plataforma: "FIAP", tags: ["IA", "Machine Learning", "Python", "TensorFlow"], certificado: "/placeholder.svg" },
  { curso: "HTML e CSS", plataforma: "Alura", tags: ["Frontend", "HTML", "CSS", "Responsivo"], certificado: "/placeholder.svg" },
  { curso: "CSS com IA", plataforma: "Alura", tags: ["CSS", "IA", "Design", "Frontend"], certificado: "/placeholder.svg" },
  { curso: "JavaScript ES6+", plataforma: "Rocketseat", tags: ["JavaScript", "ES6", "Frontend", "Programming"], certificado: "/placeholder.svg" },
  { curso: "React.js Completo", plataforma: "Udemy", tags: ["React", "JavaScript", "Frontend", "SPA"], certificado: "/placeholder.svg" },
  { curso: "Node.js e Express", plataforma: "Rocketseat", tags: ["Node.js", "Express", "Backend", "API"], certificado: "/placeholder.svg" },
  { curso: "TypeScript para Desenvolvedores", plataforma: "Alura", tags: ["TypeScript", "JavaScript", "Programming", "Types"], certificado: "/placeholder.svg" },
  { curso: "Python para Data Science", plataforma: "DataCamp", tags: ["Python", "Data Science", "Pandas", "NumPy"], certificado: "/placeholder.svg" },
  { curso: "Docker e Kubernetes", plataforma: "Linux Academy", tags: ["Docker", "Kubernetes", "DevOps", "Containers"], certificado: "/placeholder.svg" },
  { curso: "AWS Cloud Practitioner", plataforma: "AWS", tags: ["AWS", "Cloud", "DevOps", "Infrastructure"], certificado: "/placeholder.svg" },
  { curso: "C# e ASP.NET Core", plataforma: "Microsoft Learn", tags: ["C#", "ASP.NET", "Backend", "Web API"], certificado: "/placeholder.svg" },
  { curso: "Machine Learning com Python", plataforma: "Coursera", tags: ["Machine Learning", "Python", "IA", "Data Science"], certificado: "/placeholder.svg" },
  { curso: "Git e GitHub", plataforma: "Rocketseat", tags: ["Git", "GitHub", "Version Control", "DevOps"], certificado: "/placeholder.svg" },
  { curso: "SQL e Banco de Dados", plataforma: "Alura", tags: ["SQL", "Database", "PostgreSQL", "MySQL"], certificado: "/placeholder.svg" },
];

export const habilidades: Skill[] = [
  { icon: "fas fa-layer-group", title: "Desenvolvimento Fullstack", description: "C# (ASP.NET Core), Python (Flask, FastAPI), React, Next.js, TypeScript", badge: "Avançado" },
  { icon: "fas fa-cogs", title: "Engenharia de Software", description: "Arquitetura de sistemas, APIs escaláveis, TypeORM, Zod, padrões de design", badge: "Avançado" },
  { icon: "fas fa-brain", title: "Inteligência Artificial", description: "OpenCV, Jupyter Notebook, Machine Learning, integração de soluções IA", badge: "Intermediário" },
];

export const navigationLinks: NavigationLink[] = [
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Destaques", href: "#destaques" },
  { label: "Projetos", href: "#projetos" },
  { label: "Cursos", href: "#courses" },
  { label: "Graduação", href: "#graduacao" },
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
      "Me chamo Lucas Monte Verde e sou apaixonado por criar soluções web inovadoras que transformam ideias em realidade.",
    paragrafo2:
      "Desenvolvedor Full Stack com 2 anos de experiência em C# (ASP.NET Core), Python (Flask, FastAPI) e JavaScript/TypeScript (React, Node.js). Especializado em arquitetura de aplicações web e APIs escaláveis.",
  },
};
