import logo from "../../assets/logo_white.svg";
import { Link } from "react-router-dom";
import ResetForm from "./ResetForm";
function Reset() {
  const xml = (
    <div className="flex w-full h-dvh max-h-vh bg-gradient-to-b from-[#C3FFD2] via-[#61A061] to-black hide-scrollbar overflow-hidden bgl">
      <div className="w-full relative bg-white max-md:bg-transparent mx-[clamp(2rem,9.1vw,13rem)] mt-[clamp(1rem,6.8vh,6.9rem)] mb-[clamp(1rem,5.5vh,5.6rem)] flex max-xl:mx-[2rem] rmm text-[1.6rem] signup max-md:mx-0 max-md:my-0 max-md:flex-col">
        <div className="w-[47.2rem] h-full flex-none bg-[url('./assets/signupimage.png')] bg-center bg-cover bg-no-repeat max-xl:w-[50%] max-md:w-full max-md:h-[18.6rem] max-md:hidden">
          <Link to="/">
            <div className="flex items-center">
              <img
                src={logo}
                alt=""
                className="w-[8.8rem] h-[5.974rem] block mt-[0.6rem]"
              />
              <h2 className="text-white poppins text-[1.5rem] font-semibold leading-normal">
                FARM TRACK
              </h2>
            </div>
          </Link>
        </div>
        {/* FORM */}
        <ResetForm />
        <svg
          className="absolute w-full z-0 hidden max-md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 375 646"
          fill="none"
        >
          <path
            d="M190.714 22.2909C96.5238 54.2761 23.1508 48.612 -1.7619 41.7818L-12 649H375V8.29739C352.817 -0.365254 284.905 -9.69426 190.714 22.2909Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
  return xml;
}

export default Reset;
