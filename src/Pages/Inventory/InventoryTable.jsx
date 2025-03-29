import InventoryTableRow from "./InventoryTableRow";
import InventoryTableInput from "./InventoryTableInput";
import { useState, useContext, useEffect } from "react";
import Context from "../../Auth-context";
function InventoryTable() {
  let theadStyle =
    "text-[#000] text-center poppins text-[2.2rem] font-[500] leading-normal mb-[0.6rem] ";
  const { current, setCurrent, inventoryData, setFormData, method } =
    useContext(Context);
  function select(id) {
    const found = inventoryData.find((item) => {
      if (parseInt(item.id) === parseInt(id)) {
        return item;
      }
    });
    setCurrent(found);
  }
  useEffect(() => {
    if (current.id && method === "edit") {
      const split = /[0-9]*/g,
        value = current.cost.toString().match(split),
        newArray = value.filter((data) => {
          if (data !== "") {
            return data;
          }
        }),
        number = newArray.join("");
      setFormData((prevState) => ({
        ...prevState,
        name: current.name,
        action: current.action,
        cost: parseInt(number),
        quantity: parseInt(current.quantity),
      }));
    }
  }, [current]);
  const tableData = inventoryData.map((item, index) => {
    return (
      <InventoryTableRow
        key={index}
        id={item.id}
        name={item.name}
        action={item.action}
        quantity={item.quantity}
        cost={item.cost}
        date={item.date}
        select={select}
      />
    );
  });
  const xml = (
    <div className="w-full overflow-x-scroll hide-scrollbar">
      <table className="w-full max-md:w-[80rem] mt-[2.5rem] ">
        <thead className="w-full border-b-[1px] border-b-solid border-b-[rgba(0,0,0,0.60)]">
          <tr className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.3fr]">
            <th className={`${theadStyle}`}>Name</th>
            <th className={theadStyle}>Action</th>
            <th className={theadStyle}>Quantity</th>
            <th className={theadStyle}>Cost</th>
            <th className={theadStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
          <InventoryTableInput />
        </tbody>
      </table>
    </div>
  );
  return xml;
}

export default InventoryTable;
