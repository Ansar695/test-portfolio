"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import HeroSection from "./shared/HeroSection";

const About = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#contact");
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/about");
        setData(response?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <div className="md:px-40 md:py-24 px-3 py-10">Loading...</div>;
  if (error)
    return (
      <div className="md:px-40 md:py-24 px-3 py-10">Error: {error.message}</div>
    );

  return (
    <div id="about">
      <HeroSection
        customClass="md:flex-row-reverse"
        headingText="About"
        headingSpanText="Me"
        paraText1={data?.description}
        paraText2="Passages ofLorem Ipsumavailable, but the majority havesuffered
                   alteration in some form, by injected humour,"
        buttonText="Contact us"
        imgSrc={data?.images?.[0]?.url}
        imgAlt="My-Picture"
        btnCustomClass="px-5 py-7"
        onClick={handleClick}
      />
    </div>
  );
};

export default About;
