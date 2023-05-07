import React from 'react'

import parking from "../data/parking.jpg";

const Homepage = () => {
  return (
    <>
    <div className=" bg-gradient-to-b from-sky-500 to-indigo-500 w-full h-auto z-10 fixed">
      <div
        className="w-full  mix-blend-overlay "
        style={{
          backgroundImage: "url(" + parking + ")",
          backgroundSize: "cover",
          height: "90vh",
        }}
      ></div>
    </div>
    <div className="z-20 relative">
      <div className="text-white text-8xl font-bold grid justify-center pt-56  ">
        WELCOME
      </div>
     
    </div>
  </>
  )
}

export default Homepage