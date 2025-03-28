import { Link } from "react-router-dom";
function Hero() {
  const xml = (
    <section className="w-full h-[65.8rem] hero flex max-md:h-[23rem]">
      <div className="flex flex-col gap-[5rem] mr-auto mt-[9.9rem] ml-[clamp(2rem,6.666666667vw,9.6rem)] items-start max-md:mt-[4rem] max-md:gap-[1rem] max-md:ml-[1.6rem]">
        <h1 className="text-[#fff] text-[7.2rem] font-[500] leading-[143.836%] max-md:text-white  max-md:text-[25px] max-md:leading-[32.388px]">
          Manage Your Poultry and Fish <br />
          Inventory with Ease
        </h1>
        <p className="text-[#fff] poppins text-[2.1rem] font-[400] tracking-[0.042rem] leading-[200%] max-md:text-[1rem] max-md:tracking-[0.02rem]">
          Track your stock, sales, and expenses in one place. <br />
          Get real-time alerts and reports.
        </p>
        <div className="flex gap-[5.6rem] max-md:gap-[calc(5.6rem/2)]">
          <Link
            to={"/signup"}
            className="w-[18rem] max-md:w-[8rem] h-[5.7rem] max-md:h-[unset]  flex justify-center items-center py-[0.8rem] px-[1rem] gap-[1rem] bg-[#61A061] rounded-[0.8rem]"
          >
            <span className="text-[#fff] text-[2.7rem] sf-500 leading-[2.4rem] max-md:text-[1.6rem]">
              Sign up
            </span>
          </Link>
          <Link
            to={"/login"}
            className="w-[18rem] max-md:w-[8rem] h-[5.7rem] max-md:h-[unset] flex justify-center items-center py-[0.8rem] px-[1rem] gap-[0.7rem] rounded-[0.56rem] border-solid border-[0.21rem] border-[#61A061]"
          >
            <span className="text-[#fff] text-[1.89rem] sf-500 leading-[1.68rem] max-md:text-[1.6rem]">
              Log in
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
  return xml;
}

export default Hero;
