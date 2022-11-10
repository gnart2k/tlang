import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};

const AddSubject = (props) => {
  const [title, setTitle] = useState<String>();
  const { data } = useSession();
  const handleSubmit = async () => {
    await axios.post("/api/addsubject", {
      title: title,
    });
  };
  return (
    <div className="w-7/12 mt-10 bg-slate-500 h-[500px] mx-auto rounded-md flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          className="mb-2 p-1 rounded-md"
        />
        <button type="submit" className="p-1 rounded-md bg-blue-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSubject;
