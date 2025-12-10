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

export interface NavigationLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: { linkedin: string; github: string };
}

export const projetos: Project[] = [

  //Primeira linha

  {
    titulo: "APIs com Mensageria",
    imagem: "/projetos/RabbitMQ.jpg",
    resumo: "Comunicação assíncrona entre duas APIs utilizando RabbitMQ e arquitetura Produtor-Consumidor.",
    descricao:
      "Projeto que implementa comunicação assíncrona entre duas APIs usando RabbitMQ, com arquitetura Produtor-Consumidor. Inclui API em Flask para publicar mensagens, serviço Python para consumi-las e processamento via Docker Compose, garantindo ambiente reproduzível e fácil monitoramento.",
    links: {
      GitHub: "https://github.com/offmonte/mensageria-rabbitmq",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "Integração Stripe",
    imagem: "/projetos/PagamentoStripe.jpg",
    resumo:
      "Integração de pagamentos, incluindo validação no backend e segurança reforçada",
    descricao:
      "Integração completa com Stripe usando backend em Node.js/Express e frontend em Next.js. Implementa boas práticas de segurança, como validação no servidor, criação de PaymentIntents no backend, idempotência e verificação de webhooks. O frontend utiliza TypeScript e @stripe/react-stripe-js para um fluxo de pagamento seguro e estruturado.",
    links: {
      GitHub: "https://github.com/offmonte/pagamento-stripe",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "FinTech",
    imagem: "/projetos/FinTech.jpg",
    resumo: "Aplicação de controle financeiro pessoal com gráficos, registros de transações e exportação de relatórios.",
    descricao:
      "Aplicação de controle financeiro que registra transações, exibe gráficos, salva dados via Local Storage e exporta relatórios em CSV. O projeto foi refatorado para melhorar organização, escalabilidade e manutenção, oferecendo uma ferramenta simples e funcional para acompanhar despesas e metas.",
    links: {
      GitHub: "https://github.com/offmonte",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "ToolDo",
    imagem: "/projetos/ToolDo.jpg",
    resumo:
      "Lista de tarefas com categorias, drag-and-drop, edição inline e persistência.",
    descricao:
      "Aplicação de tarefas com categorias, filtros, edição inline, drag-and-drop e persistência via localStorage. Interface responsiva com temas claro/escuro, contadores e recursos de acessibilidade, destacando UI interativa e boa organização de estado.",
    links: {
      GitHub: "https://github.com/offmonte/todo",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },

  //Segunda linha

  {
    titulo: "DAIET",
    imagem: "/projetos/Daiet.png",
    resumo:
      "IA que gera dietas totalmente personalizadas.",
    descricao:
      "Aplicação web desenvolvida com Next.js que cria dietas totalmente personalizadas a partir dos dados do usuário, integrando a API Google Gemini para gerar planos alimentares inteligentes. A interface inclui formulário intuitivo, suporte a múltiplos objetivos (perder, ganhar ou manter peso) e configuração flexível de refeições.",
    links: {
      GitHub: "https://github.com/offmonte/daiet",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "Tagpy",
    imagem: "/projetos/Tagpy.png",
    resumo: "Tecnologia moderna para transformar cartões, adesivos ou displays físicos em portais digitais via NFC.",
    descricao:
      "Tagpy usa tecnologia NFC para transformar cartões, adesivos ou displays em portais digitais. Basta encostar um smartphone compatível para acessar contatos, redes sociais, portfólio ou serviços sem digitar nada.\n\nUma solução prática e sustentável para networking, divulgação profissional e negócios.",
    links: {
      GitHub: "https://github.com/offmonte",
      Site: "https://tagpy.vercel.app"
    },
  },
  
  {
    titulo: "File Search & Preview",
    imagem: "/projetos/SearchPreview.png",
    resumo: "Visualização e busca exata em arquivos com destaque de termos.",
    descricao:
      "Sistema que permite enviar e visualizar arquivos (.pdf, .docx, .xlsx), buscar frases exatas e destacar resultados na pré-visualização. Inclui parsing avançado, sanitização de HTML, ordenação por relevância, debounce de pesquisa e gerenciamento de Blob URLs, tudo em uma interface responsiva.",
    links: {
      GitHub: "https://github.com/offmonte",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "Green Light",
    imagem: "/projetos/GreenLight.png",
    resumo: "Finalista do Global Solution FIAP - 2º Sem. 2024, sistema inteligente de iluminação focado em automação e economia de energia.",
    descricao:
      "Solução sustentável para automação de iluminação em grandes ambientes, utilizando sensores LDR para reduzir desperdício e custos. Integra app para monitoramento em tempo real e controle remoto seguro das lâmpadas. Fui responsável pela arquitetura, documentação, organização do fluxo de trabalho e desenvolvimento da API em .NET/C# com Swagger.",
    links: {
      GitHub: "https://github.com/offmonte/GreenLight",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  
  //Terceira linha

  {
    titulo: "Blue Horizon",
    imagem: "/projetos/BlueHorizon.jpg",
    resumo: "IA ambiental para avaliar a qualidade da água em regiões portuárias, projeto que liderei como idealizador e desenvolvedor back-end.",
    descricao:
      "Solução de IA para monitorar a qualidade da água em áreas portuárias. Liderei o projeto como idealizador, desenvolvi o back-end em .NET/C#, modelei a IA em Python para classificação dos indicadores ambientais e participei do design e implementação do banco de dados em PL/SQL.",
    links: {
      GitHub: "https://github.com/offmonte/BlueHorizonIA",
      LinkedIn: "hhttps://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "CGenius",
    imagem: "/projetos/Cgenius.png",
    resumo:
      "API para gestão de atendentes, clientes, planos, scripts e vendas, com entidades relacionadas.",
    descricao:
      "API monolítica para centralizar a gestão comercial da aplicação, incluindo CRUD completo de atendentes, clientes, planos, scripts, especificações e vendas. Mantém relacionamentos entre as entidades, garantindo consistência e fluxo operacional padronizado. Inclui documentação com payloads JSON para facilitar integração e consumo.",
    links: {
      GitHub: "https://github.com/offmonte/CGenius",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "VestQuiz",
    imagem: "/projetos/VestQuiz.png",
    resumo: "App com IA que gera perguntas e corrige fornecendo explicações",
    descricao:
      "VestQuiz é um app criado em menos de um dia para ajudar um amigo a estudar para um vestibulinho. Ele gera perguntas, corrige as respostas e explica automaticamente usando IA. Um projeto rápido, funcional e totalmente focado em oferecer estudo dinâmico e imediato.",
    links: {
      GitHub: "https://github.com/offmonte",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "Autenticação de 2FA",
    imagem: "/projetos/Python2FA.jpg",
    resumo: "Sistema de login em Python com autenticação via códigos OTP e QR Code.",
    descricao:
      "Projeto em Python com autenticação 2FA usando códigos OTP. Permite registrar usuários, gerar QR Code para configurar o autenticador e validar o código temporário no login. Inclui geração de OTP, criação de QR Code e fluxo completo de registro e acesso.",
    links: {
      GitHub: "https://github.com/offmonte/autenticador-2-fatores",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },

  //Quarta linha
  
  {
    titulo: "Portfólio Profissional",
    imagem: "/projetos/PortfolioProfissional.png",
    resumo: "Site de portfólio feito com Next.js, React e Tailwind",
    descricao:
      "Portfólio desenvolvido com Next.js, React e Tailwind, apresentando seções como Hero, Sobre, Projetos, Cursos e Contato. Possui modais, dark mode, animações suaves e design responsivo. A arquitetura usa componentes reutilizáveis, dados centralizados e boas práticas de acessibilidade e SEO.",
    links: {
      GitHub: "https://github.com/offmonte",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  
];

export const cursos: Course[] = [
  { curso: "Customer Experience Management", plataforma: "FIAP", tags: ["CX", "UX", "Management", "Business"], certificado: "/certificados/Customer_Experience_Management.png" },
  { curso: "Front-End", plataforma: "FIAP", tags: ["Frontend", "Web", "UI"], certificado: "/certificados/Front_End.png" },
  { curso: "Técnicas de Negociação", plataforma: "FIAP", tags: ["Negociação", "Business", "Soft Skills"], certificado: "/certificados/Tecnicas_de_Negociacao.png" },
  { curso: "User Experience", plataforma: "FIAP", tags: ["UX", "Design", "Frontend"], certificado: "/certificados/User_Experience.png" },
  { curso: "Estratégia e Inovação Tecnológica com aplicações em IA e IoT", plataforma: "FIAP", tags: ["IA", "IoT", "Estratégia", "Inovação"], certificado: "" },
  { curso: "Cloud Fundamentals, Administration and Solution Architect", plataforma: "FIAP", tags: ["AWS", "Cloud", "DevOps", "Architecture"], certificado: "/certificados/Cloud_Fundamentals_Administration_and_Solution_Architect.png" },
  { curso: "Desenvolvimento .NET", plataforma: "FIAP", tags: [".NET", "C#", "Backend", "Web"], certificado: "/certificados/Desenvolvimento_NET.png" },
  { curso: "DevOps & Agile Culture", plataforma: "FIAP", tags: ["DevOps", "Agile", "Infrastructure", "CI/CD"], certificado: "/certificados/DevOps_Agile Culture.png" },
  { curso: "Gestão de Infraestrutura de TI", plataforma: "FIAP", tags: ["Infrastructure", "IT", "DevOps", "Management"], certificado: "/certificados/Gestao_de_Infraestrutura_de_TI.png" },
  { curso: "Inteligência Artificial e Computacional", plataforma: "FIAP", tags: ["IA", "Machine Learning", "Python", "AI"], certificado: "/certificados/Inteligencia_Artificial_e_Computacional.png" },
  { curso: "Python", plataforma: "FIAP", tags: ["Python", "Programming", "Backend", "Data Science"], certificado: "/certificados/Python.png" },
  { curso: "Desenvolvimento de Aplicações Móveis", plataforma: "FIAP", tags: ["Mobile", "Flutter", "React Native", "Development"], certificado: "" },
  { curso: "Desenvolvimento e Designer Web 2.0", plataforma: "FIAP", tags: ["Web", "Design", "Frontend", "UX/UI"], certificado: "" },
  { curso: "Análise de Sistemas e Prototipação Web", plataforma: "FIAP", tags: ["Web", "Analysis", "Design", "Frontend"], certificado: "" },
  { curso: "Formação Social e Sustentabilidade", plataforma: "FIAP", tags: ["Social", "Sustainability", "Business", "Management"], certificado: "/certificados/Formacao_Social_e_Sustentabilidade.png" },
];

export const navigationLinks: NavigationLink[] = [
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Destaques", href: "#destaques" },
  { label: "Projetos", href: "#projetos" },
  { label: "Cursos", href: "#courses" },
  { label: "Contato", href: "#contato" },
];

export const contatoInfo: ContactInfo = {
  email: "lucasmonteverdeee@gmail.com",
  phone: "+55 (11) 94208-4610",
  location: "São Paulo, SP - Brasil",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/lucas-monte-verde/",
    github: "https://github.com/offmonte",
  },
};

export const personalInfo = {
  nome: "Lucas Monte Verde",
  titulo: "Desenvolvedor Full-Stack",
  subtitulo: "Especialista em Soluções Digitais",
  sobre: {
    paragrafo1:
      "Sou desenvolvedor <strong>full-stack</strong> com <strong>3 anos</strong> de experiência em aplicações web e <strong>APIs escaláveis</strong>. Trabalho com <strong>.NET</strong>, <strong>Python</strong> e <strong>JavaScript/TypeScript</strong>, além de automações e análise de dados com <strong>Jupyter Notebook</strong>.",
    paragrafo2:
      "Atuei em <strong>startups</strong> do setor financeiro com foco em <strong>grandes volumes de dados</strong>, integrações complexas e <strong>soluções de alta performance</strong>. Domino <strong>Git</strong>, <strong>PostgreSQL</strong>, <strong>MySQL</strong>, Flutter/Dart e serviços em nuvem (<strong>AWS</strong> e <strong>Azure</strong>), sempre seguindo <strong>boas práticas</strong> e entrega contínua.",
  },
};
