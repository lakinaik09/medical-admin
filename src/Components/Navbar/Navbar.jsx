import React, { useState } from "react";
import Logo from "../../assets/saisaburi_logo.jpg";
import Logo1 from "../../assets/logo_square.jpg";
import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";



import { Link } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false)



  return (
    <>
      <header>
        <nav  className="flex justify-end items-center bg-indigo-950 text-white p-2 w-full">
         
          <div className="right-side-tabs flex items-center">
            <div className="searchbar bg-slate-700 flex items-cente px-3">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search By Patient Name"
                className="bg-transparent outline-none p-2"
              />
              <button>
                <IoIosSearch className="text-2xl font-bold"/>
              </button>
            </div>
            <div className="other-menu ps-3">
              <ul className="flex items-center gap-4">
                <li className="relative">
                  <Link>
                    <IoIosNotificationsOutline className="text-2xl"/>
                    <span className="absolute -top-2 -right-1 text-xs bg-orange-500 text-white rounded-full w-4 h-4 flex justify-center items-center">1</span>
                  </Link>
                </li>
                <li>
                  <Link>
                  <FaBed className="inline-block text-2xl"/>
                  <span className="mt-5 ps-1">Bed Status</span>
                  </Link>
                </li>
                <li>
                  <Link title="Calendar">
                  <FaRegCalendarAlt className="text-xl"/>
                  </Link>
                </li>
                <li>
                  <Link title="Task">
                  <FiCheckSquare className="text-xl"/>
                  </Link>
                </li>
                <li className="w-10 h-10 rounded-full bg-white"></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
