import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const input = useRef(null);
  function toggleOn(e) {
    input.current.checked = false;
  }
  function hamburgerlinkState() {
    return "block pl-[1rem] py-[1.5rem] border-b-[0.1rem] border-b-dotted border-b-[rgba(0,0,0,0.04)] text-[1.8rem] hover:text-[#61A061] transition-all duration-[0.5s] text-center mx-[1rem]";
  }
  const linkState = (function () {
    return "text-white text-[2.4rem] font-medium leading-normal hover:text-[rgba(0,0,0,.5)] transition-all duration-[0.2s] ease-linear hover:tracking-[0.1rem]";
  })();
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    function makeNavbarTransparent() {
      const heroTop =
        navbar.parentElement.nextElementSibling.getBoundingClientRect().y;
      if (heroTop < 106 && window.innerWidth > 1024) {
        navbar.parentElement.style.background = "transparent";
        navbar.style.background = "rgba(255,255,255,0.5)";
        navbar.style.boxShadow = "0 4px 35px -22px rgba(0,0,0,0.9)";
        navbar.style.borderRadius = "100px";
        navbar.style.backdropFilter = "blur(5px)";
        navbar.style.paddingLeft = "0.5rem";
      } else {
        navbar.parentElement.style.background = "rgba(255,255,255,1)";
        navbar.style.background = "none";
        navbar.style.boxShadow = "none";
        navbar.style.borderRadius = "0px";
        navbar.style.backdropFilter = "none";
        navbar.style.paddingLeft = "0rem";
      }
    }

    window.addEventListener("scroll", makeNavbarTransparent);
    menuToggle
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
    return () => {
      window.removeEventListener("scroll", makeNavbarTransparent);
    };
  }, [menuToggle]);
  const xml = (
    <header
      className={`h-[10.6rem]  bg-[#fff] flex items-center max-md:bg-[#D9D9D9] max-md:h-[unset] sticky top-0 z-10 max-md:py-[0.75rem]
          ${
            toggleOn && window.innerWidth <= 768
              ? " shadow-[0px_1px_5px_rgba(0,0,0,0.1)]"
              : ""
          }`}
    >
      <nav
        className="flex justify-between items-center w-[128rem] max-w-[85%] mx-auto max-md:max-w-[91%] max-md:w-[40rem]"
        id="navbar"
      >
        <div>
          <a
            href="/"
            className="flex items-center gap-[1rem] transition-all hover:tracking-[0.1rem] hover:text-[rgba(0,0,0,0.8)]"
          >
            <div className="img-holder max-md:h-[3.5rem] max-md:w-[5rem] max-md:overflow-hidden">
              <img
                className="block h-[6rem] w-[4rem] aspect-square object-cover max-md:h-[3.5rem] max-md:w-[5rem] max-md:object-cover max-md:object-[-1rem] max-md:scale-[1.3]"
                src={logo}
                alt="Error"
                id="nav-logo"
              />
            </div>
            <h2 className="font-bold text-[2.037rem] leading-[2.4rem] sf-bold max-md:hidden">
              FARM TRACK
            </h2>
          </a>
        </div>
        {/* NavLinkS */}
        <ul className="flex gap-[2rem] max-md:hidden items-center rounded-[4rem] bg-[#61A061] h-[6.5rem] px-[3rem] shadow-[0px_1px_5px_rgba(0,0,0,0.1)]">
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
        <div className="menu-wrap hidden max-md:block max-md:w-[3.2rem] h-[3.2rem]  relative group">
          <input
            type="checkbox"
            className="toggle w-full h-full absolute top-0 cursor-pointer opacity-0 z-[1] group peer bg-red-500"
            ref={input}
          />
          <div className="hamburger absolute flex items-center justify-center w-full h-full z-0 px-[0.2rem] transition-all">
            <div
              className={`w-full h-[0.188rem] bg-[#000] rounded-[4rem] relative peer-checked:bg-red
          before:absolute before:content-[''] before:w-[70%] before:h-[0.188rem] before:bg-[#000] before:top-[-.6rem] before:rounded-[4rem] 
          after:absolute after:content-[''] after:w-[70%] after:h-full after:bg-[#000] after:top-[.6rem] after:rounded-[4rem] after:right-0 `}
            ></div>
          </div>
          <div className="menu fixed w-full left-0 h-[calc(100dvh-5rem)] bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.8)]">
            <div className="w-full h-full flex">
              <div className="w-full bg-white ">
                <ul className="flex flex-col">
                  <li>
                    <a
                      className={hamburgerlinkState()}
                      href="#"
                      id="home"
                      onClick={toggleOn}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className={hamburgerlinkState()}
                      id="features"
                      href="#feature"
                      onClick={toggleOn}
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className={hamburgerlinkState()}
                      href="#services"
                      id="contact"
                      onClick={toggleOn}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className={hamburgerlinkState()}
                      href="#abouts"
                      id="about"
                      onClick={toggleOn}
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
