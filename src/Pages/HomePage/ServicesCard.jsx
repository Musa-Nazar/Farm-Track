function ServicesCard({ head, text, image, reverse }) {
  const xml = (
    <div
      className={`flex w-[128rem] max-w-[85%] mx-auto gap-[clamp(2rem,5.763888888888889vw,8.6rem)] max-md:mx-[1.6rem] max-md:flex-col max-md:gap-[1rem] ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`relative flex flex-col items-start w-[50%] max-md:w-full`}
      >
        <h2 className="text-black font-[SF Pro Display] text-[3rem] font-bold leading-[193%] max-md:text-[1.6rem]">
          {head}
        </h2>
        <p className="text-black text-[2.2rem] font-normal leading-[200%] max-md:leading-[150%] max-md:text-[1.4rem] text-justify">
          {text}
        </p>
      </div>
      <div
        className={`w-[50%] max-md:w-full max-h-[490px] rounded-[1rem_1rem_8rem_1.5rem] overflow-hidden max-md:h-[14.1rem] relative max-md:min-h-[unset]`}
      >
        <img
          src={image}
          className="w-full h-full block object-bottom object-cover  hover:scale-[1.1] transition-[scale,_filter] duration-75 ease-linear hover:grayscale-[50%]"
        />
      </div>
    </div>
  );
  return xml;
}

export default ServicesCard;
