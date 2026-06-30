import React, { useEffect } from "react";
import DashboardTableRow from "./DashboardTableRow";
import { useMainContext } from "../../../MainContext";

function DashboardTable({ dashboardData }) {
  let theadStyle =
    "text-[#000] text-center poppins text-[2.2rem] font-[500] leading-normal mb-[0.6rem] max-md:text-left";
  const xml = (
    <table className="w-full max-md:w-[80rem] max-md:flex-none mt-[2.5rem] pr-[clamp(2rem,6vw,8.6rem)]">
      <thead className="w-full border-b-[1px] border-b-solid border-b-[rgba(0,0,0,0.60)]">
        <tr className="grid grid-cols-5">
          <th className={`${theadStyle}`}>Name</th>
          <th className={theadStyle}>Initial</th>
          <th className={theadStyle}>Bought</th>
          <th className={theadStyle}>Sold</th>
          <th className={theadStyle}>Died</th>
        </tr>
      </thead>
      <tbody>
        {dashboardData?.map((data, index) => (
          <DashboardTableRow
            name={data?.name}
            initial={data?.initial}
            bought={data?.totalBought}
            sold={data?.totalSold}
            died={data?.totalDead}
            key={index}
          />
        ))}
      </tbody>
    </table>
  );
  return xml;
}

export default DashboardTable;
