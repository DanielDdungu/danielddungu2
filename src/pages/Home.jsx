import daniel from "../components/layout/assets/daniel.jpg";
import ReactTypingEffect from "react-typing-effect";

function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-neutral-focus rounded-box">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div>
            <img src={daniel} className=" rounded-lg shadow-2xl" alt="Logo" />
          </div>

          <div>
            <h1 className="mb-5 text-5xl font-bold mb-5">I'm Daniel</h1>
            <p className="mb-5 font-medium ...">
              Welcome to my world of digital tranformation. I am in this with my
              heart, not my ego’s, &nbsp; I want to tranform the world a little
              better.
              <br />
            </p>
            <p className="mb-5 font-bold ...">
              I AM PASSIONATE ABOUT..
              <ReactTypingEffect
                className=""
                text={[
                  " WEB DESIGN & DEVELOPMENT ",
                  "DIGITAL MARKETING",
                  "E-COMMERCE",
                ]}
                cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                  return (
                    <h1>
                      {text.split("").map((char, i) => {
                        const key = `${i}`;
                        return (
                          <span
                            startDelay={300}
                            typeSpeed={100}
                            backSpeed={100}
                            backDelay={100}
                            key={key}
                            style={
                              i % 2 === 0
                                ? { color: "#00FF00" }
                                : { color: "#00FF00" }
                            }
                          >
                            {char}
                          </span>
                        );
                      })}
                    </h1>
                  );
                }}
              />
            </p>
            <button className="btn btn-primary ">CONTACT ME</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
