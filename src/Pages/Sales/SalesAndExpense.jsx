import React, { Suspense, useEffect, useState } from "react";
import DashboardGap from "../../UtilComponents/DashboardGap";
import SalesAndExpenseContainer from "./SalesAndExpenseContainer";
import SalesAndExpenseBox from "./SalesAndExpenseBox";
import SalesChartsContainer from "./SalesChartsContainer";
import { toast } from "react-toastify";
import { useMainContext } from "../../../MainContext";
import { get } from "../../../http";
import Cookies from "universal-cookie";
import config from "../../../config";
import { redirect, useLoaderData, Await } from "react-router-dom";
import {
  AnalyticsTileErrorUI,
  AnalyticsTileLoaderUI,
} from "../../LoaderUI/AnalyticsLoaderUI";
import numberFormatter from "../../../utils/numberFormatter";

function SalesAndExpense() {
  const { data } = useLoaderData();
  console.log(data);
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <Suspense fallback={<AnalyticsTileLoaderUI />}>
        <Await resolve={data}>
          {(data) =>
            data?.status >= 400 ? (
              <AnalyticsTileErrorUI />
            ) : (
              <>
                <SalesAndExpenseContainer>
                  <h2 className="text-black poppins text-[3rem] font-semibold leading-normal">
                    Sales & Expenses
                  </h2>
                  <div className="flex justify-between max-md:flex-col mt-[2.55rem] gap-[2rem]">
                    <SalesAndExpenseBox
                      head="Total Sales"
                      body={numberFormatter(data?.data?.totalSales)}
                    />
                    <SalesAndExpenseBox
                      head="Total Expense"
                      body={numberFormatter(data?.data?.totalExpenses)}
                    />
                    <SalesAndExpenseBox
                      head="Total Profit"
                      body={numberFormatter(data?.data?.totalProfit)}
                    />
                  </div>
                </SalesAndExpenseContainer>
                <SalesChartsContainer
                  data={{
                    salesLossandExpense: data?.data?.salesLossandExpense,
                    salesTrend: data?.data?.salesTrend,
                  }}
                />
              </>
            )
          }
        </Await>
      </Suspense>
    </div>
  );
  return xml;
}

export default SalesAndExpense;

export async function loader() {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const data = get(`${config.apiDomain}/api/v1/salesandexpenses`, token);

  if (data?.status >= 400)
    return toast("please check your internet connection");

  return { data: data };
}
