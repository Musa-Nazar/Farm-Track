function ServicesCard({ head, text, image }) {
  const xml = (
    <div className="flex mx-[clamp(2rem,6.666666667vw,9.6rem)] gap-[clamp(2rem,5.763888888888889vw,8.6rem)] max-md:mx-[1.6rem] max-md:flex-col max-md:gap-[1rem]">
      <div
        className={`relative flex flex-col items-start w-[50%] max-md:w-full`}
      >
        <h2 className="text-black font-[SF Pro Display] text-[3rem] font-bold leading-[193%] max-md:text-[1.6rem]">
          {head}
        </h2>
        <p className="text-black text-[2.2rem] font-normal leading-[218%] max-md:leading-[150%] max-md:text-[1.4rem] text-justify">
          {text}
        </p>
      </div>
      <div
        className={`w-[50%] max-md:w-full min-h-[468px] max-md:h-[14.1rem] relative max-md:min-h-[unset]`}
      >
        <img
          src={image}
          className="w-full h-full block object-center object-cover"
        />
      </div>
    </div>
  );
  return xml;
}

export default ServicesCard;
