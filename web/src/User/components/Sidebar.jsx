import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';

const   Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          X
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#FFFFFF"
          viewBox="0 0 100 80"
          width="20"
          height="20"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[20vw] bg-gradient-to-b from-indigo-500 to-sky-500  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
            <ul className=' pt-12'>
            <li className=' font-bold text-white text-2xl'>
              <Link to="/user/viewslot">View Slots</Link>
            </li>
           
          </ul>
          
          </div>
      
    </>
  );
};

export default Sidebar;