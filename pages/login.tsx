import React from "react";
import { NextPage, NextPageContext, InferGetServerSidePropsType } from "next";
import { signIn, useSession, signOut, getSession } from "next-auth/react";

type Props = {};

const Login = (props: Props) => {
  const { data } = useSession();
  console.log(data);
  return (
    <>
      <div>
        {data && data.user ? (
          <div>
            <button onClick={() => signOut()}>Sign Out</button>
            <h2>{data.user.name}</h2>
          </div>
        ) : (
          <button onClick={() => signIn("google")}>signIn</button>
        )}
      </div>
    </>
  );
};

//keep user login when refreshing
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}

export default Login;
