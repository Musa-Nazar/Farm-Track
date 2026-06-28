import { useEffect, useState } from "react";
import SalesAndExpenseContainer from "./SalesAndExpenseContainer";
import SalesOverallChart from "./SalesOverallChart";
import SalesTrendChart from "./SalesTrendChart";
import chartDayFormater from "../../../utils/chartDayFormater";

function SalesChartsContainer({ data }) {
  const xml = (
    <div className="flex ml-[3.8rem] mr-[9.6rem] mt-[2.5rem] justify-between gap-[1rem] !bg-transparent max-md:flex-col max-md:mx-[3.1rem] max-md:gap-[2.5rem] mb-[2rem]">
      <SalesAndExpenseContainer cs="!ml-0 !mr-0 w-[60%] flex-none max-md:w-full relative before:rounded-[15px]">
        <SalesOverallChart data={data?.salesLossandExpense} />
      </SalesAndExpenseContainer>
      <SalesAndExpenseContainer cs="!ml-0 !mr-0 w-[40%] overflow-x-hidden !pl-[0] max-md:w-full">
        <SalesTrendChart data={chartDayFormater(data?.salesTrend)} />
      </SalesAndExpenseContainer>
    </div>
  );
  return xml;
}

export default SalesChartsContainer;
