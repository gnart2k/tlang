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

  const addQuiz = async () => {
    await axios.post("api/quizset", {
      title: quizTitle.current?.value,
      authorEmail: data.data?.user?.email,
      subjectID: subjectId.current?.value,
    });
  };
  useEffect(() => {
    const fetchSubject = async () => {
      const subjectList = await axios.get("/api/getsubject");
      setSubject((prev) => subjectList.data);
    };
    fetchSubject();
  }, []);
  return (
    <div className="text-gray-800">
      <input type="text" ref={quizTitle} placeholder="title" />
      <label htmlFor="subject">Subject</label>
      <select id="subject" ref={subjectId} name="subject">
        {subject.map((item, index) => (
          <option key={index} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <button className="p-2 bg-blue-400 rounded-lg" onClick={addQuiz}>
        Add quiz
      </button>
    </div>
  );
};

export default AddQuizSet;
