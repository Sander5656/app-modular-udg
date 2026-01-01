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
    id: "inge",
    question: "¿Te gustan las matemáticas?",
    category: "subjects",
    options: [
      { label: "Si", value: 5 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "technology",
    question: "¿Te interesa la tecnología?",
    category: "interests",
    options: [
      { label: "Si", value: 5 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "health",
    question: "¿Te gusta el area de salud?",
    category: "interests",
    options: [
      { label: "Sí", value: 5 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "people",
    question: "¿Te gusta la atencion al cliente?",
    category: "workstyle",
    options: [
      { label: "Si", value: 5 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "inge",
    question: "¿Te consideras una persona creativa?",
    category: "skills",
    options: [
      { label: "Si", value: 5 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "inge",
    question: "¿Te gustaria trabajar haciendo videojuegos?",
    category: "skills",
    options: [
      { label: "Si", value: 5 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "vete",
    question: "¿Te gustaria trabajar con animales?",
    category: "skills",
    options: [
      { label: "Si", value: 5 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "abo",
    question: "¿Eres bueno para debatir?",
    category: "skills",
    options: [
      { label: "Si", value: 5 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "doc",
    question: "¿Toleras ver sangre o fluidos diversos?",
    category: "skills",
    options: [
      { label: "Si", value: 5 },
      { label: "No", value: 0 }
    ]
  }
];