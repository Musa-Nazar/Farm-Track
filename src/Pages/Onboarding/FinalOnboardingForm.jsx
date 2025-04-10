import { Link } from "react-router-dom";
function FinalOnboardingForm({
  pageNo,
  formDataOne,
  setPageNo,
  handleFishFeed,
  handlePoultryFeed,
  handleFinalSubmit,
}) {
  const styles = {
    input:
      "h-[5rem] self-stretch rounded-[0.4rem] border border-black/40 outline-0 w-full placeholder:text-[rgba(0,0,0,0.46)] poppins placeholder:text-[1.4rem] placeholder:font-medium indent-[0.8rem] max-md:rounded-[0.5rem] max-md:bg-white max-md:h-[3.2rem] max-md:mx-0",
  };
  const xml = (
    <>
      {pageNo === 2 && (
        <form
          className="w-full h-full flex flex-col bg-white overflow-hidden justify-center items-center px-[1rem] gap-[2rem] relative z-10"
          onSubmit={handleFinalSubmit}
        >
          <h2 className="text-black poppins text-[4rem] font-semibold leading-normal max-md:text-center max-md:text-[3rem] max-md:font-semibold max-md:leading-normal">
            Enter Available Feed
          </h2>
          <div className="flex w-[50.2rem] max-w-[100%] gap-[1rem] max-md:gap-[0.5rem]">
            {(formDataOne.livestock_type === "Poultry" ||
              formDataOne.livestock_type === "Both") && (
              <input
                type="number"
                name="poultry_feed_count"
                placeholder="Available Poultry Feed"
                className={`${styles.input}`}
                onChange={handlePoultryFeed}
              />
            )}
            {(formDataOne.livestock_type === "Fish" ||
              formDataOne.livestock_type === "Both") && (
              <input
                type="number"
                name="fish_feed_count"
                placeholder="Available Fish Feed"
                className={`${styles.input}`}
                onChange={handleFishFeed}
              />
            )}
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-[50rem] h-[4.6rem] rounded-[1.5rem] bg-[#61A061] shadow-[0_4px_19px_0_rgba(0,0,0,0.25)] text-white poppins text-[1.4rem] font-medium max-md:w-full"
          />
          <button
            type="button"
            className="w-[50rem] h-[4.6rem] rounded-[1.5rem] bg-[#FFFFFF] shadow-[0_4px_19px_0_rgba(0,0,0,0.25)] text-black poppins text-[1.4rem] font-medium mr-[1rem] max-md:w-full"
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
