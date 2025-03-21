function FeatureCard({ icon, cardHeading, cardText, leading }) {
  return (
    <div className="flex flex-col w-[29rem] min-h-[30.1rem] bg-[#FFF] shadow-[0px_4px_23px_-4px_rgba(0,0,0,0.20)] items-center pt-[3rem] max-md:w-full rounded-[1rem]">
      <div className="w-[5rem] flex justify-center items-center aspect-square mb-[4.6rem] max-md:w-[5.9138rem]">
        <img
          src={icon}
          alt=""
          className="block max-md:w-[5.9138rem] w-[5rem]  aspect-square"
        />
      </div>
      <h2
        className={`text-black text-center sf-bold text-[clamp(1.8rem,2.1vw,2.9rem)] font-bold leading-[137.931%] mb-[2.9rem] max-xl:leading-[2.2rem] max-md:text-[3.43rem] max-md:leading-[137.931%]`}
      >
        {cardHeading}
      </h2>
      <p
        className={`text-black text-center font-[SF_Pro_Display] text-[1.6rem] font-medium leading-[2.7rem] max-xl:px-[0.5rem] max-md:px-[0] max-md:text-[1.8924rem]`}
      >
        {cardText}
      </p>
    </div>
  );
}

export default FeatureCard;
