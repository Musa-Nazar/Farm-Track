import FAQCard from "./FAQCard";

function FAQ() {
  const xml = (
    <div className="px-[clamp(2rem,6.666666667vw,9.6rem)] bg-[#F4F4F4] flex flex-col pb-[6.5rem] max-md:pb-[5.659rem] max-md:px-[1.6rem]">
      <h2 className="text-[#000] text-[3.5rem] font-bold sf-bold leading-[191.429%] mb-[4rem]  max-md:text-[12px] max-md:leading-[18.574px] max-md:text-center max-md:mb-[2.5rem]">
        FREQUENTLY ASKED QUESTIONS (FAQ)
      </h2>
      <div className="flex flex-col gap-[3.9rem] w-full max-w-[100%] max-md:gap-[1.6rem]">
        <FAQCard text="What is this platform about?" />
        <FAQCard text="Can I access my farm data remotely?" />
        <FAQCard text="Does it notify me of bird or fish mortality?" />
        <FAQCard text="How does inventory management work?" />
      </div>
    </div>
  );
  return xml;
}

export default FAQ;
/*
width: 27px;
height: 54px;
transform: rotate(90deg);
flex-shrink: 0;
aspect-ratio: 1/2;
*/
