import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [correct_number, setCorrect_number] = useState(0);
  useEffect(() => {
    const data = async () => {
      const questions: QuestionState[] = await fetchQuiz("1");
      setQuestions((obj) => questions);
    };
    data();
  }, []);
  useEffect(() => {
    setQuestion(questions[curIndex]);
  }, [curIndex, question, questions]);
  const handleClick = () => {
    if (curIndex < questions.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setEndQuiz(true);
    }

    console.log(curIndex);
  };
  return (
    <div>
      {curIndex + 1}/ {questions.length}
      {endQuiz ? (
        <div>end</div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="w-[600px] h-[100px] rounded-xl bg-slate-500 text-center">
            {question?.question}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {question?.answers.map((answer) => (
              <div
                className="bg-slate-600 p-10  rounded-lg w-[200px]"
                key={answer}
                onClick={handleClick}
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
