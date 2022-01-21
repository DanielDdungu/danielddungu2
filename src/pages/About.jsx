import daniel from "../components/layout/assets/daniel.png";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaSass,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiPhp,
  SiWoocommerce,
  SiGoogleanalytics,
  SiTailwindcss,
  SiBootstrap,
  SiNpm,
} from "react-icons/si";
function About() {
  return (
    <>
      {/**ABOUT ME */}
      <div className=" bg-black rounded-box p-8 h-3/6 ">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
          {/**LEFT SIDE */}
          <div className="md:flex md:flex-col md:justify-center lg:pt-5">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold mb-1">
              I am Daniel Ddungu
            </h2>

            <p className="md:text-base text-white-700 text-justify mb-2 text-white">
              Front-End Developer with technical expertise in designing and
              developing web applications using HTML5, CSS3, JavaScript and
              React Js.
            </p>
            <p className="md:text-base text-white-700 text-justify text-white mb-2 text-white-500">
              Proficient with Content Management Systems (Wordpress+Woo-commerce
              and Prestashop), E-Commerce and Digital Marketing & Social Media
              Management.
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
        <h3 className="pt-3 pl-3 text-white">PRO SKILLS</h3>
        <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 p-3">
          <div className="">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <FaHtml5 size={30} className=" " color={"#F16529"} />
                <button
                  class="btn btn-sm btn-ghost loading  background-color: white;
                  border-color: white;"
                >
                  HTML
                </button>
              </div>
              <p className=" text-white">99%</p>
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
              <p className=" text-white">95%</p>
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
              <p className=" text-white">80%</p>
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
              <p className=" text-white">76%</p>
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
              <p className=" text-white">83.5%</p>
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
              <p className=" text-white"> 50 %</p>
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
        <h3 className="pt-3 pl-3 text-white">INTERESTS</h3>
        <div class=" card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 ">
          <div className="flex flex-auto bg-gray-700 p-3 rounded-md pl-6 drop-shadow-2xl ... ">
            <FaGitAlt size={30} color={"#f34f29"} />
            <p className="pl-6 text-white">Git</p>
          </div>
          <div className=" flex flex-auto bg-gray-700 p-3 rounded-md pl-6 drop-shadow-2xl ... ">
            <SiTailwindcss size={30} className="fill-blue-500 ..." />
            <p className="pl-6 text-white">Tailwindcss</p>
          </div>
          <div className=" flex flex-auto bg-gray-700 p-3 rounded-md pl-6 drop-shadow-2xl ... ">
            <SiTypescript size={30} color={"#007acc"} />
            <p className="pl-6 text-white">Typescript</p>
          </div>
          <div className=" flex flex-auto bg-gray-700 p-3 rounded-md pl-6 drop-shadow-2xl ... ">
            <SiBootstrap size={30} color={"#0275d8"} />
            <p className="pl-6 text-white">Bootstrap</p>
          </div>
          <div className="flex flex-auto bg-gray-700 p-3 rounded-md pl-6 drop-shadow-2xl ... ">
            <FaNodeJs size={30} color={"#303030"} />
            <p className="pl-6 text-white">NodeJS</p>
          </div>
          <div className=" flex flex-auto bg-gray-700 p-3 rounded-md pl-6 drop-shadow-2xl ... ">
            <SiNpm size={25} color={"#CC3534"} />
            <p className="pl-6 text-white">NPM</p>
          </div>
          <div className="flex flex-auto bg-gray-700 p-3 rounded-md pl-6 drop-shadow-2xl ... ">
            <SiPhp size={30} className=" " color={"#8993be"} />
            <p className="pl-6 text-white">PHP</p>
          </div>
          <div className="flex flex-auto bg-gray-700 p-3 rounded-md pl-6 drop-shadow-2xl ... ">
            <SiWoocommerce size={30} color={"#764abc"} />
            <p className="pl-6 text-white">Woocommerce</p>
          </div>
          <div className="flex flex-auto bg-gray-700 p-3 rounded-md pl-6 drop-shadow-2xl ...">
            <SiGoogleanalytics size={30} color={"#FFC517"} />
            <p className="pl-6 text-white">Google Analytics</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
