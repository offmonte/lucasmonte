export type SkillLevel = "Avançado" | "Intermediário" | "Básico";

export interface SkillItem {
  id: string;
  icon: string; // public path
  titulo: string;
  descricao: string;
  nivel: SkillLevel;
}

export const habilidades: SkillItem[] = [
  {
    id: "react",
    icon: "/next.svg",
    titulo: "React & Next.js",
    descricao: "SPAs e SSR com foco em performance e UX.",
    nivel: "Avançado",
  },
  {
    id: "ts",
    icon: "/file.svg",
    titulo: "TypeScript",
    descricao: "Tipagem segura, generics e patterns escaláveis.",
    nivel: "Avançado",
  },
  {
    id: "css",
    icon: "/window.svg",
    titulo: "CSS Moderno",
    descricao: "Tailwind, Flex/Grid, animações e responsividade.",
    nivel: "Intermediário",
  },
];
