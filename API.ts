import axios from "axios";

import { shuffleArray } from "./utils/utils";

export type Question = {
  id: string;
  question: string;
  correct_answer: string;
  incorrect_answer: string[];
  subject_id: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuiz = async (quizset_id: string) => {
  const endpoint = "/quiz.json";
  const response = await axios.get(endpoint);
  const rs: QuestionState[] = response.data.map((quiz: Question) => ({
    question: quiz.question,
    answers: shuffleArray([...quiz.incorrect_answer, quiz.correct_answer]),
  }));
  return rs;
};
