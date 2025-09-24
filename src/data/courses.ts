export interface Curso {
  id: string;
  curso: string;
  plataforma: string;
  tags: string[];
  certificado?: string; // public path
}

export const cursos: Curso[] = [
  {
    id: "react-avancado",
    curso: "React Avançado",
    plataforma: "Alura",
    tags: ["Frontend"],
    certificado: "/vercel.svg",
  },
  {
    id: "fullstack-next",
    curso: "Fullstack com Next.js",
    plataforma: "Rocketseat",
    tags: ["Frontend", "Backend"],
    certificado: "/file.svg",
  },
  {
    id: "fundamentos-ia",
    curso: "Fundamentos de IA",
    plataforma: "Coursera",
    tags: ["IA"],
    certificado: "/globe.svg",
  },
  {
    id: "node-api",
    curso: "APIs com Node.js",
    plataforma: "Udemy",
    tags: ["Backend"],
    certificado: "/window.svg",
  },
];
