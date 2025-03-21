import React from "react";
import DashboardGap from "../../UtilComponents/DashboardGap";
import SalesAndExpenseContainer from "./SalesAndExpenseContainer";
import SalesAndExpenseBox from "./SalesAndExpenseBox";
import SalesChartsContainer from "./SalesChartsContainer";

function SalesAndExpense() {
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <SalesAndExpenseContainer>
        <h2 className="text-black poppins text-[3rem] font-semibold leading-normal">
          Sales & Expenses
        </h2>
        <div className="flex justify-between max-md:flex-col mt-[2.55rem] gap-[2rem]">
          <SalesAndExpenseBox head="Total Sales" body="90,000.00" />
          <SalesAndExpenseBox head="Total Expense" body="30,000.00" />
          <SalesAndExpenseBox head="Total Profit" body="60,000.00" />
        </div>
      </SalesAndExpenseContainer>
      <SalesChartsContainer />
    </div>
  );
  return xml;
}

export default SalesAndExpense;
