import React from "react";
import KannurInternationalAirport from '../data/KannurInternationalAirport.jpg';
import CochinInternationalAirport from '../data/CochinInternationalAirport.jpg';
import CalicutInternationalAirport from '../data/CalicutInternationalAirport.jpg';
import ThiruvananthapuramInternationalAirport from '../data/ThiruvananthapuramInternationalAirport.jpg';
import { Link } from "react-router-dom";

const Viewairport = () => {
  return (
    <div className="w-full bg-gradient-to-b from-sky-500 to-indigo-500">
      <div className="flex justify-between pb-64">
        <div className="grid justify-between pl-64">
            <div className="pt-32">
            <Link to="/user/viewslot/Kannur">
          <div
           style={{
            backgroundImage: "url(" + KannurInternationalAirport+ ")",
            backgroundSize: "cover",
            
          }}
          className=" text-center pt-12 rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 bg-black  duration-300 text-xl h-40 font-bold dark:font-bold w-64  text-white hover:text-black">
           Kannur International Airport
          </div></Link> </div>
          <div className="pt-20">
          <Link to="/user/viewslot/Cochin">
          <div 
          style={{
            backgroundImage: "url(" + CochinInternationalAirport+ ")",
            backgroundSize: "cover",
            
          }}
          className="text-center pt-12 rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 bg-orange-500  duration-300 text-xl h-40 font-bold dark:font-bold w-64  text-white hover:text-black">
            Cochin International Airport
          </div></Link></div>
        </div>
        <div className="grid justify-center pr-64">
        <div className="pt-32">
        <Link to="/user/viewslot/Calicut">
          <div 
          style={{
            backgroundImage: "url(" + CalicutInternationalAirport+ ")",
            backgroundSize: "cover",
            
          }}
          className="text-center pt-12 rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-lime-200 bg-lime-500  duration-300 text-xl h-40 font-bold dark:font-bold w-64  text-white hover:text-black">
            Calicut International Airport
          </div></Link></div>
          <div className="pt-20">
          <Link to="/user/viewslot/Thiruvananthapuram">
          <div 
          style={{
            backgroundImage: "url(" +ThiruvananthapuramInternationalAirport+ ")",
            backgroundSize: "cover",
            
          }}
          className="text-center pt-12 rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-teal-300 bg-teal-500  duration-300 text-xl h-40 font-bold dark:font-bold w-64  text-white hover:text-black">
            Thiruvananthapuram International Airport
          </div></Link></div>
        </div>
      </div>
    </div>
  );
};

export default Viewairport;
