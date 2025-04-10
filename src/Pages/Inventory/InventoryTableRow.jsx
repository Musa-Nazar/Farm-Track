import { useContext, useState } from "react";
import Context from "../../Auth-context";
import trash from "../../assets/trash.svg";
import { useMainContext } from "../../../MainContext";
import http from "../../../http";
function InventoryTableRow({
  id,
  name,
  action,
  quantity,
  cost,
  date,
  select,
  handlePopup,
}) {
  const { token } = useMainContext();
  const { current, selectedData } = useContext(Context);
  let rowStyle =
    "text-[rgba(0,0,0,0.6)] text-center poppins font-[500] text-[2rem] leading-[150%] mt-[1.8rem] mb-[1.5rem] wb";
  const xml = (
    <>
      <tr
        className={`w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.3fr] border-b-[0.1rem] ${
          current.id === id ? "bg-[rgba(0,0,0,0.1)]" : ""
        } border-b-solid border-b-[rgba(0,0,0,0.6)]`}
        onClick={() => select(id)}
      >
        <td className={`${rowStyle}`}>{name}</td>
        <td className={rowStyle}>{action}</td>
        <td className={rowStyle}>{quantity}</td>
        <td className={rowStyle}>{cost}</td>
        <td className={rowStyle}>{date}</td>
        <td className={`${rowStyle} items-center flex justify-center`}>
          <img
            src={trash}
            alt=""
            id={id}
            className="cursor-pointer"
            onClick={() => handlePopup(id)}
          />
        </td>
      </tr>
    </>
  );
  return xml;
}

export default InventoryTableRow;
