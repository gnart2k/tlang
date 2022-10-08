import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};
interface Card {
  id: string;
  define: string;
  value: string;
  quizSetId: string;
}

const styles = {
  btn: "flex p-6 rounded-xl m-4 bg-slate-600",
};
const Preview = (props: Props) => {
  const router = useRouter();
  const { quizsetid } = router.query;
  const [data, setData] = useState<Card[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/data.json");
      setData((prev) =>
        response.data.filter((item: Card) => item.quizSetId == quizsetid)
      );
    };
    fetchData();
  }, [data, quizsetid]);
  return (
    //preview data
    <div className="flex w-full overflow-scroll justify-center overflow-x-hidden h-[80vh]">
      <div className="w-[600px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-slate-700 mt-10 p-5 rounded-xl justify-between"
          >
            <div>{item.define}</div>
            <div className="w-[100px]">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-[40%] flex items-center justify-center">
        {/* quiz */}
        <button
          className={styles.btn}
          onClick={(e) => router.push("/quiz/" + quizsetid)}
        >
          Take Quiz
        </button>
        {/* flashcard */}
        <button
          onClick={(e) => router.push("/flashcard/" + quizsetid)}
          className={styles.btn}
        >
          Flash Card
        </button>
      </div>
    </div>
  );
};

export default Preview;
