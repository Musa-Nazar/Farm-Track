function FeatureCard({ icon, cardHeading, cardText, leading }) {
  return (
    <div className="flex flex-col w-[clamp(10rem,21vw,29rem)] min-h-[30.1rem] bg-[#FFF] shadow-[0px_4px_23px_-4px_rgba(0,0,0,0.20)] items-center pt-[3rem] max-md:w-full rounded-[1rem]">
      <div className="w-[5rem] flex justify-center items-center aspect-square mb-[4.6rem]">
        <img src={icon} alt="" className="block w-[5rem] aspect-square" />
      </div>
      <h2
        className={`text-black text-center sf-bold text-[2.9rem] font-bold leading-[137.931%] mb-[2.9rem]`}
      >
        {cardHeading}
      </h2>
      <p
        className={`text-black text-center font-[SF_Pro_Display] text-[1.6rem] font-medium leading-[2.7rem]`}
      >
        {cardText}
      </p>
    </div>
  );
}

export default FeatureCard;
