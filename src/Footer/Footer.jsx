import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">NEELTOYS</h1>
            <h2 className="text-lg sm:text-xl text-gray-300 mb-3">ADDRESS</h2>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              102, gov estate, area, Masat,
              <br />
              Dadra and Nagar Haveli and Daman and Diu 396240
            </p><br />
            <h3>Ketki Totre - (CEO)</h3>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Aboutus"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  AboutUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Products"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contactus"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  ContactUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/buyingchannels"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Buying Channels
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Platform */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">Social Platform</h3>
            <ul className="space-y-2 text-amber-50">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/neeltoys/"
                  className="hover:text-white transition-colors text-sm sm:text-base"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Section - Only visible on larger screens */}
          <div className="hidden lg:block">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Making Childhood Magical</h3>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">Join Our Toy Family!</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs sm:text-sm">
          <p>
            Copyright © 2025 NeelToys, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;