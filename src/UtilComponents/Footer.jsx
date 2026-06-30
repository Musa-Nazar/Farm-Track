import logo from "../assets/logo-2.png";
import divider from "../assets/divider.svg";
import leaf from "../assets/leaf.svg";
import phone from "../assets/phone.svg";
import envelope from "../assets/envelope.svg";
import { Link } from "react-router-dom";
function Footer() {
  const xml = (
    <footer className="flex-col bg-[#61A061] py-[8.6rem] w-full  relative max-md:pb-[5rem] max-md:pt-[0.3rem]  max-md:min-h-[19.6rem]">
      <div className="flex items-start justify-between max-md:flex-wrap max-md:gap-0 w-[128rem] max-w-[85%] mx-auto max-md:w-[40rem] max-md:max-w-[91%] max-md:flex-col max-md:items-stretch max-md:pt-[2rem]">
        <div className="flex flex-col  items-start max-md:w-full max-md:flex-none">
          <div className="flex mb-[2rem] items-center max-md:mb-[0.503rem]">
            <img
              src={logo}
              alt="error"
              className="block w-[6rem] h-[8rem] object-cover max-md:w-[3rem] max-md:h-[3.7967rem] object-[-3.5rem] max-lg:object-[-1.8rem]"
            />
            <h2 className="text-[#000] manrope text-[2.3rem] font-[600] leading-[130.435%] max-md:text-[1.8rem]">
              Farm Track
            </h2>
          </div>
          <p className="w-[26.904rem] max-md:w-[unset] max-md:m-0 min-h-[9rem] manrope text-[#020202] text-[1.5rem] font-[500] leading-[200%]  max-md:text-left max-md:text-[q.6rem]">
            Innovating Agriculture for a Better Tomorrow. Smart Farming, Smart
            Future.
          </p>
        </div>

        <div className="flex flex-col max-md:text-left items-start mt-[2.75rem] max-md:items-stretch ">
          <h3 className="text-[#fff] manrope-b text-[2rem] font-bold leading-[180%] max-md:text-[1.6rem]">
            Explore
          </h3>
          <img src={divider} alt="error" className="w-[4.5rem] h-[4rem]" />
          <ul className="flex flex-col gap-[0.5rem]">
            <li className="flex items-center">
              <span className="inline-block">
                <img
                  src={leaf}
                  alt="error"
                  className="inline-block min-w-[1.15rem] min-h-[1rem] mr-[1.375rem]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[2rem] font-[500] leading-[200%] max-md:text-[1.4rem]"
              >
                About
              </Link>
            </li>
            <li className="flex items-center">
              <span className="inline-block">
                <img
                  src={leaf}
                  alt="error"
                  className="inline-block min-w-[1.15rem] min-h-[1rem] mr-[1.375rem]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[2rem] font-[500] leading-[200%] max-md:text-[1.4rem]"
              >
                Services
              </Link>
            </li>
            <li className="flex items-center">
              <span className="inline-block py-[0.3rem]">
                <img
                  src={leaf}
                  alt="error"
                  className="block min-w-[1.15rem] min-h-[1rem] mr-[1.375rem]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[2rem] font-[500] leading-[200%] max-md:text-[1.4rem]"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start  mt-[2.75rem] max-md:items-stretch max-md:pr-0 max-md:w-[45%]">
          <h3 className="text-[#fff] manrope-b text-[2rem] font-bold leading-[180%] max-md:text-[1.6rem]">
            Contact
          </h3>
          <img src={divider} alt="error" className="w-[4.5rem] h-[4rem]" />
          <ul className="flex flex-col gap-[0.5rem]">
            <li className="flex items-center">
              <span className="inline-block">
                <img
                  src={phone}
                  alt="error"
                  className="inline-block min-w-[1.416rem] min-h-[1.8rem] mr-[0.891rem] max-md:w-[0.477rem] max-md:h-[0.606rem]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[1.4rem] font-[500] leading-[185.714%] max-md:text-[1.4rem]"
              >
                07062660660
              </Link>
            </li>
            <li className="flex items-center">
              <span className="inline-block">
                <img
                  src={envelope}
                  alt="error"
                  className="inline-block min-w-[1.4rem] min-h-[1.4rem] mr-[0.9rem] max-md:w-[0.477rem] max-md:h-[0.606rem] text-[1.5rem] leading-[185.714%]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[1.5rem] font-[500] leading-[185.714%] max-md:text-[1.4rem]"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
  return xml;
}

export default Footer;
