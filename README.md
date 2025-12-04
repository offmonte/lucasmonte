# 🚀 Lucas Monte Verde - Portfólio Profissional

Um portfólio moderno, responsivo e interativo desenvolvido com **Next.js 15**, **React 19**, **TypeScript** e **Tailwind CSS 4**. Apresenta projetos, cursos, habilidades e informações de contato de um desenvolvedor full-stack.

## 📋 Visão Geral

Este é um website de portfólio profissional que demonstra:
- **Seção Hero**: Apresentação inicial com CTAs (Call-to-Action)
- **Sobre Mim**: Bio com foto de perfil e descrição profissional
- **Destaques**: Destaque dos 3 melhores projetos
- **Projetos**: Galeria completa (8+) de projetos com filtros
- **Cursos**: Lista de certificados com filtro por tags
- **Contato**: Formulário de contato e informações de comunicação

Todas as seções incluem modal interativo para detalhes, suporte a modo escuro/claro e animações suaves.

## 🛠️ Tech Stack

### Dependências Principais
- **[Next.js 15.5.4](https://nextjs.org/)** - Framework React com SSR
- **[React 19.1.0](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Font Awesome 6.5.0](https://fontawesome.com/)** - Ícones SVG (via CDN)

### Dependências de Desenvolvimento
- **ESLint 9** - Code linting
- **TypeScript 5** - Type checking

### Build & Servidor
- **Turbopack** - Next.js bundler (para `npm run dev` e `npm run build`)

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── NavBar.tsx       # Navbar fixa com menu responsivo
│   │   ├── ProgressBar.tsx  # Indicador de progresso de scroll
│   │   ├── Hero.tsx         # Seção inicial com headline e CTAs
│   │   ├── About.tsx        # Seção "Sobre Mim" com foto e bio
│   │   ├── Highlights.tsx   # Destaques dos 3 melhores projetos
│   │   ├── Projects.tsx     # Galeria completa de projetos
│   │   ├── Courses.tsx      # Lista de cursos com filtro por tags
│   │   ├── Contact.tsx      # Formulário de contato + info
│   │   └── Modal.tsx        # Componente modal reutilizável
│   │
│   ├── data/                # Dados e configurações
│   │   └── portfolioData.ts # Centraliza todos os dados (projetos, cursos, skills, etc.)
│   │
│   ├── pages/               # Rotas Next.js
│   │   ├── _app.tsx         # App wrapper (importa estilos globais)
│   │   ├── _document.tsx    # HTML documento (carrega Font Awesome CDN)
│   │   └── index.tsx        # Página home (monta todos os componentes)
│   │
│   └── styles/
│       └── globals.css      # Estilos globais e CSS custom classes
│
├── public/
│   └── placeholder.svg      # Imagem placeholder (único SVG utilizado)
│
├── package.json             # Dependências do projeto
├── tsconfig.json            # Configuração TypeScript
├── next.config.ts           # Configuração Next.js
├── postcss.config.mjs       # Configuração PostCSS + Tailwind
├── eslint.config.mjs        # Configuração ESLint
└── README.md                # Este arquivo
```

## 🎨 Design System

### Variáveis CSS (Dark Mode Automático)
```css
--background: #ececec (light) / #0a0a0a (dark)
--foreground: #171717 (light) / #ededed (dark)
--accent: #1951ca (light) / #60a5fa (dark) - Blue primary
--accent-2: #0998b1 (light) / #22d3ee (dark) - Cyan secondary
```

### Classes Principais
| Classe | Propósito |
|--------|-----------|
| `.card-elevated` | Superfícies elevadas com sombras e hover |
| `.hover-lift` | Efeito de levantamento ao hover |
| `.image-zoom` | Zoom suave em imagens |
| `.headline-accent` | Texto com gradiente (foreground → accent → accent-2) |
| `.section-title` | Títulos de seções em cor accent |
| `.nav-link` | Links de navegação com underline animado |
| `.cta-primary` / `.cta-secondary` | Botões de Call-to-Action |
| `.chip` | Pequenos botões/tags |
| `.progress-indicator` | Barra de progresso animada |
| `.field-focus` | Estilos de input com focus |
| `.modal-*` | Estilos de modal |

## 🚀 Como Começar

### Pré-requisitos
- **Node.js 18+** (LTS recomendado)
- **npm**, **yarn**, **pnpm** ou **bun** como gerenciador de pacotes

### Instalação

1. **Clone o repositório:**
```bash
git clone <seu-repositorio>
cd lucasmonte
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente (opcional):**
Crie um arquivo `.env.local` na raiz do projeto se precisar de variáveis customizadas:
```env
# Exemplo (não obrigatório para dev local)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Desenvolvimento

**Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

**Edite os arquivos e veja as mudanças em tempo real** (Hot Module Replacement habilitado por padrão).

### Build para Produção

```bash
npm run build
npm start
```

Ou execute tudo de uma vez:
```bash
npm run build && npm start
```

### Linting

Verifique o código com ESLint:
```bash
npm run lint
```

## 📦 Dados do Portfólio

Todos os dados estão centralizados em **`src/data/portfolioData.ts`**:

### Interfaces de Dados
```typescript
interface Project {
  titulo: string;
  imagem: string;
  resumo: string;
  descricao: string;
  links: { GitHub?: string; LinkedIn?: string; [key: string]: string };
}

interface Course {
  curso: string;
  plataforma: string;
  tags: string[];
  certificado: string;
}

interface Skill {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

interface Education {
  course: string;
  institution: string;
  period: string;
  description: string;
  technologies: string[];
  diplomaUrl: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: { linkedin: string; github: string };
}
```

### Atualizando Conteúdo

Edite diretamente em `src/data/portfolioData.ts`:

```typescript
// Adicionar novo projeto
export const projetos: Project[] = [
  {
    titulo: "Meu Novo Projeto",
    imagem: "/placeholder.svg",
    resumo: "Descrição curta",
    descricao: "Descrição detalhada...",
    links: {
      GitHub: "https://github.com/...",
    },
  },
  // ... outros projetos
];

// Adicionar novo curso
export const cursos: Course[] = [
  {
    curso: "React Avançado",
    plataforma: "Alura",
    tags: ["Frontend", "React"],
    certificado: "/placeholder.svg",
  },
  // ... outros cursos
];

// Atualizar informações pessoais
export const personalInfo = {
  nome: "Seu Nome",
  titulo: "Seu Título",
  subtitulo: "Seu Subtítulo",
  sobre: {
    paragrafo1: "...",
    paragrafo2: "...",
  },
};
```

## 🔧 Componentes Principais

### NavBar
- Navegação fixa no topo
- Menu responsivo (hamburger em mobile)
- Links âncora para todas as seções

### Hero
- Seção de abertura (min-height: 100vh)
- Headline com gradiente
- Dois CTAs: "Contato" e "Ver Projetos"

### Highlights
- Exibe os 3 primeiros projetos
- Modal para detalhes do projeto
- Botões de ação (GitHub, LinkedIn, etc.)

### Projects
- Grade responsiva (1, 2 ou 4 colunas)
- Botão "Mostrar todos" para expandir lista
- Modal com detalhes completos

### Courses
- Lista com scroll vertical
- Filtro por tags (multi-select)
- Botão "Ver Certificado" com modal

### Contact
- Formulário funcional (mailto integration)
- Informações de contato
- Links para redes sociais (LinkedIn, GitHub)

### Modal
- Dialog acessível (role="dialog", aria-modal)
- Fechar com Esc ou clique fora
- Portal do React (renderiza no body)

## 🌙 Modo Escuro/Claro

O site detecta automaticamente a preferência do sistema via `prefers-color-scheme`:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    /* ... outras variáveis */
  }
}
```

Usuários podem alternar manualmente no sistema operacional. O site respeita a preferência sem JavaScript extra.

## ♿ Acessibilidade

O projeto segue boas práticas:
- **ARIA labels** em botões e seções
- **Semantic HTML** (nav, main, section, footer)
- **Alt text** em imagens
- **Focus management** em modais
- **Keyboard navigation** (Esc para fechar modais)
- **Color contrast** adequado

## 📱 Responsividade

Breakpoints Tailwind utilizados:
- **sm**: 640px (tablets)
- **lg**: 1024px (desktops)
- **Padrão**: Mobile-first (estilos para mobile, depois media queries)

Exemplo:
```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {/* 1 coluna mobile, 2 em tablets, 4 em desktops */}
</div>
```

## 🚢 Deploy

### Vercel (Recomendado)
A forma mais rápida para deploy:

1. Push o projeto para GitHub/GitLab/Bitbucket
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Vercel detecta Next.js automaticamente
5. Clique "Deploy"

Seu site estará ao vivo em poucos segundos com domínio automático.

### Outras Opções
- **Netlify**: Suporta Next.js (SSR com edge functions)
- **AWS Amplify**: Deploy com CI/CD
- **Self-hosted**: Use `npm run build && npm start`

## 📚 Referências e Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)

## 🤝 Como Contribuir

Se você deseja contribuir melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/melhoria`)
3. Commit suas mudanças (`git commit -m 'Adiciona melhoria'`)
4. Push para a branch (`git push origin feature/melhoria`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é de uso pessoal/portfólio. Sinta-se livre para usar como inspiração, mas respeite a autoria do Lucas Monte Verde.

## 👤 Autor

**Lucas Monte Verde**
- 📧 Email: [contato@lucasmonteverde.com](mailto:contato@lucasmonteverde.com)
- 💼 LinkedIn: [linkedin.com/in/lucasmonteverde](https://linkedin.com/in/lucasmonteverde)
- 🐙 GitHub: [github.com/lucasmonteverde](https://github.com/lucasmonteverde)
- 📍 Localização: São Paulo, SP - Brasil

---

**Desenvolvedor Full-Stack** | Especialista em Soluções Digitais

*"3 anos de experiência em aplicações web e APIs escaláveis com .NET, Python e JavaScript/TypeScript"*
