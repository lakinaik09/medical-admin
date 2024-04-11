import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import FrontOffice from "./Pages/FrontOffice";
import Ipd from "./Pages/IPD"
import Opd from "./Pages/Opd"
import VisitorBook from "./Pages/VisitorBook"
import PhoneCall_Log from "./Pages/PhoneCall_Log";
import Receive from "./Pages/Postal/Receive";
import Dispatch from "./Pages/Postal/Dispatch";
import Complain from "./Pages/Complain";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/admin/" index Component={FrontOffice}/>
      <Route path="/opd" Component={Opd}/>
      <Route path="/ipd" Component={Ipd}/>
      <Route path="/admin/visitors" Component={VisitorBook}/>
      <Route path="/admin/general-call" Component={PhoneCall_Log}/>
      <Route path="/admin/receive" Component={Receive}/>
      <Route path="/admin/dispatch" Component={Dispatch}/>
      <Route path="/admin/complaint" Component={Complain}/>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
