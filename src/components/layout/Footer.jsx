import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";

function Footer() {
  return (
    <div className="px-4  mt-2">
      <footer class="py-10 footer bg-gray-800 text-primary-content footer-center rounded-box">
        <div>
          <SiDogecoin />
          <p class="font-bold">
            Daniel Ddungu.
            <br />
            Providing reliable tech since 1993
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div className="sr-only sm:not-sr-only">
          <div class="grid grid-flow-col gap-4">
            <button className="btn btn-square btn-ghost">
              <a href="#">
                <FaGithub size={32} color />
              </a>
            </button>
            <button className="btn btn-square btn-ghost">
              <a>
                <FaLinkedinIn size={25} color={"#0077b5"} />
              </a>
            </button>
            <button className="btn btn-square btn-ghost">
              <a>
                <FaTwitter size={32} color={"#00acee"} className="md" />
              </a>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
