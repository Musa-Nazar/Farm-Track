import arrow from "../../assets/arrow-down.svg";
function FAQCard({ text }) {
  const xml = (
    <div className="flex justify-between w-full min-h-[6.5rem] items-center bg-[#fff] max-md:min-h-[2.1rem] ">
      <div className="text-[#000] text-[2rem] leading-[335%] px-[4.3rem] max-md:px-[0.5rem_1.7rem] max-md:py-[1rem] max-md:font-[SF Pro Display] max-md:text-[1.6rem] max-md:not-italic  max-md:leading-[1.857rem]">
        {text}
      </div>
      <img
        src={arrow}
        alt={arrow}
        className="max-md:w-[1.5rem] aspect-square rotate-[-90deg] w-[3rem]"
      />
    </div>
  );
  return xml;
}

export default FAQCard;
