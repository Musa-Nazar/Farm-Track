import {
  Link,
  redirect,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import logo from "../../assets/logo_white.svg";
import { useEffect, useState } from "react";
import OnboardingFormOne from "./OnboardingFormOne";
import FinalOnboardingForm from "./FinalOnboardingForm";
import { useMainContext } from "../../../MainContext";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { post } from "../../../http";
import config from "../../../config";
import { jwtDecode } from "jwt-decode";

const OnboardingFormValidators = {
  firstName: /^[A-Za-z]{3,}/,
  lastName: /^[A-Za-z]{3,}/,
};

function Onboarding() {
  // SUBMIT
  const submit = useSubmit();
  // FORM VARIABLE
  const finalLiveStockCount = {};
  const finalFeedCount = {};
  // CONTEXT
  const { state } = useNavigation();
  const [pageNo, setPageNo] = useState(1);
  // STATES
  const [notSubmitted, setNotSubmitted] = useState(true);
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    lowStockThreshold: "",
    livestockType: "",
  });
  const [isTouched, setIsTouced] = useState({
    firstName: false,
    lastName: false,
    lowStockThreshold: false,
    livestockType: false,
    birdCount: false,
    fishCount: false,
    fishFeed: false,
    poultryFeed: false,
  });
  const [fishFeed, setFishFeed] = useState({
    fish: -1,
  });
  const [poultryFeed, setPoultryFeed] = useState({
    poultry: -1,
  });
  const [fishCount, setFishCount] = useState({
    fish: -1,
  });
  const [poultryCount, setPoultryCount] = useState({
    poultry: -1,
  });
  const [liveStockCount, setLiveStockCount] = useState({});
  // EVENT FUNCTIONS
  function handleFishFeed(e) {
    const { value } = e.target;
    setIsTouced((prevState) => ({ ...prevState, fishFeed: true }));
    setFishFeed({ fish: value });
  }

  function handleFishCount(e) {
    const { name, value } = e.target;
    setIsTouced((prevState) => ({ ...prevState, [name]: true }));

    setFishCount({ fish: value });
  }

  function handlePoultryFeed(e) {
    const { value } = e.target;
    setIsTouced((prevState) => ({ ...prevState, poultryFeed: true }));
    setPoultryFeed({ poultry: value });
  }

  function handlePoultryCount(e) {
    const { name, value } = e.target;
    setIsTouced((prevState) => ({ ...prevState, [name]: true }));
    setPoultryCount({ poultry: value });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setformData((prevState) => ({ ...prevState, [name]: value }));
    setIsTouced((prevState) => ({ ...prevState, [name]: true }));
  }

  function handleFirstSubmit(e) {
    e.preventDefault();
    // VALIDATE THAT FORM
    const firstNameIsValid = OnboardingFormValidators.firstName.test(
      formData.firstName,
    );
    const lastNameIsValid = OnboardingFormValidators.lastName.test(
      formData.lastName,
    );
    const lowStockThresholdIsValid = formData.lowStockThreshold > 0;
    const liveStockCountIsValid =
      formData.livestockType === "both"
        ? parseInt(fishCount.fish) >= 0 && parseInt(poultryCount.poultry) >= 0
        : formData.livestockType === "poultry"
          ? parseInt(poultryCount.poultry) >= 0
          : parseInt(fishCount.fish) >= 0;
    const formIsValid =
      firstNameIsValid &&
      lastNameIsValid &&
      lowStockThresholdIsValid &&
      liveStockCountIsValid;
    if (!formIsValid)
      return toast.error("Please fill the form appropiately", {
        className: "text-[1.5rem] poppins",
      });
    // LIVESTOCK COUNT
    if (formData.livestockType === "fish")
      finalLiveStockCount.fish = parseInt(fishCount.fish);
    if (formData.livestockType === "poultry")
      finalLiveStockCount.poultry = parseInt(poultryCount.poultry);
    if (formData.livestockType === "both") {
      finalLiveStockCount.poultry = parseInt(poultryCount.poultry);
      finalLiveStockCount.fish = parseInt(fishCount.fish);
    }
    setLiveStockCount(finalLiveStockCount);
    setPageNo(2);
  }
  function handleFinalSubmit(e) {
    e.preventDefault();
    if (state === "submitting")
      return toast.sucess("Please wait, while being onboarded", {
        className: "poppins text-[1.8rem]",
      });
    // VALIDATE FORM
    const formIsValid =
      formData.livestockType === "both"
        ? parseInt(fishFeed.fish) >= 0 && parseInt(poultryFeed.poultry) >= 0
        : formData.livestockType === "poultry"
          ? parseInt(poultryFeed.poultry) >= 0
          : parseInt(fishFeed.fish) >= 0;
    if (!formIsValid)
      return toast.error("Please fill the form appropiately", {
        className: "text-[1.5rem] poppins",
      });
    // FEED COUNT
    if (formData.livestockType === "fish")
      finalFeedCount.fish = parseInt(fishFeed.fish);
    if (formData.livestockType === "poultry")
      finalFeedCount.poultry = parseInt(poultryFeed.poultry);
    if (formData.livestockType === "both") {
      finalFeedCount.poultry = parseInt(poultryFeed.poultry);
      finalFeedCount.fish = parseInt(fishFeed.fish);
    }
    // SUBMIT
    const submittedFormData = {
      ...formData,
      initialFeedCount: JSON.stringify(finalFeedCount),
      initialLivestockCount: JSON.stringify(liveStockCount),
    };
    submit(submittedFormData, { method: "post" });
  }

  const xml = (
    <div className="flex w-full h-dvh max-h-vh bg-gradient-to-b from-[#C3FFD2] via-[#61A061] to-black hide-scrollbar overflow-hidden bgl">
      <div className="w-full bg-white mx-[clamp(2rem,9.1vw,13rem)] mt-[clamp(1rem,6.8vh,6.9rem)] mb-[clamp(1rem,5.5vh,5.6rem)] flex max-xl:mx-[2rem] rmm text-[1.6rem] signup max-md:mx-0 max-md:my-0 relative max-md:bg-transparent">
        <div className="w-[47.2rem] h-full flex-none bg-[url('./assets/signupimage.png')] bg-center bg-cover bg-no-repeat max-xl:w-[50%] max-md:hidden">
          <Link to="/">
            <div className="flex items-center">
              <img
                src={logo}
                alt=""
                className="w-[8.8rem] h-[5.974rem] block mt-[0.6rem]"
              />
              <h2 className="text-white poppins text-[1.5rem] font-semibold leading-normal">
                FARM TRACK
              </h2>
            </div>
          </Link>
        </div>
        {/* FORM */}
        <OnboardingFormOne
          pageNo={pageNo}
          setPageNo={setPageNo}
          handleChange={handleChange}
          handleFishCount={handleFishCount}
          handlePoultryCount={handlePoultryCount}
          handleFirstSubmit={handleFirstSubmit}
          formData={formData}
          isTouched={isTouched}
          fishCount={fishCount}
          poultryCount={poultryCount}
        />
        <FinalOnboardingForm
          pageNo={pageNo}
          formData={formData}
          setPageNo={setPageNo}
          handleFinalSubmit={handleFinalSubmit}
          handleFishFeed={handleFishFeed}
          handlePoultryFeed={handlePoultryFeed}
          notSubmitted={notSubmitted}
          fishFeed={fishFeed}
          poultryFeed={poultryFeed}
          isTouched={isTouched}
        />
        <svg
          className="absolute z-0 w-full hidden max-md:block svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 375 646"
          fill="none"
        >
          <path
            d="M190.714 22.2909C96.5238 54.2761 23.1508 48.612 -1.7619 41.7818L-12 649H375V8.29739C352.817 -0.365254 284.905 -9.69426 190.714 22.2909Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
  return xml;
}

export default Onboarding;

export async function action({ request, params }) {
  const cookie = new Cookies();
  const formData = await request.formData();
  const submittedFormData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    livestockType: formData.get("livestockType"),
    lowStockThreshold: formData.get("lowStockThreshold"),
    initialLivestockCount: JSON.parse(formData.get("initialLivestockCount")),
    initialFeedCount: JSON.parse(formData.get("initialFeedCount")),
    email: localStorage.getItem("email"),
  };

  const user = await post(
    `${config.apiDomain}/api/v1/auth/onboarding`,
    submittedFormData,
  );
  if (user?.status > 400)
    return toast.error(user?.message ?? "Failed to onboard user", {
      className: "text-[1.5rem] poppins",
    });
  // SUCESS
  toast.success(user?.data?.message, { className: "text-[1.5rem] poppins" });
  localStorage.removeItem("email");
  const token = user?.data?.token;
  cookie.set("token", token, { expires: new Date(Date.now() + 3600000) });
  cookie.set("userData", JSON.stringify(user?.data?.userData), {
    expires: new Date(jwtDecode(user?.data?.token).exp * 1000),
  });
  return redirect("/dashboard");
}
