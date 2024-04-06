import React from 'react'
import { IoMdClose } from "react-icons/io";
import "../../App.css"


const AddPatientModal = ({closeModal}) => {
  return (
    <>
    <div className="fixed left-0 top-0 bg-black bg-opacity-60 backdrop-blur-sm w-screen h-screen flex justify-center items-center z-[9999] modal" onClick={closeModal}>



        <div className='add-patient-modal min-w-96 bg-white relative p-4'>

          <div className="absolute -right-2 -top-2">
            <button className='bg-blue-600 hover:bg-blue-800 hover:text-slate-300 hover:rotate-180 duration-300 text-white rounded-full p-2' onClick={closeModal}>
            <IoMdClose className='text-xl'/>
            </button>
          </div>

            <div className="select-patient p-4 border-b outline-1 outline-blue-600 w-full-b">
                <select name="patients" id="patients" className='border outline-1 p-1 outline-blue-600 w-full'>
                  {/* <input type="text" name="" id="" className='border outline-1 outline-blue-600 w-full bg-white'/> */}
                    <option value="">Select Patient</option>
                </select>
            </div>
            <div className="form">
              <form>
                <div className="grid grid-cols-3 gap-4 border-b p-4">
                  <div>
                    <label htmlFor="date" className='font-semibold'>Date <span className="text-red-600 font-bold text-xl relative top-1">*</span></label><br />
                    <input type="date" name="" id="date" className='border outline-1 outline-blue-600 w-full p-1'/>
                  </div>

                  <div>
                    <label htmlFor="patientName" className='font-semibold'>Patient Name<span className="text-red-600 font-bold text-xl relative top-1">*</span></label><br />
                    <input type="text" name="" id="patientName" className='border outline-1 outline-blue-600 w-full p-1'/>
                  </div>

                  <div>
                    <label htmlFor="gender" className='font-semibold'>Gender <span className="text-red-600 font-bold text-xl relative top-1">*</span></label><br />
                   <select name="gender" id="gender" className='border outline-1 outline-blue-600 w-full p-1'>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                   </select>
                  </div>


                  <div>
                    <label htmlFor="email" className='font-semibold'>Email<span className="text-red-600 font-bold text-xl relative top-1"></span></label><br />
                    <input type="text" name="email" id="email" className='border outline-1 outline-blue-600 w-full p-1'/>
                  </div>
                  <div>
                    <label htmlFor="phone" className='font-semibold'>Phone<span className="text-red-600 font-bold text-xl relative top-1">*</span></label><br />
                    <input type="text" name="" id="phone" className='border outline-1 outline-blue-600 w-full p-1'/>
                  </div>

                  
                  <div>
                    <label htmlFor="Doctore" className='font-semibold'>Doctore <span className="text-red-600 font-bold text-xl relative top-1">*</span></label><br />
                   <select name="gender" id="Doctore" className='border outline-1 outline-blue-600 w-full p-1'>
                    {/* <input type="text" name="" id=" " className='border p-1 w-full'/> */}
                    <option value="">Select</option>
                    
                   </select>
                  </div>
                  <div className='col-span-2'>
                    <label htmlFor="message" className='font-semibold'>Message  <span className="text-red-600 font-bold text-xl relative top-1">*</span></label>
                    <input type="text" name="message" id="message" className='border outline-1 outline-blue-600 w-full p-1'/>
                  </div>
                  <div className=''>
                    <label htmlFor="Status" className='font-semibold'>Status<span className="text-red-600 font-bold text-xl relative top-1">*</span></label>
                    <select name="status" id="status" className='border outline-1 outline-blue-600 w-full p-1'>
                      <option value="pending">Pending</option>
                      <option value="approve">Approve</option>
                      <option value="cancel">Cancel</option>
                    </select>
                  </div>

                  
                </div>
                <div className="button text-end p-4">
                  <button className='px-2 py-1 bg-blue-600 text-white rounded-sm hover:bg-blue-800 duration-300 dur'>Save</button>
                </div>
              </form>
            </div>
        </div>
    </div>

    </>
  )
}

export default AddPatientModal