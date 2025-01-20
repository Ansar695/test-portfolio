"use client";

import { fetchServiceData } from "@/redux/slices/serviceSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardSection from "./shared/CardSection";
import CustomCard from "./shared/CustomCard";
import Loader from "./shared/Loader";

const Service = ({ children }) => {
  const [childrenArray, setChildrenArray] = useState(() =>
    React.Children.toArray(children)
  );
  const exactData = childrenArray[0].props.children;

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.service);

  useEffect(() => {
    if (exactData) {
      dispatch(fetchServiceData(exactData));
    }
  }, [exactData, dispatch]);

  return (
    <div id="service" className=" md:px-40 md:py-24 px-3 py-10 bg-[#111827]">
      {loading && <Loader />}
      {error && <p className=" text-red-500">Error: {error}</p>}
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
