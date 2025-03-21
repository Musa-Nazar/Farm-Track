function AnalyticContainer({ children, cs }) {
  const xml = (
    <div
      className={`ml-[3.1rem] mr-[8.8rem] max-md:mx-[3.1rem] rounded-[1.5rem] bg-white shadow-[0px_4px_49px_10px_rgba(0,0,0,0.07)] min-h-[28.2rem] pt-[1.1rem] px-[1.8rem] max-md:py-[1.1rem] ${cs}`}
    >
      {children}
    </div>
  );
  return xml;
}

export default AnalyticContainer;
