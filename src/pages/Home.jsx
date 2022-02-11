import daniel from "../components/layout/assets/daniel.webp";
import background from "../components/layout/assets/background.webm";

import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import PageAnimation from "../components/layout/PageAnimation";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta
                    name="description"
                    content="Front End Developer | Javascript | ReactJS | VueJS"
                />
                <link rel="canonical" href="/" />
            </Helmet>
            <PageAnimation>
                <div className="hero min-h-screen bg-black rounded-box">
                    <video
                        autoPlay
                        loop
                        muted
                        id="video"
                        className="rounded-box "
                    >
                        <source src={background} type="video/webm" />
                    </video>
                    <div className="flex-col hero-content lg:flex-row-reverse">
                        <div>
                            <img
                                src={daniel}
                                className=" rounded-lg"
                                alt="Logo"
                            />
                        </div>

                        <div>
                            <h1 className="mb-5 text-5xl font-bold text-white">
                                I'm Daniel
                            </h1>
                            <p className="mb-5 font-medium ... md:text-sm text-white text-justify">
                                Welcome to my world of digital tranformation. I
                                am in this with my heart, not my ego’s, &nbsp; I
                                want to tranform the world a little better.
                                <br />
                            </p>
                            <p className="mb-5 font-bold ... text-white">
                                I AM PASSIONATE ABOUT..
                                <br />
                                <ReactTypingEffect
                                    className=""
                                    text={[
                                        " WEB DESIGN & DEVELOPMENT ",
                                        "DIGITAL MARKETING",
                                        "E-COMMERCE",
                                    ]}
                                    cursorRenderer={(cursor) => (
                                        <h1>{cursor}</h1>
                                    )}
                                    displayTextRenderer={(text, i) => {
                                        return (
                                            <h1>
                                                {text
                                                    .split("")
                                                    .map((char, i) => {
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
                                                                        ? {
                                                                              color: "#0ea5e9",
                                                                          }
                                                                        : {
                                                                              color: "#0ea5e9",
                                                                          }
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
                                <button className="btn btn-primary">
                                    CONTACT ME
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </PageAnimation>
        </>
    );
};

export default Home;
