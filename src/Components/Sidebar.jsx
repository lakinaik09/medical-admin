import React from 'react'
import { GiDungeonGate } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
        <div className='sidebar h-screen bg-gray-700 text-white'>
                <ul>
                    <li className=' w-36'>
                        <NavLink className='bg-gray-950 w-full flex items-center gap-2 p-2'>
                        <GiDungeonGate className='inline-block text-xl'/>
                        <span>Front Office</span>
                        </NavLink>
                    </li>
                </ul>
        </div>
    </>
  )
}

export default Sidebar