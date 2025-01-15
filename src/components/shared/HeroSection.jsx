import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = ({
  mainDivCustomClass,
  customClass,
  spanText,
  headingText,
  paraText1,
  paraText2,
  buttonText,
  headingSpanText,
  imgSrc,
  imgAlt,
  btnCustomClass,
  onClick,
}) => {
  return (
    <div className={`${mainDivCustomClass} md:px-40 md:py-24 px-3 py-10`}>
      <div
        className={`flex flex-col md:flex-row gap-10 md:gap-10 md:justify-between md:items-center ${customClass}`}
      >
        <div className="md:w-[500px] flex flex-col gap-6 ">
          {spanText && (
            <span className="text-[#EAB308] text-base ">{spanText}</span>
          )}
          {headingText && (
            <h1 className="text-[#F3F4F6] text-[42px] font-bold">
              {headingText}{" "}
              <span className="text-[#EAB308]">{headingSpanText}</span>
            </h1>
          )}
          {paraText1 && (
            <p className="text-[#6B7280] text-base ">{paraText1}</p>
          )}
          {paraText2 && (
            <p className="text-[#6B7280] text-base ">{paraText2}</p>
          )}

          {buttonText && (
            <Button
              className={`bg-[#FACC15] hover:bg-[#EAB308] text-[#000000] w-[fit-content] rounded-sm text-base  ${btnCustomClass}`}
              onClick={onClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
        <div>
          <Image src={imgSrc} width={427} height={427} alt={imgAlt} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
