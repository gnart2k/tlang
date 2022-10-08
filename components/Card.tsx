import { Console } from "console";
import React, { useState } from "react";

type Props = {
  define: string;
  value: string;
};

const Card = ({ define, value }: Props): JSX.Element => {
  const [isFlip, setIsFlip] = useState(false);
  const flipCard = () => {
    setIsFlip((prev) => !prev);
  };
  return (
    <div className="flip-card">
      {isFlip ? (
        <div
          className="card-rotate w-[700px] h-[400px] bg-slate-700 rounded-lg flex items-center justify-center mb-10 cursor-pointer shadow-lg"
          onClick={flipCard}
        >
          <div className="text-[20px]">
            <div className="text-flip">{define}</div>
          </div>
        </div>
      ) : (
        <div
          className="card-rotate-revert w-[700px] h-[400px] bg-slate-700 rounded-lg flex items-center justify-center mb-10 cursor-pointer shadow-lg"
          onClick={flipCard}
        >
          <div className=" text-[20px]">
            <div className="">{value}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
