import daniel from "../components/layout/assets/daniel.png";
function About() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 rounded-box p-8">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
          {/**LEFT SIDE */}
          <div className="md:flex md:flex-col md:justify-center lg:pt-5">
            <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              I am Daniel Ddungu
            </h2>

            <p className="md:text-lg text-white-700 text-justify indent-8">
              A skilled Front-End Developer with extensive technical expertise
              in planning and developing websites across multiple products and
              organisations and with professional working knowledge of web
              applications, programming languages, and web services such as
              HTML, HTML5, CSS, CSS3, JavaScript, Security Principles and User
              Interface Design(UI). Proficiency with Content Management Systems
              (WordPress+Woocommerce and Prestashop), E-Commerce and Digital
              Marketing & Social Media Management.
            </p>
          </div>

          {/**LEFT SIDE */}
          <div className=" card-bordy">
            <div className="w-full h-64 rounded-lg">
              <img src={daniel} alt={daniel} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
