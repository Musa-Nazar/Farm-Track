import { useContext, useState } from "react";
import Context from "../../Auth-context";
import trash from "../../assets/trash.svg";
import { useMainContext } from "../../../MainContext";
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
  const { current, selectedData, setCurrent, method, setMethod } =
    useContext(Context);
  // DISBALE CURRENT
  function disablecurrent({ relatedTarget }) {
    if (relatedTarget?.id !== "edit") setCurrent({ id: null });
    if (method === "edit") setMethod("");
  }
  const fullName = name.split(" ");
  const firstPart = fullName[0].replace(
    fullName[0][0],
    fullName[0][0].toUpperCase(),
  );
  const secondPart = fullName[1]
    ? fullName[1].replace(fullName[1][0], fullName[1][0].toUpperCase())
    : null;
  const renderedName = secondPart ? `${firstPart} ${secondPart}` : firstPart;

  let rowStyle =
    "text-[rgba(0,0,0,0.6)] text-center poppins font-[500] text-[2rem] leading-[150%] mt-[1.8rem] mb-[1.5rem] wb";
  const xml = (
    <>
      <tr
        className={`w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.3fr] border-b-[0.1rem] ${
          current.id === id ? "bg-[rgba(0,0,0,0.1)]" : ""
        } border-b-solid border-b-[rgba(0,0,0,0.6)]`}
        onClick={() => select(id)}
        onBlur={disablecurrent}
        tabIndex={1}
      >
        <td className={`${rowStyle}`}>{renderedName}</td>
        <td className={rowStyle}>
          {action.replace(action[0], action[0].toUpperCase())}
        </td>
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
