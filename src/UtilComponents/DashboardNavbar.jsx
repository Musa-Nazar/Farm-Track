import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import profileIcon from "../assets/profile-icon-new.png";
import dashboard from "../assets/dashboard.svg";
import inventory from "../assets/inventory.svg";
import analytics from "../assets/analytics.svg";
import sales from "../assets/sales.svg";
import setting from "../assets/setting.svg";
import notification from "../assets/notification.svg";
import logout from "../assets/logout.svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMainContext } from "../../MainContext.jsx";
import { jwtDecode } from "jwt-decode";
import http from "../../http.js";
function DashboardNavbar() {
  const [checked, setChecked] = useState(false);
  const { token, user, setUser } = useMainContext();
  function handleCheck() {
    setChecked(false);
  }
  function handleChange() {
    setChecked((prevState) => !prevState);
  }
  function activeLink({ isActive }) {
    return isActive
      ? "bg-[rgba(75,175,71,0.25)] w-full h-[4.7rem] flex items-center pl-[3.25rem] gap-[2.3rem] mask"
      : "w-full h-[4.7rem] flex items-center pl-[3.25rem] gap-[2.3rem]";
  }
  const [navOpacity, setNavOpacity] = useState(false);
  useEffect(() => {
    const dgap = document.querySelector(".dgap");
    function changeNavbarOpacity() {
      if (dgap.getBoundingClientRect().y === 0) {
        setNavOpacity(false);
      } else {
        setNavOpacity(true);
      }
    }
    document
      .querySelector(".inventory")
      .addEventListener("scroll", changeNavbarOpacity);
  }, [useLocation().pathname]);
  const xml = (
    <>
      <header>
        <nav
          className={`flex justify-between absolute nav-shadow top-0 w-full flex-none h-[9.1rem] ${
            navOpacity ? "bg-[#fff]" : "bg-[rgba(255,255,255,0.30)]"
          } pr-[clamp(2rem,7.6736111111vw,110.5rem)] z-[1] max-md:hidden`}
        >
          <div className="flex items-center">
            <img src={logo} alt="err" className="ml-[0.05rem]" />
            <h2 className="text-[#000] poppins font-[600] text-[1.5rem] leading-normal">
              FARM TRACK
            </h2>
          </div>
          <div className="flex gap-[3.15rem] items-center">
            <div className="w-[5rem] aspect-square bg-green-300 rounded-[50%] flex items-center justify-center text-white text-[3rem]">
              {user && user.first_name[0]}
            </div>
            {user ? (
              <span className="text-[#000] poppins text-[2rem] font-[600] leading-normal">
                {user && user.first_name} {user && user.last_name}
              </span>
            ) : (
              <span className="text-[#000] poppins text-[2rem] font-[600] leading-normal">
                Dew Tee
              </span>
            )}
          </div>
        </nav>
        <nav className="w-[23.1rem] flex-none bg-[#fff] h-dvh flex max-md:hidden">
          <ul className="flex flex-col mt-[12.9rem] gap-[2rem] w-full">
            <li>
              <NavLink className={activeLink} to="/dashboard">
                <img
                  src={dashboard}
                  alt=""
                  className="w-[3.9rem] aspect-square"
                />
                <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/inventory">
                <img
                  src={inventory}
                  alt=""
                  className="w-[3.9rem] aspect-square"
                />
                <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                  Inventory
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/analytic">
                <img
                  src={analytics}
                  alt=""
                  className="w-[3.9rem] aspect-square"
                />
                <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                  Analytics
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/salesandexpense">
                <img src={sales} alt="" className="w-[3.9rem] aspect-square" />
                <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                  Sales & expense
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="setting">
                <img
                  src={setting}
                  alt=""
                  className="w-[3.9rem] aspect-square"
                />
                <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                  Settings
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/notification">
                <img
                  src={notification}
                  alt=""
                  className="w-[3.9rem] aspect-square"
                />
                <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                  Notification
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* MOBILE NAVBAR */}
      <nav className="shadow-[0px_1px_5px_rgba(0,0,0,0.11)] px-[2rem] hidden max-md:flex top-0  justify-between items-center fixed z-40 w-full bg-white h-[7rem]">
        <div className="logo flex items-center">
          <img
            src={logo}
            className="object-cover block w-[6rem] aspect-square"
          />
          <h2 className="text-[#000] poppins font-[600] text-[1.5rem] leading-normal">
            FARM TRACK
          </h2>
        </div>
        <div className="d-menu-wrap relative w-[3rem] h-[3rem]">
          <input
            type="checkbox"
            name="dMenu"
            id="dMenu"
            checked={checked}
            onChange={handleChange}
            className="d-toggle opacity-0 absolute cursor-pointer z-[10000000] w-[3rem] h-[3rem]"
          />
          <div className="d-hamburger w-[3rem] h-[3rem] bg-gray absolute flex justify-center items-center px-[0.2rem]">
            <div className="w-full relative h-[0.35rem] bg-black before:content-[''] before:absolute before:w-full before:h-[0.35rem] before:top-[-0.7rem] before:bg-[#000] after:content-[''] after:absolute after:w-[50%] after:right-0 after:h-[0.35rem] after:top-[0.7rem] after:bg-[#000]"></div>
          </div>
          <div className="d-menu w-[100vw] fixed h-[100vh] bg-[rgba(0,0,0,0.2)] top-0 left-0 overflow-hidden transition-all z-[9999] invisible">
            <div className="w-[100%]  h-dvh bg-[rgba(0,0,0,0.1)] opacity-0">
              <div className="w-[24rem] absolute z-[9999] bg-white h-dvh flex flex-col translate-x-[-100%]">
                <div className="logo flex items-center pl-[3.25rem] mb-[2rem] mt-[0.5rem]">
                  <img
                    src={logo}
                    className="object-cover object-right block w-[7rem] aspect-square"
                  />
                  <h2 className="text-[#000] poppins font-[600] text-[1.5rem] leading-normal">
                    FARM TRACK
                  </h2>
                </div>
                <ul className="flex flex-col gap-[2rem] ">
                  <li>
                    <NavLink
                      className={activeLink}
                      to="/dashboard"
                      onClick={handleCheck}
                    >
                      <img
                        src={dashboard}
                        alt=""
                        className="w-[3.9rem] aspect-square"
                      />
                      <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                        Dashboard
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={activeLink}
                      to="/inventory"
                      onClick={handleCheck}
                    >
                      <img
                        src={inventory}
                        alt=""
                        className="w-[3.9rem] aspect-square"
                      />
                      <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                        Inventory
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={activeLink}
                      to="/analytic"
                      onClick={handleCheck}
                    >
                      <img
                        src={analytics}
                        alt=""
                        className="w-[3.9rem] aspect-square"
                      />
                      <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                        Analytics
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={activeLink}
                      to="/salesandexpense"
                      onClick={handleCheck}
                    >
                      <img
                        src={sales}
                        alt=""
                        className="w-[3.9rem] aspect-square"
                      />
                      <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                        Sales & expense
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={activeLink}
                      to="setting"
                      onClick={handleCheck}
                    >
                      <img
                        src={setting}
                        alt=""
                        className="w-[3.9rem] aspect-square"
                      />
                      <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                        Settings
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={activeLink}
                      to="/notification"
                      onClick={handleCheck}
                    >
                      <img
                        src={notification}
                        alt=""
                        className="w-[3.9rem] aspect-square"
                      />
                      <span className="text-[#000] poppins text-[1.6rem] font-[500] leading-normal">
                        Notification
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
  return xml;
}

export default DashboardNavbar;
