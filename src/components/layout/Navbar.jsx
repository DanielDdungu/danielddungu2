import { NavLink } from "react-router-dom";

import React, { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  // REACT HOOKS
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };

  return (
    <>
      <nav className="px-4 ">
        <div className="px-2 rounded-box h-14  text-sky-400 items-center mb-2 flex flex-row justify-between">
          <div className="brand-logo text-sm font-extrabold px-2">
            Daniel Ddungu
          </div>
          <div className="">
            {/**Main List */}
            <ul className="hidden lg:menu-list lg:flex lg:flex-row text-xs font-bold ">
              <li className="menu-list-item">
                <NavLink
                  to="/"
                  className="btn btn-ghost btn-sm rounded-btn underline"
                >
                  Home
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink
                  to="/about"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  About
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink
                  to="/services"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Services
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink
                  to="/portfolio"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink
                  to="/resume"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Resume
                </NavLink>
              </li>
              <li className="menu-list-item">
                <NavLink
                  to="/contact"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Contact
                </NavLink>
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

function SideMenu() {
  return (
    <div className=" menu p-3 bg-neutral rounded-xl lg:hidden top-14 z-40 absolute inset-x-4 h-min ... uppercase">
      <ul className="menu-list flex flex-col text-xs font-bold ">
        <li className="menu-list-item ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="menu-list-item ">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="menu-list-item ">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="menu-list-item ">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="menu-list-item ">
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li className="menu-list-item ">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
