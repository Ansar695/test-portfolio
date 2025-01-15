import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Service from "@/components/Service";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white ">
      <div className="container mx-auto">
        <Navbar />
        <Home />
        <About />
        <Service />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
