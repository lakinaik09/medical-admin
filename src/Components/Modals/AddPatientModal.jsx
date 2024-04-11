import React from "react";
import { IoMdClose } from "react-icons/io";
import "../../App.css";
import { FaPlus } from "react-icons/fa";

const AddPatientModal = ({ closeModal }) => {
  return (
    <>
      <div className="fixed left-0 top-0 bg-black bg-opacity-60 backdrop-blur-sm w-screen h-screen flex justify-center items-center z-[9999] modal">
        <div className="add-patient-modal w-[750px] bg-white relative">
        <div className="flex justify-between items-center bg-slate-100 p-2">
            <h2 className="text-slate-500 font-semibold"> Add Appointment</h2>
            <div className="">
              <button
                className="bg-red-600 hover:bg-red-600 hover:text-slate-100 hover:rotate-180 duration-300 text-white rounded-full p-1"
                onClick={closeModal}
              >
                <IoMdClose className="text-xl" />
              </button>
            </div>
          </div>
          <div className="select-patient p-4 border-b focus:outline outline-blue-600 w-full-b flex justify-between">
            <select
              name="patients"
              id="patients"
              className="border focus:outline p-1 outline-blue-600 w-full"
            >
              {/* <input type="text" name="" id="" className='border focus:outline outline-blue-600 w-full bg-white'/> */}
              <option value="">Select Patient</option>
            </select>
            {/* <div className="">
              <button
                className="bg-blue-600 hover:bg-blue-800 hover:text-slate-300 hover:rotate-180 duration-300 text-white rounded-full p-2"
                onClick={closeModal}
              >
                <IoMdClose className="text-xl" />
              </button>
            </div> */}
          </div>
          <div className="form">
            <form>
              <div className="grid grid-cols-3 gap-4 border-b p-4">
              <div>
                  <label htmlFor="Name" className="">
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
                    className="border focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div>
                  <label htmlFor="patientName" className="">
                    Patient Name
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id="patientName"
                    className="border focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="">
                    Gender{" "}
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <select
                    name="gender"
                    id="gender"
                    className="border focus:outline outline-blue-600 w-full p-1"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="email" className="">
                    Email
                    <span className="text-red-600 font-bold text-xl relative top-1"></span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="border focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="">
                    Phone
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id="phone"
                    className="border focus:outline outline-blue-600 w-full p-1"
                  />
                </div>
                <div>
                  <label htmlFor="Doctore" className="">
                    Doctore{" "}
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <br />
                  <select
                    name="gender"
                    id="Doctore"
                    className="border focus:outline outline-blue-600 w-full p-1"
                  >
                    {/* <input type="text" name="" id=" " className='border p-1 w-full'/> */}
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label htmlFor="message" className="">
                    Message{" "}
                    <span className="text-red-600 font-bold text-xl relative top-1">
                      *
                    </span>
                  </label>
                  <textarea
                    name="message"
                    rows={1}
                    id="message"
                    className="border focus:outline outline-blue-600 w-full p-1"
                  ></textarea>
                </div>
                <div className="">
                  <label htmlFor="Status" className="">
                    Status
                 
                  </label>
                  <select
                    name="status"
                    id="status"
                    className="border focus:outline outline-blue-600 w-full p-2"
                  >
                    <option value="pending">Pending</option>
                    <option value="approve">Approve</option>
                    <option value="cancel">Cancel</option>
                  </select>
                </div>
              </div>
              <div className="button text-end p-4">
                <button className="px-2 py-1 bg-blue-600 text-white rounded-sm hover:bg-blue-800 duration-300 dur">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPatientModal;
