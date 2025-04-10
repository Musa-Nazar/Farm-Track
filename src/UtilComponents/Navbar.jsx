import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  function toggleOn() {
    setMenuToggle((prevState) => !prevState);
  }
  function hamburgerlinkState() {
    return " inline-block w-full pl-[1rem] py-[1.5rem] border-b border-dotted border-[rgba(0,0,0,0.1)] text-[1.8rem] hover:text-[#61A061] transition-all duration-[0.5s]";
  }
  const linkState = (function () {
    return "text-black text-[2.5rem] font-medium leading-normal";
  })();
  useEffect(() => {
    menuToggle
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [menuToggle]);
  const xml = (
    <header className="h-[10.6rem]  bg-[#fff] flex items-center max-md:bg-[#D9D9D9] max-md:h-[4.3rem] sticky top-0 z-10">
      <nav className="flex justify-between items-center w-full pl-[clamp(2rem,4.7vw,6.7rem)]  pr-[clamp(2rem,6.7vw,9.6rem)] max-md:px-[1.3rem]">
        <div className="flex items-center">
          <a href="/">
            <div className="img-holder">
              <img
                className="block w-[9.87239761352539rem] h-[6.71323013305664rem] max-md:h-[2.9rem] max-md:w-[4.2647rem]"
                src={logo}
                alt="Error"
              />
            </div>
          </a>
          <h2 className="font-bold text-[2.037rem] leading-[2.4rem] sf-bold max-md:hidden">
            FARM TRACK
          </h2>
          <h2 className="max-md:text-black max-md:font-[SF Pro Display] max-md:text-[1.2rem] max-md:not-italic max-md:font-medium max-md:leading-normal hidden max-md:block">
            Farm Track
          </h2>
        </div>
        {/* NavLinkS */}
        <ul className="flex gap-[2.7rem] max-md:hidden">
          <li>
            <a href={"#"} className={linkState}>
              Home
            </a>
          </li>
          <li>
            <a href={"#feature"} className={linkState}>
              Features
            </a>
          </li>
          <li>
            <a href="#abouts" className={linkState}>
              About
            </a>
          </li>
          <li>
            <a href={"#services"} className={linkState}>
              Services
            </a>
          </li>
        </ul>
        <div className="menu-wrap hidden max-md:block max-md:w-[3.2rem] max-md:h-[3.2rem] relative group">
          <input
            type="checkbox"
            className="toggle w-full h-full absolute top-0 cursor-pointer opacity-0 z-[1] group peer"
            onChange={toggleOn}
          />
          <div className="hamburger absolute flex items-center justify-center w-full h-full z-0 px-[0.2rem] transition-all">
            <div
              className="w-full h-[0.3rem] bg-[#000] rounded-[4rem] relative peer-checked:bg-red
          before:absolute before:content-[''] before:w-full before:h-full before:bg-[#000] before:top-[-1rem] before:rounded-[4rem] 
          after:absolute after:content-[''] after:w-[50%] after:h-full after:bg-[#000] after:top-[1rem] after:rounded-[4rem] after:right-0"
            ></div>
          </div>
          <div className="menu fixed w-full left-0 bg-[rgba(0,0,0,0.4)] h-[calc(100dvh-4.3rem)] bottom-0 flex justify-center items-center">
            <div className="w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-end">
              <div className="w-[55%] bg-white ">
                <ul className="flex flex-col">
                  <li>
                    <a className={hamburgerlinkState()} href="#" id="home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className={hamburgerlinkState()}
                      id="features"
                      href="#feature"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className={hamburgerlinkState()}
                      href="#services"
                      id="contact"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className={hamburgerlinkState()}
                      href="#abouts"
                      id="about"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
  return xml;
}
export default Navbar;
