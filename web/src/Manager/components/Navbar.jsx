import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-gradient-to-t from-sky-500 to-indigo-500">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-2 md:py-5 md:block">
              <a href="javascript:void(0)">
                <h2 className=" text-4xl font-bold text-white">PARKY</h2>
              </a>
            </div>
          </div>
          <div className=" text-white font-bold ">
            <ul className='flex'>
            <li className='pl-8'>
                <Link to="/Manager/BookingList">Booking List</Link>
              </li>
              <li className='pl-8'>
                <Link to="/Manager/chanagepassword">CHANGE PASSWORD</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar