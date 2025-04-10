import React from "react";

function DashboardTableRow({ name, initial, bought, consumed, left }) {
  let rowStyle =
    "text-[rgba(0,0,0,0.6)] text-center poppins font-[500] text-[2rem] leading-[150%] mt-[1.8rem] mb-[1.5rem] wb";
  const xml = (
    <tr
      className={`w-full grid grid-cols-5 border-b-[0.1rem] border-b-solid border-b-[rgba(0,0,0,0.6)] last:border-0`}
    >
      <td className={`${rowStyle}`}>{name}</td>
      <td className={rowStyle}>{initial}</td>
      <td className={rowStyle}>{bought}</td>
      <td className={rowStyle}>{consumed}</td>
      <td className={rowStyle}>{left}</td>
    </tr>
  );
  return xml;
}

export default DashboardTableRow;
