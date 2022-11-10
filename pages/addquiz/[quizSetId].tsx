import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import QuizInput from "../../components/QuizInput";

interface Quiz {
  question?: string;
  correctAnswer?: string;
  incorrectAnswer?: string[];
  quizSetId?: string;
}

type Props = {};

const AddQuizParam = (props: Props) => {
  const [quizList, setQuizList] = useState<ReactElement[]>([]);
  const [quizData, setQuizData] = useState<Quiz | null>(null);
  const [init, setInit] = useState(2);
  const router = useRouter();
  const quizSetId_: string = router.query.quizSetId as string;
  useEffect(() => {
    const newQuiz: Quiz = { ...quizData, quizSetId: quizSetId_ };
    setQuizData((prev) => newQuiz);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    const newQuiz: Quiz = { ...quizData, [name]: value };
    setQuizData(newQuiz);
  };

  const handleClick = () => {
    console.log(quizData);
    axios.post("/api/quiz/" + quizSetId_, {
      question: quizData?.question,
      correctAnswer: quizData?.correctAnswer,
    });
  };
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col items-center justify-center w-7/12 h-[500px] rounded-md bg-slate-600">
        <input
          placeholder="question"
          name="question"
          className="mb-2 p-2 rounded-lg"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <input
          placeholder="correct answer"
          name="correctAnswer"
          className="mb-2 p-2 rounded-lg"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <button className="bg-blue-600 p-2 rounded-md" onClick={handleClick}>
          Add Question
        </button>
      </div>
      {/* <form className="flex flex-col items-center">
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
      </form> */}
    </div>
  );
};

export default AddQuizParam;
