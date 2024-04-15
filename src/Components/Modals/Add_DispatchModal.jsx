import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Add_DispatchModal = ({ closeModal }) => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <div>
      <div className="fixed left-0 top-0 bg-black bg-opacity-60 backdrop-blur-sm w-screen h-screen flex justify-center items-center z-[9999] modal" onClick={closeModal}>
        <div className="add-dispatch-modal w-[750px] bg-white" onClick={(e)=>e.stopPropagation()}>
          {/* ===========Form Header============== */}
          <div className="flex justify-between items-center bg-slate-100 p-2">
            <h2 className="text-slate-500 font-semibold">Add Dispatch</h2>
            <div className="">
              <button
                className="bg-red-600 hover:bg-red-600 hover:text-slate-100 hover:rotate-180 duration-300 text-white rounded-full p-1"
                onClick={closeModal}
              >
                <IoMdClose className="text-xl" />
              </button>
            </div>
          </div>
          <div className="bg-white p-7">
            <form action="">
              <div className="grid grid-cols-2 gap-4">
              <div>
                  <label htmlFor="toTitle" className="mb-1">
                    To Title
                  </label>
                  <br />
                  <input
                    type="text"
                    name="toTitle"
                    id="toTitle"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                
                <div>
                  <label htmlFor="ReferenceNo" className="mb-1">
                    Reference No
                  </label>
                  <br />
                  <input
                    type="text"
                    name="ReferenceNo"
                    id="ReferenceNo"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>

                <div className="">
                  <label htmlFor="address">Address</label>
                  <br />
                  <textarea
                    name="address"
                    id="address"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  ></textarea>
                </div>
                <div className="">
                  <label htmlFor="note">Note</label>
                  <br />
                  <textarea
                    name="note"
                    id="note"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="fromTitle" className="">
                    From Title
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="fromTitle"
                    id="fromTitle"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="mb-1">
                    Date
                  </label>
                  <br />
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={selectedDate}
                    min={today}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="document">Attach Document</label> <br />
                  <input
                    type="file"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>

                <div className="justify-items-end text-end col-span-2 pt-4 border-t">
                  <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-900 duration-300">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_DispatchModal;
