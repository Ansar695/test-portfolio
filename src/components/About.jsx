"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "./shared/HeroSection";
import Loader from "./shared/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchAboutData } from "@/redux/slices/aboutSlice";

const About = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/#contact");
  };

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.about);

  useEffect(() => {
    dispatch(fetchAboutData());
  }, [dispatch]);

  return (
    <div id="about">
      {loading && (
        <div className="md:px-40 md:py-24 px-3 py-10">
          <Loader />
        </div>
      )}
      {error && (
        <p className="md:px-40 md:py-24 px-3 py-10 text-red-500">
          Error: {error}
        </p>
      )}

      {data?.images?.[0]?.url && (
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
      )}
    </div>
  );
};

export default About;
