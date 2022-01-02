import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content rounded-box mx-5 mt-1">
      <div className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold">Daniel Ddungu</span>
      </div>
      {/* RESPONSIVE MOBILE MENU*/}
      <div className="hidden px-2 mx-2 navbar-center lg:flex">
        <div className="flex items-stretch">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
          <Link to="/services" className="btn btn-ghost btn-sm rounded-btn">
            Services
          </Link>
          <Link to="/portfolio" className="btn btn-ghost btn-sm rounded-btn">
            Portfolio
          </Link>
          <Link to="/resume" className="btn btn-ghost btn-sm rounded-btn">
            Resume
          </Link>
          <Link to="/contact" className="btn btn-ghost btn-sm rounded-btn">
            Contact
          </Link>
        </div>
      </div>

      {/* RESPONSIVE MOBILE MENU*/}
      <div className="navbar-end hidden px-2 mx-2 lg:flex">
        <button className="btn btn-square btn-ghost">
          <FaGithub />
        </button>
        <button className="btn btn-square btn-ghost">
          <FaLinkedinIn />
        </button>
        <button className="btn btn-square btn-ghost">
          <FaTwitter />
        </button>
      </div>
      {/* RESPONSIVE MOBILE MENU*/}
      <div className="md:hidden flex items-end">
        <button className="outline-none menu-button">
          <FaBars />
        </button>
      </div>
      {/* RESPONSIVE MOBILE MENU*/}

      <div className="hidden mobile-menu">
        <ul class="">
          <li class="active">
            <a
              href="nav.html"
              class="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              class="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#About"
              class="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Contact Us"
              class="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
