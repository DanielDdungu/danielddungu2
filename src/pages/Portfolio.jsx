import Github from "../components/layout/assets/projects/Github.webp";
import Quiz from "../components/layout/assets/projects/Quiz.webp";
import Shina from "../components/layout/assets/projects/Shina.webp";
import estate from "../components/layout/assets/projects/estate.webp";
import coming from "../components/layout/assets/projects/coming.webp";
import PageAnimation from "../components/layout/PageAnimation";

function Portfolio() {
    return (
        <PageAnimation>
            <div className="w-full bg-black rounded-box">
                <section className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-4 py-12 ">
                    <div className="text-center pb-12">
                        <h2 className="text-base font-bold text-white">
                            Networthy Projects
                        </h2>
                        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                            Check a few of my awesome projects
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <p className="text-base text-gray-400 font-normal ">
                                    Appartments for rent
                                </p>
                                <button class="btn glass mt-3 normal-case">
                                    Learn more
                                </button>
                            </div>
                        </div>
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
                                    Learn more
                                </button>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                            <div>
                                <img
                                    className="object-center object-cover h-auto w-full"
                                    src={Quiz}
                                    alt="projet"
                                />
                            </div>
                            <div className="text-center py-8 sm:py-6">
                                <p className="text-xl text-white font-bold mb-2">
                                    Quizz App
                                </p>
                                <p className="text-base text-gray-400 font-normal">
                                    React redux quiz appliation
                                </p>
                                <button class="btn glass mt-3 normal-case">
                                    Learn more
                                </button>
                            </div>
                        </div>
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
                                    Learn more
                                </button>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                            <div>
                                <img
                                    className="object-center object-cover h-auto w-full"
                                    src={coming}
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
                                    Learn more
                                </button>
                            </div>
                        </div>
                        <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                            <div>
                                <img
                                    className="object-center object-cover h-auto w-full"
                                    src={coming}
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
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageAnimation>
    );
}

export default Portfolio;
