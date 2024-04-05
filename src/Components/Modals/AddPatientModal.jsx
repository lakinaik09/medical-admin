import React from 'react'

const AddPatientModal = () => {
  return (
    <>
    <div className="bg fixed left-0 top-0 bg-black bg-opacity-20 w-screen h-screen flex justify-center items-center z-[9999]">
        <div className='add-patient-modal min-w-96 bg-white '>
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

                  
                </div>
                <div className="button text-end p-4">
                  <button className='px-2 py-1 bg-blue-600 text-white rounded-sm'>Save</button>
                </div>
              </form>
            </div>
        </div>
    </div>

    </>
  )
}

export default AddPatientModal