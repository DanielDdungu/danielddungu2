import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black my-3.5 mx-3.5 rounded-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white">
                DANIEL DDUNGU
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={closeNavbar}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={closeNavbar}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={closeNavbar}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={closeNavbar}
              >
                Portfolio
              </Link>
              <Link
                to="/resume"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={closeNavbar}
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2"
                onClick={closeNavbar}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2" onClick={closeNavbar}>
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2" onClick={closeNavbar}>
            About
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2" onClick={closeNavbar}>
            Services
          </Link>
          <Link to="/portfolio" className="text-gray-300 hover:text-white block px-3 py-2" onClick={closeNavbar}>
            Portfolio
          </Link>
          <Link to="/resume" className="text-gray-300 hover:text-white block px-3 py-2" onClick={closeNavbar}>
            Resume
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2" onClick={closeNavbar}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
