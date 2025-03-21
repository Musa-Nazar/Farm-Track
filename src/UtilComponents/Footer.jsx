import logo from "../assets/logo-2.png";
import divider from "../assets/divider.svg";
import leaf from "../assets/leaf.svg";
import phone from "../assets/phone.svg";
import envelope from "../assets/envelope.svg";
import { Link } from "react-router-dom";
import logo from "../assets/logo-2.png";
import divider from "../assets/divider.svg";
import leaf from "../assets/leaf.svg";
import phone from "../assets/phone.svg";
import envelope from "../assets/envelope.svg";
import { Link } from "react-router-dom";
function Footer() {
  const xml = (
    <footer className="flex-col bg-[#61A061] px-[clamp(2rem,9.282263630089718vw,12rem)] pt-[8.6rem] w-full min-h-[51.1rem] relative max-md:pb-[8rem]">
      <div className="flex items-start max-md:items-center justify-between gap-[19.95rem] max-md:gap-[2rem] w-full max-md:flex-wrap">
        <div className="flex flex-col  items-start max-md:w-full max-md:flex-none">
          <div className="flex mb-[2rem] items-center">
            <img
              src={logo}
              alt="error"
              className="block w-[12.5rem] h-[8.5rem] aspect-[25/17]"
            />
            <h2 className="text-[#000] manrope text-[2.3rem] font-[600] leading-[130.435%]">
              Farm Track
            </h2>
          </div>
          <p className="w-[26.904rem] max-md:w-[unset] max-md:m-0 max-md:text-center min-h-[9rem] manrope text-[#020202] text-[1.5rem] font-[500] leading-[200%] ml-[4.25rem]">
            Innovating Agriculture for a Better Tomorrow. Smart Farming, Smart
            Future."
          </p>
        </div>

        <div className="flex flex-col max-md:text-center items-start mt-[2.75rem] max-md:items-center max-md:w-[45%]">
          <h3 className="w-[7.3202rem] min-h-[3.6rem] text-[#fff] manrope-b text-[2rem] font-bold leading-[180%]">
            Explore
          </h3>
          <img src={divider} alt="error" className="w-[4.5rem] h-[4rem]" />
          <ul className="flex flex-col gap-[0.5rem]">
            <li>
              <span className="inline-block">
                <img
                  src={leaf}
                  alt="error"
                  className="inline-block min-w-[1.15rem] min-h-[1rem] mr-[1.375rem]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[1.5rem] font-[500] leading-[200%]"
              >
                About
              </Link>
            </li>
            <li>
              <span className="inline-block">
                <img
                  src={leaf}
                  alt="error"
                  className="inline-block min-w-[1.15rem] min-h-[1rem] mr-[1.375rem]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[1.5rem] font-[500] leading-[200%]"
              >
                Services
              </Link>
            </li>
            <li>
              <span className="inline-block">
                <img
                  src={leaf}
                  alt="error"
                  className="inline-block min-w-[1.15rem] min-h-[1rem] mr-[1.375rem]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[1.5rem] font-[500] leading-[200%]"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start pr-[5rem] w-[27rem] mt-[2.75rem] max-md:text-center max-md:items-center max-md:pr-0 max-md:w-[45%]">
          <h3 className="min-w-[7.3202rem] min-h-[3.6rem] text-[#fff] manrope-b text-[2rem] font-bold leading-[180%]">
            Contact
          </h3>
          <img src={divider} alt="error" className="w-[4.5rem] h-[4rem]" />
          <ul className="flex flex-col gap-[0.5rem]">
            <li>
              <span className="inline-block">
                <img
                  src={phone}
                  alt="error"
                  className="inline-block min-w-[1.416rem] min-h-[1.8rem] mr-[0.891rem]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[1.4rem] font-[500] leading-[185.714%]"
              >
                07062660660
              </Link>
            </li>
            <li>
              <span className="inline-block">
                <img
                  src={envelope}
                  alt="error"
                  className="inline-block min-w-[1.4rem] min-h-[1.4rem] mr-[0.9rem]"
                />
              </span>
              <Link
                to="#"
                className="text-[#000] manrope-5 text-[1.5rem] font-[500] leading-[185.714%]"
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
/*
color: #A5A49A;

text-align: right;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 14px; /* 100% 
*/
