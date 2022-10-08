import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type ButtonProps = {
  onClick: (event: MouseEvent) => void;
};

interface QuizSet {
  id: string;
  title: string;
  description: string;
}
const QuizSet = (): JSX.Element => {
  const router = useRouter();
  const [quizSets, setQuizSets] = useState<QuizSet[]>([]);
  useEffect(() => {
    const fetchQuiz = async () => {
      let response = await axios.get("/quizSet.json");
      setQuizSets((prev) => response.data);
    };
    console.log(quizSets);
    fetchQuiz();
  }, [quizSets]);

  const handleClick = (id: string) => {
    router.push("/preview/" + id);
    console.log(id);
  };
  return (
    <div className="p-20 flex items-center justify-center cursor-pointer">
      {quizSets.map((quizSet) => {
        return (
          <div key={quizSet.id}>
            <div
              onClick={(ButtonProps) => handleClick(quizSet.id)}
              className="w-[200px] h-[100px] flex rounded-lg items-center justify-center m-10 bg-slate-600"
            >
              {quizSet.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuizSet;
