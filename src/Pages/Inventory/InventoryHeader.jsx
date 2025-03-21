import { useState, useContext } from "react";
import search from "../../assets/search.svg";
import Context from "../../Auth-context";
function InventoryHeader() {
  const { method, setMethod, current, setFormData, cleanInput, setCurrent } =
    useContext(Context);
  function addInventoryUI() {
    setMethod("add");
    cleanInput();
    setCurrent({
      id: null,
    });
  }
  function editInventoryUI() {
    if (current.id) {
      setMethod("edit");
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
  }
  const xml = (
    <>
      <h2 className="text-[#000] poppins text-[3rem] font-[600] leading-normal mt-[5.7rem] ml-[2.6rem] mb-[2.9rem]">
        Inventory
      </h2>
      <div className="w-full h-[0.1rem] bg-[rgba(0,0,0,0.4)] mb-[3.6rem]"></div>
      <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-[2rem] pl-[5.2rem] pr-[8rem] max-md:px-[2.6rem] items-start mb-[4.4rem]">
        <div className="relative flex justify-center items-center mt-[0.4rem]">
          <input
            type="text"
            name="searchInventory"
            id="searchInventory"
            className="w-[23.7rem] h-[4rem] border-[0.3px] border-solid border-[rgba(0,0,0,0.1)] outline-0 peer indent-[3rem]"
          />
          <label
            htmlFor="searchInventory"
            className="flex absolute gap-[2.5rem] left-[3.7rem] peer-focus:peer-valid:hidden z-[0]"
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
