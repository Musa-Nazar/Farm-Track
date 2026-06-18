import { Link, useNavigation } from "react-router-dom";
import { useState } from "react";
function FinalOnboardingForm({
  pageNo,
  formData,
  setPageNo,
  handleFishFeed,
  handlePoultryFeed,
  handleFinalSubmit,
  notSubmitted,
  poultryFeed,
  fishFeed,
  isTouched,
}) {
  const { state } = useNavigation();
  const styles = {
    input:
      "h-[5rem] self-stretch rounded-[0.4rem] border border-black/40 outline-0 w-full placeholder:text-[rgba(0,0,0,0.46)] poppins placeholder:text-[1.4rem] placeholder:font-medium indent-[0.8rem] max-md:rounded-[0.5rem] max-md:bg-white max-md:h-[3.2rem] max-md:mx-0",
  };

  const xml = (
    <>
      {pageNo === 2 && (
        <form
          className="w-full h-full flex flex-col bg-white overflow-hidden justify-center items-center px-[1rem] gap-[2rem] relative z-10 not-submitted"
          onSubmit={handleFinalSubmit}
        >
          <h2 className="text-black poppins text-[4rem] font-semibold leading-normal max-md:text-center max-md:text-[3rem] max-md:font-semibold max-md:leading-normal">
            Enter Available Feed
          </h2>
          <div className="flex w-[50.2rem] max-w-[100%] gap-[1rem] max-md:gap-[0.5rem]">
            {(formData.livestockType === "poultry" ||
              formData.livestockType === "both") && (
              <input
                type="number"
                name="poultryFeedCount"
                placeholder="Available Poultry Feed"
                className={`${styles.input} ${parseInt(poultryFeed.poultry) < 0 && isTouched.poultryFeed ? "!border-red-500" : ""}`}
                onChange={handlePoultryFeed}
              />
            )}
            {(formData.livestockType === "fish" ||
              formData.livestockType === "both") && (
              <input
                type="number"
                name="fishFeedCount"
                placeholder="Available Fish Feed"
                className={`${styles.input} ${parseInt(fishFeed.fish) < 0 && isTouched.fishFeed ? "!border-red-500" : ""}`}
                onChange={handleFishFeed}
              />
            )}
          </div>
          <button
            type="submit"
            className="w-[50rem] h-[4.6rem] rounded-[1.5rem] bg-[#61A061]  shadow-[0_4px_19px_0_rgba(0,0,0,0.25)] text-white poppins text-[1.4rem] font-medium max-md:w-full cursor-pointer hover:transform-[scale(0.99)] transition-[transform] duration-[0.5s] active:transform-[scale(0.95)]"
          >
            {state !== "submitting" ? (
              "Submit"
            ) : (
              <span className="w-full grid place-items-center">
                <span className="Myspin w-[1.8rem] aspect-square border-solid border-[2px] border-white border-t-transparent flex items-center justify-center text-center rounded-[50%]">
                  <span className="Myspin-2 w-[1.6rem] aspect-square border-solid border-[2px] border-green-400 border-t-transparent rounded-[50%]"></span>
                </span>
              </span>
            )}
          </button>
          <button
            type="button"
            className="w-[50rem] h-[4.6rem] rounded-[1.5rem] bg-[#FFFFFF] shadow-[0_4px_19px_0_rgba(0,0,0,0.25)] text-black poppins text-[1.4rem] font-medium max-md:w-full not-submitted cursor-pointer hover:transform-[scale(0.99)] transition-[transform] duration-[0.5s] active:transform-[scale(0.95)]"
            onClick={() => {
              setPageNo(1);
            }}
          >
            Go Back
          </button>
        </form>
      )}
    </>
  );
  return xml;
}

export default FinalOnboardingForm;
