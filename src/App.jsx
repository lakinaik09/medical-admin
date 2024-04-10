import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import FrontOffice from "./Pages/FrontOffice";
import Ipd from "./Pages/IPD"
import Opd from "./Pages/Opd"
import VisitorBook from "./Pages/VisitorBook"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/admin/" index Component={FrontOffice}/>
      <Route path="/opd" Component={Opd}/>
      <Route path="/ipd" Component={Ipd}/>
      <Route path="/admin/visitors" Component={VisitorBook}/>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
