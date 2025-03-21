function ServicesCard({ head, text, image }) {
  const xml = (
    <div className="flex mx-[clamp(2rem,6.666666667vw,9.6rem)] gap-[clamp(2rem,5.763888888888889vw,8.6rem)] max-md:flex-col max-md:gap-[1rem]">
      <div
        className={`relative flex flex-col items-start w-[50%] max-md:w-full`}
      >
        <h2 className="text-black font-[SF Pro Display] text-[3rem] font-bold leading-[193%]">
          {head}
        </h2>
        <p className="text-black text-[2.2rem] font-normal leading-[218%]">
          {text}
        </p>
      </div>
      <div className={`w-[50%] max-md:w-full min-h-[468px] relative `}>
        <img src={image} className="w-full h-full block" />
      </div>
    </div>
  );
  return xml;
}

export default ServicesCard;
