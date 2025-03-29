function DashboardBox({ head, body, icon }) {
  const xml = (
    <div className="w-[clamp(5rem,17.36111111111111vw,25rem)] min-h-[111px] rounded-[17.096px] bg-white box-shadow pl-[2.45rem] pt-[3.2rem] max-md:w-full ">
      <div className="flex gap-[clamp(0.5rem,3.0555555555555554vw,4.4rem)]">
        <h2 className="text-black break-all poppins text-[22.959px] font-semibold leading-[100%] mb-[1.7rem] ">
          {head}
        </h2>
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.4993 0.916626C5.20664 0.916626 0.916016 5.2072 0.916016 10.4999C0.916016 15.7926 5.20664 20.0833 10.4993 20.0833C15.7921 20.0833 20.0827 15.7927 20.0827 10.4999C20.0827 5.2072 15.7921 0.916626 10.4993 0.916626ZM10.4993 18.1666C6.27196 18.1666 2.8327 14.7274 2.8327 10.4999C2.8327 6.27253 6.27192 2.83331 10.4993 2.83331C14.7268 2.83331 18.166 6.27253 18.166 10.4999C18.166 14.7274 14.7268 18.1666 10.4993 18.1666ZM11.6994 6.66663C11.6994 7.36148 11.1935 7.86456 10.5091 7.86456C9.79702 7.86456 9.30351 7.36143 9.30351 6.65333C9.30351 5.97276 9.81037 5.46874 10.5091 5.46874C11.1935 5.46874 11.6994 5.97276 11.6994 6.66663ZM9.54313 9.54163H11.4598V15.2916H9.54313V9.54163Z"
              fill="#ED0101"
            />
          </svg>
        )}
      </div>
      <p className="text-[rgba(0,0,0,0.60)] break-all font-[Poppins] text-[22.959px] font-semibold leading-[100%]">
        {body}
      </p>
    </div>
  );
  return xml;
}

export default DashboardBox;
