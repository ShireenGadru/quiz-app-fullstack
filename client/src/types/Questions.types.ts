export interface IQuestion {
  id: string;
  question: string;
  options: IOption[];
}

export interface IOption {
  text: string;
  correct: boolean;
}

export interface ISelectedOptions {
  questionId: string;
  isCorrectOption: boolean;
} 