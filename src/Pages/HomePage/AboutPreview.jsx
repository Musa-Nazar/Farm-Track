function AboutPreview() {
  const xml = (
    <div
      className="w-full px-[clamp(2rem,6.666666667vw,9.6rem)] pt-[13.6rem] bg-[#F4F4F4] max-md:pt-[calc(13.6rem/2)] pb-[17.8rem] max-md:pb-[8.9rem] max-md:px-[1.6rem]"
      id="abouts"
    >
      <div className="flex gap-[5.95rem] justify-between max-md:flex-col max-md:text-center max-md:items-center max-md:gap-0">
        <div className="flex flex-col items-start w-[50%] max-md:w-full max-md:items-start">
          <h2 className="text-[#000] sf-bold text-[3rem] font-bold leading-[223.333%] tracking-[0.24rem] mb-[1.1rem] max-md:text-[1.6rem] max-md:leading-[113.076%]">
            ABOUT US
          </h2>
          <h3 className="text-[#000] text-[2.4rem] font-[500] leading-[279.167%] tracking-[0.192rem] max-md:leading-[180.921%] max-md:text-[1rem] max-md:font-bold sf-bold max-md:tracking-[0.08rem] max-md:mb-[0.2rem]">
            FARMTRACK
          </h3>
          <p className="text-[#000] text-[2rem] leading-[295%] max-md:leading-[175%] max-md:text-[1.2rem] text-left max-md:min-h-[12.3rem]">
            Optimize your farm operations with our intelligent inventory
            management system. Track feed, livestock, and water quality in
            real-time with automated monitoring and analytics. Improve
            efficiency, reduce waste, and maximize productivity with smart
            technology designed for modern poultry and fish farming.
          </p>
        </div>

        <div className="flex w-[50%] min-h-[46.8rem] shrink-0 bg-about mt-[1.5rem] bg-[#F4F4F4] max-md:w-full max-md:mt-[0] max-md:min-h-[14.1rem]"></div>
      </div>
    </div>
  );
  return xml;
}

export default AboutPreview;
