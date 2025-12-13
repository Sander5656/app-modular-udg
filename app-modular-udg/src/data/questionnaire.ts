// src/data/questionnaire.ts

export type QuestionOption = {
  label: string;
  value: number;
};

export type QuestionnaireQuestion = {
  id: string;
  question: string;
  category: "interests" | "skills" | "subjects" | "workstyle" | "goals";
  options: QuestionOption[];
};

export const questionnaire: QuestionnaireQuestion[] = [
  {
    id: "math",
    question: "¿Qué tanto te gustan las matemáticas?",
    category: "subjects",
    options: [
      { label: "Me encantan", value: 5 },
      { label: "Me dan igual", value: 3 },
      { label: "No me gustan", value: 0 }
    ]
  },
  {
    id: "technology",
    question: "¿Te interesa la tecnología y la computación?",
    category: "interests",
    options: [
      { label: "Mucho", value: 5 },
      { label: "Un poco", value: 3 },
      { label: "Nada", value: 0 }
    ]
  },
  {
    id: "health",
    question: "¿Te gustaría trabajar en el área de la salud?",
    category: "interests",
    options: [
      { label: "Sí", value: 5 },
      { label: "Tal vez", value: 3 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "people",
    question: "¿Disfrutas trabajar con personas?",
    category: "workstyle",
    options: [
      { label: "Mucho", value: 5 },
      { label: "A veces", value: 3 },
      { label: "Prefiero trabajar solo", value: 1 }
    ]
  },
  {
    id: "creativity",
    question: "¿Qué tan importante es la creatividad en tu trabajo?",
    category: "skills",
    options: [
      { label: "Muy importante", value: 5 },
      { label: "Algo importante", value: 3 },
      { label: "No es importante", value: 1 }
    ]
  }
];