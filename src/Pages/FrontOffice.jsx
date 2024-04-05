import React from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Layout from '../Components/Layout';
import { FiColumns } from 'react-icons/fi';
import {
    AiOutlineFileExcel,
    AiOutlineFilePdf,
    AiOutlinePrinter,
  } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsFiletypeCsv } from "react-icons/bs";
import AddPatient from '../Components/Modals/AddPatientModal';
import AddPatientModal from '../Components/Modals/AddPatientModal';



const FrontOffice = () => {
  return (
    <Layout>
        <div className='bg-white border rounded-sm'>
        <div className="header py-2 px-3 flex justify-between border-b">
            <div>
            <h1>Appointment Details</h1>
            </div>
            <div className=''>
                <ul className='flex gap-4'>
                    <li>
                        <button className=' bg-black text-white p-1 flex items-center gap-1 text-xs'>
                            +Add Appointment
                        </button>
                    </li>
                    <li>
                        <button className=' bg-black text-white p-1 flex items-center gap-1 text-xs'>
                        <FaBars className='inline-block'/>
                           <span>Visitor Book</span>
                        </button>
                    </li>
                    <li>
                        <button className=' bg-black text-white p-1 flex items-center gap-1 text-xs'>
                        <FaBars className='inline-block'/>
                           <span>Phone Call Log</span>
                        </button>
                    </li>
                    <li>
                        <button className=' bg-black text-white p-1 flex items-center gap-1 text-xs'>
                        <FaBars className='inline-block'/>
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
                        <button className=' bg-black text-white p-1 flex items-center gap-1 text-xs'>
                        <FaBars className='inline-block'/>
                           <span>Compain</span>
                        </button>
                    </li>
                   
                </ul>
            </div>

            {/* ================Modal================ */}

              <AddPatientModal/>

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
                {/* <MdOutlineContentCopy /> */}
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
    </div>
    </Layout>
  )
}

export default FrontOffice