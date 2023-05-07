import React from "react";
import parking from "../data/parking.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect,useRef } from "react";
import "../CSS/pageloader.css";

const Body = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 500); // Wait 500ms before showing the component
    return () => clearTimeout(timeout);
  }, []);

  const targetRef = useRef();
  const targetRef1 = useRef();
  const targetRef2 = useRef();
  const targetRef3 = useRef();
  const targetRef4 = useRef();
  
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current.getBoundingClientRect().top <= window.innerHeight * 0.8) {
        setIsVisible(true);
        // console.log(isVisible);

      }
      if (targetRef1.current.getBoundingClientRect().top <= window.innerHeight * .8) {
        setIsVisible1(true);
      }
      if (targetRef2.current.getBoundingClientRect().top <= window.innerHeight * 0.8) {
        setIsVisible2(true);
      }
      if (targetRef3.current.getBoundingClientRect().top <= window.innerHeight * 0.8) {
        setIsVisible3(true);
      }
      if (targetRef4.current.getBoundingClientRect().top <= window.innerHeight * 0.8) {
        setIsVisible4(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className=" grid justify-center w-full h-fit pt-14 bg- bg-gray-800 ">
        <div className="slide-in">
          <div className="flex w-1400  h-fil bg-gradient-to-r from-gray-800 to-gray-500">
            <div className="w-1/2">
              <p
                className=" text-white font-bold text-4xl pt-40"
                align="center"
              >
                WELCOME
              </p>
              <div className=" font-bold text-white text-2xl" align="center">
                Come exprore oru website,
              </div>
              <div className=" font-bold text-white text-2xl" align="center">
                Our website offer grate service, you can book airport parking
                slot
              </div>
            </div>

            <div className=" w-1/2">
              <img src="Airportparking.jpg" alt="React Image" />
            </div>
          </div>
        </div>

        <div
          style={{ left: "650px", paddingTop: "70px" }}
          className="grid justify-center "
        >
          <button className=" z-10 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 bg-black  duration-300 text-xl h-16 font-bold dark:font-bold w-44 shadow-xl  text-white">
            <Link to="/login">GET STARTED</Link>
          </button>
        </div>
        <div className=" pt-32">
          <div className={` ${isVisible ? "animate" : ""}`} ref={targetRef}>
          <div
            className=" opacity-70 bg-blend-overlay "
            style={{
              backgroundImage: "url(" + parking + ")",
              backgroundSize: "cover",
              height: "90vh",
              
            }}
          >
            <p
              className="opacity-100 text-white italic font-bold text-4xl pt-64"
              align="center"
            >
              About
            </p>
            <div
              className="opacity-100font-bold italic pt-40 text-white text-2xl"
              align="center"
            >
               We offer daily, monthly, and valet parking services in easily accessible locations. Our experienced team is dedicated to providing excellent customer service and we offer online booking and payment options.
            </div>
            <div
              className=" opacity-100 font-bold italic text-white text-2xl"
              align="center"
            >
              If you have any questions, please don't hesitate to contact us. Thank you for choosing us for your parking needs!
            </div>
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
          
        <div className={` ${isVisible1 ? "animate" : ""}`} ref={targetRef1}>
          <div className="flex w-1400 h-fil bg-gradient-to-r from-gray-800 to-gray-500">
            <div className="w-1/2">
              <p
                className=" text-white pb-12 font-bold text-4xl pt-40"
                align="center"
              >
                Parking
              </p>
              <div className=" font-bold text-white text-2xl" align="center">
                Come exprore oru website,
              </div>
              <div className=" font-bold text-white text-2xl" align="center">
                Our website offer grate service, you can book airport parking
                slot
              </div>
            </div>
            <div className=" w-1/2">
              <img src="parking1.jpg" alt="React Image" />
            </div>
          </div>
          </div>
        </div>
        <div className=" pt-12">
        <div className={` ${isVisible2 ? "animate" : ""}`} ref={targetRef2}>
          <div className="flex w-1400 h-fil bg-gradient-to-r from-gray-800 to-gray-500">
            <div className="w-1/2">
              <p
                className=" text-white pb-12 font-bold text-4xl pt-40"
                align="center"
              >
                Cleaning
              </p>
              <div className=" font-bold text-white text-2xl" align="center">
                Come exprore oru website,
              </div>
              <div className=" font-bold text-white text-2xl" align="center">
                Our website offer grate service, you can book airport parking
                slot
              </div>
            </div>
            <div className=" w-1/2">
              <img src="parking2.jpg" alt="React Image" />
            </div>
          </div>
          </div>
        </div>
        <div className=" pt-12">
        <div className={` ${isVisible3 ? "animatey" : ""}`} ref={targetRef3}>
          <div className="flex w-1400 h-fil bg-gradient-to-r from-gray-800 to-gray-500">
            <div className="w-1/2">
              <p
                className=" text-white pb-12 font-bold text-4xl pt-40"
                align="center"
              >
                EXELENT SECURITY
              </p>
              <div className=" font-bold text-white text-2xl" align="center">
                Come exprore oru website,
              </div>
              <div className=" font-bold text-white text-2xl" align="center">
                Our website offer grate service, you can book airport parking
                slot
              </div>
            </div>
            <div className=" w-1/2">
              <img src="parking3.jpg" alt="React Image" />
            </div>
          </div>
          </div>
        </div>

        <div className=" pt-12 pb-12">
        <div className={` ${isVisible4 ? "animate" : ""}`} ref={targetRef4}>
          <p
            className=" text-white pb-12 font-bold text-4xl pt-40"
            align="center"
          >
            CONTACT US
          </p>
          <div className="flex w-1400 h-fil bg-gradient-to-r from-gray-800 to-gray-500">
            <div className="w-1/2">
              <div
                className=" font-bold text-white text-xl py-56"
                align="center"
              >
                500 Terry Francois Street, 6th Floor. San Francisco, CA 94158,
              </div>
            </div>
            <div className=" w-1/2">
              <img src="contactus.png" alt="React Image" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
