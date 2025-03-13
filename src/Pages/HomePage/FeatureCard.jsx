function FeatureCard({icon,cardHeading,cardText,spacing,leading}) {
  return (
    <div className="flex flex-col w-[clamp(10rem,24.04%,30rem)] h-[40.2rem] bg-[#FFF] my-shadow items-center pt-[5.6rem]">
      <div className="w-[10rem] flex justify-center items-center aspect-square">
        <img src={icon} alt="" />
      </div>
      <h2 className={`text-[#000] w-[100%] ${spacing}  text-[clamp(1.8rem,2.0833333333vw,3rem)] text-left ${leading ? leading :"leading-[263.333%]" } sp-bold mt-[6.3rem] font-bold`}>{cardHeading}</h2>
      <p className={`text-[#000] text-[clamp(1.2rem,1.1805555556vw,1.7rem)] ${spacing} w-[100%] leading-[235.294%]`}>{cardText}</p>
    </div>
    
    
  )
}

export default FeatureCard