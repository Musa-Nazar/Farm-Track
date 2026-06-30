import {
  useLoaderData,
  useNavigation,
  useSearchParams,
  Await,
} from "react-router-dom";
import { useMainContext } from "../../../MainContext";
import Context from "../../Auth-context";
import InventoryHeader from "./InventoryHeader";
import InventoryTable from "./InventoryTable";
import { useState, useEffect, Suspense } from "react";
function InventoryContaner({ data }) {
  // GET TYPE
  const type = useSearchParams()[0].get("type");
  // NAVIGATION STATE
  const { state } = useNavigation();
  // INITIALIZE CURRENT
  const [current, setCurrent] = useState({
    id: null,
  });
  // SEARCH DATA
  const [searchData, setSearchData] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  // INITIALIZE SELECTED DATA,METHOD, and FORMDATA
  const [selectedData, setSelectedData] = useState(type);
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
  });
  // INITIALIZE FEED AND LIVESTOCK DATA
  const [feedData, setFeedData] = useState(type === "feed" ? data.entries : []);
  const [liveStockData, setLiveStockData] = useState(
    type === "livestock" ? data.entries : [],
  );
  useEffect(() => {
    if (type === "feed") setFeedData(data.entries);
    if (type === "livestock") setLiveStockData(data.entries);
  }, [state]);
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
    });
  }
  const xml = (
    <div className="flex flex-col mx-[2.8rem] max-md:max-w-[91%] max-md:mx-auto bg-[#FFF] rounded-[1.5rem] min-h-[89.3rem]">
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
          searchData,
          setSearchData,
          searchResults,
          setSearchResults,
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
