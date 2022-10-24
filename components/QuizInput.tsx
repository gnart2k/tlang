import React from "react";

type Props = {};

const QuizInput = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-around w-[800px] mt-4">
        <input placeholder="question" className={styles.input} />
        <input placeholder="correct answer" className={styles.input} />
      </div>
    </div>
  );
};

const styles = {
  input: "py-2 pl-2 w-[45%] bg-transparent border-b focus:outline-0 rounded-sm",
};

export default QuizInput;
