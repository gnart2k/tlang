import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { userAgent } from "next/server";
import React from "react";

type User = {
  email: string;
  image: string;
  name: string;
};

type Props = {};

const Header = (props: Props) => {
  const { data } = useSession();
  const user = data?.user;
  const router = useRouter();
  return (
    <header className="flex items-center justify-between h-12 border-b border-gray-500 bg-black p-10">
      <div className="cursor-pointer logo" onClick={(e) => router.push("/")}>
        Logo
      </div>
      <div className="rounded-2xl bg-slate-300 p-2 text-gray-800">
        <input
          className="bg-transparent outline-0 ml-2"
          id="search"
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        {user ? (
          <div className="flex items-center justify-center login-button">
            <img
              src={user.image != null ? user.image : ""}
              alt="user"
              className="rounded-[50%] w-10"
            />
            <div className="ml-4">{user.name}</div>
          </div>
        ) : (
          <button
            onClick={(e) => router.push("/login")}
            className="bg-blue-700 p-2 rounded-lg hover:-translate-y-1 transition ease-in-out duration-300"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
