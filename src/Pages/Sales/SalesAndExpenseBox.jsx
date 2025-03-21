function SalesAndExpenseBox({ head, body }) {
  const xml = (
    <div className="w-[clamp(10rem,21vw,29.7rem)] min-h-[16.5rem] rounded-[1.5rem] bg-[#F7FBF7] shadow-[0px_4px_25px_-4px_rgba(0,0,0,0.15)] max-md:w-full">
      <h2 className="text-black poppins text-[2.5rem] font-medium leading-normal pt-[0.9rem] pl-[6rem] mb-[3.6rem]">
        {head}
      </h2>
      <div className="flex pl-[4.4rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M6.66797 15H10.0013V5H13.3346L19.0346 15H26.668V5H30.0013V15H33.3346V18.3333H30.0013V21.6667H33.3346V25H30.0013V35H26.668L20.9513 25H13.3346V35H10.0013V25H6.66797V21.6667H10.0013V18.3333H6.66797V15ZM13.3346 15H15.218L13.3346 11.7167V15ZM13.3346 18.3333V21.6667H19.0346L17.1346 18.3333H13.3346ZM26.668 28.3333V25H24.7513L26.668 28.3333ZM20.9346 18.3333L22.8513 21.6667H26.668V18.3333H20.9346Z"
            fill="black"
          />
        </svg>
        <p className="text-black poppins text-[3rem] font-semibold leading-normal">
          {body}
        </p>
      </div>
    </div>
  );
  return xml;
}

export default SalesAndExpenseBox;
