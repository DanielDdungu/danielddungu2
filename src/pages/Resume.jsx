function Resume() {
  return (
    <>
      <div className="hero min-h-screen bg-black rounded-box">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="dropdown dropdown-end">
              <div tabindex="0" className="m-1 btn">
                RESUME
              </div>
              <ul
                tabindex="0"
                className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <button href="#" alt="">
                    English
                  </button>
                </li>
                <li>
                  <button href="#" alt="">
                    Spanish
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
