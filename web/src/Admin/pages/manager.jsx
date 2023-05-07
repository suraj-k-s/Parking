import React, { useEffect, useState } from "react";
import axios from "axios";

const manager = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const insertData = () => {
    var dat = {
      name: name,
      address: address,
      contact: contact,
      mail: mail,
      password: password,
    };

    axios
      .post("http://localhost/Parking/api/Managerregistration.php", dat)
      .then((response) => {
        if (response.data === true) {
          alert("Inserted");
        } else {
          alert("Failed");
        }
      });
  };

  return (
    <div className=" grid justify-center">
        <div className=" pt-24">
            <div className="text-black dark:text-purple-800 text-2xl font-bold pl-16 pb-20 "> MANAGER REGISTRATION</div>
      <div className="flex content-between w-1/3  pt-6">
        <div className=" text-xl font-bold pr-20 dark:text-purple-800 text-black">Name</div>
        <div className="">
          <input
            className=" placeholder:text-slate-600 dark:placeholder:text-slate-400 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 dark:bg-purple-600 text-black dark:text-white"
            type="text"
            id="admin_manager"
            placeholder="Enter the name "
            onKeyUp={(e) => setName(e.target.value)}
          />
        </div>
        
      </div>
      <div className="flex w-1/3  pt-6">
        <div className=" text-xl font-bold pr-14 dark:text-purple-800 text-black">Address</div>
        <div className="">
          <input
            className=" placeholder:text-slate-600 dark:placeholder:text-slate-400 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 dark:bg-purple-600 text-black dark:text-white"
            type="text"
            id="admin_manager"
            placeholder="Enter the address "
            onKeyUp={(e) => setAddress(e.target.value)}
          />
        </div>
        
      </div>

      <div className="flex w-1/3  pt-6">
        <div className=" text-xl font-bold pr-16 dark:text-purple-800 text-black">Contact</div>
        <div className="">
          <input
            className=" placeholder:text-slate-600 dark:placeholder:text-slate-400 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 dark:bg-purple-600 text-black dark:text-white"
            type="text"
            id="admin_manager"
            placeholder="Enter the contact"
            onKeyUp={(e) => setContact(e.target.value)}
          />
        </div>
        
      </div>
      
      <div className="flex w-2/4  pt-6">
        <div className=" text-xl font-bold pr-24 dark:text-purple-800 text-black">Mail</div>
        <div className="">
          <input
            className=" placeholder:text-slate-600 dark:placeholder:text-slate-400 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 dark:bg-purple-600 text-black dark:text-white"
            type="text"
            id="admin_manager"
            placeholder="Enter the E-mail "
            onKeyUp={(e) => setMail(e.target.value)}
          />
        </div>
        
      </div>
      
      <div className="flex w-2/4  pt-6">
        <div className=" text-xl font-bold pr-10 dark:text-purple-800 text-black">Password</div>
        <div className="">
          <input
            className=" placeholder:text-slate-600 dark:placeholder:text-slate-400 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 dark:bg-purple-600 text-black dark:text-white"
            type="password"
            id="admin_manager"
            placeholder="Enter the Password"
            onKeyUp={(e) => setPassword(e.target.value)}
          />
        </div>
        
      </div>

      <div className="pt-12 grid pb-20 justify-center">
        <button 
        onClick={insertData}
        className="rounded-md h-9 font-bold dark:font-bold w-20 bg-black dark:bg-purple-600 text-white dark:text-slate-400">
          SUBMIT
        </button>
      </div>
      </div>
    </div>
  );
};

export default manager;
