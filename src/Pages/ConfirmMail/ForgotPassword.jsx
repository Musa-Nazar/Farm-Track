import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const schema = {
    email: "",
  };
  // CHECK REGEX
  const confirmRegex = () => {
    const inputs = document.querySelectorAll("input[type='email']");
    inputs.forEach((input) => {
      const regex = new RegExp(input.pattern);
      if (input.value !== "") {
        if (regex.test(input.value)) {
          input.previousElementSibling.classList.add("isValid");
          input.previousElementSibling.classList.remove("isNotValid");
        } else {
          input.previousElementSibling.classList.add("isNotValid");
          input.previousElementSibling.classList.remove("isValid");
        }
      } else {
        input.previousElementSibling.classList.remove("isValid", "isNotValid");
      }
    });
  };
  // FORMDATA
  const [formData, setFormData] = useState({ ...schema });
  //
  function handleChange(e) {
    const { name, pattern, value } = e.target;
    confirmRegex();
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    console.log(formData);
  }
  const formStyle = {
    form: "pl-[clamp(1rem,3.75vw,5.4rem)] w-full h-full overflow-hidden pr-[1rem] relative z-10",
    header:
      "text-black poppins text-[4rem] font-semibold leading-[normal] mt-[clamp(2rem,8.984375vh,9.2rem)] mb-[clamp(2rem,6.93359375vh,7.1rem)] max-md:mt-[clamp(2rem,9.27734375vh,9.2rem)] max-md:text-[2.2rem] max-md:mb-[clamp(1rem,4.78515625vh,4.9rem)]",
    inputField: "flex flex-col w-[54.183rem] max-w-[100%] mr-[1rem] gap-[1rem]",
    label:
      "poppins text-[rgba(0,0,0,0.8)] text-[1.5rem] font-medium leading-[normal] max-md:text-[1.2rem] w-full justify-between flex",
    input:
      "rounded-[0.4rem] border border-[rgba(0,0,0,0.4)] h-[5rem] placeholder:font-[poppins] placeholder:text-[1.5rem] placeholder:text-[rgba(0,0,0,0.65)] placeholder:font-medium placeholder:leading-[normal] outline-0 indent-[2.6rem] w-[100%] max-md:h-[3.2rem]",
    btnHolder:
      "w-[54.183rem] max-w-[100%] flex gap-[3.3rem] mt-[3.2rem] max-md:flex-col max-md:items-center max-md:mt-[4.1rem]",
    btn: "w-[25.4rem] h-[4.5rem] items-center rounded-[1rem] shadow-[0px_0.4rem_1.9rem_0px_rgba(0,0,0,0.25)] w-[100%] poppins text-[1.4rem] font-medium leading-[normal] max-md:w-[23.4rem]",
    icons: "text-[1.5rem] hidden max-md:text-[1.2rem]",
  };
  const xml = (
    <form className={`${formStyle.form}`}>
      <h2 className={`${formStyle.header}`}>
        Forgot <br />
        Your Password?
      </h2>
      {/* PASSWORD */}
      <div className={`${formStyle.inputField} mb-[3rem] max-md:mb-[2rem]`}>
        <label htmlFor="password" className={`${formStyle.label}`}>
          Email
          <span className={`${formStyle.icons} text-[#61A061] tick`}>
            &#10003;
          </span>
          <span className={`${formStyle.icons} text-red-700 x`}>x</span>
        </label>
        <input
          className={`${formStyle.input}`}
          type="email"
          name="email"
          id="email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          required
          placeholder="8+ Characters"
          onChange={handleChange}
        />
      </div>
      {/* BUTTONS */}
      <div className={`${formStyle.btnHolder}`}>
        <button className={`${formStyle.btn} bg-[#61A061] text-[#FFFFFF]`}>
          RESET PASSWORD
        </button>
      </div>
    </form>
  );
  return xml;
}
export default ForgotPassword;
