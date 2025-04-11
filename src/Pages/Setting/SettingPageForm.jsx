import profileIcon from "../../assets/profile-icon-new.png";
import pencil from "../../assets/pencil-icon.png";
import { useMainContext } from "../../../MainContext";
import { useState } from "react";
import { toast } from "react-toastify";
import http from "../../../http";
import { useNavigate } from "react-router-dom";
function SettingPageForm() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const { user, token } = useMainContext();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    farm_name: "",
    email: user ? user.email : "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsClicked(true);
    async function submitUserData() {
      try {
        const response = await http.prototype.put(
          "https://farmtrack-backend.onrender.com/api/user/profile",
          token.access,
          "",
          formData
        );
        setIsClicked(false);
        if (response.message && response.message === "User profile updated.")
          toast.success("User profile updated.", {
            className: "poppins text-[1.6rem]",
          });
        return navigate("/dashboard");
      } catch (error) {
        toast.error("Unable to Update Profile", {
          className: "poppins text-[1.6rem]",
        });
      }
    }
    submitUserData();
  }
  let styles = {
    inputField:
      "flex w-[40.2rem] flex-col items-start start gap-[1.5rem] relative",
    label:
      "text-[rgba(0,0,0,0.8)] poppins text-[1.5rem] font-[500] leading-normal",
    input:
      "w-full h-[5rem] rounded-[0.4rem] border border-[rgba(0,0,0,0.4)] outline-0 text-[1.6rem] poppins indent-[3.2rem] placeholder:text-[#000] placeholder:text-[1.2rem] placeholder:font-[500] peer",
  };
  const xml = (
    <div className="pt-[2.9rem] flex flex-col items-start">
      <h2 className="text-[#000] poppins font-[600] text-[3.5rem] leading-normal max-md:text-center max-md:w-full">
        Settings
      </h2>
      <div className="flex gap-[4.3rem] mt-[3.1rem] mb-[6.4rem] items-center max-md:flex-col max-md:w-full">
        <div className="flex w-[12.5rem] h-[12.5rem] p-[1.0417rem] items-center gap-[2.0833rem] bg-[#C6C6C6] rounded-[6.25rem]">
          <div className="w-[10.4167rem] h-[10.4167rem] text-[white] text-[8rem] font-bolds set-fill bg-green-300 rounded-[50%] justify-center items-center flex">
            {user && user.first_name[0]}
          </div>
        </div>
        <p className="text-[#000] poppins text-[4.1667rem] font-[600] leading-normal">
          {user ? user.first_name : "---"} {user ? user.last_name : "---"}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-[2.1rem] w-full">
        <div className="flex gap-[6.3rem] w-full max-md:gap-[2rem]">
          <div className={`${styles.inputField} max-w-[50%]`}>
            <label htmlFor="firstName" className={`${styles.label}`}>
              FirstName
            </label>
            <input
              type="text"
              name="first_name"
              id="firstName"
              required
              onChange={handleChange}
              className={`${styles.input}`}
              placeholder={user && user.first_name}
            />
            <label
              htmlFor="firstName"
              className="peer-focus:hidden peer-valid:hidden absolute right-[2.5rem] bottom-[1.3rem]"
            >
              <img src={pencil} alt="" />
            </label>
          </div>

          <div className={`${styles.inputField} max-w-[50%]`}>
            <label htmlFor="lastName" className={`${styles.label}`}>
              LastName
            </label>
            <input
              type="text"
              name="last_name"
              required
              id="lastName"
              onChange={handleChange}
              className={`${styles.input}`}
              placeholder={user && user.last_name}
            />
            <label
              htmlFor="lastName"
              className="peer-focus:hidden peer-valid:hidden absolute right-[2.5rem] bottom-[1.3rem]"
            >
              <img src={pencil} alt="" />
            </label>
          </div>
        </div>
        <div className="flex w-full mt-[1.5rem]">
          <div className={`${styles.inputField} w-[86.7rem] max-w-[100%]`}>
            <label htmlFor="farmName" className={`${styles.label}`}>
              Name Of Farm
            </label>
            <input
              type="text"
              name="farm_name"
              id="farmName"
              required
              onChange={handleChange}
              className={`${styles.input}`}
              placeholder={user && user.farm_name}
            />
            <label
              htmlFor="farmName"
              className="peer-focus:hidden peer-valid:hidden absolute right-[2.5rem] bottom-[1.3rem]"
            >
              <img src={pencil} alt="" />
            </label>
          </div>
        </div>
        <div className="flex w-full mt-[1.5rem]">
          <div className={`${styles.inputField} w-[86.7rem] max-w-[100%]`}>
            <label htmlFor="email" className={`${styles.label}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled
              className={`${styles.input}`}
              value={user.email}
              placeholder="FarmTrack@gmail.com"
            />
            <label
              htmlFor="email"
              className="peer-focus:hidden absolute right-[2.5rem] bottom-[1.3rem]"
            ></label>
          </div>
        </div>
        <div className="flex w-full mt-[1.5rem]">
          <div className={`${styles.inputField} w-[86.7rem] max-w-[100%]`}>
            <label htmlFor="password" className={`${styles.label}`}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}
              className={`${styles.input}`}
              placeholder="xxxxxxxx"
            />
            <label
              htmlFor="password"
              className="peer-focus:hidden peer-valid:hidden absolute right-[2.5rem] bottom-[1.3rem]"
            >
              <img src={pencil} alt="" />
            </label>
          </div>
        </div>
        <div className="flex w-full mt-[1.5rem]">
          <div className={`${styles.inputField} w-[86.7rem] max-w-[100%]`}>
            <button
              type="submit"
              id="submit"
              className={`${styles.input} bg-black text-white cursor-pointer flex justify-center items-center`}
            >
              {isClicked ? (
                <span className="w-[1.6rem] block h-[1.6rem] rounded-[50%] border-white border-t-[transparent] border-[0.2rem] rotate"></span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  return xml;
}

export default SettingPageForm;
