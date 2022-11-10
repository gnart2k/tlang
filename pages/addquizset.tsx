import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

interface Subject {
  id: string;
  title: string;
}

const AddQuizSet = (props) => {
  const [subject, setSubject] = useState<Subject[]>([]);
  const router = useRouter();
  const quizTitle = useRef<HTMLInputElement>(null);
  const subjectId = useRef<HTMLSelectElement>(null);
  const data = useSession();
  const [status, setStatus] = useState<string>();
  const addQuiz = async () => {
    const newQuiz = {
      title: quizTitle.current?.value,
      authorEmail: data.data?.user?.email,
      subjectID: subjectId.current?.value,
    };
    console.log(newQuiz);
    const res = await axios.post("/api/quizset/a", newQuiz);
    if (res.status === 200) {
      setStatus("ok");
    }
  };
  useEffect(() => {
    const fetchSubject = async () => {
      const subjectList = await axios.get("/api/getsubject");
      setSubject((prev) => subjectList.data);
    };
    fetchSubject();
  }, []);
  return (
    <div className="flex items-center justify-center mt-10 ">
      <div className="flex flex-col items-center justify-center w-7/12 h-[600px] mt-8 bg-slate-700 p-4">
        <input
          type="text"
          ref={quizTitle}
          placeholder="title"
          className="p-1 rounded-md"
        />
        <div className="mt-4 mb-4">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            ref={subjectId}
            name="subject"
            className="bg-slate-400 rounded-md ml-2 "
          >
            {subject.map((item, index) => (
              <option key={index} value={item.id} className="">
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <button className="p-2 bg-blue-400 rounded-lg" onClick={addQuiz}>
          Add quiz
        </button>
        {status === "ok" ? (
          <div className="text-green-400 mt-2 rounded-md">
            Add successful !!
          </div>
        ) : (
          <div className="text-red-400 mt-2 rounded-md">Something wrong !!</div>
        )}
      </div>
    </div>
  );
};

export default AddQuizSet;
