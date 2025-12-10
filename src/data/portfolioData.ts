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
  {
    titulo: "Comunicação entre APIs com RabbitMQ",
    imagem: "/projetos/RabbitMQ.jpg",
    resumo: "Exemplo prático de comunicação assíncrona entre duas APIs utilizando RabbitMQ e arquitetura Produtor–Consumidor.",
    descricao:
      "Este projeto demonstra uma arquitetura completa de mensageria utilizando RabbitMQ como Message Broker para comunicação assíncrona entre duas APIs independentes. A solução inclui uma API Produtora desenvolvida em Flask, responsável por publicar mensagens na fila, e um serviço Consumidor em Python que escuta a fila, processa as tarefas e simula cargas variáveis. Todo o ambiente é orquestrado via Docker Compose, incluindo o RabbitMQ com interface de administração, garantindo inicialização ordenada, reprodutibilidade e fácil monitoramento. O repositório também oferece exemplos de testes via cURL/Postman, observação de logs em tempo real e uma estrutura limpa e didática para uso em estudos ou aplicações reais.",
    links: {
      GitHub: "https://github.com/offmonte/mensageria-rabbitmq",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "Integração Stripe",
    imagem: "/projetos/PagamentoStripe.jpg",
    resumo:
      "Exemplo completo de integração de pagamentos com Stripe, incluindo validação no backend, segurança reforçada, idempotência e frontend em Next.js.",
    descricao:
      "Projeto completo de integração com a API do Stripe utilizando um backend em Node.js/Express e um frontend em Next.js. A solução implementa boas práticas essenciais para pagamentos seguros, como validação rígida de valores no servidor, criação de PaymentIntents exclusivamente no backend, suporte a idempotência, verificação de webhooks com assinatura e logging estruturado via Pino. O frontend usa TypeScript e @stripe/react-stripe-js para renderizar o formulário seguro de pagamento, enquanto o backend garante toda a lógica sensível com variáveis de ambiente, testes automatizados e endpoints protegidos. O projeto também inclui checklist de QA, testes unitários, recomendações de segurança e uma arquitetura separada entre frontend e backend, ideal para estudos e aplicações reais de processamento de pagamentos.",
    links: {
      GitHub: "https://github.com/offmonte/pagamento-stripe",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "DAIET",
    imagem: "/projetos/Daiet.png",
    resumo:
      "Aplicação moderna em Next.js que gera dietas personalizadas usando IA Gemini, com interface responsiva e design moderno em Tailwind CSS.",
    descricao:
      "Aplicação web desenvolvida com Next.js 15 que permite criar dietas totalmente personalizadas a partir de dados do usuário, integrando a API Google Gemini para gerar planos alimentares inteligentes. A interface possui formulário intuitivo, suporte a múltiplos objetivos (perder, ganhar ou manter peso) e configuração flexível de refeições. O projeto utiliza TypeScript, Tailwind CSS e Lucide Icons para entregar um design moderno, responsivo e com animações suaves. A aplicação inclui uma API interna em Next.js para comunicação com o modelo Gemini, variáveis de ambiente configuráveis e suporte completo para deploy na Vercel. Ideal para demonstrar integração entre IA, UX responsiva e arquitetura moderna em React/Next.js.",
    links: {
      GitHub: "https://github.com/offmonte/daiet",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "ToolDo",
    imagem: "/projetos/ToolDo.jpg",
    resumo:
      "Aplicação de lista de tarefas organizada por categorias, com drag-and-drop, edição inline e persistência via localStorage. Desenvolvida com Next.js (Pages Router) e Tailwind CSS.",
    descricao:
      "Aplicação completa de gerenciamento de tarefas organizada por categorias, construída com Next.js 15 (Pages Router), React 19 e Tailwind CSS v4. O projeto inclui criação, edição e exclusão de categorias e tarefas, além de filtros de status (all, pending, completed), edição inline, contadores automáticos e drag-and-drop entre categorias. O estado é persistido via um hook SSR-safe de localStorage que sincroniza alterações entre abas do navegador. A arquitetura é bem estruturada, com componentes desacoplados, tipagem forte com TypeScript e temas claro/escuro configurados via CSS tokens integrados ao Tailwind. A aplicação utiliza next/font para tipografia otimizada, design responsivo e boas práticas de acessibilidade, como ARIA, foco controlado e labels semânticas. Ideal para demonstrar organização de estado, UI interativa, arquitetura modular e recursos avançados de front-end.",
    links: {
      GitHub: "https://github.com/offmonte/todo",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "Tagpy - Landing Page",
    imagem: "/projetos/Tagpy.png",
    resumo: "Plataforma moderna para transformar cartões, adesivos ou displays físicos em portais digitais via NFC - ideal para compartilhar contatos, links e conteúdos com um toque.",
    descricao:
      "Tagpy usa tecnologia NFC para transformar cartões, adesivos ou displays em portais digitais. Basta encostar um smartphone compatível para acessar contatos, redes sociais, portfólio ou serviços sem digitar nada.\n\nUma solução prática e sustentável para networking, divulgação profissional e negócios.",
    links: {
      GitHub: "https://github.com/offmonte",
      Site: "https://tagpy.vercel.app"
    },
  },
  {
    titulo: "Green Light",
    imagem: "/projetos/GreenLight.png",
    resumo: "Sistema inteligente de iluminação finalista do Global Solution FIAP - 2º Sem. 2024, focado em automação e economia de energia com sensores LDR.",
    descricao:
      "O GreenLight é uma solução sustentável e escalável voltada para ambientes de grande porte, como indústrias e complexos corporativos, que automatiza a iluminação por meio de sensores LDR. O sistema garante que as lâmpadas sejam acionadas apenas quando necessário, evitando desperdício e reduzindo custos operacionais. A solução inclui integração com aplicativo para monitoramento do consumo em tempo real, histórico mensal e desligamento remoto das lâmpadas - mantendo segurança ao bloquear acionamentos inadequados em condições de alta luminosidade. Fui responsável pela concepção da arquitetura, documentação, organização do fluxo de trabalho e desenvolvimento da API em .NET/C#, com Swagger para documentação e testes. Atuei também na integração entre back-end e front-end, garantindo consistência entre os serviços e a interface. Finalista da premiação Global Solution FIAP 2024 por inovação em eficiência energética.",
    links: {
      GitHub: "https://github.com/offmonte/GreenLight",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "Blue Horizon",
    imagem: "/projetos/BlueHorizon.jpg",
    resumo: "IA ambiental para avaliar a qualidade da água em regiões portuárias, projeto que liderei como idealizador e desenvolvedor back-end.",
    descricao:
      "Blue Horizon é uma solução de monitoramento ambiental que utiliza inteligência artificial para analisar a qualidade da água em regiões marítimas próximas a portos. Como líder e idealizador do projeto, coordenei o grupo, defini arquitetura, fluxos de trabalho e desenvolvi o back-end em .NET/C#, além de modelar a IA em Python/Jupyter Notebook para classificar se a água está apta a sustentar vida marinha com base em pH, oxigenação, nutrientes, microplásticos e salinidade. Também participei do design e implementação do banco de dados em PL/SQL, garantindo performance e integridade dos dados. O sistema avalia tendências de melhora ou piora das condições aquáticas e permite que portos recebam incentivos fiscais conforme a água atinge níveis mais saudáveis. A solução inclui ainda um aplicativo para conscientização pública, apresentando impactos ambientais, fiscais e sociais decorrentes da melhoria da qualidade marítima.",
    links: {
      GitHub: "https://github.com/offmonte/BlueHorizonIA",
      LinkedIn: "hhttps://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "File Search & Preview",
    imagem: "/projetos/SearchPreview.png",
    resumo: "Aplicação para upload, visualização e busca exata em PDFs, DOCX e XLSX com destaque de termos.",
    descricao:
      "Sistema completo que permite enviar e visualizar arquivos (.pdf, .docx, .xlsx), realizar busca por frase exata e destacar ocorrências diretamente na pré-visualização. Possui interface responsiva com Tailwind CSS, suporte a PDF (React-PDF), DOCX (docx-preview), XLSX com formatação (ExcelJS) e aviso para arquivos .doc. Inclui parsing avançado, sanitização de HTML, ordenação por relevância, debounce de pesquisa, além de gerenciamento de Blob URLs. Desenvolvido com Next.js 15, React 19 e TypeScript.",
    links: {
      GitHub: "https://github.com/offmonte",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "CGenius - API Monolítica",
    imagem: "/projetos/Cgenius.png",
    resumo:
      "API monolítica completa para gerenciamento de atendentes, clientes, planos, scripts, especificações e vendas. Inclui CRUDs integrados e relacionamento entre todas as entidades.",
    descricao:
      "API monolítica desenvolvida para centralizar toda a gestão comercial da aplicação, incluindo atendentes, clientes, planos, scripts, especificações e vendas. A escolha por uma arquitetura monolítica foi intencional devido à maturidade do escopo, reduzida necessidade de escalabilidade horizontal e à vantagem de manter o desenvolvimento mais simples, testável e integrado. A API implementa CRUD completo para todas as entidades, com relacionamentos encadeados que exigem ordem específica de criação (Atendente → Plano → Script → Cliente → Especificação → Venda). O sistema garante consistência entre entidades e facilita auditoria, controle e rastreabilidade de vendas. A documentação inclui exemplos de payloads JSON para criação de cada entidade, facilitando consumo e integração por outras aplicações. Ideal para demonstrar domínio de modelagem relacional, boas práticas de organização de API e padronização de fluxo operacional.",
    links: {
      GitHub: "https://github.com/offmonte/CGenius",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "VestQuiz",
    imagem: "/projetos/VestQuiz.png",
    resumo: "App de estudo com IA criado em menos de 1 dia - gera perguntas, corrige respostas e explica automaticamente.",
    descricao:
      "VestQuiz é um app desenvolvido em menos de um dia para ajudar um amigo a estudar para um vestibulinho. Ele gera perguntas de múltipla escolha, verifica se o usuário acertou e fornece explicações usando o Google Gemini.\n\nFeito com React, TypeScript, Tailwind e Vite, o projeto funciona 100% em frontend. A instalação é simples: `pnpm install`, criar `.env.local` com a chave `VITE_GEMINI_API_KEY`, e rodar `pnpm dev`.\n\nUm projeto rápido, prático e totalmente impulsionado por IA.",
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
      "Projeto desenvolvido em Python com suporte a autenticação de dois fatores (2FA) usando códigos OTP gerados por apps como Google Authenticator e Authy. O sistema cria usuários, gera um QR Code para configurar a conta no autenticador e solicita o código temporário a cada login. Inclui geração de OTP via pyotp, criação de QR Code, manipulação de arquivos e fluxo completo de registro e login.\n\nDependências: pyotp, qrcode, msvcrt (Windows).",
    links: {
      GitHub: "https://github.com/offmonte/autenticador-2-fatores",
      LinkedIn: "https://www.linkedin.com/in/lucas-monte-verde/",
    },
  },
  {
    titulo: "Portfólio Profissional",
    imagem: "/projetos/PortfolioProfissional.png",
    resumo: "Site de portfólio moderno e responsivo feito com Next.js 15, React 19 e Tailwind 4 - reúne projetos, cursos, skills e contato.",
    descricao:
      "Portfólio completo desenvolvido com Next.js 15, React 19, TypeScript e Tailwind CSS 4. O site inclui seções como Hero, Sobre, Destaques, Projetos, Cursos e Contato, todas com modais interativos, dark mode automático, animações suaves e design responsivo mobile-first.\n\nA arquitetura é organizada em componentes reutilizáveis, dados centralizados em `portfolioData.ts` e build otimizada via Turbopack. O projeto segue boas práticas de acessibilidade, SEO, navegação por teclado e contraste de cores.\n\nDeploy recomendado via Vercel com suporte a SSR, HMR e rotas otimizadas.",
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
