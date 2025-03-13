function FAQCard({text}) {
  const xml = 
  <div className="flex justify-between w-full h-[6.5rem] items-center bg-[#fff]">
    <div className="text-[#000] text-[2rem] leading-[335%] pl-[4.3rem]">{text}</div>
    <div className="icon mr-[1.8rem] w-[2.7rem] h-[5.4rem] shrink-0 aspect-[1/2]"><img src="./src/assets/arrow-down.svg" alt="error" className="w-full h-full block" /></div>
  </div>
  return (xml)
}

export default FAQCard