import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Profilepicdemo from "../data/profilepicselect.jpg";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Register = () => {
  const [image, setImage] = useState(Profilepicdemo);
  const [file, setFile] = useState(Profilepicdemo);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const file = URL.createObjectURL(selectedImage);
    setImage(file);
    setFile(selectedImage)
  };

  const [districtData, setDistrictData] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [place, setPlace] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");


  const insertData = () => {
    
    const formData = new FormData();

    formData.append('name',name);
    formData.append('address',address);
    formData.append('contact',contact);
    formData.append('mail',mail);
    formData.append('place',place);
    formData.append('password',password);
    formData.append('photo',file);
    
    

    axios
    .post("http://localhost/Parking/api/Userregistration.php",formData,{ "Content-Type": "multipart/form-data"})
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      
        alert("inserted");
        window.location("/")
      
      
    });
   


  }

  const ajaxPlace = (id) => {
    axios
      .get("http://localhost/Parking/api/AjaxPlace.php?id="+id)
      .then((response) => response.data)
      .then((data) => {
        setPlaceData(data)
      });
     
  };

  const fetchData = () => {
    axios
      .get("http://localhost/Parking/api/District.php")
      .then((response) => response.data)
      .then((data) => {
        setDistrictData(data)
      });
     
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-center h-auto w-full bg-gradient-to-b from-gray-800 to-gray-500">
        <div className=" pt-2 pb-80">
          <div className="flex justify-center  pt-2">
            <div
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
              }}
              onClick={handleClick}
              className=" pt-12 text-black pl-10 rounded-full h-60 w-60 hover:shadow-neutral-900 font-bold bg-black"
            >
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
                onKeyUp={(e) => setProfilepic(e.target.value)}
              />
            </div>
          </div>
          <div className="flex  pt-6">
            <div className=" text-xl  font-bold pr-36  text-black">Name</div>
            <div className="pl-4">
              <input
                className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                type="text"
                id="admin_manager"
                placeholder="Enter the name "
                onKeyUp={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex  pt-6">
            <div className=" text-xl  font-bold pr-28  text-black">Contact</div>
            <div className="pl-6">
              <input
                className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                type="text"
                id="admin_manager"
                placeholder="Enter the contact "
                onKeyUp={(e) => setContact(e.target.value)}
              />
            </div>
          </div>

          <div className="flex  pt-6">
            <div className=" text-xl  font-bold pr-28  text-black">Address</div>
            <div className="pl-4">
              <input
                className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                type="text"
                id="admin_manager"
                placeholder="Enter the address "
                onKeyUp={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex  pt-6">
            <div className=" text-xl  font-bold pr-28  text-black">District</div>
            <div className="pl-7">
              <select
              className=" placeholder:text-slate-600  rounded-md h-10 w-80 bg-slate-400 text-black "
              onChange={(e) => ajaxPlace(e.target.value)}
             >
              <option value="">---Select---</option>
              {districtData.map((result,key)=>(
                <option value={result.district_id} key={key}>{result.district_name}</option>                  ))}
            </select>
            </div>
          </div>
          <div className="flex  pt-6">
            <div className=" text-xl  font-bold pr-28  text-black">Place</div>
            <div className="pl-11">
              <select
              className=" placeholder:text-slate-600  rounded-md h-10 w-80 bg-slate-400 text-black "
              onChange={(e) => setPlace(e.target.value)}
             >
              <option value="">---Select---</option>
              {placeData.map((result,key)=>(
                <option value={result.place_id} key={key}>{result.place_name}</option>                  ))}
            </select>
            </div>
          </div>
          <div className="flex  pt-6">
            <div className=" text-xl  font-bold pr-36  text-black">E-mail</div>
            <div className="pl-1">
              <input
                className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                type="text"
                id="admin_manager"
                placeholder="Enter the e-mail "
                onKeyUp={(e) => setMail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex  pt-6">
            <div className=" text-xl  font-bold pr-28  text-black">
              Password
            </div>
            <div className="">
              <input
                className=" placeholder:text-slate-600 font-bold dark:font-bold rounded-md h-10 w-80 bg-slate-400 text-black "
                type="password"
                id="admin_manager"
                placeholder="Enter the password "
                onKeyUp={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

         

          <div className="pt-12 grid  justify-center">
            <button
              onClick={insertData}
              className="rounded-md h-9 font-bold dark:font-bold w-20 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 bg-black duration-300 text-white"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
