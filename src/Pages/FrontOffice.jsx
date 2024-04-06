import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
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
    e.stopProgation();
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      patientName: "John Doe",
      appointmentNo: "A001",
      date: "2024-04-06",
      phone: "123-456-7890",
      gender: "Male",
      doctor: "Dr. Smith",
      source: "Referral",
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      appointmentNo: "A002",
      date: "2024-04-07",
      phone: "987-654-3210",
      gender: "Female",
      doctor: "Dr. Johnson",
      source: "Walk-in",
      status: "Confirmed",
    },
    // Add more rows as needed
  ]);

  return (
    <Layout>
      <div className="bg-white border rounded-sm">
        <div className="header py-2 px-3 flex justify-between border-b">
          <div>
            <h1>Appointment Details</h1>
          </div>
          <div className="">
            <ul className="flex gap-4">
              <li>
                <button
                  className=" bg-black text-white p-1 flex items-center gap-1 text-xs"
                  onClick={openModal}
                >
                  +Add Appointment
                </button>
              </li>
              <li>
                <button className=" bg-black text-white p-1 flex items-center gap-1 text-xs">
                  <FaBars className="inline-block" />
                  <span>Visitor Book</span>
                </button>
              </li>
              <li>
                <button className=" bg-black text-white p-1 flex items-center gap-1 text-xs">
                  <FaBars className="inline-block" />
                  <span>Phone Call Log</span>
                </button>
              </li>
              <li>
                <button className=" bg-black text-white p-1 flex items-center gap-1 text-xs">
                  <FaBars className="inline-block" />
                  <span>Postal</span>
                </button>
                <ul className="hidden">
                  <li>
                    <NavLink>Recieve</NavLink>
                  </li>
                  <li>
                    <NavLink>Dispatch</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <button className=" bg-black text-white p-1 flex items-center gap-1 text-xs">
                  <FaBars className="inline-block" />
                  <span>Compain</span>
                </button>
              </li>
            </ul>
          </div>

          {/* ================Modal================ */}

          {isModalOpen && <AddPatientModal closeModal={closeModal} />}
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
            <button title="Copy">{/* <MdOutlineContentCopy /> */}</button>
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
