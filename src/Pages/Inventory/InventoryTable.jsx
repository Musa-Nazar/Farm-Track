import InventoryTableRow from "./InventoryTableRow";
import InventoryTableInput from "./InventoryTableInput";
import { useState, useContext, useEffect } from "react";
import Context from "../../Auth-context";
import { useMainContext } from "../../../MainContext";
import http from "../../../http";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function InventoryTable() {
  // STYLES
  let theadStyle =
    "text-[#000] text-center poppins text-[2.2rem] font-[500] leading-normal mb-[0.6rem] ";
  // MAIN CONTEXT
  const { token } = useMainContext();
  // CONTEXT
  const {
    current,
    setCurrent,
    feedData,
    setFormData,
    method,
    selectedData,
    liveStockData,
    setLiveStockData,
    setFeedData,
  } = useContext(Context);
  // FORMATTERS
  function formatNumber(num) {
    const formater = new Intl.NumberFormat("en-US"),
      number = `N${formater.format(num)}`;
    return number;
  }
  function formatDate(date = "04/02/2025") {
    const formattedDate = new Date(date.toString());
    return `${formattedDate.getDate().toString().padStart(2, "0")}/${(
      formattedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${formattedDate.getFullYear()}`;
  }
  // SELECT A ROW
  function select(id) {
    const found =
      selectedData === "feed"
        ? feedData.find((item) => {
            if (String(item.id) === String(id)) {
              return item;
            }
          })
        : liveStockData.find((item) => {
            if (String(item.id) === String(id)) {
              return item;
            }
          });
    setCurrent({ ...found, cost: parseInt(found.cost) });
    console.log(current);
  }
  // USE EFFECT HOOK
  useEffect(() => {
    if (current.id && method === "edit") {
      setFormData((prevState) => ({
        ...prevState,
        name: current.name,
        action: current.action,
        cost: current.cost,
        count: current.count,
        quantity: parseInt(current.quantity),
      }));
    }
  }, [current]);
  // DELETE INVENTORY
  const [popup, setPopup] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [delParams, setDelParams] = useState("");
  function handlePopup(id) {
    setPopup(true);
    setDelParams(id);
  }
  function deleteInventory() {
    setIsClicked(true);
    (async function () {
      try {
        if (selectedData === "feed") {
          if (!token.access) return location.reload();
          await http.prototype.delete(
            "/api/api/inventory/feed/",
            token.access,
            delParams
          );
          setIsClicked(false);
          toast.error("You have deleted an entry", {
            className: "text-[1.8rem] poppins",
          });
          setFeedData((prevState) =>
            [...prevState].filter((data) => data.id !== delParams)
          );
          setPopup(false);
        } else {
          if (!token.access) return location.reload();
          const deletedData = await http.prototype.delete(
            "/api/api/inventory/livestock/",
            token.access,
            delParams
          );
          setIsClicked(false);
          toast.error("You have deleted an entry", {
            className: "text-[1.8rem] poppins",
          });
          setLiveStockData((prevState) =>
            [...prevState].filter((data) => data.id !== delParams)
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setPopup(false);
        setDelParams("");
        setCurrent({ id: null });
      }
    })();
  }
  // TABLE DATA
  const tableData =
    selectedData === "feed"
      ? feedData.map((item) => {
          return (
            <InventoryTableRow
              key={item.id}
              id={item.id}
              name={item.name}
              action={item.action}
              quantity={`${item.quantity}kg`}
              cost={formatNumber(item.cost)}
              date={formatDate(item.entry_date)}
              select={select}
              handlePopup={handlePopup}
            />
          );
        })
      : liveStockData.map((item) => {
          return (
            <InventoryTableRow
              key={item.id}
              id={item.id}
              name={item.name}
              action={item.action}
              quantity={item.quantity}
              cost={formatNumber(item.cost)}
              date={formatDate(item.date)}
              select={select}
              handlePopup={handlePopup}
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
            {selectedData === "feed" ? (
              <th className={theadStyle}>Quantity</th>
            ) : (
              <th className={theadStyle}>Count</th>
            )}
            <th className={theadStyle}>Cost</th>
            <th className={theadStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
          <InventoryTableInput />
        </tbody>
      </table>
      {popup && (
        <div
          className="w-[30rem] h-[15rem] rounded-[1rem] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#ffffff] grid place-items-center
        "
        >
          <h1 className="poppins text-black text-[1.8rem] text-center">
            Are you sure you want to
            <br />
            delete this inventory?
          </h1>
          <div className="flex gap-[1rem]">
            <button
              type="button"
              className="bg-red-700 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] text-[#fff] text-[1.6rem] py-[0.5rem] px-[1.5rem] cursor-pointer rounded-[0.5rem]"
              onMouseDown={deleteInventory}
            >
              {!isClicked ? (
                "Yes"
              ) : (
                <span className="w-[1.6rem] block h-[1.6rem] rounded-[50%] border border-white border-t-[transparent] rotate"></span>
              )}
            </button>
            <button className="bg-green-700 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] text-[#fff] text-[1.6rem] py-[0.5rem] px-[1.5rem] cursor-pointer rounded-[0.5rem]">
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
  return xml;
}

export default InventoryTable;
