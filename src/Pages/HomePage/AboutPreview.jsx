function AboutPreview() {
  const xml = (
    <div
      className="w-full pt-[13.6rem] bg-[#F4F4F4] pb-[17.8rem] max-md:pb-[5rem] max-md:pt-[5rem] max-md:px-0"
      id="abouts"
    >
      <div className="flex gap-[clamp(2rem,5.763888888888889vw,8.6rem)] justify-between max-md:flex-col max-md:text-center max-md:items-center max-md:gap-[2rem] w-[128rem] max-w-[85%] mx-auto max-md:max-w-[91%] max-md:w-[40rem]">
        <div className="flex flex-col items-start w-[50%] max-md:w-full max-md:items-start">
          <h2 className="text-[#000] sf-bold text-[3rem] font-bold leading-[223.333%] tracking-[0.24rem] mb-[1.1rem] max-md:text-[1.8rem] max-md:leading-[113.076%]">
            ABOUT US
          </h2>
          {/* <h3 className="text-[#000] text-[2.4rem] font-[500] leading-[279.167%] tracking-[0.192rem] max-md:leading-[180.921%] max-md:text-[1rem] max-md:font-bold sf-bold max-md:tracking-[0.08rem] max-md:mb-[0.2rem]"></h3> */}
          <p className="text-[#000] text-[2rem] leading-[295%] max-md:leading-[175%] max-md:text-[1.6rem] max-md:min-h-[12.3rem] tracking-[0.105rem] text-justify">
            Farm track optimize your farm operations with our intelligent
            inventory management system. Track feed, livestock, and water
            quality in real-time with automated monitoring and analytics.
            Improve efficiency, reduce waste, and maximize productivity with
            smart technology designed for modern poultry and fish farming.
          </p>
        </div>

        <div className="flex w-[50%] min-h-[46.8rem] rounded-[1rem_1rem_8rem_1rem] shrink-0 bg-about mt-[1.5rem] bg-[#F4F4F4] max-md:w-full max-md:mt-[0] hover:grayscale-[50%] transition-all duration-75 hover-size max-md:min-h-[30rem] "></div>
      </div>
    </div>
  );
  return xml;
}

export default AboutPreview;
