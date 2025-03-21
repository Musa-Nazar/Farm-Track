import React from "react";
import DashboardTableRow from "./DashboardTableRow";

function DashboardTable() {
  let theadStyle =
    "text-[#000] text-center poppins text-[2.2rem] font-[500] leading-normal mb-[0.6rem] ";
  const xml = (
    <table className="w-full max-md:w-[80rem] mt-[2.5rem] pr-[clamp(2rem,6vw,8.6rem)]">
      <thead className="w-full border-b-[1px] border-b-solid border-b-[rgba(0,0,0,0.60)]">
        <tr className="grid grid-cols-5">
          <th className={`${theadStyle}`}>Name</th>
          <th className={theadStyle}>Action</th>
          <th className={theadStyle}>Quantity</th>
          <th className={theadStyle}>Cost</th>
          <th className={theadStyle}>Date</th>
        </tr>
      </thead>
      <tbody>
        <DashboardTableRow
          name="Bird Feed"
          action="Bought"
          cost="N100,000"
          quantity="10kg"
          date="06/03/2025"
        />
        <DashboardTableRow
          name="Fish Feed"
          action="Bought"
          cost="N100,000"
          quantity="50kg"
          date="09/03/2025"
        />
      </tbody>
    </table>
  );
  return xml;
}

export default DashboardTable;
