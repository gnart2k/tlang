import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type ButtonProps = {
  onClick: (event: MouseEvent) => void;
};

interface QuizSet {
  id: string;
  title: string;
  author: string;
}
const QuizSet = (): JSX.Element => {
  const router = useRouter();
  const [quizSets, setQuizSets] = useState<QuizSet[]>([]);
  useEffect(() => {
    const fetchQuiz = async () => {
      let response = await axios.get("/api/getquiz");
      setQuizSets((prev) => response.data);
    };
    fetchQuiz();
  }, []);

  const handleClick = (id: string) => {
    router.push("/preview/" + id);
  };

  const addQuizSet = () => {
    router.push("/addquizset");
  };

  const addSubject = () => {
    router.push("/addsubject");
  };
  return (
    <div className="w-10/12">
      <div className="w-11/12 grid justify-items-end">
        <div>
          <button
            onClick={addQuizSet}
            className="p-2 mr-2 w-28 bg-blue-600 rounded-lg"
          >
            Add QuizSet
          </button>

          <button
            onClick={addSubject}
            className="p-2 w-28 bg-blue-600 rounded-lg"
          >
            Add Subject
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="grid grid-cols-3 gap-2">
          {quizSets.map((quizSet) => (
            <div key={quizSet.id}>
              <div
                onClick={(ButtonProps) => handleClick(quizSet.id)}
                className="w-[200px] h-[100px] flex rounded-lg items-center cursor-pointer justify-center m-10 bg-slate-600"
              >
                {quizSet.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizSet;
