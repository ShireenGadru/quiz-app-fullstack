export const reactQuestions = [
  {
    id: 1,
    question: "Which hook can be used to count number of re-renders in a page?",
    options: [
      { text: "useState", correct: false },
      { text: "useRef", correct: true },
      { text: "useMemo", correct: false },
      { text: "useCallback", correct: false },
    ],
  },
  {
    id: 2,
    question:
      "Which hook is used to perform side effects in a functional component?",
    options: [
      { text: "useState", correct: false },
      { text: "useEffect", correct: true },
      { text: "useContext", correct: false },
      { text: "useReducer", correct: false },
    ],
  },
  {
    id: 3,
    question: "Which hook provides access to context values in React?",
    options: [
      { text: "useEffect", correct: false },
      { text: "useState", correct: false },
      { text: "useContext", correct: true },
      { text: "useRef", correct: false },
    ],
  },
  {
    id: 4,
    question:
      "Which hook can be used to optimize performance by memoizing expensive computations?",
    options: [
      { text: "useMemo", correct: true },
      { text: "useState", correct: false },
      { text: "useReducer", correct: false },
      { text: "useEffect", correct: false },
    ],
  },
  {
    id: 5,
    question: "Which hook allows you to manage complex state logic in React?",
    options: [
      { text: "useEffect", correct: false },
      { text: "useReducer", correct: true },
      { text: "useMemo", correct: false },
      { text: "useState", correct: false },
    ],
  },
];
