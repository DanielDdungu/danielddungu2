import { HiCode, HiShoppingCart } from "react-icons/hi";
import { FaSearchDollar } from "react-icons/fa";
import digital from "../components/layout/assets/digital.webp";
import ecommere from "../components/layout/assets/ecommere.webp";
import PageAnimation from "../components/layout/PageAnimation";
import { Helmet } from "react-helmet-async";

function Services() {
    const ecommerce =
        "You business deserve an outstanding ecommerce online store with the best technologies and platforms using my partners Magento, Woo-commerce and Shopify. I specialize in the integration of data-driven best practices and high-end creative to create truly unique sites that help your business grow.";

    const digitalMarketing =
        "Starting with research, planning and continuing through constant optimizations and insights to maximize your Return On Investment, Hire me as your ultimate partner to take your company’s digital marketing to the next level.";

    const webdev =
        "To me, a website is more than just a fancy brochure online, it is the face of your business to the world that has to be appealing, functional, human-centric and future proof. Hire me to revamp your company website, through professional website design and website development services";
    return (
        <>
            <Helmet>
                <title>
                    Services - Front End Developer | Javascript | ReactJS |
                    VueJS
                </title>
                <meta
                    name="description"
                    content="Front End Developer | Javascript | ReactJS | VueJS"
                />
                <link rel="canonical" href="/services" />
            </Helmet>
            <PageAnimation>
                <div className="conainer  bg-black rounded-box">
                    <div className="">
                        <h1 className="mb-5 text-2xl font-bold pt-6 pl-8 text-white">
                            MY SERVICES
                        </h1>
                    </div>
                    <div className="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                        <div className="drop-shadow-2xl ... glass rounded-box hover:bg-base-100 ">
                            <div className="">
                                <img
                                    className="object-scale-down h-50 w-98 ... rounded-t-2xl"
                                    src={digital}
                                    alt="..."
                                />
                            </div>
                            <div className="justify-center card-actions pt-6">
                                <FaSearchDollar
                                    size={30}
                                    style={{ fill: "#0ea5e9" }}
                                />
                            </div>
                            <h2 className="text-center text-sky-400 uppercase card-title">
                                Digital Marketing
                            </h2>
                            <p className="text-center p-8 text-white">
                                {digitalMarketing}
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
                            <h2 className="text-center text-sky-400 uppercase card-title ">
                                Web Design & Development
                            </h2>
                            <p className="text-center text-white p-8">
                                {webdev}
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
                                <HiShoppingCart
                                    size={30}
                                    style={{ fill: "#0ea5e9" }}
                                />
                            </div>
                            <h2 className="text-center text-sky-400 uppercase card-title">
                                E-commerce
                            </h2>
                            <p className="text-center p-8 text-white">
                                {ecommerce}
                            </p>
                        </div>
                    </div>
                </div>
            </PageAnimation>
        </>
    );
}

export default Services;
