function DashboardBox({ head, body }) {
  const xml = (
    <div className="w-[clamp(5rem,20vw,29.9rem)] min-h-[111px] rounded-[17.096px] bg-white box-shadow pl-[2.45rem] pt-[3.2rem] max-md:w-full ">
      <h2 className="text-black break-all poppins text-[22.959px] font-semibold leading-[100%] mb-[1.7rem]">
        {head}
      </h2>
      <p className="text-[rgba(0,0,0,0.60)] break-all font-[Poppins] text-[22.959px] font-semibold leading-[100%]">
        {body}
      </p>
    </div>
  );
  return xml;
}

export default DashboardBox;
