function SalesAndExpenseContainer({ children, cs }) {
  const xml = (
    <div
      className={`min-h-[286px] rounded-[15px] bg-white shadow-[0px_4px_49px_10px_rgba(0,0,0,0.07)] pl-[4.6rem] pr-[2rem] pt-[1.7rem] ml-[3.8rem] mr-[clamp(3.8rem,6.666666666666667vw,9.6rem)] max-md:mx-[3.1rem] max-md:px-[2rem] max-md:py-[1.7rem] ${cs}`}
    >
      {children}
    </div>
  );
  return xml;
}

export default SalesAndExpenseContainer;
