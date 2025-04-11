import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../../http";
import { useMainContext } from "../../../MainContext";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
function LoginForm() {
  const navigate = useNavigate();
  const { token, setToken, cookie, setUser } = useMainContext();
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    async function submitForm() {
      try {
        const data = await http.prototype.post(
          "https://farmtrack-backend.onrender.com/api/login/",
          formData
        );
        if (data.data.access) {
          cookie.set("token", data.data, {
            expires: new Date(jwtDecode(data.data.access).exp * 1000),
          });
          setToken(data.data);
          setUser(undefined);
          toast.success("Login Successful", {
            className: "poppins text-[1.8rem]",
          });
          setTimeout(() => {
            return navigate("/dashboard");
          }, 1000);
        }
        if (data.data.detail) {
          const err = new Error();
          err.message = data.data.detail;
          err.name = Number(data.status) === 401 ? "401" : "500";
          throw err;
        }
      } catch (error) {
        toast.error("Invalid Login Credentials", {
          className: "poppins text-[1.8rem]",
        });
      }
    }
    submitForm();
  }
  const formstyle = {
    form: "flex flex-col w-full overflow-hidden pt-[clamp(1rem,13.0859375vh,13.4rem)] relative pl-[clamp(1rem,3.75vw,5.4rem)] bg-transparent z-10 max-md:pl-0 max-md:pt-[clamp(1rem,12.931034482758621vh,10.5rem)]",
    formHead:
      "text-black poppins text-[4rem] font-semibold mb-[clamp(1rem,8.984375vh,9.2rem)] max-md:text-black max-md:text-center max-md:poppins max-md:text-[2.1713rem] max-md:font-semibold max-md:mb-[clamp(1rem,6.527093596059113vh,5.3rem)] ",
    label:
      "text-[rgba(0,0,0,0.80)] poppins text-[1.5rem] font-medium max-md:text-black max-md:poppins max-md:text-[1.2rem] max-md:font-medium max-md:leading-[1.4rem]",
    input:
      "rounded-[0.4rem] border border-[rgba(0,0,0,0.40)] h-[5rem] mr-[1rem] outline-0 indent-[1.6rem] max-md:rounded-[0.5rem] max-md:border max-md:border-[0.2px] max-md:border-black/20 max-md:bg-white max-md:h-[3.2rem] max-md:self-stretch max-md:mr-0",
    inputField:
      "flex flex-col gap-[1rem] w-[55.1rem] max-w-[100%] max-md:w-full max-md:px-[1.6rem]",
    button:
      "rounded-[1rem] bg-[#61A061] shadow-[0_4px_19px_0_rgba(0,0,0,0.25)] h-[4.5rem] text-white poppins text-[1.4rem] font-medium mr-[1rem] max-md:h-[3.9rem] max-md:text-white max-md:text-center max-md:poppins max-md:text-[1.2rem] max-md:font-medium max-md:leading-[1.4rem] cursor-pointer",
    signup: "text-black poppins text-[1.6rem] font-medium underline",
  };
  const xml = (
    <form className={`${formstyle.form}`} onSubmit={handleSubmit}>
      <h2 className={`${formstyle.formHead}`}>Login</h2>
      {/* Email */}
      <div
        className={`${formstyle.inputField} mb-[clamp(1rem,2.83203125vh,2.9rem)] max-md:mb-[clamp(1rem,2.4630541871921183vh,2rem)]`}
      >
        <label htmlFor="email" className={`${formstyle.label}`}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          className={`${formstyle.input}`}
        />
      </div>
      {/* Password */}
      <div
        className={`${formstyle.inputField} mb-[clamp(1rem,7.2265625vh,7.4rem)] max-md:mb-[clamp(1rem,6.527093596059113vh,5.3rem)]`}
      >
        <label htmlFor="password" className={`${formstyle.label}`}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          className={`${formstyle.input}`}
        />
      </div>
      {/* Login */}
      <div
        className={`${formstyle.inputField} mb-[clamp(1rem,7.2265625vh,7.4rem)] max-md:mb-[clamp(1rem,6.527093596059113vh,5.3rem)]`}
      >
        <input
          type="submit"
          name="login"
          id="login"
          value="Login"
          className={`${formstyle.button}`}
        />
      </div>
      <p className="text-[rgba(0,0,0,0.80)] poppins text-[1.6rem] font-medium flex gap-[1.6rem w-[54.1rem] max-w-full text-center justify-center">
        Already have an account?
        <Link to="/signup" className={`${formstyle.signup}`}>
          Sign up
        </Link>
      </p>
    </form>
  );
  return xml;
}

export default LoginForm;
