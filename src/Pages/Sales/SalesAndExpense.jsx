import React, { useEffect, useState } from "react";
import DashboardGap from "../../UtilComponents/DashboardGap";
import SalesAndExpenseContainer from "./SalesAndExpenseContainer";
import SalesAndExpenseBox from "./SalesAndExpenseBox";
import SalesChartsContainer from "./SalesChartsContainer";
import http from "../../../http";
import { toast } from "react-toastify";
import { useMainContext } from "../../../MainContext";

function SalesAndExpense() {
  const { token, user } = useMainContext();
  const [salesData, setSalesData] = useState(undefined);
  useEffect(() => {
    async function getSalesData() {
      try {
        const salesInfo = await http.prototype.get(
          "/api/api/info/sales-expenses/",
          token.access
        );
        setSalesData(salesInfo);
      } catch (error) {}
    }
    getSalesData();
  }, []);
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <SalesAndExpenseContainer>
        <h2 className="text-black poppins text-[3rem] font-semibold leading-normal">
          Sales & Expenses
        </h2>
        <div className="flex justify-between max-md:flex-col mt-[2.55rem] gap-[2rem]">
          <SalesAndExpenseBox
            head="Total Sales"
            body={
              salesData ? (
                salesData.total_sales.toLocaleString()
              ) : (
                <span className="w-[3rem] block h-[3rem] rounded-[50%] border border-black border-t-[transparent] rotate"></span>
              )
            }
          />
          <SalesAndExpenseBox
            head="Total Expense"
            body={
              salesData ? (
                salesData.total_expenses.toLocaleString()
              ) : (
                <span className="w-[3rem] block h-[3rem] rounded-[50%] border border-black border-t-[transparent] rotate"></span>
              )
            }
          />
          <SalesAndExpenseBox
            head="Total Profit"
            body={
              salesData ? (
                salesData.total_income.toLocaleString()
              ) : (
                <span className="w-[3rem] block h-[3rem] rounded-[50%] border border-black border-t-[transparent] rotate"></span>
              )
            }
          />
        </div>
      </SalesAndExpenseContainer>
      <SalesChartsContainer />
    </div>
  );
  return xml;
}

export default SalesAndExpense;
