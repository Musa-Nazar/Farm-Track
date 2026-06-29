import { Link } from "react-router-dom";
function Hero() {
  const xml = (
    <section className="w-full h-[65.8rem] hero flex max-md:h-[unset] max-md:pb-[4rem]">
      <div className="flex flex-col gap-[5rem] mr-auto mt-[9.9rem] items-start max-md:mt-[4rem] max-md:gap-[1rem]  w-[128rem] max-w-[85%] mx-auto max-md:text-center max-md:mx-auto max-md:max-w-[91%] max-md:min-h-[calc(35dvh-5rem)] max-md:justify-center max-md:items-stretch">
        <h1 className="text-[#fff] text-[7.2rem] leading-0 font-[500] max-md:text-white  max-md:text-[3rem] max-md:leading-[32.388px] max-md:w-[unset]">
          <span
            className="typing leading-[10.3rem] max-md:leading-[calc(3.5rem)] break-all"
            style={{ "--delay": "0s" }}
          >
            Manage Your Poultry and Fish
          </span>
          <br />
          <span
            className="typing leading-[10.3rem] max-md:leading-[calc(3.5rem)] break-all"
            style={{ "--delay": "0.5s" }}
          >
            Inventory with Ease
          </span>
        </h1>
        <p
          className="text-[#fff] poppins text-[2.1rem] font-[400] tracking-[0.042rem] leading-[200%] max-md:text-[1.4rem] max-md:tracking-[0.02rem] typing"
          style={{ "--delay": "1s" }}
        >
          Track your stock, sales, and expenses in one place. <br />
          Get real-time alerts and reports.
        </p>
        <div className="flex gap-[5.6rem] max-md:gap-[calc(5.6rem/2)] overflow-hidden max-md:justify-center">
          <Link
            to={"/signup"}
            className="w-[18rem] max-md:w-[8rem] h-[5.7rem] max-md:h-[unset]  flex justify-center items-center py-[0.8rem] text-[#fff] hover:text-black z-[0] px-[1rem] gap-[1rem] bg-[#61A061] rounded-[0.8rem] relative before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-white before:z-[-1] before:translate-y-[-100%] overflow-hidden hover:before:translate-y-[0%] before:transition-all duration-75 hover:tracking-[0.1rem] rise"
          >
            <span className="text-[2.7rem] sf-500 leading-[2.4rem] max-md:text-[1.6rem]">
              Sign up
            </span>
          </Link>
          <Link
            to={"/login"}
            className="w-[18rem] max-md:w-[8rem] h-[5.7rem] max-md:h-[unset] flex justify-center items-center py-[0.8rem] px-[1rem] gap-[0.7rem] text-[#fff] hover:text-black z-0 rounded-[0.56rem] border-solid border-[0.21rem] border-[#61A061] hover:border-white relative before:content-[''] before:absolute before:top-0 before:w-full before:h-full before:bg-[white] before:z-[-1] before:translate-y-[100%] overflow-hidden hover:before:translate-y-[0%] before:transition-all duration-75 hover:tracking-[0.1rem] rise"
          >
            <span className="text-[1.89rem] sf-500 leading-[1.68rem] max-md:text-[1.6rem]">
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
