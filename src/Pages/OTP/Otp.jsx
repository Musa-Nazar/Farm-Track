import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./optStyle";
import OtpInput from "./OtpInput";
import { useState } from "react";
import { useMainContext } from "../../../MainContext";
import http from "../../../http";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

function Otp() {
  const navigate = useNavigate();
  const { user, setToken, cookie } = useMainContext();
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { input1, input2, input3, input4 } = formData;
    const data = parseInt(`${input1}${input2}${input3}${input4}`);
    async function postOtp() {
      try {
        const response = await http.prototype.post(
          "https://farmtrack-backend.onrender.com/api/otp-verify/",
          {
            email: user.email,
            otp: data,
          }
        );
        if (response.status >= 200 && response.status < 300) {
          cookie.set(
            "token",
            response.data,
            new Date(jwtDecode(response.data.access).exp * 1000)
          );
          setToken(response.data);
          toast.success("Otp is valid, Proceeding to onBoarding", {
            className: "poppins text-[1.8rem]",
          });
          setTimeout(() => {
            navigate("/onboarding");
          }, 1000);
        }
      } catch (error) {
        toast.error(
          "There seems to be an an error with our server please contact our support team"
        );
      }
    }
    postOtp();
  }
  function moveToNext(e) {
    if (e.target.value.length === e.target.maxLength) {
      const next = e.target.nextElementSibling;
      if (next) next.focus();
    }
  }
  function deletePrev(e) {
    if (e.key === "Backspace" && e.target.value === "") {
      const prev = e.target.previousElementSibling;
      if (prev) {
        prev.value = "";
        prev.focus();
      }
    }
  }
  const xml = (
    <div className={`${styles.showcase}`}>
      <div className={`${styles.box} rmm2`}>
        <Link to="/">
          <h2 className="flex items-center">
            <img src={logo} alt="error" className={`${styles.logo}`} />
            <span className={`${styles.heading}`}>FARM TRACK</span>
          </h2>
        </Link>
        <div className={`${styles.otpBox}`}>
          <h3 className={`${styles.otpHead}`}>OTP Verification</h3>
          <p className={`${styles.otpText}`}>
            <span className="max-md:hidden">
              Please enter the OTP (one-time-password) sent to
              <br /> your registered email adress to complete your
              <br /> verification.
            </span>
            <span className="hidden max-md:block max-md:break-all">
              Please enter the OTP (one-time-password) sent to your registered
              email adress to complete your verification.
            </span>
          </p>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex justify-between mb-[3.7rem]">
              <OtpInput
                name="input1"
                id="0"
                moveToNext={moveToNext}
                deletePrev={deletePrev}
                handleChange={handleChange}
              />
              <OtpInput
                name="input2"
                id="1"
                moveToNext={moveToNext}
                deletePrev={deletePrev}
                handleChange={handleChange}
              />
              <OtpInput
                name="input3"
                id="2"
                moveToNext={moveToNext}
                deletePrev={deletePrev}
                handleChange={handleChange}
              />
              <OtpInput
                name="input4"
                id="2"
                moveToNext={moveToNext}
                deletePrev={deletePrev}
                handleChange={handleChange}
              />
            </div>
            <div className="flex justify-between mb-[4.1rem] max-md:flex-col max-md:gap-[1.3rem]">
              <p className="flex">
                <span className={`${styles.otpSpan}`}>Remaining Time:</span>
                <span className={`${styles.otpSpan} !text-[#61A061]`}>
                  00:00
                </span>
              </p>
              <p className="flex">
                <span className={`${styles.otpSpan}`}>
                  didn’t get the code?
                </span>
                <span className={`${styles.otpSpan} !text-[#61A061]`}>
                  Resend
                </span>
              </p>
            </div>
            <button className={`${styles.otpButton} mb-[2.9rem]`}>
              Verify
            </button>
            <Link
              to="/login"
              className={`${styles.otpButton} text-center !leading-[4.5rem] !text-[#61A061] bg-white`}
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
  return xml;
}

export default Otp;
