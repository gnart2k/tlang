import React, { useEffect, useState } from "react";
import { prisma } from "../lib/db";
type Props = {
  id: string;
  name: string;
  email: string;
  image: string;
};

const Test = (props: Props[]) => {
  const users: Props[] = Object.values(props)[0];
  return (
    <div>
      {users.map((user: Props) => (
        <div key={user.id}>{user.name}</div>
      ))}
      {/* {user.map(item => <div key={item.id}></div>)} */}
    </div>
  );
};

export default Test;

export const getServerSideProps = async () => {
  const users = await prisma.user.findMany({});
  return { props: { users } };
};
