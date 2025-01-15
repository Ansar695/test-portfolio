"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardSection from "./shared/CardSection";
import CustomCard from "./shared/CustomCard";

const Service = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/my-service");
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
    return (
      <div className="bg-[#111827] md:px-40 md:py-24 px-3 py-10">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="bg-[#111827] md:px-40 md:py-24 px-3 py-10">
        Error: {error.message}
      </div>
    );

  return (
    <div id="service" className="bg-[#111827] md:px-40 md:py-24 px-3 py-10">
      <div className="flex flex-col gap-14">
        <CardSection
          headinText={data?.sectionTitle}
          paraText={data?.sectionDesc}
        />
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <CustomCard
            OuterDivClass="items-center gap-8"
            headingCustomClass="text-[#F3F4F6] text-center max-w-[186px]"
            paraCustomClass="text-center"
            imgSrc="/baja.svg"
            imgAlt="DM"
            headingText={data?.services?.[0]?.title}
            paraText={data?.services?.[0]?.description}
          />
          <CustomCard
            OuterDivClass="items-center gap-8"
            headingCustomClass="text-[#F3F4F6] text-center max-w-[186px]"
            paraCustomClass="text-center"
            imgSrc="/web-dev.svg"
            imgAlt="web-dev"
            headingText={data?.services?.[1]?.title}
            paraText={data?.services?.[0]?.description}
          />
          <CustomCard
            OuterDivClass="items-center gap-8"
            headingCustomClass="text-[#F3F4F6] text-center max-w-[206px]"
            paraCustomClass="text-center"
            imgSrc="/graphic.svg"
            imgAlt="graphic"
            headingText={data?.services?.[2]?.title}
            paraText={data?.services?.[0]?.description}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
