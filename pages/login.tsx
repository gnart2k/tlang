import React, { useEffect } from "react";
import { NextPage, NextPageContext, InferGetServerSidePropsType } from "next";
import { signIn, useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";

type Props = {};

const Login = (props: Props) => {
  const { data } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (data && data.user) {
      router.push("/");
    }
  }, [data, data?.user]);
  return (
    <>
      <div>
        {data && data.user ? (
          <div>
            {/* <button onClick={() => signOut()}>Sign Out</button>
            <h2>{data.user.name}</h2> */}
          </div>
        ) : (
          <div className=" flex items-center justify-center h-screen">
            <button
              onClick={() => signIn("google")}
              className="border rounded-lg p-2"
            >
              <div className=" flex items-center justify-center">
                <span>Sign in with Google</span>
                <img
                  className="w-10"
                  src="https://i.pinimg.com/564x/fa/d5/52/fad552b0ed9c0bc3e193b487f315d4f7.jpg"
                  alt="google icon"
                />
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

//keep user login when refreshing
// export async function getServerSideProps(context: NextPageContext) {
//   const session = await getSession(context);
//   return {
//     props: {
//       session,
//     },
//   };
// }

export default Login;
