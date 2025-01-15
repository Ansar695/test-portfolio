"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/my-portfolio");
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
    return <div className="md:px-40 md:py-24 px-3 py-10">Loading...</div>;
  if (error)
    return (
      <div className="md:px-40 md:py-24 px-3 py-10">Error: {error.message}</div>
    );

  return (
    <div
      id="portfolio"
      className="md:px-40 md:py-24 px-3 py-10 flex flex-col items-center justify-center gap-20"
    >
      <div className="text-center max-w-[500px] flex flex-col items-center justify-center gap-4">
        <h1 className="text-[#F3F4F6] text-[42px] font-bold">
          {/* My <span className="text-[#EAB308]">Portfolio</span> */}
          {data?.title}
        </h1>
        <p className="text-[#6B7280] text-[16px]">{data?.description}</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 xl:justify-between items-center w-full">
        <div>
          <Link href="#">
            <Image
              src={data?.images?.[0]?.url}
              width={400}
              height={0}
              className="w-full lg:w-[600px]"
              alt="portflio1"
            />
          </Link>
        </div>
        <div className="flex flex-col md:gap-[29px] gap-6">
          <div className="flex md:gap-[31px] items-center justify-center gap-7">
            <Link href="#">
              <Image
                src={data?.images?.[0]?.url}
                width={200}
                height={0}
                className="w-[180px] lg:min-w-[270px] "
                alt="portflio2"
              />{" "}
            </Link>
            <Link href="#">
              <Image
                src={data?.images?.[0]?.url}
                width={200}
                height={0}
                className="w-[180px] lg:min-w-[270px]"
                alt="portflio3"
              />{" "}
            </Link>
          </div>
          <div className="flex md:gap-[31px] items-center justify-center gap-7">
            <Link href="#">
              <Image
                src={data?.images?.[0]?.url}
                width={200}
                height={0}
                className="w-[180px]  lg:min-w-[270px]"
                alt="portflio4"
              />{" "}
            </Link>
            <Link href="#">
              <Image
                src={data?.images?.[0]?.url}
                width={200}
                height={0}
                className="w-[180px]  lg:min-w-[270px]"
                alt="portflio5"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
