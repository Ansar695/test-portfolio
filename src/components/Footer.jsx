import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="md:px-40 md:py-24 px-3 py-10 flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center gap-4">

      <h1 className="text-[#FFFFFF] font-bold text-[40px]  ">AboutMe.</h1>
      <p className="max-w-[600px] text-center text-[#9CA3AF] text-base  ">
        There are many variations of passages ofLorem Ipsumavailable, but the
        majority havesuffered alteration in some form,{" "}
      </p>
        </div>
      <div className="flex gap-4 items-center">
        <Link href="#"><FaFacebook size={24} color="#1F2937" /></Link>
        <Link href="#"><FaTwitter size={24} color="#1F2937" /></Link>
        <Link href="#"><FaLinkedin size={24} color="#EAB308" /></Link>
        <Link href="#"><FaInstagram  size={24} color="#1F2937" /></Link>
        <Link href="#"><FaYoutube size={24} color="#1F2937" /></Link>
        <Link href="#"><FaPinterest size={24} color="#1F2937" /></Link>
      </div>
    </div>
  );
};

export default Footer;
