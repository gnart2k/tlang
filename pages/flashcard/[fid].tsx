import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

type Props = {};
interface Card {
  id: string;
  define?: string;
  value?: string;
  quizSetId?: string;
}

const styles = {
  btn: "w-22 h-22 flex m-2 items-center justify-center p-4 cursor-pointer hover:bg-slate-600 rounded-[50%]",
};

export default function FlashCard({}: Card): JSX.Element {
  const router = useRouter();
  const { fid } = router.query;

  const [cardStyle, setCardStyle] = useState(
    "w-[700px] cursor-pointer transition ease-in-out duration-500 "
  );

  const [data, setData] = useState<Card[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/data.json");
      setData((prev) =>
        response.data.filter((item: Card) => item.quizSetId == fid)
      );
      console.log(response.data.filter((item: Card) => item.quizSetId == fid));
    };
    fetchData();
  }, [fid]);

  const [curCard, setCurCard] = useState<Card | null>(null);
  const [curIndex, setCurIndex] = useState(0);
  useEffect(() => {
    setCurCard((prev) => data[curIndex]);
  }, [curIndex, data]);

  const nextCard = () => {
    setCurIndex((i) => i + 1);
    if (curIndex >= data.length - 1) {
      setCurIndex(0);
    }
    console.log(data.length);
  };

  const prevCard = () => {
    setCurIndex((i) => i - 1);
    if (curIndex <= 0) {
      setCurIndex(data.length - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <Card
          key={curCard?.define}
          define={curCard?.define!}
          value={curCard?.value!}
        />

        {/* {data.map((item) => (
          <Card key={item.define} define={item.define} value={item.value} />
        ))} */}
      </div>
      {/* navigation */}
      <div className="flex">
        <div className={styles.btn} onClick={nextCard}>
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
        <div className={styles.btn} onClick={prevCard}>
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
