"use client";
import { useRouter } from "next/navigation";
import HeroSection from "./shared/HeroSection";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Home Button Clicked");
    router.push('/#contact')
  };

  return (
    <div id="#">
      <HeroSection
        mainDivCustomClass="bg-[#111827]"
        spanText="Hello, Welcome"
        headingText="I m Anderson Coper"
        paraText1="There are many variations of passages ofLorem Ipsum
                   available, but the majority havesuffered alteration in some 
                   form, by injected humour,"
        buttonText="Contact us"
        imgSrc="/home-image.svg"
        imgAlt="My-Picture"
        btnCustomClass="px-5 py-2"
        onClick={handleClick}
      />
    </div>
  );
};

export default Home;
