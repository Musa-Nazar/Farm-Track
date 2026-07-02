import profileIcon from "../../assets/profile-icon-new.png";
import pencil from "../../assets/pencil-icon.png";
import { useMainContext } from "../../../MainContext";
import { useState } from "react";
import { toast } from "react-toastify";
import { redirect, useNavigation, useSubmit } from "react-router-dom";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import tickImg from "../../assets/tick.jpg";
import useForm from "../../hooks/useForm";
import { get, postWithToken, upload } from "../../../http";
import config from "../../../config";

const schema = {
  firstName: { pattern: /^[A-Za-z]{3,}$/ },
  lastName: { pattern: /^[A-Za-z]{3,}$/ },
  password: { pattern: /^[\w\d]{8,}$/ },
  farmName: { pattern: /^[\w\d']{5,}$/ },
  path: { pattern: /^[\w\d]{15,}$/ },
};

function SettingPageForm() {
  // USESUBMIT
  const submit = useSubmit();

  // GET PAGE STATE
  const { state } = useNavigation();

  // USE FORMS
  const { handleChange, formSchema: formData } = useForm(schema);

  // GET DATA FROM TOKEN
  const cookie = new Cookies();
  const token = cookie.get("token") ? cookie.get("token") : false;
  const userData = cookie.get("userData") ? cookie.get("userData") : false;
  const decodedToken = token ? jwtDecode(token) : false;
  const firstName = userData ? userData.name?.split(" ")?.[0] : "";
  const lastName = userData ? userData.name?.split(" ")?.[1] : "";

  // IMAGE DATA
  const [imageData, setImageData] = useState({ path: userData?.path });
  const [uploadState, setUploadState] = useState("");

  async function handleUpload(e) {
    e.preventDefault();
    // IMAGE VALIDATION
    const image = e?.target?.files?.[0];
    const acceptedFormats = ["png", "PNG", "jpg", "JPG", "JPEG", "jpeg"];
    const imageFormat = image?.type?.split("/")?.[1];
    if (!acceptedFormats.includes(imageFormat))
      return toast.error("This image format is not accepted", {
        className: "text-[1.8rem] poppins",
      });

    // SET IMAGE FOR UPLOAD
    const formData = new FormData();
    formData.set("image", image);

    // UPLOAD
    setUploadState("loading");
    const uploadedImage = await upload(
      `${config.apiDomain}/api/v1/settings/profilepicture`,
      token,
      formData,
    );

    // CHECK FOR ERROR
    if (uploadedImage.status >= 400) {
      toast.error(uploadedImage?.message || "Unable to upload image");
      setUploadState("error");
      return;
    }

    // IF FINE
    const path = uploadedImage?.data?.path;
    setUploadState("sucess");
    setImageData({ path });
  }

  // HANDLE SUBMISSION
  function handleSubmit(e) {
    // PREVENT DEFAULT
    e.preventDefault();

    // CHECK STATE
    if (state === "loading")
      return toast.error("Please wait profile is updating", {
        className: "text-[1.8rem] poppins",
      });

    // SUBMIT
    const formIsValid =
      formData.firstName.isValid &&
      formData.lastName.isValid &&
      formData.farmName.isValid &&
      formData.password.isValid;

    // CHECK FORM VALIDITY
    if (!formIsValid)
      return toast.error("Please enter required fields", {
        className: "text-[1.8rem] poppins",
      });

    // IF FORM IS VALID
    const submittedFormData = imageData?.path
      ? {
          firstName: formData.firstName.value,
          lastName: formData.lastName.value,
          password: formData.password.value,
          farmName: formData.farmName.value,
          path: imageData?.path,
        }
      : {
          firstName: formData.firstName.value,
          lastName: formData.lastName.value,
          password: formData.password.value,
          farmName: formData.farmName.value,
        };
    submit(submittedFormData, { method: "POST" });
  }

  let styles = {
    inputField:
      "flex w-[40.2rem] flex-col items-start start gap-[1.5rem] relative max-md:gap-[0.8rem]",
    label:
      "text-[rgba(0,0,0,0.8)] poppins text-[1.5rem] font-[500] leading-normal",
    input:
      "w-full h-[5rem] rounded-[0.4rem] border border-[rgba(0,0,0,0.4)] outline-0 text-[1.6rem] poppins indent-[3.2rem] placeholder:text-[#000] placeholder:text-[1.2rem] placeholder:font-[500] peer max-md:indent-[1.2rem]",
  };
  const xml = (
    <div className="pt-[2.9rem] flex flex-col items-start">
      <h2 className="text-[#000] poppins font-[600] text-[3.5rem] leading-normal max-md:text-center max-md:w-full max-md:text-[2.5rem]">
        Settings
      </h2>
      <section className="flex flex-col mb-[6.4rem] w-full max-md:items-center max-md:mb-[3.2rem]">
        <div className="flex gap-[4.3rem] max-md:gap-[2.3rem] mt-[3.1rem]  items-center max-md:flex-col max-md:w-full">
          <div className="flex w-[12.5rem] h-[12.5rem] p-[1.0417rem] items-center gap-[2.0833rem] bg-[#C6C6C6] rounded-[6.25rem]">
            {imageData?.path ? (
              <img
                src={imageData?.path}
                className="w-[10.4167rem] h-[10.4167rem] text-[white] text-[8rem] font-bolds set-fill bg-green-300 rounded-[50%] justify-center items-center flex"
              />
            ) : (
              <div className="w-[10.4167rem] h-[10.4167rem] text-[white] text-[8rem] font-bolds set-fill bg-green-300 rounded-[50%] justify-center items-center flex">
                {firstName?.[0]}
              </div>
            )}
          </div>
          <p className="text-[#000] poppins text-[4.1667rem] font-[600] leading-normal max-md:text-[2.1667rem]">
            {userData?.name || ""}
          </p>
        </div>
        {/* FILE INPUT */}
        <div className="mt-[1rem] flex gap-[1rem] items-center max-md:gap-[.5rem]">
          <label
            htmlFor="file"
            className="border border-[rgba(0,0,0,.1)] inline-block py-[0.4rem] px-[0.8rem] border-dotted text-[1.6rem] poppins rounded-[0.5rem] transition-[opacity,background] hover:opacity-[0.8] hover:bg-[rgba(255,255,255,0.9)] hover:border-black cursor-pointer "
          >
            {"Please upload a profile picture"}
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={handleUpload}
            accept=".png,.PNG,.jpg,.JPG,.JPEG,.jpeg"
          />
          {/* LOADER */}
          {uploadState === "loading" && (
            <div className="rotate w-[1.8rem] aspect-square rounded-[50%] border-green-300 border border-t-transparent"></div>
          )}
          {/* CONFIRMED SIGN */}
          {uploadState === "sucess" && (
            <img
              src={tickImg}
              alt={tickImg}
              className={"inline-block w-[1.8rem] aspect-square"}
            />
          )}
        </div>
      </section>
      <form onSubmit={handleSubmit} className="mt-[2.1rem] w-full">
        <div className="flex gap-[6.3rem] w-full max-md:gap-[.5rem]">
          <div className={`${styles.inputField} max-w-[50%]`}>
            <label htmlFor="firstName" className={`${styles.label}`}>
              FirstName
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              onChange={handleChange}
              className={`${styles.input}`}
              placeholder={firstName}
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
              name="lastName"
              required
              id="lastName"
              onChange={handleChange}
              className={`${styles.input}`}
              placeholder={lastName}
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
              name="farmName"
              id="farmName"
              required
              onChange={handleChange}
              className={`${styles.input}`}
              placeholder={userData?.farmName}
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
              value={""}
              placeholder={userData?.email ?? "FarmTrack@gmail.com"}
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
              onChange={handleChange}
              required
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
              {state === "loading" ? (
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

export async function action({ request, params }) {
  // GET TOKEN
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (!token) return redirect("/login");

  // GET FORMDATA
  const formData = await request.formData();
  const submittedFormData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    farmName: formData.get("farmName"),
    password: formData.get("password"),
  };

  if (formData.get("path")) submittedFormData.path = formData.get("path");

  // SUBMIT FORMDATA
  const updatedSetting = await postWithToken(
    `${config.apiDomain}/api/v1/settings/changesettings`,
    token,
    submittedFormData,
  );

  // CHECK FOR ERRORS
  if (updatedSetting?.status >= 400) {
    return toast.error(updatedSetting?.message ?? "Unable to update profile", {
      className: "text-[1.8rem] poppins",
    });
  }

  // IF SUCESSFUL
  cookies.set(
    "userData",
    JSON.stringify(updatedSetting?.data?.userData),
    new Date(jwtDecode(token).exp * 1000),
  );

  toast.success("Updated profile sucessfully", {
    className: "text-[1.8rem] poppins",
  });

  return location.reload();
}

export async function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const updateStatus = Boolean(searchParams.get("update"));

  // IF UPDATE IS TRUE
  // GET TOKEN
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (!token) return redirect("/login");

  if (updateStatus) {
    const updatedUser = await get(`${config.apiDomain}/`);
  }
}
