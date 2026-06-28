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
    <header className="h-[10.6rem]  bg-[#fff] flex items-center max-md:bg-[#D9D9D9] max-md:h-[4.3rem] sticky top-0 z-10">
      <nav
        className="flex justify-between items-center w-[128rem] max-w-[85%] mx-auto max-md:px-[1.3rem]"
        id="navbar"
      >
        <div>
          <a
            href="/"
            className="flex items-center gap-[1rem] transition-all hover:tracking-[0.1rem] hover:text-[rgba(0,0,0,0.8)]"
          >
            <div className="img-holder">
              {/* w-[9.87239761352539rem] h-[6.71323013305664rem] */}
              <img
                className="block h-[6rem] w-[4rem] aspect-square object-cover max-md:h-[2.9rem] max-md:w-[4.2647rem]"
                src={logo}
                alt="Error"
                id="nav-logo"
              />
            </div>
            <h2 className="font-bold text-[2.037rem] leading-[2.4rem] sf-bold max-md:hidden">
              FARM TRACK
            </h2>
          </a>

          <h2 className="max-md:text-black max-md:font-[SF Pro Display] max-md:text-[1.2rem] max-md:not-italic max-md:font-medium max-md:leading-normal hidden max-md:block ">
            Farm Track
          </h2>
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
