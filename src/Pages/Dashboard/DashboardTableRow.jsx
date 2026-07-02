import React from "react";

function DashboardTableRow({ name, initial, bought, sold, died }) {
  let rowStyle =
    "text-[rgba(0,0,0,0.6)] text-center max-md:text-left poppins font-[500] text-[2rem] leading-[150%] mt-[1.8rem] mb-[1.5rem] wb max-[1281px]:text-[1.8rem] capitalize";
  const xml = (
    <tr
      className={`w-full grid grid-cols-5 border-b-[0.1rem] border-b-solid border-b-[rgba(0,0,0,0.6)] last:border-0 `}
    >
      <td className={`${rowStyle}`}>{name}</td>
      <td className={rowStyle}>{initial}</td>
      <td className={rowStyle}>{bought}</td>
      <td className={rowStyle}>{sold}</td>
      <td className={rowStyle}>{died}</td>
    </tr>
  );
  return xml;
}

export default DashboardTableRow;
