import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../../App.css";
import Select from 'react-select';


const AddPatientModal = ({ closeModal }) => {
  const [selectedOption,setSelectedOption] = useState( )
  
  const options = [
{ value: 'dranjalikumar', label: 'Dr. Anjali Kumar' },
{ value: 'drvikramsharma', label: 'Dr. Vikram Sharma' },
{ value: 'drpriyankagupta', label: 'Dr. Priyanka Gupta' },
{ value: 'drarjunsingh', label: 'Dr. Arjun Singh' },
{ value: 'drdeepikapatel', label: 'Dr. Deepika Patel' },
{ value: 'drrajeevgandhi', label: 'Dr. Rajeev Gandhi' },
{ value: 'drsonalichopra', label: 'Dr. Sonali Chopra' },
{ value: 'drakashsharma', label: 'Dr. Akash Sharma' },
{ value: 'drshivanisingh', label: 'Dr. Shivani Singh' },
{ value: 'drmanishgupta', label: 'Dr. Manish Gupta' },
{ value: 'drnandinimittal', label: 'Dr. Nandini Mittal' },
{ value: 'dramitjoshi', label: 'Dr. Amit Joshi' },
{ value: 'drtanvisharma', label: 'Dr. Tanvi Sharma' },
{ value: 'drprakashkumar', label: 'Dr. Prakash Kumar' },
{ value: 'drlavanyasingh', label: 'Dr. Lavanya Singh' },
{ value: 'drrohitverma', label: 'Dr. Rohit Verma' },
{ value: 'drananyapatel', label: 'Dr. Ananya Patel' },
{ value: 'drgauravjain', label: 'Dr. Gaurav Jain' },
{ value: 'drpoonamgupta', label: 'Dr. Poonam Gupta' },
{ value: 'dramitkumar', label: 'Dr. Amit Kumar' },
{ value: 'drruchikapoor', label: 'Dr. Ruchika Kapoor' },
{ value: 'drvikasjoshi', label: 'Dr. Vikas Joshi' },
{ value: 'drmadhuriverma', label: 'Dr. Madhuri Verma' },
{ value: 'dramitsingh', label: 'Dr. Amit Singh' },
{ value: 'drnehasharma', label: 'Dr. Neha Sharma' },
{ value: 'drrajivkumar', label: 'Dr. Rajiv Kumar' },
{ value: 'drswatigupta', label: 'Dr. Swati Gupta' },
{ value: 'drarvindsingh', label: 'Dr. Arvind Singh' },
{ value: 'drritikagoyal', label: 'Dr. Ritika Goyal' },
{ value: 'dramanmishra', label: 'Dr. Aman Mishra' },
{ value: 'drkomalsingh', label: 'Dr. Komal Singh' },
{ value: 'drgirishpatel', label: 'Dr. Girish Patel' },
{ value: 'drpriyankasingh', label: 'Dr. Priyanka Singh' },
{ value: 'drvikrampandey', label: 'Dr. Vikram Pandey' },
{ value: 'drshrutiverma', label: 'Dr. Shruti Verma' },
{ value: 'drsunilkumar', label: 'Dr. Sunil Kumar' },
{ value: 'drpoojajain', label: 'Dr. Pooja Jain' },
{ value: 'drmanojsharma', label: 'Dr. Manoj Sharma' },
{ value: 'drikshasingh', label: 'Dr. Iksha Singh' },
{ value: 'drrajnishpatel', label: 'Dr. Rajnish Patel' },
{ value: 'dranjaliverma', label: 'Dr. Anjali Verma' },
{ value: 'drrahulsharma', label: 'Dr. Rahul Sharma' },
{ value: 'drgeetakapoor', label: 'Dr. Geeta Kapoor' },
{ value: 'drravikumar', label: 'Dr. Ravi Kumar' },
{ value: 'drukeshsingh', label: 'Dr. Ukesh Singh' },
{ value: 'dramritajain', label: 'Dr. Amrita Jain' },
{ value: 'drsanjaygupta', label: 'Dr. Sanjay Gupta' },
{ value: 'drrajeshverma', label: 'Dr. Rajesh Verma' },
{ value: 'drdivyanshisingh', label: 'Dr. Divyanshi Singh' },
{ value: 'drashwinikumar', label: 'Dr. Ashwini Kumar' },
  ];



  // handleChange = (selectedOption) => {
  //   this.setState({ selectedOption }, () =>
  //     console.log(`Option selected:`, this.state.selectedOption)
  //   );
  // };


  return (
    <>
        <div className="add-patient-modal w-[750px] bg-white relative" onClick={(e)=>e.stopPropagation()}>
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

          <Select
        value={selectedOption}
        onChange={(e)=>setSelectedOption(e.target)}
        options={options}
        className="w-full"
      />

            {/* <select
              name="patients"
              id="patients"
              className="border focus:outline p-1 outline-blue-600 w-full"
            >
              <option value="">Select Patient</option>
            </select> */}
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
    </>
  );
};

export default AddPatientModal;
