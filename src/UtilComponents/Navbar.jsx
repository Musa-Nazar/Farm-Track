import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  function toggleOn() {
    setMenuToggle((prevState) => !prevState);
  }
  function hamburgerlinkState({ isActive }) {
    return isActive
      ? "text-[#61A061] inline-block w-full pl-[1rem] py-[1.5rem] border-b border-dotted border-[rgba(0,0,0,0.1)] text-[1.8rem] hover:text-[#61A061] transition-all duration-[0.5s]"
      : " inline-block w-full pl-[1rem] py-[1.5rem] border-b border-dotted border-[rgba(0,0,0,0.1)] text-[1.8rem] hover:text-[#61A061] transition-all duration-[0.5s] hover:underline hover:underline-offset-4";
  }
  function linkState({ isActive }) {
    return isActive
      ? "text-black text-[2.5rem] font-medium leading-normal"
      : "text-black text-[2.5rem] font-medium leading-normal";
  }
  useEffect(() => {
    menuToggle
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [menuToggle]);
  const xml = (
    <header className="h-[10.6rem] max-md:h-[8rem] bg-[#fff] flex items-center max-md:bg-[#D9D9D9]">
      <nav className="flex justify-between items-center w-full pr-[clamp(1.5rem,3.715277778vw,5.35rem)]">
        <div className="flex items-center">
          <div className="img-holder">
            <img
              className="block w-[9.87239761352539rem] h-[6.71323013305664rem]"
              src={logo}
              alt="Error"
            />
          </div>
          <h2 className="font-bold text-[2.037rem] leading-[2.4rem] sf-bold">
            FARM TRACK
          </h2>
        </div>
        {/* NavLinkS */}
        <ul className="flex gap-[2.7rem] max-md:hidden">
          <li>
            <NavLink to={"/"} className={linkState}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"#services"} className={linkState}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to={"#about"} className={linkState}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"#contact"} className={linkState}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="menu-wrap hidden max-md:block max-md:w-[4rem] max-md:h-[4rem] relative group">
          <input
            type="checkbox"
            className="toggle w-full h-full absolute top-0 cursor-pointer opacity-0 z-[1] group peer"
            onChange={toggleOn}
          />
          <div className="hamburger absolute flex items-center justify-center w-full h-full z-0 px-[0.5rem] transition-all">
            <div
              className="w-full h-[0.3rem] bg-[#000] rounded-[4rem] relative peer-checked:bg-red
          before:absolute before:content-[''] before:w-[50%] before:h-full before:bg-[#000] before:top-[-1rem] before:rounded-[4rem] 
          after:absolute after:content-[''] after:w-[50%] after:h-full after:bg-[#000] after:top-[1rem] after:rounded-[4rem] after:right-0"
            ></div>
          </div>
          <div className="menu fixed w-full left-0 bg-[rgba(0,0,0,0.4)] h-[calc(100dvh-8rem)] bottom-0 flex justify-center items-center">
            <div className="w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-end">
              <div className="w-[55%] bg-white ">
                <ul className="flex flex-col">
                  <li>
                    <NavLink className={hamburgerlinkState} to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={hamburgerlinkState} to="#features">
                      Features
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={hamburgerlinkState} to="#contact">
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={hamburgerlinkState} to="#about">
                      About
                    </NavLink>
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
