import React, { Suspense, useEffect, useState } from "react";
import DashboardGap from "../../UtilComponents/DashboardGap";
import AnalyticContainer from "./AnalyticContainer";
import AnalyticsCard from "./AnalyticsCard";
import SalesChart from "./SalesChart";
import AnalyticLineChart from "./AnalyticLineChart";
import { useMainContext } from "../../../MainContext";
import { get } from "../../../http";
import config from "../../../config";
import Cookies from "universal-cookie";
import { Await, useLoaderData } from "react-router-dom";
import {
  AnalyticsTileErrorUI,
  AnalyticsTileLoaderUI,
} from "../../LoaderUI/AnalyticsLoaderUI";
import { jwtDecode } from "jwt-decode";
import padForChart from "../../../utils/padForChart";
import padForTotalIncome from "../../../utils/padForTotalIncome";

function Analytic() {
  // GET TOKEN DATA
  const cookie = new Cookies();
  const token = cookie.get("token");
  let decodedToken;
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    decodedToken = {};
  }
  const [analyticsChartData, setAnalyticsChartData] = useState(undefined);

  const { analyticsData } = useLoaderData();

  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <Suspense fallback={<AnalyticsTileLoaderUI />}>
        <Await resolve={analyticsData}>
          {(data) =>
            data?.status >= 400 ? (
              <AnalyticsTileErrorUI />
            ) : (
              <>
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
                        decodedToken?.livestockType === "both"
                          ? data?.data?.livestockSales?.poultry
                          : data?.data?.livestockSales
                      }
                      fish={data?.data?.livestockSales?.fish}
                      type={decodedToken?.livestockType}
                    />
                    <AnalyticsCard
                      head="Feed Consumption"
                      unit="kg"
                      cs="pl-[3rem] pr-[4.2rem]"
                      poultry={
                        decodedToken?.livestockType === "both"
                          ? data?.data?.feedConsumed?.poultry
                          : data?.data?.feedConsumed
                      }
                      fish={data?.data?.feedConsumed?.fish}
                      type={decodedToken?.livestockType}
                    />
                    <AnalyticsCard
                      head="Mortality rate"
                      unit="%"
                      cs="pl-[2.6rem] pr-[4.4rem]"
                      poultry={
                        decodedToken?.livestockType === "both"
                          ? data?.data?.mortality?.poultry?.toFixed(2)
                          : data?.data?.mortality?.toFixed(2)
                      }
                      fish={data?.data?.mortality?.fish?.toFixed(2)}
                      type={decodedToken?.livestockType}
                    />
                  </div>
                </AnalyticContainer>
                <div className="flex max-md:flex-col gap-[3.3rem] justify-between pl-[3.1rem] pr-[8.8rem] max-md:px-[3.1rem] mb-[2rem]">
                  <AnalyticContainer cs="mt-[3.6rem] w-[clamp(3rem,46vw,63.4rem)] max-md:w-full flex-none !mx-0">
                    <SalesChart
                      analyticsChartData={padForChart(
                        data?.data?.salesAndPurchase,
                      )}
                    />
                  </AnalyticContainer>
                  <AnalyticContainer cs="mt-[3.6rem] w-full !mx-[0rem] max-md:mt-[0.3rem]">
                    <AnalyticLineChart
                      monthlyIncome={padForTotalIncome(
                        data?.data?.monthlyIncome,
                      )}
                    />
                  </AnalyticContainer>
                </div>
              </>
            )
          }
        </Await>
      </Suspense>
    </div>
  );
  return xml;
}

export default Analytic;

export async function loader({ request, params }) {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const analyticsData = get(`${config.apiDomain}/api/v1/analytics`, token);

  return { analyticsData };
}
