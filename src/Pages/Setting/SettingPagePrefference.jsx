import React from "react";
import { toast } from "react-toastify";
import http from "../../../http";
import { useMainContext } from "../../../MainContext";
import { useNavigate } from "react-router-dom";
function SettingPagePrefference() {
  const { token, cookie } = useMainContext();
  const navigate = useNavigate();
  function notifyMaintainance() {
    toast.error("This feature is yet to be released", {
      className: "poppins text-[1.6rem]",
    });
  }
  function sendToMail() {
    async function sendReport() {
      try {
        if (!token.access) return location.reload();
        const response = await http.prototype.postWithToken(
          "https://farmtrack-backend.onrender.com/api/info/analytics/report/",
          token.access
        );
        toast.success("Report sent to mail", {
          className: "poppins text-[1.8rem]",
        });
      } catch (error) {
        toast.error("Fail to send report", {
          className: "poppins text-[1.8rem]",
        });
      }
    }
    sendReport();
  }
  function logoutUser() {
    cookie.remove("user");
    cookie.remove("token");
    navigate("/login");
  }
  const xml = (
    <div className="mt-[8rem] flex flex-col gap-[4.7rem]">
      {/* NOTIFICATIONS */}
      <div className="flex flex-col">
        <div className="flex items-center gap-[2.3rem]">
          <h2 className="text-[#000] poppins text-[3rem] font-bold leading-[150%] gap-[0.5rem]">
            Notifications :
          </h2>
          <div
            className="w-[5rem] h-[3rem] rounded-[4rem] bg-gray-500 flex overflow-hidden group"
            onClick={notifyMaintainance}
          >
            <div className="w-full h-full flex items-center justify-end rounded-[4rem] p-[0.5rem] bg-gray-500 translate-x-[-45%]  transition-all duration-[0.5s]">
              <span className="w-[50%] flex-none h-full rounded-[4rem] bg-white"></span>
            </div>
          </div>
        </div>
        <p
          className="text-[#000] poppins text-[1.6rem] font-[500] leading-[4.5rem]
        "
        >
          Enable/disable alerts for stock, feeding, and mortality.
        </p>
      </div>
      {/* THEMES */}
      {/* <div className="flex flex-col">
        <div className="flex items-center gap-[2.3rem]">
          <h2 className="text-[#000] poppins text-[3rem] font-bold leading-[150%] gap-[0.5rem]">
            Themes :
          </h2>
          <div className="w-[5rem] h-[3rem] rounded-[4rem] bg-gray-500 flex overflow-hidden group">
            <div className="w-full h-full flex items-center justify-end rounded-[4rem] p-[0.5rem] bg-gray-500 translate-x-[-45%] group-hover:translate-x-[0] group-hover:bg-green-500 transition-all duration-[0.5s]">
              <span className="w-[50%] flex-none h-full rounded-[4rem] bg-white"></span>
            </div>
          </div>
        </div>
        <p
          className="text-[#000] poppins text-[1.6rem] font-[500] leading-[4.5rem]
        "
        >
          Light/Dark Mode
        </p>
      </div> */}
      {/* SECURITY AND BACK UP */}
      <div className="flex flex-col">
        <div className="flex gap-[2.5rem] items-center">
          <h2 className="text-[#000] poppins text-[3rem] font-bold leading-[150%] gap-[0.5rem]">
            Report:
          </h2>
          <button
            className="flex w-[17.4rem] h-[4.4rem] p-[1rem] justify-center items-center gap-[1rem] rounded-[1.3rem] border"
            onClick={sendToMail}
          >
            <span className="text-[#000] poppins text-[1.1rem] font-[600] leading-normal">
              Send Report to mail
            </span>
          </button>
        </div>
        <p
          className="text-[#000] poppins text-[1.6rem] font-[500] leading-[4.5rem] w-[79.6rem] max-w-[100%]
        "
        >
          Ensure data safety with secure cloud storage and automated backups,
          protecting your farm’s vital information from loss or breaches.
        </p>
      </div>
      {/* LOG OUT */}
      <div className="flex justify-start">
        <button
          className="text-[1.8rem] text-red-500 cursor-pointer poppins font-semibold leading-[150%] gap-[0.5rem] inline-block"
          onClick={logoutUser}
        >
          Log out
        </button>
      </div>
    </div>
  );
  return xml;
}

export default SettingPagePrefference;
