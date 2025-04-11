import http from "../../../http";
import { useMainContext } from "../../../MainContext";
import Context from "../../Auth-context";
import InventoryHeader from "./InventoryHeader";
import InventoryTable from "./InventoryTable";
import { useState, useEffect } from "react";
function InventoryContaner() {
  const { token } = useMainContext();
  const [current, setCurrent] = useState({
    id: null,
  });
  const [selectedData, setSelectedData] = useState("feed");
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
    count: "",
    entry_date: `${day}/${month}/${year}`,
  });
  const [feedData, setFeedData] = useState([
    {
      id: "0",
      name: "--",
      action: "--",
      quantity: "--",
      cost: "--",
      date: "--",
    },
  ]);
  const [liveStockData, setLiveStockData] = useState([
    {
      id: "0",
      name: "--",
      action: "--",
      quantity: "--",
      cost: "--",
      date: "--",
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
      count: "",
      entry_date: `${day}/${month}/${year}`,
    });
  }
  useEffect(() => {
    async function getFeedData() {
      try {
        if (!token.access) return location.reload();
        const data = await http.prototype.get(
          "https://farmtrack-backend.onrender.com/api/inventory/feed/",
          token.access
        );
        setFeedData(data);
      } catch (error) {
        toast.error("Unable to get Users Data", {
          className: "poppins text-[1.6rem]",
        });
      }
    }
    getFeedData();
    async function getLiveStockData() {
      try {
        const data = await http.prototype.get(
          "https://farmtrack-backend.onrender.com/api/inventory/livestock/",
          token.access
        );
        setLiveStockData(data);
      } catch (error) {
        toast.error("Unable to get Users Data", {
          className: "poppins text-[1.6rem]",
        });
      }
    }
    getLiveStockData();
  }, []);
  const xml = (
    <div className="flex flex-col mx-[2.8rem] bg-[#FFF] rounded-[1.5rem] min-h-[89.3rem]">
      <Context.Provider
        value={{
          feedData,
          setFeedData,
          method,
          setMethod,
          formData,
          setFormData,
          current,
          setCurrent,
          cleanInput,
          selectedData,
          setSelectedData,
          liveStockData,
          setLiveStockData,
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
