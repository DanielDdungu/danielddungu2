import React from "react";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";

function Footer() {
    return (
        <div className="px-4  mt-2">
            <footer class="py-10 footer bg-black text-primary-content footer-center rounded-box">
                <div>
                    <SiDogecoin />
                    <p class="font-bold">
                        Daniel Ddungu.
                        <br />
                        Providing reliable web services
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="sr-only sm:not-sr-only">
                    <div class="grid grid-flow-col gap-4">
                        <button className="btn btn-square btn-ghost">
                            <a
                                href="https://github.com/DanielDdungu"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub size={32} color />
                            </a>
                        </button>
                        <button className="btn btn-square btn-ghost">
                            <a
                                href="https://www.linkedin.com/in/danielddungu/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn size={25} color={"#0077b5"} />
                            </a>
                        </button>
                        <button className="btn btn-square btn-ghost">
                            <a
                                href="https://twitter.com/daniel_ddungu"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter
                                    size={32}
                                    color={"#00acee"}
                                    className="md"
                                />
                            </a>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
