import React from 'react'
import { GiDungeonGate } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { FaStethoscope } from "react-icons/fa6";
import { FaBedPulse } from "react-icons/fa6";
import Logo from "../assets/saisaburi_logo.jpg";
import { MdMenu } from "react-icons/md";




const Sidebar = () => {
  return (
    <>
        <div className='sidebar h-screen bg-gray-700 text-white  transition-all duration-500'>
        <div className="flex items-center bg-indigo-950 py-[.9rem]">
           <div className="flex items-center justify-between gap-2 ps-2">
             <div className="overflow-hidden">
             <img src={Logo} alt="sai saburi hospital" className="w-44"/>
             </div>
              {/* <h4 className={`font-bold ${open ? "w-auto" : "w-0 "} overflow-hidden transition-all duration-500`}>SAI SABURI HOSPITAL PVT. LTD.</h4> */}
             <button className='p-2 hover:bg-white hover:bg-opacity-10 duration-500 rounded-full '>
               <MdMenu className="text-2xl font-semibold" onClick={()=>setOpen(!open)}/>
             </button>
           </div>
         </div>
                <ul className='w-56'>
                    <li className=''>
                        <NavLink className='bg-gray-950 text-blue-700 w-full flex items-center gap-2 p-2'>
                        <GiDungeonGate className='inline-block text-xl'/>
                        <span>Front Office</span>
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='hover:bg-gray-950 hover:text-blue-700 duration-300 w-full flex items-center gap-2 p-2'>
                        <FaStethoscope className='inline-block text-xl'/>
                        {/* <span>OPD - Out Patient</span> */}
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='hover:bg-gray-950 hover:text-blue-700 duration-300 w-full flex items-center gap-2 p-2'>
                        <FaBedPulse className='inline-block text-xl'/>
                        {/* <span>IPD - In Patient</span> */}
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='hover:bg-gray-950 hover:text-blue-700 duration-300 w-full flex items-center gap-2 p-2'>
                        <FaBedPulse className='inline-block text-xl'/>
                        {/* <span>Pharmacy</span> */}
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='hover:bg-gray-950 hover:text-blue-700 duration-300 w-full flex items-center gap-2 p-2'>
                        <FaBedPulse className='inline-block text-xl'/>
                        {/* <span>Pathology</span> */}
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='hover:bg-gray-950 hover:text-blue-700 duration-300 w-full flex items-center gap-2 p-2'>
                        <FaBedPulse className='inline-block text-xl'/>
                        {/* <span>Radiology</span> */}
                        </NavLink>
                    </li>
                </ul>
        </div>
    </>
  )
}

export default Sidebar