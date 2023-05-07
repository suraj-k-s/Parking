import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
    
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>PARKY</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
          <ul className=' font-bold pl-3 pb-7 pt-4'>
            <li className='dark:text-white pt-3 text-slate-700'>
              <Link to="/admin">Dashboard</Link>
            </li>
            </ul>
            <div className=' font-bold text-gray-500 pl-3 text-sm'>REGISTRATION</div>
            <ul className=' pl-3 pt-4'>
            <li className=' font-bold dark:text-white text-slate-700'>
              <Link to="/admin/district">District</Link>
            </li>
            <li className=' font-bold dark:text-white pt-3 text-slate-700'>
              <Link to="/admin/place">Place</Link>
            </li>
            <li className=' font-bold dark:text-white pt-3 text-slate-700'>
              <Link to="/admin/managerregistraton">Manger registration</Link>
            </li>
          </ul>
          
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;