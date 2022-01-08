import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div>
      <div className="hero min-h-screen rounded-box bg-neutral-focus">
        <div className="flex-col justify-center hero-content lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span classMame="label-text">Email</span>
                </label>
                <input
                  placeholder="email"
                  className="input input-bordered"
                  type="text"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  placeholder="password"
                  className="input input-bordered"
                  type="text"
                />
                <label className="label">
                  <a href="#" className="label-text-alt">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="button"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
