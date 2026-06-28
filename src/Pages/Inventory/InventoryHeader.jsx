import { useState, useContext, useEffect } from "react";
import search from "../../assets/search.svg";
import Context from "../../Auth-context";
import { useNavigate, useSearchParams } from "react-router-dom";
import { get } from "../../../http";
import Cookies from "universal-cookie";
import config from "../../../config";
function InventoryHeader() {
  const {
    method,
    setMethod,
    current,
    setFormData,
    cleanInput,
    setCurrent,
    setSelectedData,
    setSearchData,
    searchData,
    setSearchResults,
  } = useContext(Context);
  const navigate = useNavigate();
  const type = useSearchParams()[0].get("type");
  function addInventoryUI() {
    setMethod("add");
    cleanInput();
    setCurrent({
      id: null,
    });
  }
  function handleSelectedData(e) {
    setSelectedData(e.target.value);
    navigate(`/inventory?type=${e.target.value}`);
    setMethod("");
    cleanInput();
    setCurrent({
      id: null,
    });
  }
  function editInventoryUI() {
    if (current.id) {
      setMethod("edit");
      const split = /[0-9]*/g;
      const value = current.cost.toString().match(split);
      const newArray = value.filter((data) => {
        if (data !== "") {
          return data;
        }
      });
      const number = newArray.join("");
      setFormData((prevState) => ({
        ...prevState,
        name: current.name,
        action: current.action,
        cost: parseInt(number),
        quantity: parseInt(current.quantity),
      }));
    }
  }

  // HANDLE SEARCH DATA
  function handleSearchData({ target }) {
    const { value } = target;
    setSearchData(value);
  }

  let searchTimeOut;
  // USE EFFECT
  useEffect(() => {
    const cookie = new Cookies();
    const token = cookie.get("token");
    setSearchResults("loading");
    searchTimeOut = setTimeout(() => {
      if (!searchData) return;
      (async function () {
        try {
          const response = await fetch(
            `${config.apiDomain}/api/v1/inventory/entries?type=${type}&action=${searchData}`,
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              signal: AbortSignal.timeout(10000),
            },
          );
          const data = await response.json();
          if (!response.ok) throw { data, status: response?.status };
          setSearchResults(data?.entries);
        } catch (err) {
          const errorMessage = err?.message || "Unable to perform operation";
          const error = {
            name: err?.name ?? "Unknown error",
            message:
              err?.name === "TimeoutError"
                ? "This request took too long"
                : errorMessage,
            status: err?.status ?? 500,
          };
          setSearchResults("error");
          return error;
        }
      })();
    }, 2000);
    return () => {
      clearTimeout(searchTimeOut);
    };
  }, [searchData]);

  // HANDLE SELECT UI
  const xml = (
    <>
      <div className="flex justify-between items-centerb mt-[5.7rem] mb-[2.9rem]">
        <h2 className="text-[#000] poppins text-[3rem] font-[600] leading-normal  ml-[2.6rem] ">
          Inventory
        </h2>
        <div className="relative flex min-w-[11rem] min-h-[4.2rem] pl-[1.3rem] items-center gap-[1.7rem] outline-0 rounded-[1rem] border border-black pr-[0.85rem] appearance-none mr-[clamp(1rem,6.666666666666667vw,9.6rem)]">
          <select
            name="dataType"
            id="dataType"
            className="outline-0 w-full text-black font-[Manrope] text-[1.5rem] font-medium leading-[271.789%]"
            onChange={handleSelectedData}
          >
            <option value="feed" className="w-full py-[5rem] block">
              Feed
            </option>
            <option value="livestock" className="w-full py-[5rem] block">
              Livestock
            </option>
          </select>
        </div>
      </div>
      <div className="w-full h-[0.1rem] bg-[rgba(0,0,0,0.4)] mb-[3.6rem]"></div>
      <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-[2rem] pl-[5.2rem] pr-[8rem] max-md:px-[2.6rem] items-start mb-[4.4rem]">
        <div className="relative flex justify-center items-center mt-[0.4rem]">
          <input
            type="text"
            name="searchInventory"
            id="searchInventory"
            required
            className="w-[23.7rem] h-[4rem] border-[0.3px] border-solid border-[rgba(0,0,0,0.1)] outline-0 peer indent-[3rem] val text-[1.6rem] poppins"
            onChange={handleSearchData}
          />
          <label
            htmlFor="searchInventory"
            className="flex absolute gap-[2.5rem] left-[3.7rem] peer-focus:hidden z-[0]"
          >
            <img src={search} alt="err" className="w-[2.4rem] aspect-square" />
            <span className="text-[rgba(0,0,0,0.50)] poppins text-[1.6rem] font-[500] leading-normal">
              Quick Search
            </span>
          </label>
        </div>
        <div className="flex gap-[5.8rem] max-md:justify-between max-md:w-full">
          <button
            className={`flex justify-center  w-[13.3rem] py-0 px-[1.3589rem] flex-col items-center gap-[1.3589rem] rounded-[0.6777rem] bg-[#61A061] cursor-pointer`}
            onClick={addInventoryUI}
          >
            <span className="text-[#FFF] text-center manrope-5-500 text-[1.5rem] font-[500] leading-[271.789%]">
              +New Entry
            </span>
          </button>
          <button
            className={`flex justify-center w-[13.3rem] py-0 px-[1.3589rem] flex-col items-center gap-[1.3589rem] rounded-[0.6777rem] border-[#61A061] border-solid border-[0.1rem] cursor-pointer`}
            onClick={editInventoryUI}
            id="edit"
          >
            <span className="text-[#000] text-center manrope-5-500 text-[1.5rem] font-[500] leading-[271.789%]">
              Edit
            </span>
          </button>
        </div>
      </div>
      <div className="w-full bg-[#000] h-[0.1rem]"></div>
    </>
  );
  return xml;
}

export default InventoryHeader;
