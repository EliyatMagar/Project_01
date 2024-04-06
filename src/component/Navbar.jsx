import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from "../image/logo.jpg";

const Navbar = () => {

  return (
    <>
      <nav className='nav-container flex justify-between p-16 items-center py-4 md:py-6 shadow-2xl'>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 md:h-10 cursor-pointer" />
          </Link>
        </div>
        <div className='nav-links flex justify-between gap-7 items-center'>
          <div>
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-700 hover:text-blue-600">Companies</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              </li>
            </ul>
          </div>
          <div className="btn hidden md:flex items-center gap-4">
            <Link to="/signUp" className='btn1 bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-700'>
              Sign Up
            </Link>
            <button className='btn2 bg-white px-4 py-2 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300'>
              <Link to="/postJob">Post a Job</Link>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
