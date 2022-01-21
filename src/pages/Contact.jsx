//import { motion } from "framer-motion";
//import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="hero min-h-screen rounded-box bg-black">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-lef px-6 lg:w-2/4">
          <h1 className="mb-5 text-2xl md:text-4xl lg:text-4xl font-bold">
            Get In Touch
          </h1>
          <p className="mb-5 text-justify">
            <span>
              I'd love to hear from you. If you would like more information
              about working with me, please fiil out the form with tthe detailed
              description of your project, and I will respond as soon as
              possible
            </span>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span classMame="label-text">Name</span>
                </label>
                <input
                  placeholder="Name"
                  className="input input-bordered"
                  type="text"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span classMame="label-text">Email</span>
                </label>
                <input
                  placeholder="Email"
                  className="input input-bordered peer ..."
                  type="email"
                />
                <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                  Please provide a valid email address.
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span classMame="label-text">Subject</span>
                </label>
                <input
                  placeholder="Subject"
                  className="input input-bordered"
                  type="text"
                />
              </div>
              <div className="form-control">
                <label class="label">
                  <span class="label-text">Message</span>
                </label>
                <textarea
                  class="textarea h-24 textarea-bordered"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input type="button" value="Send" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
