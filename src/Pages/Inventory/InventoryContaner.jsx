import Context from "../../Auth-context";
import InventoryHeader from "./InventoryHeader";
import InventoryTable from "./InventoryTable";
import { useState, useEffect } from "react";
function InventoryContaner() {
  const [current, setCurrent] = useState({
    id: null,
  });
  const [method, setMethod] = useState(null);
  const date = new Date(),
    day = date.getDate().toString().padStart(2, "0"),
    month = (date.getMonth() + 1).toString().padStart(2, "0"),
    year = date.getFullYear().toString();
  const [formData, setFormData] = useState({
    name: "",
    action: "",
    quantity: "",
    cost: "",
    date: `${day}/${month}/${year}`,
  });
  const [inventoryData, setInventoryData] = useState([
    {
      id: "0",
      name: "Bird Feed",
      action: "Bought",
      quantity: "10kg",
      cost: "N100,000",
      date: "06/03/2025",
    },
    {
      id: "1",
      name: "Fish Feed",
      action: "Bought",
      quantity: "15kg",
      cost: "N150,000",
      date: "06/03/2025",
    },
  ]);
  function cleanInput() {
    const date = new Date(),
      day = date.getDate().toString().padStart(2, "0"),
      month = (date.getMonth() + 1).toString().padStart(2, "0"),
      year = date.getFullYear().toString();
    setFormData({
      name: "",
      action: "",
      quantity: "",
      cost: "",
      date: `${day}/${month}/${year}`,
    });
  }
  const xml = (
    <div className="flex flex-col mx-[2.8rem] bg-[#FFF] rounded-[1.5rem] min-h-[89.3rem]">
      <Context.Provider
        value={{
          inventoryData,
          setInventoryData,
          method,
          setMethod,
          formData,
          setFormData,
          current,
          setCurrent,
          cleanInput,
        }}
      >
        <InventoryHeader />
        <InventoryTable />
      </Context.Provider>
    </div>
  );
  return xml;
}

export default InventoryContaner;
