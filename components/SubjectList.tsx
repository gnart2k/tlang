import axios from "axios";
import React, { useEffect, useState } from "react";
import { prisma } from "../lib/db";
type Props = {};

interface Subject {
  id: string;
  title: string;
}
const SubjectList = (props: Props) => {
  const [subjectList, setSubjectList] = useState<Subject[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/getsubject");
      console.log(response.data);
      setSubjectList((prev) => response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-2/12 p-4 h-[700px] rounded-lg mt-10 mr-4 border border-slate-200 overflow-scroll">
      {subjectList?.map((subject) => (
        <div
          className="text-center w-32 cursor-pointer mt-10 rounded-lg bg-slate-500 py-3 "
          key={subject.id}
        >
          {subject.title}
        </div>
      ))}
    </div>
  );
};

export default SubjectList;
