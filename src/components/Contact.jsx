"use client";

import { useEffect } from "react";
import ContactForm from "./shared/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./shared/Loader";
import axios from "axios";
import { setError, setLoading, setSuccess } from "@/redux/slices/contactSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.contact);

  const fetchData = async () => {
    dispatch(setLoading());
    try {
      const response = await axios.get("/api/contact-me");
      dispatch(setSuccess(response.data));
    } catch (err) {
      dispatch(
        setError(
          `${err.response?.status} - ${err.response?.statusText}` || err.message
        )
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="md:px-40 md:py-24 px-3 py-10">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="md:px-40 md:py-24 px-3 py-10 text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div
      id="contact"
      className="md:px-40 md:py-24 px-3 py-10 flex flex-col items-center justify-center gap-14"
    >
      <div className="text-center max-w-[600px] flex flex-col items-center justify-center gap-4">
        <h1 className="text-[#F3F4F6] text-[42px] font-bold">{data?.title}</h1>
        <p className="text-[#6B7280] text-[16px]">{data?.description}</p>
      </div>
      <div className="flex md:flex-row flex-col gap-8 md:gap-0 items-center justify-between  w-full">
        <div className="max-w-[300px] flex flex-col gap-4 ">
          <div>
            <h6 className="text-[#EAB308] text-base font-bold ">
              Address _{" "}
              <span className="text-[#F3F4F6] font-normal">
                {data?.address}
              </span>
            </h6>
          </div>
          <div>
            <h6 className="text-[#EAB308] text-base font-bold ">
              Phone _{" "}
              <span className="text-[#F3F4F6] font-normal">{data?.phone}</span>
            </h6>
          </div>
          <div>
            <h6 className="text-[#EAB308] text-base font-bold ">
              E mail _{" "}
              <span className="text-[#F3F4F6] font-normal">{data?.email}</span>
            </h6>
          </div>
          <div>
            <h6 className="text-[#EAB308] text-base font-bold ">
              Website _{" "}
              <span className="text-[#F3F4F6] font-normal">
                {data?.website}
              </span>
            </h6>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
