import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <AnimatePresence exitBeforeEnter>
            <Router>
                <div className="flex flex-col justify-between h-screenshot">
                    <Navbar />

                    <main className="conatiner  px-4 flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/resume" element={<Resume />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/notfound" element={<NotFound />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </AnimatePresence>
    );
}

export default App;
