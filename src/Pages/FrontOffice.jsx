import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { Link, NavLink } from "react-router-dom";
import Layout from "../Components/Layout";
import { FiColumns } from "react-icons/fi";
import {
  AiOutlineFileExcel,
  AiOutlineFilePdf,
  AiOutlinePrinter,
} from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsFiletypeCsv } from "react-icons/bs";
import AddPatient from "../Components/Modals/AddPatientModal";
import AddPatientModal from "../Components/Modals/AddPatientModal";
import NoData from "../Components/NoData";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";


const FrontOffice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <Layout>
      <div className="bg-white border rounded-sm">
        <div className="header py-2 px-3 flex justify-between border-b">
          <div>
            <h1>Appointment Details</h1>
          </div>
          <div className="z-50 ">
            <ul className="flex gap-4 ">
              <li>
                <button
                  className=" bg-black text-white px-2 py-1 flex items-center gap-1 text-sm"
                  onClick={openModal}
                >
                  <FaPlus className="inline-block"/>
                  Add Appointment
                </button>
              </li>
              <li>
                <Link to={'/admin/visitors'} className=" bg-black text-white px-2 py-1 flex items-center gap-1 text-sm">
                  <FaBars className="inline-block" />
                  <span>Visitor Book</span>
                </Link>
              </li>
              <li>
                <Link to={'/admin/general-call'} className=" bg-black text-white px-2 py-1 flex items-center gap-1 text-sm">
                  <FaBars className="inline-block" />
                  <span>Phone Call Log</span>
                </Link>
              </li>
              <li className="relative group">
                <button className=" bg-black text-white px-2 py-1 flex items-center gap-1 text-sm">
                  <FaBars className="inline-block" />
                  <span>Postal</span>
                </button>
                <ul className="absolute top-6 z-10 left-0 bg-white border shadow-md w-32 hidden group-hover:block">
                  <li className="hover:bg-slate-200 p-1">
                    <Link to={'/admin/receive'} className="p-2">Recieve</Link>
                  </li>
                  <li className="hover:bg-slate-200 p-1">
                    <Link to={'/admin/dispatch'} className="p-2">Dispatch</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={'/admin/complaint'} className=" bg-black text-white px-2 py-1 flex items-center gap-1 text-sm">
                  <FaBars className="inline-block" />
                  <span>Compain</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ================Modal================ */}

          <div className={`fixed left-0 top-0 bg-black bg-opacity-60 backdrop-blur-sm w-screen h-screen ${isModalOpen?'flex':'hidden'} justify-center items-center z-[9999] modal  `} onClick={closeModal}>

          <AddPatientModal closeModal={closeModal} />
          </div>

        </div>
        <div className="flex justify-between p-4">
          <div className="search-box w-40">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="outline-0 border-b focus:border-blue-700"
            />
          </div>
          <div className="icons border-b flex gap-1">
            <button title="Copy"><MdOutlineContentCopy /></button>
            <button title="Excel">
              <AiOutlineFileExcel />
            </button>
            <button title="CSV">
              <BsFiletypeCsv />
            </button>
            <button title="PDF">
              <AiOutlineFilePdf />
            </button>
            <button title="Print">
              <AiOutlinePrinter />
            </button>
            <button title="Columns">
              <FiColumns />
            </button>
          </div>
        </div>
        {/* ===============data=============== */}
        <div className="">
          <div className="overflow-x-auto px-4 ">
            <table className="min-w-full table-auto px-4 border-b">
              <thead className="">
                <tr className="">
                  <th className="py-2 ps-1 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Patient Name</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Appointment No</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Date</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Phone</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Gender</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Doctor</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Source</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Status</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <div>
          <NoData />
        </div>
        <div className="flex justify-between p-2 border-t">
          <div>
            <p className="text-sm font-semibold">Records: 0 to 0 of 0</p>
          </div>
          <div>
            <button className="text-slate-400">
              <IoIosArrowBack />
            </button>
            <button className="text-slate-800">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FrontOffice;
