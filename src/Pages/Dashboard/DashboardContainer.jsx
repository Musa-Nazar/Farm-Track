function DashboardContainer({ children, mt, gap, p, cs, type }) {
  const xml = (
    <div
      className={`rounded-[1.5rem] dashboard-shaDow bg-[#fff] ${p && "pl-[3.35rem] pr-[3.75rem]"} pt-[4rem] min-h-[21.5rem] ml-[3.7rem] mr-[6.8rem] flex max-md:overflow-scroll hide-scrollbar justify-between items-start max-md:py-[3rem] max-md:min-h-[unset] max-md:mx-auto max-md:max-w-[91%] max-md:px-[2rem] ${mt && `${mt} `} ${gap && `${gap}`} ${cs}`}
    >
      {children}
    </div>
  );
  return xml;
}

export default DashboardContainer;
