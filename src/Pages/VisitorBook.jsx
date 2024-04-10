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
import NoData from "../Components/NoData";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import AddVisitorModal from "../Components/Modals/AddVisitorModal";




const VisitorBook = () => {
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
            <h1>Visitor List</h1>
          </div>
          <div className="">
          <button
                  className=" bg-black text-white p-1 flex items-center gap-1 text-xs"
                  onClick={openModal}
                >
                  +Add Visitor
                </button>
          {isModalOpen && <AddVisitorModal closeModal={closeModal} />}
          </div>

          {/* ================Modal================ */}

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
            <button title="Copy">
              <MdOutlineContentCopy />
            </button>
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
                      <span>Purpose</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Name</span>
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
                      <span>Date</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>In Time</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Out Time</span>
                      <TiArrowSortedDown />
                    </button>
                  </th>
                  <th className="py-2 text-start bg-slate-50 text-slate-600">
                    <button className="flex items-center font-medium">
                      <span>Source</span>
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

export default VisitorBook;
