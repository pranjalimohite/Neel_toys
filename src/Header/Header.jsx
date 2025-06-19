import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/Images/Logo.webp"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name and GST */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="NeelToysLogo" className="h-15 w-auto" loading="lazy" />
            <span className="text-lg text-gray-800 mt-1">GST No: 26AMIPT0097J1ZL</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li className='text-2xl'>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black  lg:p-0`
                  }>
                  Home
                </NavLink>
              </li>
              <li className='text-2xl'>
                <NavLink
                  to="/Aboutus"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black  lg:p-0`
                  }>
                  AboutUs
                </NavLink>
              </li>
              <li className='text-2xl'>
                <NavLink
                  to="/Products"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black " : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black  lg:p-0`
                  }>
                  Products
                </NavLink>
              </li>
              <li className='text-2xl'>
                <NavLink
                  to="/Contactus"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black " : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black  lg:p-0`
                  }>
                  ContactUs
                </NavLink>
              </li>
              <li className='text-2xl'>
                <NavLink
                  to="/buyingchannels"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black " : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }>
                  BuyingChannels
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden animate-slideDownMobile">
            <ul className="flex flex-col space-y-2 mt-4 bg-white rounded shadow px-4 py-4">
              <li>
                <NavLink
                  to="/"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `block py-2 text-xl duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Aboutus"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `block py-2 text-xl duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                  }>
                  AboutUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Products"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `block py-2 text-xl duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                  }>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contactus"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `block py-2 text-xl duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                  }>
                  ContactUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/buyingchannels"
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `block py-2 text-xl duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:text-orange-700`
                  }>
                  BuyingChannels
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .animate-slideDownMobile {
              animation: slideDownMobile 0.3s ease;
            }
            @keyframes slideDownMobile {
              from { opacity: 0; transform: translateY(-20px);}
              to { opacity: 1; transform: translateY(0);}
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;