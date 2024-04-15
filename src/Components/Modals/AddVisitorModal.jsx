import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddVisitorModal = ({ closeModal }) => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const [inTime, setInTime] = useState(currentTime);
  const [outTime, setOutTime] = useState(currentTime);

  return (
    <div>
      <div className="fixed left-0 top-0 bg-black bg-opacity-60 backdrop-blur-sm w-screen min-h-screen overflow-y-auto flex justify-center items-center z-[9999] modal" onClick={closeModal}>
        <div className="add-visitor-modal w-[750px] h-[500px] overflow-y-auto  bg-white" onClick={(e)=>e.stopPropagation()}>
          {/* ===========Form Header============== */}
          <div className="flex justify-between items-center bg-slate-100 p-2">
            <h2 className="text-slate-500 font-semibold">Add Visitor</h2>
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
                  <label htmlFor="purpose" className="">
                    Purpose{" "}
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <select
                    name="purpose"
                    id="purpose"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  >
                    <option value="">select</option>
                    <option value="meet to dr">Meet to Dr</option>
                    <option value="meet to management">
                      Meet to Management
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="name" className="">
                    Name{" "}
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
                  <label htmlFor="phone" className="mb-1">
                    Phone
                  </label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div>
                  <label htmlFor="IdCard" className="mb-1">
                    Id Card
                  </label>
                  <br />
                  <input
                    type="text"
                    name="IdCard"
                    id="IdCard"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div className="">
                  <label htmlFor="NoOfPerson" className="mb-1">
                    Number Of Person
                  </label>
                  <br />
                  <input
                    type="number"
                    name="NoOfPerson"
                    id="NoOfPerson"
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
                <div>
                  <label htmlFor="inTime" className="mb-1">
                    In Time
                  
                  </label>
                  <br />
                  <input
                    type="time"
                    name="inTime"
                    id="inTime"
                    value={inTime}
                    onChange={(e) => setInTime(e.target.value)}
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div>
                  <label htmlFor="outTime" className="mb-1">
                    Out Time
                  
                  </label>
                  <br />
                  <input
                    type="time"
                    name="outTime"
                    id="outTime"
                    value={outTime}
                    onChange={(e) => setOutTime(e.target.value)}
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="note">Note</label>
                  <br />
                  <textarea
                    name="note"
                    id="note"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <label htmlFor="document">Attach Document</label> <br />
                  <input
                    type="file"
                    className="border focus:outline focus:outline-blue-500 outline-none outline-blue-60 w-full p-1"
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

export default AddVisitorModal;
