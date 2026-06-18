function AnalyticsTileLoaderUI({ state }) {
  const xml = (
    <>
      <div className="rounded-[1.5rem] dashboard-shaDow bg-[#fff] pt-[4rem] ml-[3.7rem] mr-[8.8rem] flex max-md:mx-[2rem] justify-center items-center max-md:py-[2rem] mb-[3.6rem] shadow-[0px_4px_49px_10px_rgba(0,0,0,0.07)] min-h-[28.2rem]">
        <div className="flex gap-[.5rem] h-[calc(0.8*21.5rem)]">
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0s" }}
          ></div>
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0.1s" }}
          ></div>
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0.2s" }}
          ></div>
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0.3s" }}
          ></div>
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0.4s" }}
          ></div>
        </div>
      </div>
      <section className="flex gap-[3.3rem]">
        <div
          className={`ml-[3.1rem] max-md:mx-[3.1rem] rounded-[1.5rem] bg-white shadow-[0px_4px_49px_10px_rgba(0,0,0,0.07)] min-h-[47.313rem] pt-[1.1rem] px-[1.8rem] max-md:py-[1.1rem] w-[clamp(3rem,46vw,63.4rem)] flex items-center flex-none`}
        >
          <div className="w-[8rem] aspect-square my-[1rem] mx-auto border-[#61A061] border-t-transparent border-[1rem] rounded-[50%] rotate flex justify-center items-center ">
            <div className="w-[80%] aspect-square border-[#91bb91] border-t-transparent border-[0.2rem] rounded-[50%] rotate flex justify-center items-center Myspin-2"></div>
          </div>
        </div>
        <div
          className={`mr-[8.8rem] max-md:mx-[3.1rem] rounded-[1.5rem] bg-white shadow-[0px_4px_49px_10px_rgba(0,0,0,0.07)] min-h-[47.313rem] pt-[1.1rem] px-[1.8rem] max-md:py-[1.1rem] w-full flex justify-center items-center`}
        >
          <div className="w-[8rem] aspect-square my-[1rem] mx-auto border-[#61A061] border-t-transparent border-[1rem] rounded-[50%] rotate flex justify-center items-center">
            <div className="w-[80%] aspect-square border-[#91bb91] border-t-transparent border-[0.2rem] rounded-[50%] rotate flex justify-center items-center Myspin-2"></div>
          </div>
        </div>
      </section>
    </>
  );
  return xml;
}

function AnalyticsTileErrorUI({ message }) {
  const xml = (
    <>
      <div className="rounded-[1.5rem] dashboard-shaDow bg-[#fff] pt-[4rem] min-h-[21.5rem] ml-[3.7rem] mr-[6.8rem] flex max-md:mx-[2rem] justify-center items-center max-md:py-[2rem]">
        {message}
      </div>
    </>
  );
  return xml;
}

export { AnalyticsTileLoaderUI, AnalyticsTileErrorUI };
