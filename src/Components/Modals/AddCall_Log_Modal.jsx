import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const AddCall_Log_Modal = ({ closeModal }) => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <div>
      <div className="fixed left-0 top-0 bg-black bg-opacity-60 backdrop-blur-sm w-screen h-screen flex justify-center items-center z-[9999] modal">
        <div className="add-patient-modal w-[750px] bg-white">
          {/* ===========Form Header============== */}
          <div className="flex justify-between items-center bg-slate-100 p-2">
            <h2 className="text-slate-500 font-semibold">Add Call Log</h2>
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
                  <label htmlFor="name" className="">
                    Name
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="">
                    Phone
                  </label>
                  <br />
                  <input
                    type="number"
                    name="phone"
                    id="phone"
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

                <div className="">
                  <label htmlFor="description">Description</label>
                  <br />
                  <textarea
                    name="description"
                    id="description"
                    rows="1"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="follow-up-date" className="mb-1">
                    Next Follow Up Date
                  </label>
                  <br />
                  <input
                    type="date"
                    name="follow-up-date"
                    id="follow-up-date"
                    min={today}
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div>
                  <label htmlFor="call-duration" className="mb-1">
                    Call Duration
                  </label>
                  <br />
                  <input
                    type="text"
                    name="call-duration"
                    id="call-duration"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>

                <div className="">
                  <label htmlFor="note">Note</label>
                  <br />
                  <textarea
                    rows="1"
                    name="note"
                    id="note"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  ></textarea>
                </div>
                <div className="flex items-center gap-1">
                  <span>Call Type</span>{" "}
                  <span className="text-red-600 font-bold text-xl relative top-1">
                    *
                  </span>
                  <div className="mx-2">
                    <label htmlFor="incoming" className="me-1">
                      Incoming
                    </label>
                    <input type="radio" name="call" id="incoming" />
                  </div>
                  <div>
                    <label htmlFor="outgoing" className="me-1">
                      Outgoing
                    </label>
                    <input type="radio" name="call" id="outgoing" />
                  </div>
                </div>

                <div className="justify-items-end text-end col-span-2 border-t pt-4">
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

export default AddCall_Log_Modal;
