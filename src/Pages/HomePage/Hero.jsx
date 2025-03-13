import { Link } from "react-router-dom"
function Hero() {
  const xml = 
  <section className="w-full h-[65.8rem] hero flex">
    <div className="flex flex-col mr-auto mt-[9.9rem] ml-[clamp(2rem,6.666666667vw,9.6rem)] items-start">
      <h1 className="text-[#fff] text-[7.3rem] font-[500] leading-[143.836%]">
      Manage Your Poultry and Fish <br />
      Inventory with Ease
      </h1>
      <p className="text-[#fff] poppins text-[2.1rem] font-[400] tracking-[0.042rem] leading-[200%] mt-[3.3rem]">Track your stock, sales, and expenses in one place. <br /> 
      Get real-time alerts and reports.</p>
      <Link to={'/login'} className="w-[18rem] h-[5.7rem] mt-[5.5rem] flex justify-center items-center py-[0.8rem] px-[1rem] gap-[1rem] bg-[#61A061] rounded-[0.8rem]">
      <span className="text-[#fff] text-[2.7rem] sf-500 leading-[2.4rem]">Sign up</span>
      </Link>
      {/* 
       */}
    </div>
  </section>
  return (xml)
}

export default Hero