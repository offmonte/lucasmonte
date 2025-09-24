export interface Formacao {
  curso: string;
  instituicao: string;
  periodo: string;
  descricao: string;
  tecnologias: string[];
  diploma?: string; // public path
}

export const graduacao: Formacao = {
  curso: "Bacharelado em Ciência da Computação",
  instituicao: "Universidade XYZ",
  periodo: "2017 – 2021",
  descricao:
    "Formação com foco em algoritmos, estruturas de dados, engenharia de software e computação distribuída.",
  tecnologias: ["JavaScript", "TypeScript", "React", "Node.js", "SQL"],
  diploma: "/vercel.svg",
};
