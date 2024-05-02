import React, { useState } from 'react'
import { GiDungeonGate } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { FaStethoscope } from "react-icons/fa6";
import { FaBedPulse } from "react-icons/fa6";
import Logo from "../assets/saisaburi_logo.jpg";
import SquareLogo from "../assets/logo_square.jpg"
import { MdMenu } from "react-icons/md";




const Sidebar = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
        <div className='sidebar h-screen bg-gray-700 text-white  transition-all duration-500'>
        <div className="flex items-center bg-indigo-950 py-2">
           <div className="flex items-center justify-between">
             <div className="overflow-hidden">
              {
                open ?
                <img src={SquareLogo} alt="sai saburi hospital" className="w-10 hidden"/>
                :
                <img src={Logo} alt="sai saburi hospital" className="w-52"/>
              }
             </div>
              {/* <h4 className={`font-bold ${open ? "w-auto" : "w-0 "} overflow-hidden transition-all duration-500`}>SAI SABURI HOSPITAL PVT. LTD.</h4> */}
             <button className='p-2 hover:bg-white hover:bg-opacity-10 duration-500 rounded-full '>
               <MdMenu className="text-2xl font-semibold" onClick={()=>setOpen(!open)}/>
             </button>
           </div>
         </div>
                <ul className='flex flex-col justify-center'>
                    <li className='w-full'>
                        <NavLink className=' text-slate-500 hover:text-white hover:bg-gray-950 duration-300 w-full flex items-center gap-2 p-2'>
                        <GiDungeonGate className='inline-block text-xl'/>
                        <span className={`${open?"hidden":"block"}`}>Front Office</span>
                        </NavLink>
                    </li>
                    <li className='w-full'>
                        <NavLink className=' text-slate-500 hover:text-white hover:bg-gray-950 duration-300 w-full flex items-center gap-2 p-2'>
                        <GiDungeonGate className='inline-block text-xl'/>
                        <span className={`${open?"hidden":"block"}`}>Front Office</span>
                        </NavLink>
                    </li>
                    <li className='w-full'>
                        <NavLink className=' text-slate-500 hover:text-white hover:bg-gray-950 duration-300 w-full flex items-center gap-2 p-2'>
                        <GiDungeonGate className='inline-block text-xl'/>
                        <span className={`${open?"hidden":"block"}`}>Front Office</span>
                        </NavLink>
                    </li>
                    <li className='w-full'>
                        <NavLink className=' text-slate-500 hover:text-white hover:bg-gray-950 duration-300 w-full flex items-center gap-2 p-2'>
                        <GiDungeonGate className='inline-block text-xl'/>
                        <span className={`${open?"hidden":"block"}`}>Front Office</span>
                        </NavLink>
                    </li>
                    <li className='w-full'>
                        <NavLink className=' text-slate-500 hover:text-white hover:bg-gray-950 duration-300 w-full flex items-center gap-2 p-2'>
                        <GiDungeonGate className='inline-block text-xl'/>
                        <span className={`${open?"hidden":"block"}`}>Front Office</span>
                        </NavLink>
                    </li>
                  
                </ul>
        </div>
    </>
  )
}

export default Sidebar