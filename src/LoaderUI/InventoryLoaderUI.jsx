import search from "../assets/search.svg";

function InventoryLoaderUI() {
  const xml = (
    <div className="flex flex-col mx-[2.8rem] bg-[#FFF] rounded-[1.5rem] min-h-[89.3dvh]">
      <div className="flex justify-between items-centerb mt-[5.7rem] mb-[2.9rem]">
        <h2 className="text-[#000] poppins text-[3rem] font-[600] leading-normal  ml-[2.6rem] ">
          Inventory
        </h2>
        <div className="relative flex min-w-[11rem] min-h-[4.2rem] pl-[1.3rem] items-center gap-[1.7rem] outline-0 rounded-[1rem] border border-black pr-[0.85rem] appearance-none mr-[clamp(1rem,6.666666666666667vw,9.6rem)]">
          <select
            name="dataType"
            id="dataType"
            className="outline-0 w-full text-black font-[Manrope] text-[1.5rem] font-medium leading-[271.789%]"
            disabled={true}
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
          >
            <span className="text-[#FFF] text-center manrope-5-500 text-[1.5rem] font-[500] leading-[271.789%]">
              +New Entry
            </span>
          </button>
          <button
            className={`flex justify-center w-[13.3rem] py-0 px-[1.3589rem] flex-col items-center gap-[1.3589rem] rounded-[0.6777rem] border-[#61A061] border-solid border-[0.1rem] cursor-pointer`}
            id="edit"
          >
            <span className="text-[#000] text-center manrope-5-500 text-[1.5rem] font-[500] leading-[271.789%]">
              Edit
            </span>
          </button>
        </div>
      </div>
      <div className="w-full bg-[#000] h-[0.1rem]"></div>
      <div className="w-[7rem] aspect-square my-[1rem] mx-auto border-[#61A061] border-t-transparent border-[1rem] rounded-[50%] rotate flex justify-center items-center">
        <div className="w-[80%] aspect-square border-[#91bb91] border-t-transparent border-[0.2rem] rounded-[50%] rotate flex justify-center items-center Myspin-2"></div>
      </div>
    </div>
  );
  return xml;
}

export default InventoryLoaderUI;
