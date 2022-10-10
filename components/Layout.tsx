import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="overflow-x-hidden dark:bg-gray-900 dark:text-white h-screen w-screen">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
