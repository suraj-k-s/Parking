import React from "react";
import parking from "../data/parking.jpg";
import  {Link}  from "react-router-dom";
const Body = () => {
  return (
    <div className=" grid justify-center w-full h-fit pt-14 bg- bg-gray-800 ">
      <div className="flex w-1400  h-fil bg-gradient-to-b from-gray-800 to-gray-500">
        <div className="w-1/2">
          <p className=" text-white font-bold text-4xl pt-40" align="center">
            WELCOME
          </p>
          <div className=" font-bold text-white text-2xl" align="center">
            Come exprore oru website,
          </div>
          <div className=" font-bold text-white text-2xl" align="center">
            Our website offer grate service, you can book airport parking slot
          </div>
        </div>
        <div className=" w-1/2">
          <img src="Airportparking.jpg" alt="React Image" />
        </div>
      </div>
      <div className=" pt-40 pb-20">
        <div
          style={{
            backgroundImage: "url(" + parking + ")",
            backgroundSize: "cover",
            height: "90vh",
          }}
        >
          <p
            className=" text-white italic font-bold text-4xl pt-64"
            align="center"
          >
            About
          </p>
          <div
            className=" font-bold italic pt-40 text-white text-2xl"
            align="center"
          >
            This website is bal bal bal,
          </div>
          <div className=" font-bold italic text-white text-2xl" align="center">
            Our website offer grate service, you can book airport parking slot
          </div>
        </div>
      </div>
      <div align="center" className="font-bold pt-20 text-white text-4xl">
        <p>SERVICES</p>
        <div className="font-bold pt-3 pb-20 text-white text-2xl">
          Everything you need
        </div>
      </div>
      <div className=" pt-12">
        <div className="flex w-1400 h-fil bg-gradient-to-b from-gray-800 to-gray-500">
          <div className="w-1/2">
          <p className=" text-white pb-12 font-bold text-4xl pt-40" align="center">
              Parking
            </p>
            <div className=" font-bold text-white text-2xl" align="center">
              Come exprore oru website,
            </div>
            <div className=" font-bold text-white text-2xl" align="center">
              Our website offer grate service, you can book airport parking slot
            </div>
          </div>
          <div className=" w-1/2">
            <img src="parking1.jpg" alt="React Image" />
          </div>
        </div>
      </div>
      <div className=" pt-12">
        <div className="flex w-1400 h-fil bg-gradient-to-b from-gray-800 to-gray-500">
          <div className="w-1/2">
          <p className=" text-white pb-12 font-bold text-4xl pt-40" align="center">
              Cleaning
            </p>
            <div className=" font-bold text-white text-2xl" align="center">
              Come exprore oru website,
            </div>
            <div className=" font-bold text-white text-2xl" align="center">
              Our website offer grate service, you can book airport parking slot
            </div>
          </div>
          <div className=" w-1/2">
            <img src="parking2.jpg" alt="React Image" />
          </div>
        </div>
      </div>
      <div className=" pt-12">
        <div className="flex w-1400 h-fil bg-gradient-to-b from-gray-800 to-gray-500">
          <div className="w-1/2">
            <p className=" text-white pb-12 font-bold text-4xl pt-40" align="center">
              EXELENT SECURITY
            </p>
            <div className=" font-bold text-white text-2xl" align="center">
              Come exprore oru website,
            </div>
            <div className=" font-bold text-white text-2xl" align="center">
              Our website offer grate service, you can book airport parking slot
            </div>
          </div>
          <div className=" w-1/2">
            <img src="parking3.jpg" alt="React Image" />
          </div>
        </div>
      </div>
      <div>
      <Link to="/login">GET STARTED</Link>
      </div>
      <div className=" pt-12 pb-12">
        <p className=" text-white pb-12 font-bold text-4xl pt-40" align="center">CONTACT US</p>
        <div className="flex w-1400 h-fil bg-gradient-to-b from-gray-800 to-gray-500">
          <div className="w-1/2">
            
            <div className=" font-bold text-white text-xl py-56" align="center">
            500 Terry Francois Street, 6th Floor. San Francisco, CA 94158,
            </div>
          </div>
          <div className=" w-1/2">
            <img src="contactus.png" alt="React Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
