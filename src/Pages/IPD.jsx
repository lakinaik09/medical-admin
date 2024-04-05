import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import {
  AiOutlineFileExcel,
  AiOutlineFilePdf,
  AiOutlinePrinter,
} from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { FiColumns } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { FaRegShareSquare } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";




const IPD = () => {
  return (
    <>
      <div className="flex w-full h-screen bg-slate-200">
        <div className="w-[20%] bg-red-500">
        </div>
        <div className="w-[80%] m-4 bg-white">
          <div className="flex justify-between border-b py-2">
            <div>
              <h2 className="text-xl font-bold px-4">IPD Patient</h2>
            </div>
          </div>
          {/* ===============Search section================ */}
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
          {/* =========table div start here========== */}
          <div class="w-full">
  {/* <!-- Table Header --> */}
  <div class="flex justify-between items-center border-b px-2 text-left">
  <div class="header-cell text-slate-700 text-sm w-[15%]">
    <span>Name</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[10%]">
    <span>IPD No</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[14%]">
    <span>Patient Id</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[10%]">
    <span>Gender</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[15%]">
    <span>Phone</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[15%]">
    <span>Consultant</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[15%]">
    <span>Bed</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[8%]">
    <span>{`Charges (Rs.)`}</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[7%]">
    <span>{`Payment (Rs.)`}</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[7%]">
    <span>{`Due Payment (Rs.)`}</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
  <div class="header-cell text-slate-700 text-sm w-[7%]">
    <span>{`Credit Limit (Rs.)`}</span>
    <span class="inline-block ms-1">
      <FaCaretDown />
    </span>
  </div>
</div>

  {/* <!-- Table Body --> */}
  <div class="flex justify-between items-center px-2 text-left pt-1 relative group">
    <div className="icons-data w-full h-full bg-[#3f3e3e23]  absolute left-0 hidden items-center justify-end px-2 group-hover:flex">
    <div className="flex gap-2 ">
    <button className="p-2 bg-white" title="Revisit"><GoArrowSwitch/></button>
    <button className="p-2 bg-white" title="Show"><HiMiniBars3/></button>
    <button className="p-2 bg-white" title="Move Patient in IPD"><FaRegShareSquare/></button>
    </div>
    </div>

  <div class="name text-blue-700 w-[15%]" >LAXMI NAYAK</div>
  <div class="Id w-[10%]">2023</div>
  <div class="guidance w-[14%]">09939</div>
  <div class="gender w-[10%]">FEMALE</div>
  <div class="phone w-[15%]">9999999999</div>
  <div class="consultant w-[15%]">DR. PYANGYA SNAGHYI</div>
  <div class="last-visit w-[15%]">20-09-2023 09:30 AM</div>
  <div class="Total-visit w-[7%]">1</div>
  <div class="Total-visit w-[7%]">1</div>
  <div class="Total-visit w-[5%]">1</div>
  <div class="Total-visit w-[7%]">1</div>
</div>

</div>


        </div>
      </div>
    </>
  );
};

export default IPD;
