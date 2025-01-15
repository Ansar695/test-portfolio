const CardSection = ({ headinText, headingSpanText, paraText }) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h1 className="text-[#F3F4F6] text-[42px] font-bold ">
        {headinText} <span className="text-[#EAB308]">{headingSpanText}</span>
      </h1>
      <p className="text-[#6B7280] text-[16px]">{paraText}</p>
    </div>
  );
};

export default CardSection;
