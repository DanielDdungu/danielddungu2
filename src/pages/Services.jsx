import { HiCode, HiShoppingCart } from "react-icons/hi";
import { FaSearchDollar } from "react-icons/fa";
import digital from "../components/layout/assets/digital.jpg";
import ecommere from "../components/layout/assets/ecommere.jpg";

function Services() {
  return (
    <div className="conainer  bg-neutral-focus rounded-box">
      <div className="">
        <p className="mb-5 text-2xl font-bold pt-6 pl-8">MY SERVICES</p>
      </div>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
        <div className="drop-shadow-2xl ... glass rounded-box hover:bg-base-100">
          <div className="">
            <img
              className="object-scale-down h-50 w-98 ... rounded-t-2xl"
              src={digital}
              alt="..."
            />
          </div>
          <div className="justify-center card-actions pt-6">
            <FaSearchDollar size={30} style={{ fill: "#0ea5e9" }} />
          </div>
          <h4 className="text-center text-sky-400 uppercase card-title">
            Digital Marketing
          </h4>
          <p className="text-center p-8">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts
          </p>
        </div>
        <div className="drop-shadow-2xl glass rounded-box hover:bg-base-100">
          <div className="">
            <img
              className="object-scale-down h-50 w-98 ... rounded-t-2xl"
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt="web dev"
            />
          </div>
          <div className="justify-center card-actions pt-6">
            <HiCode size={30} style={{ fill: "#0ea5e9" }} />
          </div>
          <h4 className="text-center text-sky-400 uppercase card-title ">
            Web Design & Development
          </h4>
          <p className="text-center p-8 md:text-sm">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts
          </p>
        </div>
        <div className="drop-shadow-2xl ... glass rounded-box hover:bg-base-100">
          <div className="">
            <img
              className="object-scale-down h-50 w-98 ... rounded-t-2xl"
              src={ecommere}
              alt="web dev"
            />
          </div>
          <div className="justify-center card-actions pt-6">
            <HiShoppingCart size={30} style={{ fill: "#0ea5e9" }} />
          </div>
          <h4 className="text-center text-sky-400 uppercase card-title">
            E-commerce
          </h4>
          <p className="text-center p-8">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
