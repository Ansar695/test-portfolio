"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CardSection from "./shared/CardSection";
import CustomCard from "./shared/CustomCard";

const Experience = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/my-experience");
        console.log("GetData::", response.data);
        setData(response?.data);
        console.log("Data::", data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Data::::", data);
  }, [data]);

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
    <div className="bg-[#111827] md:px-40 md:py-24 px-3 py-10">
      <div className="flex flex-col gap-14">
        <CardSection
          headinText={data?.sectionTitle}
          // headingSpanText="Experience"
          paraText={
            data?.sectionDesc
            // <>
            //   There are many variations of passages of Lorem Ipsum
            //   <br />
            //   available, but the majority have suffered alteration in some form,
            //   by injected humour.
            // </>
          }
        />
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <CustomCard
            OuterDivClass="gap-2"
            headingCustomClass="text-[#EAB308]"
            date={data?.experiences?.[0]?.startDate}
            headingText={data?.experiences?.[0]?.bigTitle}
            paraText={`There are ${data?.experiences?.[1]?.description} ofLorem Ipsumavailable, but the majority havesuffered alteration in some`}
            spanText={data?.experiences?.[0]?.smallTitle}
          />
          <CustomCard
            OuterDivClass="gap-2"
            headingCustomClass="text-[#EAB308]"
            date={data?.experiences?.[0]?.startDate}
            headingText={data?.experiences?.[0]?.bigTitle}
            paraText={`There are ${data?.experiences?.[1]?.description} ofLorem Ipsumavailable, but the majority havesuffered alteration in some`}
            spanText={data?.experiences?.[0]?.smallTitle}
          />
          <CustomCard
            OuterDivClass="gap-2"
            headingCustomClass="text-[#EAB308]"
            date="June-2002 - 2020"
            headingText="Graphic Designer"
            paraText="There are many variations of passages ofLorem Ipsumavailable, but
            the majority havesuffered alteration in some"
            spanText="Adobe Photoshop"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
