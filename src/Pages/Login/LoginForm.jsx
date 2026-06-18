import { useEffect, useState } from "react";
import {
  data,
  Link,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useMainContext } from "../../../MainContext";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import useForm from "../../hooks/useForm";
import { post } from "../../../http";
import config from "../../../config";
import Cookies from "universal-cookie";
const loginSchema = {
  email: { pattern: /^[\w\d]{5,15}@[\w]{1,5}.com$/ },
  password: { pattern: /^[\w\d]{8}/ },
};
function LoginForm() {
  const { state } = useNavigation();
  const { handleChange, formSchema: formData } = useForm(loginSchema);
  const submit = useSubmit();
  function handleSubmit(e) {
    e.preventDefault();
    if (state === "submitting")
      return toast.success("Wait, while being logged in", {
        className: "poppins text-[1.8rem]",
      });
    const formIsValid = formData.email.isValid && formData.password.isValid;
    if (!formIsValid)
      return toast.error("Please fill the form properly", {
        className: "poppins text-[1.8rem]",
      });

    const loginBody = {
      email: formData.email.value,
      password: formData.password.value,
    };
    submit(loginBody, { method: "post" });
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
        className={`${formstyle.inputField} mb-[clamp(1rem,2.83203125vh,2.9rem)] max-md:mb-[clamp(1rem,2.4630541871921183vh,2rem)] relative`}
      >
        <label htmlFor="email" className={`${formstyle.label}`}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          className={`${formstyle.input} ${!formData.email.isValid && formData.email.isTouched ? "border-red-500" : ""}`}
        />
        {!formData.email.isValid && formData.email.isTouched && (
          <p className="absolute bottom-0 translate-y-[100%] text-red-600 text-[1rem] max-md:text-[0.7rem]">
            This is not a valid email
          </p>
        )}
      </div>
      {/* Password */}
      <div
        className={`${formstyle.inputField} mb-[clamp(1rem,7.2265625vh,7.4rem)] max-md:mb-[clamp(1rem,6.527093596059113vh,5.3rem)] relative`}
      >
        <label htmlFor="password" className={`${formstyle.label}`}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          className={`${formstyle.input} ${!formData.password.isValid && formData.password.isTouched ? "border-red-500" : ""}`}
        />
        {!formData.password.isValid && formData.password.isTouched && (
          <p className="absolute bottom-0 translate-y-[100%] text-red-600 text-[1rem] max-md:text-[0.7rem]">
            password should be atleast 8 Characters
          </p>
        )}
      </div>
      {/* Login */}
      <div
        className={`${formstyle.inputField} mb-[clamp(1rem,7.2265625vh,7.4rem)] max-md:mb-[clamp(1rem,6.527093596059113vh,5.3rem)] active:scale-[0.8]  transition-all`}
      >
        <button
          type="submit"
          name="login"
          id="login"
          className={`${formstyle.button}`}
        >
          {state === "submitting" ? (
            <span className="w-full grid place-items-center">
              <span className="Myspin w-[1.8rem] aspect-square border-solid border-[2px] border-white border-t-transparent flex items-center justify-center text-center rounded-[50%]">
                <span className="Myspin-2 w-[1.6rem] aspect-square border-solid border-[2px] border-green-400 border-t-transparent rounded-[50%]"></span>
              </span>
            </span>
          ) : (
            "Login"
          )}
        </button>
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

export async function action({ request, params }) {
  const formData = await request.formData();
  const loginBody = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const user = await post(`${config.apiDomain}/api/v1/auth/login`, loginBody);

  if (user?.status >= 400)
    return toast.error(user?.message ?? "Fail to login user", {
      className: "poppins text-[1.5rem]",
    });
  // SUCESS
  toast.success(user?.data?.message ?? "Fail to login user", {
    className: "poppins text-[1.5rem]",
  });
  // ONBOARDED === false
  if (user?.data?.onBoarded === false) {
    localStorage.setItem("email", loginBody.email);
    return redirect("/onboarding");
  }
  // SET COOKIE
  const cookie = new Cookies();
  cookie.set("token", user?.data?.token, {
    expires: new Date(jwtDecode(user?.data?.token).exp * 1000),
  });
  cookie.set("userData", JSON.stringify(user?.data?.userData), {
    expires: new Date(jwtDecode(user?.data?.token).exp * 1000),
  });
  localStorage.removeItem("email");
  // NAVIGATE TO DASHBOARD
  return redirect("/dashboard");
}
