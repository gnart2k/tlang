import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { prisma } from "../lib/db";
type Props = {};

interface Subject {
  id: string;
  title: string;
}
const SubjectList = (props: Props) => {
  const [subjectList, setSubjectList] = useState<Subject[]>();
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/getsubject");
      setSubjectList((prev) => response.data);
    };
    fetchData();
  }, []);

  const handleClick = (e: string) => {
    router.push(`/quizset/get/${e}`);
  };
  return (
    <div className="flex flex-col items-center w-2/12 p-4 h-[700px] rounded-lg mt-10 mr-4 border border-slate-600 overflow-x-hidden overflow-y-scroll">
      {subjectList?.map((subject) => (
        <div
          className="text-center w-10/12 cursor-pointer mt-10 rounded-lg bg-slate-500 py-3 "
          key={subject.id}
          onClick={(e) => handleClick(subject.id)}
        >
          {subject.title}
        </div>
      ))}
    </div>
  );
};

export default SubjectList;
