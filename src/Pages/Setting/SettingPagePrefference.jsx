import React, { useState } from "react";
import { toast } from "react-toastify";
import { useMainContext } from "../../../MainContext";
import { post, postWithToken } from "../../../http";
import config from "../../../config";
import tickImg from "../../assets/tick.jpg";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function SettingPagePrefference() {
  // NAVIGATE
  const navigate = useNavigate();
  // GET TOKEN
  const cookie = new Cookies();
  const token = cookie.get("token") ?? "";

  // SENDING REPORT STATE
  const [reportState, setReportState] = useState("");

  async function sendReport() {
    // CHECK TOKEN
    if (!token) return navigate("/login");

    // GENERATE REPORT
    setReportState("loading");
    const report = await postWithToken(
      `${config.apiDomain}/api/v1/settings/sendreport`,
      token,
    );

    // IF AN ERROR OCCURS
    if (report?.status >= 400) {
      toast.error(report?.message ?? "Unable to send report", {
        className: "text-[1.8rem] poppins",
      });
      setReportState("");
      return;
    }

    // IF REPORT IS SENT
    setReportState("done");
    toast.success(report?.data?.message, {
      className: "text-[1.8rem] poppins",
    });
    setTimeout(() => setReportState(""), 1000);
  }
  function logoutUser() {
    if (token) {
      cookie.remove("token");
      cookie.remove("userData");
    }
    navigate("/login");
  }
  const xml = (
    <div className="mt-[8rem] flex flex-col gap-[4.7rem] max-md:mt-[5rem]">
      {/* NOTIFICATIONS */}
      {/* <div className="flex flex-col">
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
      </div> */}
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
        <div className="flex items-center">
          <h2 className="text-[#000] poppins text-[3rem] font-bold leading-[150%] mr-[2.5rem] ">
            Report:
          </h2>
          <button
            className={`flex w-[17.4rem] h-[4.4rem] text-[#000] p-[1rem] justify-center items-center gap-[1rem] rounded-[1.3rem] border cursor-pointer hover:bg-black hover:text-[#fff] transition-all ${reportState ? "mr-[1rem] bg-[darkgray]" : ""}`}
            onClick={sendReport}
            disabled={reportState}
          >
            <span className="poppins text-[1.1rem] font-[600] leading-normal">
              Send Report to mail
            </span>
          </button>
          {reportState === "loading" && (
            <div className="rotate w-[1.8rem] aspect-square rounded-[50%] border-green-300 border border-t-transparent"></div>
          )}
          {/* CONFIRMED TICK */}
          {reportState === "done" && (
            <img
              src={tickImg}
              alt={tickImg}
              className={"inline-block w-[1.8rem] aspect-square"}
            />
          )}
        </div>
        <p
          className="text-[#000] poppins text-[1.6rem] font-[500] leading-[4.5rem] w-[79.6rem] max-w-[100%]
        "
        >
          Generate a monthly report of your farm’s vital information, such as
          total sales, expense and feed consumed in that month up to the current
          date
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
