import React, { useEffect, useState } from "react";
import DashboardGap from "../../UtilComponents/DashboardGap";
import AnalyticContainer from "./AnalyticContainer";
import AnalyticsCard from "./AnalyticsCard";
import SalesChart from "./SalesChart";
import http from "../../../http";
import AnalyticLineChart from "./AnalyticLineChart";
import { useMainContext } from "../../../MainContext";

function Analytic() {
  const { token, user } = useMainContext();
  const [analyticsData, setAnalyticsData] = useState(undefined);
  const [analyticsChartData, setAnalyticsChartData] = useState(undefined);
  useEffect(() => {
    async function getAnalyticsData() {
      try {
        if (!token.access) return location.reload();
        const analyticsInfo = await http.prototype.get(
          "https://farmtrack-backend.onrender.com/api/info/analytics/",
          token.access
        );
        setAnalyticsData(analyticsInfo);
      } catch (error) {
        toast.error("Unable to fetch Data: 404", {
          className: "poppins text-[1.6rem]",
        });
      }
    }
    getAnalyticsData();
    async function getAnalyticsChartData() {
      try {
        if (!token.access) return location.reload();
        const analyticsChartInfo = await http.prototype.get(
          "https://farmtrack-backend.onrender.com/api/analytics-chart/",
          token.access
        );
        setAnalyticsChartData(analyticsChartInfo);
      } catch (error) {
        toast.error("Unable to Chart fetch Data: 404", {
          className: "poppins text-[1.6rem]",
        });
      }
    }
    getAnalyticsChartData();
  }, []);
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <AnalyticContainer>
        <h2 className="text-black pl-[2.05rem] poppins text-[3rem] font-semibold leading-normal">
          Analytics
        </h2>
        <div className="flex justify-between mt-[2.6rem] gap-[1rem] max-md:flex-col">
          <AnalyticsCard
            head="Livestock Sales"
            unit="count"
            cs="pl-[2.6rem] pr-[4.4rem]"
            poultry={
              analyticsData && user.livestock_type === "Poultry"
                ? analyticsData.livestock_sales[0].sold
                : analyticsData && user.livestock_type === "Both"
                ? analyticsData.feed_consumption[1].consumed
                : "10"
            }
            fish={analyticsData ? analyticsData.livestock_sales[0].sold : "10"}
          />
          <AnalyticsCard
            head="Feed Consumption"
            unit="kg"
            cs="pl-[3rem] pr-[4.2rem]"
            poultry={
              analyticsData && user.livestock_type === "Poultry"
                ? analyticsData.feed_consumption[0].consumed
                : analyticsData && user.livestock_type === "Both"
                ? analyticsData.feed_consumption[1].consumed
                : "10"
            }
            fish={
              analyticsData ? analyticsData.feed_consumption[0].consumed : "10"
            }
          />
          <AnalyticsCard
            head="Mortality rate"
            unit="%"
            cs="pl-[2.6rem] pr-[4.4rem]"
            poultry={
              analyticsData && user.livestock_type === "Poultry"
                ? analyticsData.livestock_mortality[0].mortality.toFixed(1)
                : analyticsData && user.livestock_type === "Both"
                ? analyticsData.livestock_mortality[1].mortality.toFixed(1)
                : "10"
            }
            fish={
              analyticsData
                ? analyticsData.livestock_mortality[0].mortality.toFixed(1)
                : "10"
            }
          />
        </div>
      </AnalyticContainer>
      <div className="flex max-md:flex-col gap-[3.3rem] justify-between pl-[3.1rem] pr-[8.8rem] max-md:px-[3.1rem] mb-[2rem]">
        <AnalyticContainer cs="mt-[3.6rem] w-[clamp(3rem,46vw,63.4rem)] max-md:w-full flex-none !mx-0">
          <SalesChart analyticsChartData={analyticsChartData} />
        </AnalyticContainer>
        <AnalyticContainer cs="mt-[3.6rem] w-full !mx-[0rem] max-md:mt-[0.3rem]">
          <AnalyticLineChart />
        </AnalyticContainer>
      </div>
    </div>
  );
  return xml;
}

export default Analytic;
