function ServicesCard({ head, text, image, reverse }) {
  const xml = (
    <div
      className={`flex w-[128rem] max-w-[85%] mx-auto gap-[clamp(2rem,5.763888888888889vw,8.6rem)] max-lg:flex-col max-lg:gap-[2rem] max-lg:max-w-[91%] max-lg:w-[40rem] ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`relative flex flex-col items-start w-[50%] max-lg:w-full`}
      >
        <h2 className="text-black font-[SF Pro Display] text-[3rem] font-bold leading-[193%] max-lg:text-[1.8rem]">
          {head}
        </h2>
        <p className="text-black text-[2.2rem] font-normal leading-[200%] max-lg:leading-[150%] max-lg:text-[1.6rem] text-justify">
          {text}
        </p>
      </div>
      <div
        className={`w-[50%] max-lg:w-full max-h-[490px] rounded-[1rem_1rem_8rem_1.5rem] overflow-hidden relative max-lg:min-h-[unset] max-lg:h-[30rem]`}
      >
        <img
          src={image}
          className="w-full h-full block object-bottom object-cover  hover:scale-[1.1] transition-[scale,_filter] duration-75 ease-linear hover:grayscale-[50%] "
        />
      </div>
    </div>
  );
  return xml;
}

export default ServicesCard;
