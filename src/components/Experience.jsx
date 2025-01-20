"use client";

import { useEffect } from "react";
import CardSection from "./shared/CardSection";
import CustomCard from "./shared/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./shared/Loader";
import { fetchExperienceData } from "@/redux/slices/experienceSlice";

const Experience = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.experience);

  useEffect(() => {
    dispatch(fetchExperienceData());
  }, [dispatch]);

  return (
    <div className="bg-[#111827] md:px-40 md:py-24 px-3 py-10">
      {loading && <Loader />}
      {error && <p className=" text-red-500">Error: {error}</p>}
      <div className="flex flex-col gap-14">
        <CardSection
          headinText={data?.sectionTitle}
          paraText={data?.sectionDesc}
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
