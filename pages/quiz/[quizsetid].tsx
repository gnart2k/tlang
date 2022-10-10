import axios from "axios";
import { userAgentFromString } from "next/server";
import React, { useEffect, useRef, useState } from "react";
import { fetchQuiz, QuestionState } from "../../API";

type Props = {};

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Quiz = (): JSX.Element => {
  //fetchData
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [question, setQuestion] = useState<QuestionState | null>(null);
  const [curIndex, setIndex] = useState<number>(0);
  const [endQuiz, setEndQuiz] = useState(false);
  const [correct_number, setCorrect_number] = useState<number>(0);
  const ans = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState("");
  const [ansStyle, setAnsStyle] = useState<string>("");

  useEffect(() => {
    const data = async () => {
      const questions: QuestionState[] = await fetchQuiz("1");
      setQuestions((obj) => questions);
    };
    data();
  }, []);

  useEffect(() => {
    setQuestion(questions[curIndex]);
    setProgress(Math.round(((curIndex + 1) / questions.length) * 100) + "%");
  }, [curIndex, question, questions]);

  const handleClick = (e: MouseEvent) => {
    const { target } = e;
    if (curIndex < questions.length - 1) {
      setTimeout(() => setIndex((prev) => prev + 1), 700);
    } else {
      setEndQuiz(true);
    }
    if (target == null) {
    }
    if ((target as HTMLButtonElement).innerHTML == question?.correct_answer) {
      setCorrect_number((prev) => prev + 1);
      (target as HTMLButtonElement).style.backgroundColor = "green";
    } else {
      (target as HTMLButtonElement).style.backgroundColor = "red";
    }
    setTimeout(
      () =>
        ((target as HTMLButtonElement).style.backgroundColor =
          "rgb(71,85,104)"),
      500
    );
  };

  const handleRestart = () => {
    setIndex(0);
    setEndQuiz(false);
  };

  return (
    <div>
      <div className="w-full mt-6 mb-5 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-200 h-1 rounded-full "
          style={{ width: progress }}
        ></div>
      </div>
      {endQuiz ? (
        // final result page
        <div className="w-[400px] h-[300px] m-auto mt-40 flex items-center flex-col justify-center bg-slate-600 text-bold text-4xl rounded-xl">
          <p className="">Final Result</p>
          <div className="">
            {Math.round((correct_number / questions.length) * 100)} %
          </div>
          <button
            className="text-sm bg-blue-200 rounded-xl p-2 mt-5 text-gray-700"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      ) : (
        //quiz page
        <div className="flex flex-col items-center justify-center ">
          <div className="w-[600px] h-[100px] rounded-xl bg-slate-500 text-center">
            {question?.question}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {question?.answers.map((answer) => (
              <div
                ref={ans}
                className="bg-slate-600 p-10 cursor-pointer rounded-lg w-[200px]"
                key={answer}
                onClick={(e: any) => handleClick(e)}
              >
                {answer}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
