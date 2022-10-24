import React, { ReactElement, useEffect, useState } from "react";
import QuizInput from "../components/QuizInput";

type Props = {};

interface Quiz {
  id: string;
  question: string;
  correctAnswer: string;
  incorrectAnswer: string[];
  subjectID: string;
}

const AddQuiz = (props) => {
  const [quizList, setQuizList] = useState<ReactElement[]>([]);
  const [quizData, setQuizData] = useState<Quiz[]>();
  const [init, setInit] = useState(2);
  useEffect(() => {
    for (let i = 0; i < init; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      quizList.push(<QuizInput />);
    }
  }, []);
  const handleAddQuizInput = () => {
    setInit((prev) => prev + 1);
    quizList.push(<QuizInput />);
  };

  const handleRemoveQuizInput = () => {
    quizList.pop();
    setInit((prev) => prev - 1);
  };
  return (
    <div>
      <form className="flex flex-col items-center">
        {quizList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <div className="flex">
          <div
            className="cursor-pointer mt-10 bg-slate-700 p-2 mr-1 rounded-lg"
            onClick={handleAddQuizInput}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div
            className="cursor-pointer mt-10 bg-slate-700 p-2 rounded-lg"
            onClick={handleRemoveQuizInput}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <button className="mt-10 bg-blue-400 p-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default AddQuiz;
