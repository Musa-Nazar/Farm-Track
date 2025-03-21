import arrow from "../../assets/arrow-down.svg";
function FAQCard({ text }) {
  const xml = (
    <div className="flex justify-between w-full min-h-[6.5rem] items-center bg-[#fff] max-md:min-h-[2.1rem]">
      <div className="text-[#000] text-[2rem] leading-[335%] pl-[4.3rem] max-md:pl-[1.7rem] max-md:font-[SF Pro Display] max-md:text-[1rem] max-md:not-italic  max-md:leading-[1.857rem]">
        {text}
      </div>
    </div>
  );
  return xml;
}

export default FAQCard;
