import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};
interface Card {
  id: string;
  question: string;
  correctAnswer: string;
  quizSetID: string;
}

const styles = {
  btn: "flex p-6 rounded-xl m-4 bg-slate-600",
};
const Preview = (props) => {
  const router = useRouter();
  const [data, setData] = useState<Card[]>([]);
  const { quizsetid } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const { quizsetid } = router.query;
      const url = "/api/quiz/" + quizsetid;
      const response = await axios.get(url);
      console.log(response.data);
      console.log(url);
      setData((prev) => response.data);
    };
    fetchData();
  }, []);
  return (
    //preview data
    <div className="flex w-full overflow-scroll justify-center overflow-x-hidden h-[80vh]">
      <div className="w-[600px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-slate-700 mt-10 p-5 rounded-xl justify-between"
          >
            <div>{item.question}</div>
            <div className="w-[100px]">{item.correctAnswer}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-[40%] flex items-center justify-center">
        {/* quiz */}
        <button
          id="takequiz"
          className={styles.btn}
          onClick={(e) => router.push("/quiz/" + quizsetid)}
        >
          Take Quiz
        </button>
        {/* flashcard */}
        <button
          id="flashcard"
          onClick={(e) => router.push("/flashcard/" + quizsetid)}
          className={styles.btn}
        >
          Flash Card
        </button>

        {/* add more quiz */}
        <button
          onClick={(e) => router.push("/addquiz/" + quizsetid)}
          className={styles.btn}
        >
          Add Quiz
        </button>
      </div>
    </div>
  );
};

export default Preview;
