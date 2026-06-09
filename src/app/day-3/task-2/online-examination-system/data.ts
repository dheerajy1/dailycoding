export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Which hook is used for component state?",
    options: ["useEffect", "useState", "useMemo", "useRef"],
    correctAnswer: "useState",
  },
  {
    id: 2,
    question: "Which company created React?",
    options: ["Google", "Microsoft", "Meta", "Netflix"],
    correctAnswer: "Meta",
  },
  {
    id: 3,
    question: "Which hook is used for side effects?",
    options: ["useReducer", "useRef", "useEffect", "useCallback"],
    correctAnswer: "useEffect",
  },
  {
    id: 4,
    question: "Which router is commonly used with React?",
    options: ["Express Router", "React Router", "Angular Router", "Vue Router"],
    correctAnswer: "React Router",
  },
  {
    id: 5,
    question: "What does JSX stand for?",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "Java XML",
      "JSON XML",
    ],
    correctAnswer: "JavaScript XML",
  },
];
