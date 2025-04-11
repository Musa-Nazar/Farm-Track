import React, { useEffect } from "react";
import DashboardTableRow from "./DashboardTableRow";
import { useMainContext } from "../../../MainContext";

function DashboardTable({ dashboardData }) {
  const { user } = useMainContext();
  let theadStyle =
    "text-[#000] text-center poppins text-[2.2rem] font-[500] leading-normal mb-[0.6rem] ";
  const xml = (
    <table className="w-full max-md:w-[80rem] mt-[2.5rem] pr-[clamp(2rem,6vw,8.6rem)]">
      <thead className="w-full border-b-[1px] border-b-solid border-b-[rgba(0,0,0,0.60)]">
        <tr className="grid grid-cols-5">
          <th className={`${theadStyle}`}>Name</th>
          <th className={theadStyle}>Initial</th>
          <th className={theadStyle}>Bought</th>
          <th className={theadStyle}>Consumed</th>
          <th className={theadStyle}>Left</th>
        </tr>
      </thead>
      <tbody>
        {((dashboardData && user.livestock_type === "Fish") ||
          (dashboardData && user.livestock_type === "Both")) && (
          <DashboardTableRow
            name={dashboardData.feed_info[0].name || "Bird Feed"}
            initial={dashboardData.feed_info[0].initial || "00"}
            bought={dashboardData.feed_info[0].bought || "00"}
            consumed={dashboardData.feed_info[0].consumed || "00"}
            left={`${dashboardData.feed_info[0].left}` || "00"}
          />
        )}

        {/* {((dashboardData && user.livestock_type === "Poultry") ||
          (dashboardData && user.livestock_type === "Both")) && (
          <DashboardTableRow
            name={dashboardData.feed_info[1].name || "Bird Feed"}
            initial={dashboardData.feed_info[1].initial || "00"}
            bought={dashboardData.feed_info[1].bought || "00"}
            consumed={dashboardData.feed_info[1].consumed || "00"}
            left={`${dashboardData.feed_info[1].left}` || "00"}
          />
        )} */}
        {dashboardData && user.livestock_type === "Poultry" ? (
          <DashboardTableRow
            name={dashboardData.feed_info[0].name || "Bird Feed"}
            initial={dashboardData.feed_info[0].initial || "00"}
            bought={dashboardData.feed_info[0].bought || "00"}
            consumed={dashboardData.feed_info[0].consumed || "00"}
            left={`${dashboardData.feed_info[0].left}` || "00"}
          />
        ) : dashboardData && user.livestock_type === "Both" ? (
          <DashboardTableRow
            name={dashboardData.feed_info[1].name || "Bird Feed"}
            initial={dashboardData.feed_info[1].initial || "00"}
            bought={dashboardData.feed_info[1].bought || "00"}
            consumed={dashboardData.feed_info[1].consumed || "00"}
            left={`${dashboardData.feed_info[1].left}` || "00"}
          />
        ) : ""}
      </tbody>
    </table>
  );
  return xml;
}

export default DashboardTable;
