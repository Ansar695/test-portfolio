"use Client";

import Image from "next/image";

const CustomCard = ({
  imgSrc,
  imgAlt,
  headingText,
  paraText,
  headingCustomClass,
  spanText,
  date,
  OuterDivClass,
  paraCustomClass,
}) => {
  return (
    <div className="bg-[#020617] flex flex-col gap-4 justify-center items-center p-8 rounded-xl">
      <div className={`flex flex-col ${OuterDivClass} w-full`}>
        {imgSrc && <Image src={imgSrc} width={40} height={40} alt={imgAlt} />}
        {date && <h6 className="text-[#D1D5DB] text-xl  ">{date}</h6>}
        <h4 className={`${headingCustomClass}  text-[26px] font-bold`}>
          {headingText}
        </h4>
        {spanText && (
          <span className="text-[#D1D5DB] text-base font-bold ">
            {spanText}
          </span>
        )}
      </div>
      <div>
        <p className={`text-[#6B7280] text-base ${paraCustomClass}`}>
          {paraText}
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
