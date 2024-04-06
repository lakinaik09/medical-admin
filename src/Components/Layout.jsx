import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="sticky top-0 flex">
        <Sidebar />
        <div className="flex w-full flex-col">
          <Navbar />
          <div className="p-4 bg-slate-50 w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
