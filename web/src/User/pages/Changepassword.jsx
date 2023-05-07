import React from 'react'
import { Link } from 'react-router-dom'

const Changepassword = () => {
  return (
    <>
    <div className=" grid justify-center pt-28 w-full h-auto pb-96   bg-gradient-to-b from-sky-500 to-indigo-500">
        <div className="flex ">
         
          <div className="grid pl-24 ">
            
            
            <div className="flex justify-start ">
              <div className=" text-xl  font-bold pr-7 pl-6 pb-5 text-black">
                Old Password
              </div>
              <div className="pl-20">
                <input
                  className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                  type="text"
                  id="admin_manager"
                  placeholder="Enter previous Password"
                />
              </div>
            </div>
            <div className="flex justify-start ">
              <div className=" text-xl  font-bold pr-9 pl-6 pb-6 text-black">
                Password
              </div>
              <div>
                <input
                  className=" ml-28 placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                  type="text"
                  id="admin_manager"
                  placeholder="Enter New Password"
                />
              </div>
            </div>
            <div className="flex justify-start ">
              <div className=" text-xl  font-bold pr-7 pl-6 pb-6 text-black">
                Confirm Password
              </div>
              <div className='pl-10'>
                <input
                  className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                  type="text"
                  id="admin_manager"
                  placeholder="Enter New Password again"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center pt-10">
          <div className="transition ease-in-out delay-150 pt-2  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 bg-black duration-300 rounded-md h-10 font-bold dark:font-bold w-28  text-white">
            SAVE
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Changepassword