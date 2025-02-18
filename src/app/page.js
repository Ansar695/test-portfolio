import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Service from "@/components/Service";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServiceApiFetcher from "@/components/ServiceApiFetcher";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white ">
      <div className="container mx-auto">
        <Navbar />
        <Home />
        <About />
        <Service>
          <ServiceApiFetcher />
        </Service>
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
