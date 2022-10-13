import Github from "../components/layout/assets/projects/Github.webp";
import Quiz from "../components/layout/assets/projects/Quiz.webp";
import Shina from "../components/layout/assets/projects/Shina.webp";
import estate from "../components/layout/assets/projects/estate.webp";
import Translinguo from "../components/layout/assets/projects/Translinguo.png";
import joomarexplolers from "../components/layout/assets/projects/joomarexplorers.jpg";
import personalvehicle from "../components/layout/assets/projects/personalvehicle.jpg";
import sorting from "../components/layout/assets/projects/sorting.jpg";
import veronicadecorations from "../components/layout/assets/projects/veronicadecorations.jpg";
import PageAnimation from "../components/layout/PageAnimation";

import { Helmet } from "react-helmet-async";

function Portfolio() {
    return (
        <>
            <Helmet>
                <title>
                    Portfolio - Front End Developer | Javascript | ReactJS |
                    VueJS
                </title>
                <meta
                    name="description"
                    content="Front End Developer | Javascript | ReactJS | VueJS"
                />
                <link rel="canonical" href="/portfolio" />
            </Helmet>
            <PageAnimation>
                <div className="w-full bg-black rounded-box">
                    <section className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-4 py-12 ">
                        <div className="text-center pb-12">
                            <h2 className="text-base font-bold text-white md:text-2xl lg:text-5xl">
                                Networthy Projects
                            </h2>
                            <p className=" md:text-xl lg:text-2xl font-heading text-white mt-4">
                                A great website design portfolio that speaks for
                                itself. The website done out of passion with
                                kind attention to technical performance and SEO
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/**REAL EXTATE PROJECT */}
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div>
                                    <img
                                        className="object-center object-cover h-auto w-full"
                                        src={personalvehicle}
                                        alt="project"
                                    />
                                </div>
                                <div className="text-center py-8 sm:py-6">
                                    <p className="text-xl text-white font-bold mb-2">
                                        Smart Watch Solutions
                                    </p>
                                    <p className="text-base text-gray-400 font-normal ">
                                        Provider of fleet management services
                                    </p>
                                    <button class="btn glass mt-3 normal-case">
                                        <a
                                            href="https://smartwatchsolutions.com//"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Learn more
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/**SHINA FAM APPLICATION */}
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div>
                                    <img
                                        className="object-center object-cover h-auto w-full"
                                        src={Shina}
                                        alt="project"
                                    />
                                </div>
                                <div className="text-center py-8 sm:py-6">
                                    <p className="text-xl text-white font-bold mb-2">
                                        Shina Fam Hardware
                                    </p>
                                    <p className="text-base text-gray-400 font-normal">
                                        E-commerce online hardware store
                                    </p>
                                    <button class="btn glass mt-3 normal-case">
                                        <a
                                            href="http://20667alumno3.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Learn more
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/**QUIZ APPLICATION */}
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div>
                                    <img
                                        className="object-center object-cover h-auto w-full"
                                        src={sorting}
                                        alt="projet"
                                    />
                                </div>
                                <div className="text-center py-8 sm:py-6">
                                    <p className="text-xl text-white font-bold mb-2">
                                        Sorting Hut Quizz App
                                    </p>
                                    <p className="text-base text-gray-400 font-normal">
                                        Harry Potter sorting hat with React js
                                    </p>
                                    <button class="btn glass mt-3 normal-case">
                                        <a
                                            href="https://sorting-hat-application.vercel.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Learn more
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/**GITHUB FINDER */}
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div>
                                    <img
                                        className="object-center object-cover h-auto w-full"
                                        src={Github}
                                        alt="project"
                                    />
                                </div>
                                <div className="text-center py-8 sm:py-6">
                                    <p className="text-xl text-white font-bold mb-2">
                                        Github Finder
                                    </p>
                                    <p className="text-base text-gray-400 font-normal">
                                        Github Finder Appliation
                                    </p>
                                    <button class="btn glass mt-3 normal-case">
                                        <a
                                            href="https://github-finder-mauve.vercel.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Learn more
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/**COMING SOON */}
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div>
                                    <img
                                        className="object-center object-cover h-auto w-full"
                                        src={joomarexplolers}
                                        alt="project"
                                    />
                                </div>
                                <div className="text-center py-8 sm:py-6">
                                    <p className="text-xl text-white font-bold mb-2">
                                        Joomar Explorers
                                    </p>
                                    <p className="text-base text-gray-400 font-normal">
                                        Joomar Explorers Tourist Website
                                    </p>
                                    <button class="btn glass mt-3 normal-case">
                                        <a
                                            href="https://www.jomaarexplores.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Learn more
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/**COMING SOON */}
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div>
                                    <img
                                        className="object-center object-cover h-auto w-full"
                                        src={estate}
                                        alt="project"
                                    />
                                </div>
                                <div className="text-center py-8 sm:py-6">
                                    <p className="text-xl text-white font-bold mb-2">
                                        Real Estate Application
                                    </p>
                                    <p className="text-base text-gray-400 font-normal">
                                        React Js Real estate application
                                    </p>
                                    <button class="btn glass mt-3 normal-case">
                                        <a
                                            href="https://smartwatchsolutions.com//"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Learn more
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div>
                                    <img
                                        className="object-center object-cover h-auto w-full"
                                        src={Quiz}
                                        alt="project"
                                    />
                                </div>
                                <div className="text-center py-8 sm:py-6">
                                    <p className="text-xl text-white font-bold mb-2">
                                        Elparking Qizz Test
                                    </p>
                                    <p className="text-base text-gray-400 font-normal">
                                        El Parking Quiz Test
                                    </p>
                                    <button class="btn glass mt-3 normal-case">
                                        <a
                                            href="https://smartwatchsolutions.com//"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Learn more
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/**COMING SOON */}
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div>
                                    <img
                                        className="object-center object-cover h-auto w-full"
                                        src={veronicadecorations}
                                        alt="project"
                                    />
                                </div>
                                <div className="text-center py-8 sm:py-6">
                                    <p className="text-xl text-white font-bold mb-2">
                                        Veronica Decorations
                                    </p>
                                    <p className="text-base text-gray-400 font-normal">
                                        Events decoration e-commerce website
                                    </p>
                                    <button class="btn glass mt-3 normal-case">
                                        <a
                                            href="https://veronicadecorations.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Learn more
                                        </a>
                                    </button>
                                </div>
                            </div>
                            {/**COMING SOON */}
                            <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                                <div>
                                    <img
                                        className="object-center object-cover h-auto w-full"
                                        src={Translinguo}
                                        alt="project"
                                    />
                                </div>
                                <div className="text-center py-8 sm:py-6">
                                    <p className="text-xl text-white font-bold mb-2">
                                        Coming Soon
                                    </p>
                                    <p className="text-base text-gray-400 font-normal">
                                        Coming Soon
                                    </p>
                                    <button class="btn glass mt-3 normal-case">
                                        <a
                                            href="https://smartwatchsolutions.com//"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Learn more
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </PageAnimation>
        </>
    );
}

export default Portfolio;
