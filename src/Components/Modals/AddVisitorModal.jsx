import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddVisitorModal = ({ closeModal }) => {
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);

  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const [selectedTime, setSelectedTime] = useState(currentTime);


  return (
    <div>
      <div className="fixed left-0 top-0 bg-black bg-opacity-60 backdrop-blur-sm w-screen h-screen flex justify-center items-center z-[9999] modal">
        <div className="add-patient-modal min-w-96 bg-white">
          {/* ===========Form Header============== */}
          <div className="flex justify-between items-center bg-slate-100 p-2">
            <h2 className="text-slate-500">Add Visitor</h2>
            <div className="">
              <button
                className="bg-blue-600 hover:bg-blue-800 hover:text-slate-300 hover:rotate-180 duration-300 text-white rounded-full p-1"
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
                    <option value="meet to management">Meet to Management</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="name" className="mb-1">
                  Name{" "}
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <input
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
                <div>
                  <label htmlFor="NoOfPerson" className="mb-1">
                  No Of Person
                  </label>
                  <br />
                  <input
                    name="NoOfPerson"
                    id="NoOfPerson"
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                   
                </div>
                <div>
                  <label htmlFor="date" className="mb-1">
                  Date
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
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
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <input
                  type="time"
                    name="inTime"
                    id="inTime"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                   
                </div>
                <div>
                  <label htmlFor="outTime" className="mb-1">
                  Out Time
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <input
                  type="time"
                    name="outTime"
                    id="outTime"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="border rounded-none focus:outline outline-blue-600 w-full p-1"
                  />
                   
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
