import daniel from "../components/layout/assets/daniel.png";

import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

function Home() {
  return (
    <div className="hero min-h-screen bg-gray-800 rounded-box">
      <Particles
        className="lg:visible md:invisible"
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div>
          <img src={daniel} className="" alt="Logo" />
        </div>

        <div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            I'm Daniel
          </h1>
          <p className="mb-5 font-medium ... md:text-sm">
            Welcome to my world of digital tranformation. I am in this with my
            heart, not my ego’s, &nbsp; I want to tranform the world a little
            better.
            <br />
          </p>
          <p className="mb-5 font-bold ... ">
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
                              ? { color: "#0ea5e9" }
                              : { color: "#0ea5e9" }
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
          <Link to="/contact">
            <button className="btn btn-primary">CONTACT ME</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
