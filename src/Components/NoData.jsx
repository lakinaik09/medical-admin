import React from "react";
import NodataImg from "../assets/addnewitem.png";
import { HiArrowSmLeft } from "react-icons/hi";


const NoData = () => {
  return (
    <div className="py-2 hover:bg-gray-50 duration-300 mx-4">
      <p className="text-center text-red-500 text-opacity-30">
        No data available in table
      </p>
      <div>
        <img src={NodataImg} alt="" className="mx-auto w-36 py-4" />
      </div>
      <div className="flex justify-center items-center text-green-700 font-semibold">
        <HiArrowSmLeft className="text-xl" />
        <p className="text-green-700">
          Add new record or search with different criteria
        </p>
      </div>
    </div>
  );
};

export default NoData;
