import PageAnimation from "../components/layout/PageAnimation";
import { Helmet } from "react-helmet-async";
function Resume() {
    const resume =
        '"..... The first time I emailed my new resume out, I recieved an offer for a telephone interview. You will not be disappointed!!!"';
    return (
        <>
            <Helmet>
                <title>
                    Resume - Front End Developer | Javascript | ReactJS | VueJS
                </title>
                <meta
                    name="description"
                    content="Front End Developer | Javascript | ReactJS | VueJS"
                />
                <link rel="canonical" href="/resume" />
            </Helmet>
            <PageAnimation>
                <div className="hero min-h-screen bg-black rounded-box">
                    <div className="text-center hero-content">
                        <div className="max-w-md">
                            <h2 className="mb-5 text-5xl font-bold text-white">
                                Hello there
                            </h2>
                            <p className="mb-5 text-white">{resume}</p>
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
            </PageAnimation>
        </>
    );
}

export default Resume;
