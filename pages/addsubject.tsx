import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};

const AddSubject = (props) => {
  const [title, setTitle] = useState<String>();
  const { data } = useSession();
  console.log(data?.user);
  const handleSubmit = async () => {
    await axios.post("/api/addsubject", {
      title: title,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSubject;
