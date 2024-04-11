import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddComplainModal = ({ closeModal }) => {
    const today = new Date().toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState(today);
  
  return (
    <div>
      <div className="fixed left-0 top-0 bg-black bg-opacity-60 backdrop-blur-sm w-screen h-screen flex justify-center items-center z-[9999] modal">
        <div className="add-patient-modal w-[750px] bg-white">
          {/* ===========Form Header============== */}
          <div className="flex justify-between items-center bg-slate-100 p-2">
            <h2 className="text-slate-500 font-semibold"> Add Complain</h2>
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
                  <label htmlFor="complain_type">Complain Type</label>
                  <select
                    name="complain_type"
                    id="complain_type"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  >
                    <option value="">select</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="source">Source</label>
                  <select
                    name="source"
                    id="source"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  >
                    <option value="">select</option>
                    <option value="hospital">Hospital</option>
                    <option value="doctor">Doctor</option>
                    <option value="clinic">Clinic</option>
                  </select>
                </div>
                <div>
                    <label htmlFor="complain_by">Complain By <span className="text-red-600 relative top-2 text-lg">*</span></label>
                    <input type="text" name="complain_by" id="complain_by" className="border rounded-none focus:outline outline-blue-600 w-full p-1"/>
                </div>
                <div>
                    <label htmlFor="phone">Phone<span className="text-red-600 relative top-2 text-lg">*</span></label>
                    <input type="text" name="phone" id="phone" className="border rounded-none focus:outline outline-blue-600 w-full p-1"/>
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
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                    name="description"
                    rows={1}
                    id="description"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  ></textarea>
                </div>
                <div>
                    <label htmlFor="action">Action Taken<span className="text-red-600 relative top-2 text-lg">*</span></label>
                    <input type="text" name="action" id="action" className="border rounded-none focus:outline outline-blue-600 w-full p-1"/>
                </div>
                <div>
                    <label htmlFor="assigned">Assigned<span className="text-red-600 relative top-2 text-lg">*</span></label>
                    <input type="text" name="assigned" id="assigned" className="border rounded-none focus:outline outline-blue-600 w-full p-1"/>
                </div>
                <div className="col-span-2">
                  <label htmlFor="note">Note</label>
                  <br />
                  <textarea
                    name="note"
                    rows={1}
                    id="note"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  ></textarea>
                </div>
                

               
                <div className="col-span-2">
                  <label htmlFor="document">Attach Document</label> <br />
                  <input
                    type="file"
                    className="border rounded-none focus:outline-1 outline-1 outline-blue-600 w-full p-1"
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

export default AddComplainModal;
