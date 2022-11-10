import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

type Props = {};
interface Card {
  id: string;
  question?: string;
  correctAnswer?: string;
  quizSetId?: string;
}

const styles = {
  btn: "w-22 h-22 flex m-2 items-center justify-center p-4 cursor-pointer hover:bg-slate-600 rounded-[50%]",
};

export default function FlashCard({}): JSX.Element {
  const router = useRouter();
  const { fid } = router.query;

  const [cardStyle, setCardStyle] = useState<string | undefined>(
    "transition ease-in-out duration-500 "
  );

  const [slide, setSlide] = useState(false);

  const [data, setData] = useState<Card[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { fid } = router.query;
      const url = "/api/quiz/" + fid;
      const response = await axios.get(url);
      setData((prev) => response.data);
    };
    fetchData();
  }, [fid]);

  const [curCard, setCurCard] = useState<Card | null>(null);
  const [curIndex, setCurIndex] = useState(0);
  useEffect(() => {
    setCurCard((prev) => data[curIndex]);
  }, [curIndex, data]);

  const nextCard = (e: Event) => {
    setCurIndex((i) => i + 1);
    if (curIndex >= data.length - 1) {
      setCurIndex(0);
    }

    setSlide((prev) => true);
    let temp = "transition ease-in-out duration-500";
    setCardStyle((prev) => prev + " " + "fade_");
    setTimeout(() => setCardStyle((prev) => temp), 500);
  };

  const prevCard = () => {
    setCurIndex((i) => i - 1);
    if (curIndex <= 0) {
      setCurIndex(data.length - 1);
    }

    setSlide((prev) => true);
    let temp = "transition ease-in-out duration-500 ";
    setCardStyle((prev) => prev + " " + "fade");
    setTimeout(() => setCardStyle((prev) => temp), 500);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className={cardStyle}>
        <Card
          key={curCard?.id}
          define={curCard?.question!}
          value={curCard?.correctAnswer!}
        />

        {/* {data.map((item) => (
          <Card key={item.question} question={item.question} correctAnswer={item.correctAnswer} />
        ))} */}
      </div>
      {/* navigation */}
      <div className="flex">
        <div className={styles.btn} id="prev" onClick={(e: any) => nextCard(e)}>
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
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </div>
        <div className={styles.btn} id="next" onClick={prevCard}>
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
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
