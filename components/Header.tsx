import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between h-12 border-b border-gray-500 bg-black p-10">
      <div className="cursor-pointer" onClick={(e) => router.push("/")}>
        Logo
      </div>
      <div className="rounded-2xl bg-slate-300 p-2 text-gray-800">
        <input
          className="bg-transparent outline-0 ml-2"
          type="text"
          placeholder="Search"
        />
      </div>
      <button className="bg-blue-700 p-2 rounded-lg hover:-translate-y-1 transition ease-in-out duration-300">
        Login
      </button>
    </div>
  );
};

export default Header;
