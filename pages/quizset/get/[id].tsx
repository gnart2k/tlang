import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

interface QuizSet {
  id: string;
  title: string;
}
const QuizSubject = (props: any) => {
  const router = useRouter();
  const [quizSetList, setQuizSetList] = useState<QuizSet[]>();
  const { id } = router.query;
  useEffect(() => {
    const fetchQuizSet = async () => {
      const res = await axios.get(`/api/quizset/${id}`);
      setQuizSetList((prev) => res.data);
    };
    fetchQuizSet();
  }, []);
  return (
    <div className=" flex justify-center w-full">
      <div className="md:w-7/12 grid grid-cols-2 lg:grid-cols-3 gap-2">
        {quizSetList?.map((item) => (
          <div
            className="w-[200px] h-[100px] flex rounded-lg items-center cursor-pointer justify-center m-10 bg-slate-600"
            key={item.id}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSubject;
