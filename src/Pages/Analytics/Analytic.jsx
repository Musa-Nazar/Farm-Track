import React from "react";
import DashboardGap from "../../UtilComponents/DashboardGap";
import AnalyticContainer from "./AnalyticContainer";
import AnalyticsCard from "./AnalyticsCard";
import SalesChart from "./SalesChart";
import DonutChart from "./DonutChart";

function Analytic() {
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <AnalyticContainer>
        <h2 className="text-black pl-[2.05rem] poppins text-[3rem] font-semibold leading-normal">
          Analytics
        </h2>
        <div className="flex justify-between mt-[2.6rem] gap-[1rem] max-md:flex-col">
          <AnalyticsCard
            head="Water Consumption"
            unit="Litres"
            cs="pl-[2.6rem] pr-[4.4rem]"
            poultry="108"
            fish="108"
          />
          <AnalyticsCard
            head="Feed Consumption"
            unit="kg"
            cs="pl-[3rem] pr-[4.2rem]"
            poultry="35"
            fish="200"
          />
          <AnalyticsCard
            head="Mortality rate"
            unit="%"
            cs="pl-[2.6rem] pr-[4.4rem]"
            poultry="2.1"
            fish="1.3"
          />
        </div>
      </AnalyticContainer>
      <div className="flex max-md:flex-col gap-[3.3rem] justify-between pl-[3.1rem] pr-[8.8rem] max-md:px-[3.1rem] mb-[2rem]">
        <AnalyticContainer cs="mt-[3.6rem] w-[clamp(3rem,46vw,63.4rem)] max-md:w-full flex-none !mx-0">
          <SalesChart />
        </AnalyticContainer>
        <AnalyticContainer cs="mt-[3.6rem] w-full !mx-[0rem] max-md:mt-[0.3rem]">
          <DonutChart />
        </AnalyticContainer>
      </div>
    </div>
  );
  return xml;
}

export default Analytic;
