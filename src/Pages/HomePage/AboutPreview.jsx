function AboutPreview() {
  const xml = (
    <div className="w-full px-[clamp(2rem,6.666666667vw,9.6rem)] pt-[13.6rem] bg-[#F4F4F4] max-md:pt-[calc(13.6rem/2)] pb-[17.8rem]">
      <div className="flex gap-[5.95rem] justify-between max-md:flex-col max-md:text-center max-md:items-center">
        <div className="flex flex-col items-start w-[61.6rem] max-md:w-full max-md:items-center">
          <h2 className="text-[#000] sf-bold text-[3rem] font-bold leading-[223.333%] tracking-[0.24rem] mb-[1.1rem]">
            ABOUT US
          </h2>
          <h3 className="text-[#000] text-[2.4rem] font-[500] leading-[279.167%] tracking-[0.192rem]">
            FARMTRACK
          </h3>
          <p className="text-[#000] text-[2rem] leading-[295%]">
            Optimize your farm operations with our intelligent inventory
            management system. Track feed, livestock, and water quality in
            real-time with automated monitoring and analytics. Improve
            efficiency, reduce waste, and maximize productivity with smart
            technology designed for modern poultry and fish farming.
          </p>
        </div>

        <div className="flex w-[57.1rem] min-h-[46.8rem] shrink-0 bg-about mt-[1.5rem] bg-[#F4F4F4] max-w-full"></div>
      </div>
    </div>
  );
  return xml;
}

export default AboutPreview;
