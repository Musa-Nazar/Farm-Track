function NotificationBox({ opacity, main, rightText }) {
  const xml = (
    <div className="w-[103.7rem] max-w-[100%] min-h-[10.2rem] rounded-[0.8rem] bg-[#fff] flex items-center justify-between notification-shadow">
      <p
        className={`poppins text-[2rem] ${
          opacity ? "opacity-[0.4]" : ""
        } text-[#000] font-[500] leading-[100%] indent-[6.2rem] max-md:indent-[0rem] max-md:pl-[1rem]`}
      >
        {main}
      </p>
      <div className="w-[clamp(10rem,19.791666666666664vw,28.5rem)]">
        <p className="text-black/55 text-center poppins text-[21px] font-medium leading-[1] opacity-40 text-wrap max-md:text-[1.2rem]">
          {rightText}
        </p>
      </div>
    </div>
  );
  return xml;
}

export default NotificationBox;
