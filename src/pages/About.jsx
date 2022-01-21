import daniel from "../components/layout/assets/daniel.png";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";
import { SiRedux, SiTypescript, SiJest } from "react-icons/si";
function About() {
  return (
    <>
      {/**ABOUT ME */}
      <div className=" bg-black rounded-box p-8 h-3/6 ">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
          {/**LEFT SIDE */}
          <div className="md:flex md:flex-col md:justify-center lg:pt-5">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold">
              I am Daniel Ddungu
            </h2>

            <p className="md:text-base text-white-700 text-justify indent-6">
              A skilled Front-End Developer with extensive technical expertise
              in planning and developing websites across multiple products and
              organisations and with professional working knowledge of web
              applications, programming languages, and web services such as
              HTML, HTML5, CSS, CSS3, JavaScript, Security Principles and User
              Interface Design(UI). Proficiency with Content Management Systems
              (WordPress+Woocommerce and Prestashop), E-Commerce and Digital
              Marketing & Social Media Management.
            </p>
          </div>

          {/**LEFT SIDE */}
          <div className=" card-bordy">
            <div className="w-full rounded-lg ">
              <img src={daniel} alt={daniel} />
            </div>
          </div>
        </div>
      </div>
      {/**INTERESTS*/}
      <div className="bg-black my-3 rounded-box">
        <p className="pt-3 pl-3">PRO SKILLS</p>
        <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 p-3">
          <div className="">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <FaHtml5 size={30} className=" " color={"#F16529"} />
                <button class="btn btn-sm btn-ghost loading">HTML</button>
              </div>
              <p>99%</p>
            </div>
            <progress
              class="progress progress-info rounded-none border-radius:none "
              value="100"
              max="100"
            ></progress>
          </div>
          <div className="">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <FaCss3 size={30} color={"#264de4"} />
                <button
                  color="#264de4 !important"
                  class="btn btn-sm btn-ghost loading"
                >
                  CSS3
                </button>
              </div>
              <p className=" z-0">95%</p>
            </div>
            <progress
              class="progress progress-info"
              value="95"
              max="100"
            ></progress>
          </div>
          <div className="">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <FaJsSquare size={30} color={"#f0db4f"} />
                <button class="btn btn-sm btn-ghost loading">JavaScript</button>
              </div>
              <p>80%</p>
            </div>
            <progress
              class="progress progress-info"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <FaReact size={30} color={"#61DBFB"} />
                <button class="btn btn-sm btn-ghost loading">React</button>
              </div>
              <p>76%</p>
            </div>
            <progress
              class="progress progress-info"
              value="76"
              max="100"
            ></progress>
          </div>
          <div className="">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <FaSass size={30} color={"#cd6799"} />
                <button class="btn btn-sm btn-ghost loading">Sass</button>
              </div>
              <p>83.5%</p>
            </div>
            <progress
              class="progress progress-info"
              value="83"
              max="100"
            ></progress>
          </div>
          <div className="">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <SiRedux size={30} color={"#764abc"} />
                <button class="btn btn-sm btn-ghost loading">Redux</button>
              </div>
              <p> 50 %</p>
            </div>
            <progress
              class="progress progress-info"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>
      </div>

      {/**INTERESTS*/}
      <div className="bg-black my-3 rounded-box">
        <p className="pt-3 pl-3">INTERESTS</p>
        <div class=" card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 ">
          <div className="flex flex-auto glass p-3 rounded-md pl-6 drop-shadow-2xl ... hover:bg-base-100">
            <FaHtml5 size={30} className=" " color={"#F16529"} />
            <p className="pl-3">HTML5</p>
          </div>
          <div className="flex flex-auto glass p-3 rounded-md pl-6 drop-shadow-2xl ... hover:bg-base-100">
            <FaCss3 size={30} color={"#264de4"} />
            <p className="pl-3">CSS3</p>
          </div>
          <div className="flex flex-auto glass p-3 rounded-md pl-6 drop-shadow-2xl ...hover:bg-base-100">
            <FaJsSquare size={30} color={"#f0db4f"} />
            <p className="pl-3">JavaScript</p>
          </div>
          <div className="flex flex-auto glass p-3 rounded-md pl-6 drop-shadow-2xl ... hover:bg-base-100">
            <FaReact size={30} color={"#61DBFB"} />
            <p className="pl-3">React</p>
          </div>
          <div className=" flex flex-auto glass p-3 rounded-md pl-6 drop-shadow-2xl ... hover:bg-base-100">
            <SiRedux size={30} color={"#764abc"} />
            <p className="pl-3">Redux</p>
          </div>
          <div className=" flex flex-auto glass p-3 rounded-md pl-6 drop-shadow-2xl ... hover:bg-base-100">
            <SiTypescript size={30} color={"#007acc"} />
            <p className="pl-3">Typescript</p>
          </div>
          <div className=" flex flex-auto glass p-3 rounded-md pl-6 drop-shadow-2xl ... hover:bg-base-100">
            <FaSass size={30} color={"#cd6799"} />
            <p className="pl-3">Sass</p>
          </div>
          <div className="flex flex-auto glass p-3 rounded-md pl-6 drop-shadow-2xl ... hover:bg-base-100">
            <FaNodeJs size={30} color={"#303030"} />
            <p className="pl-3">NodeJS</p>
          </div>
          <div className=" flex flex-auto glass p-3 rounded-md pl-6 drop-shadow-2xl ... hover:bg-base-100">
            <SiJest size={25} color={"#0077b5"} />
            <p className="pl-3">Jest</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
