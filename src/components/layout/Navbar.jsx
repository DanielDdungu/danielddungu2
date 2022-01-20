import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import React, { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
function Navbar({ title }) {
  // REACT HOOKS
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };

  return (
    <>
      <nav className="px-4 ">
        <div className=" mt-3 px-2 rounded-box h-14 bg-gray-800 text-white items-center mb-2 flex flex-row justify-between">
          <div className="brand-logo text-sm font-extrabold px-2">
            <Link to="/">{title}</Link>
          </div>
          <div className="">
            {/**Main List */}
            <ul className="hidden lg:menu-list lg:flex lg:flex-row text-xs font-bold ">
              <li className="menu-list-item">
                <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                  Home
                </Link>
              </li>
              <li className="menu-list-item">
                <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                  About
                </Link>
              </li>
              <li className="menu-list-item">
                <Link
                  to="/services"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Services
                </Link>
              </li>
              <li className="menu-list-item">
                <Link
                  to="/portfolio"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Portfolio
                </Link>
              </li>
              <li className="menu-list-item">
                <Link to="/resume" className="btn btn-ghost btn-sm rounded-btn">
                  Resume
                </Link>
              </li>
              <li className="menu-list-item">
                <Link
                  to="/contact"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <button
              onClick={() => {
                showSideMenu();
              }}
              className=" lg:hidden menu-button btn btn-square btn-ghost"
            >
              {isSideMenuOpen ? (
                <HiOutlineX className="w-10 h-10  px-2" />
              ) : (
                <HiMenu className="w-10 h-10  px-2" />
              )}
            </button>
            {isSideMenuOpen ? SideMenu() : ""}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  title: "DANIEL DDUNGU",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;

function SideMenu() {
  return (
    <div className=" menu p-3 bg-neutral rounded-xl lg:hidden top-14 z-40 absolute inset-x-4 h-min ... uppercase">
      <ul className="menu-list flex flex-col text-xs font-bold ">
        <li className="menu-list-item ">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-list-item ">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-list-item ">
          <Link to="/services">Services</Link>
        </li>
        <li className="menu-list-item ">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="menu-list-item ">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="menu-list-item ">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
