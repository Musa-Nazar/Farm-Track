function DashboardContainer({ children, mt, gap, p, cs }) {
  const xml = (
    <div
      className={`rounded-[1.5rem] dashboard-shaDow bg-[#fff] ${
        p && "pl-[3.35rem] pr-[3.75rem]"
      } pt-[4rem] min-h-[21.5rem] ml-[3.7rem] mr-[6.8rem] flex  max-md:flex-col max-md:mx-[2rem] justify-between items-start max-md:py-[2rem] ${
        mt && `${mt} `
      } ${gap && `${gap}`} ${cs}`}
    >
      {children}
    </div>
  );
  return xml;
}

export default DashboardContainer;
