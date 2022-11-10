import React, { useEffect, useState } from "react";

type Props = {
  id: string;
};

type Quiz = {
  question?: string | undefined;
  correctAnswer?: string | undefined;
  quizSetId?: string | undefined;
};

type InputProps = {
  onClick: (event: InputEvent) => void;
};

const QuizInput = (props: Props) => {
  const [quizState, setQuizState] = useState<Quiz | null>(null);
  useEffect(() => {
    const newQuizState: Quiz = { ...quizState, quizSetId: props.id };
    setQuizState((prev) => newQuizState);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    const newQuizState: Quiz = { ...quizState, [name]: value };
    setQuizState((prev) => newQuizState);
  };
  return (
    <div>
      <div className="flex items-center justify-around w-[800px] mt-4">
        <input
          placeholder="question"
          className={styles.input}
          name="question"
          // onBlur={}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <input
          placeholder="correct answer"
          className={styles.input}
          name="correctAnswer"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </div>
    </div>
  );
};

const styles = {
  input: "py-2 pl-2 w-[45%] bg-transparent border-b focus:outline-0 rounded-sm",
};

export default QuizInput;
