import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar />
        <div className="p-4 bg-slate-50 w-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
