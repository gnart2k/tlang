import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white h-screen w-screen">
      {props.children}
    </div>
  );
};

export default Layout;
