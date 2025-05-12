import { useState, useEffect } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import http from "../../../http";
import { toast } from "react-toastify";
import { useMainContext } from "../../../MainContext";
import { jwtDecode } from "jwt-decode";
function FormOne({ setPageNo, pageNo }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { setUser, cookie, setToken } = useMainContext();
  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.classList.contains("not-submitted")) {
      e.target.classList.remove("not-submitted");
      toast.success("Wait while user is being signed in", {
        className: "poppins text-[1.8rem]",
      });
      setIsSubmitted(true);
      http.prototype
        .post("https://farmtrack-backend.onrender.com/api/register/", formData)
        .then((data) => {
          setUser({ email: formData.email });
          toast.success("Otp sent to mail", {
            className: "poppins text-[1.8rem]",
          });
          setIsSubmitted(false);
          setTimeout(() => {
            navigate("/otp");
          }, 1500);
        })
        .catch((err) => {
          setIsSubmitted(false);
          e.target.classList.add("not-submitted");
          if (typeof err === "object") {
            toast.error(err[Object.keys(err)[0]][0], {
              className: "poppins text-[1.8rem]",
            });
          } else {
            toast.error("An Error Has Occured", {
              className: "poppins text-[1.8rem]",
            });
          }
        });
    } else {
      toast.success("You are still being signed in", {
        className: "poppins text-[1.8rem]",
      });
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  const formstyle = {
    label:
      "text-black/80 font-poppins text-[1.5rem] font-medium leading-normal max-md:text-black max-md:poppins max-md:text-[1.2rem] max-md:font-medium max-md:leading-[1.4rem]",
    input:
      "h-[5rem] w-[54.1rem] max-w-[100%] rounded-[0.4rem] border border-black/40 placeholder:text-black/35 poppins placeholder:text-[1.2rem] placeholder:font-medium placeholder:leading-normal indent-[2.3rem] outline-0 text-[1.6rem] max-md:rounded-[0.5rem] max-md:bg-white max-md:h-[3.2rem] max-md:placeholder:opacity-0 max-md:mx-0 max-md:w-full",
    inputField:
      " flex-col gap-[1rem] mb-[clamp(1rem,1.7578125vh,3.6rem)]  flex pr-[2rem] w-full mbb max-md:px-0 max-md:mb-[0.8rem]",
    button:
      "w-[54.1rem] max-w-[100%] h-[4.6rem] max-md:h-[3.9rem] px-[1rem] gap-[1rem] rounded-[1.5rem] bg-[#61A061] shadow-[0_0.4rem_1.9rem_0_rgba(0,0,0,0.25)] text-white poppins text-[1.4rem] font-medium leading-normal mb-[clamp(1rem,3.61328125vh,7.4rem)] block cursor-pointer max-md:text-[1.2rem] active:scale-[0.8] transition-all",
  };
  const xml = (
    <form
      onSubmit={handleSubmit}
      className={`pl-[clamp(1rem,3.7vw,5.3rem)] pt-[clamp(3rem,7.18359375vh,13.5rem)] max-md:pt-[clamp(1rem,11.45320197044335vh,9.5rem)] max-md:px-[1.6rem] overflow-hidden max-md:overflow-y-auto w-full bg-white max-md:bg-transparent pll relative z-[1] not-submitted`}
      id="form_1"
    >
      <h2 className="text-black poppins text-[4rem] font-semibold leading-normal max-xl:text-[clamp(2rem,2.8vw,4rem)] max-md:text-center max-md:text-[2.1713rem]">
        Welcome to Farm Track
      </h2>
      <h3 className="text-black/80 poppins text-[1.6rem] font-medium leading-normal mb-[clamp(1.5rem,5.96vh,6.1rem)] max-md:mb-[clamp(1rem,1.9334975369458127vh,1.57rem)] max-md:text-center max-md:text-[1.2407rem] mbb">
        Register your account
      </h3>
      {/* NAME */}
      <div className={`${formstyle.inputField}`}>
        <label htmlFor="farmname" className={`${formstyle.label}`}>
          Farm Name
        </label>
        <input
          type="text"
          name="farm_name"
          id="farmname"
          required
          className={`${formstyle.input}`}
          placeholder="FarmTrack"
          onChange={handleChange}
        />
      </div>
      {/* EMAIL */}
      <div className={`${formstyle.inputField}`}>
        <label htmlFor="email" className={`${formstyle.label}`}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          autoComplete="email"
          className={`${formstyle.input}`}
          placeholder="FarmTrack@gmail.com"
          onChange={handleChange}
        />
      </div>
      {/* PASSWORD */}
      <div
        className={` ${formstyle.inputField} max-md:mb-[clamp(1rem,6.280788177339901vh,5.1rem)]`}
      >
        <label htmlFor="password" className={`${formstyle.label}`}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          minLength="8"
          className={`${formstyle.input}`}
          placeholder="8+ Characters"
          autoComplete="current-password"
          onChange={handleChange}
        />
      </div>
      {/* CONFIRM PASSWORD */}
      <div
        className={`mb-[clamp(1rem,3.461328125vh,8.03rem)] ${formstyle.inputField} max-md:mb-[clamp(1rem,6.280788177339901vh,5.1rem)]`}
      >
        <label htmlFor="confirmPassword" className={`${formstyle.label}`}>
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
          minLength="8"
          className={`${formstyle.input} `}
          placeholder="Confirm Password"
          autoComplete={false}
          onChange={handleChange}
        />
      </div>
      {/* SUBMIT */}
      <div className="pr-[2rem] mbb max-md:px-0">
        <button type="submit" className={`${formstyle.button}`}>
          {isSubmitted ? (
            <span className="w-full grid place-items-center">
              <span className="Myspin w-[1.8rem] aspect-square border-solid border-[2px] border-white border-t-transparent flex items-center justify-center text-center rounded-[50%]">
                <span className="Myspin-2 w-[1.6rem] aspect-square border-solid border-[2px] border-green-400 border-t-transparent rounded-[50%]"></span>
              </span>
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      <p className="text-black/80 poppins w-[54.1rem] max-w-[100%] text-[1.6rem] font-medium leading-normal text-center pr-[2rem]">
        Already have an account?
        <Link
          to="/login"
          className="text-black poppins text-[1.6rem] font-medium leading-normal underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
  return xml;
}

export default FormOne;
