import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo_white.svg";
import { useEffect, useState } from "react";
import OnboardingFormOne from "./OnboardingFormOne";
import FinalOnboardingForm from "./FinalOnboardingForm";
import http from "../../../http";
import { useMainContext } from "../../../MainContext";
import { toast } from "react-toastify";
function Onboarding() {
  const navigate = useNavigate();
  const { token, user, setUser } = useMainContext();
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    console.log(token);
    if (user.is_onboarded === true) {
      navigate("/dashboard");
    }
  }, []);
  const [formDataOne, setFormDataOne] = useState({
    first_name: "",
    last_name: "",
    low_stock_threshold: "",
    livestock_type: "",
    feed_data: "",
  });
  const [fishFeed, setFishFeed] = useState({
    name: "Fish Feed",
    quantity: "",
  });
  const [poultryFeed, setPoultryFeed] = useState({
    name: "Poultry Feed",
    quantity: "",
  });
  const [fishCount, setFishCount] = useState({
    name: "Fish",
    quantity: "",
  });
  const [poultryCount, setPoultryCount] = useState({
    name: "Poultry",
    quantity: "",
  });
  function handleFishFeed(e) {
    const { value } = e.target;
    setFishFeed((prevState) => ({ ...prevState, quantity: value }));
  }
  function handleFishCount(e) {
    const { value } = e.target;
    setFishCount((prevState) => ({ ...prevState, quantity: value }));
  }
  function handlePoultryFeed(e) {
    const { value } = e.target;
    setPoultryFeed((prevState) => ({ ...prevState, quantity: value }));
  }
  function handlePoultryCount(e) {
    const { value } = e.target;
    setPoultryCount((prevState) => ({ ...prevState, quantity: value }));
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormDataOne((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleFirstSubmit(e) {
    e.preventDefault();
    setPageNo(2);
  }
  function handleFinalSubmit(e) {
    e.preventDefault();
    console.log(formDataOne.livestock_type);
    const data = {
      ...formDataOne,
      livestock_data:
        formDataOne.livestock_type === "Fish"
          ? [{ ...fishCount }]
          : formDataOne.livestock_type === "Poultry"
          ? [{ ...poultryCount }]
          : [{ ...poultryCount }, { ...fishCount }],
      feed_data:
        formDataOne.livestock_type === "Fish"
          ? [{ ...fishFeed }]
          : formDataOne.livestock_type === "Poultry"
          ? [{ ...poultryFeed }]
          : [{ ...poultryFeed }, { ...fishFeed }],
    };
    async function postToApi() {
      try {
        const apiData = await http.prototype.put(
          "https://farmtrack-backend.onrender.com/api/onboarding",
          token.access,
          "",
          data
        );
        setUser(false);
        toast.success("Onboarding Successful", {
          className: "poppins text-[1.8rem]",
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1300);
      } catch (error) {
        console.log(error);
      }
    }
    postToApi();
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
          formDataOne={formDataOne}
        />
        <FinalOnboardingForm
          pageNo={pageNo}
          formDataOne={formDataOne}
          setPageNo={setPageNo}
          handleFinalSubmit={handleFinalSubmit}
          handleFishFeed={handleFishFeed}
          handlePoultryFeed={handlePoultryFeed}
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
