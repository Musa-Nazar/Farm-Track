function FormTwo({ pageNo }) {
  const form2styles = {
    label:
      "text-black poppins text-[1.5rem] font-medium leading-normal max-md:poppins max-md:text-[1.2rem] max-md:font-medium max-md:leading-[1.4rem]",
    input:
      "h-[5rem] self-stretch rounded-[0.4rem] border border-black/40 outline-0 w-full placeholder:text-[rgba(0,0,0,0.46)] poppins placeholder:text-[1.4rem] placeholder:font-medium indent-[0.8rem] max-md:rounded-[0.5rem] max-md:bg-white max-md:h-[3.2rem] max-md:mx-0",
    inputField:
      "flex flex-col w-[25.1rem] max-w-[50%] gap-[1rem] max-md:gap-[0.5rem] max-md:w-[50%]",
    radioLabel: "text-black poppins text-[1.7rem] font-medium leading-normal",
    radio:
      "rounded-[5rem] bg-[#D9D9D9] relative w-[1.8rem] h-[1.8rem] border-0 appearance-none group before:w-[1.3rem] before:absolute before:content-[''] before:h-[1.3rem] before:bg-[green] before:rounded-full before:top-[50%] before:left-[50%] before:translate-[-50%] before:hidden radio max-md:rounded-[0] max-md:before:rounded-[0] ",
    radioHolder: "flex items-center gap-[1.3rem]",
  };
  const xml = (
    <form
      id="form_2"
      className={`w-full overflow-hidden pl-[clamp(1rem,2.430555555555556vw,3.5rem)] pt-[clamp(1rem,4.751608751608751vh,6.7rem)] relative z-[1] max-md:px-[1.6rem] max-md:pt-[clamp(1rem,11.45320197044335vh,9.5rem)] ${
        pageNo === 2 ? "block" : "hidden"
      }`}
    >
      <h2 className="text-black poppins text-[4rem] font-semibold leading-normal max-md:text-center max-md:text-[2.1713rem] max-md:font-semibold max-md:leading-normal">
        Farm Track
      </h2>
      <h3 className="text-black/80 poppins text-[1.6rem] font-medium leading-normal mb-[clamp(1rem,7.12890625vh,7.3rem)] max-md:text-center max-md:mb-[clamp(1rem,1.9334975369458127vh,1.57rem)] max-md:text-[1.2407rem]">
        Fill in the form
      </h3>
      {/* NAME CONTAINER */}
      <div className="flex gap-[clamp(1rem,3.5vw,5rem)] mbb max-md:!mb-[2rem] max-md:w-full">
        {/* FIRSTNAME */}
        <div
          className={`${form2styles.inputField} mb-[clamp(1rem,5.859375vh,6rem)] max-md:mb-[0rem]`}
        >
          <label htmlFor="firstname" className={`${form2styles.label}`}>
            First name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
            placeholder=""
            className={`${form2styles.input}`}
          />
        </div>
        {/* LASTNAME */}
        <div className={`${form2styles.inputField}`}>
          <label htmlFor="lastname" className={`${form2styles.label}`}>
            Last name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder=""
            required
            className={`${form2styles.input}`}
          />
        </div>
      </div>
      {/* SELECTION */}
      <div className="flex gap-[clamp(1rem,4.861111111111112vw,7rem)] mb-[clamp(0.5rem,2.1484375vh,2.2rem)]  mbb max-md:!mb-[2rem]">
        {/* FISH RADIO */}
        <div className={`${form2styles.radioHolder}`}>
          <input
            type="radio"
            name="inventory"
            id="fish"
            required
            value="fish"
            className={`${form2styles.radio}`}
          />
          <label htmlFor="Fish" className={`${form2styles.radioLabel}`}>
            Fish
          </label>
        </div>
        {/* POULTRY RADIO */}
        <div className={`${form2styles.radioHolder}`}>
          <input
            type="radio"
            name="inventory"
            id="poultry"
            required
            value="poultry"
            className={`${form2styles.radio}`}
          />
          <label htmlFor="poultry" className={`${form2styles.radioLabel}`}>
            Poultry
          </label>
        </div>
        {/* FISH RADIO */}
        <div className={`${form2styles.radioHolder}`}>
          <input
            type="radio"
            name="inventory"
            id="both"
            required
            value="both"
            className={`${form2styles.radio}`}
          />
          <label htmlFor="both" className={`${form2styles.radioLabel}`}>
            Both
          </label>
        </div>
      </div>
      {/* INVENTORY COUNT */}
      <div className="flex gap-[clamp(1rem,3.5vw,5rem)] mb-[clamp(1rem,4.8828125vh,5rem)] mbb max-md:mb-[2rem]">
        {/* INI FISH COUNT */}
        <div className={`${form2styles.inputField}`}>
          <input
            type="number"
            name="fishcount"
            id="fishcount"
            placeholder="Initial Fish count"
            className={`${form2styles.input}`}
          />
        </div>
        {/* INITIAL BIRD COUNT */}
        <div className={`${form2styles.inputField}`}>
          <input
            type="number"
            name="birdcount"
            id="birdcount"
            placeholder="Initial Bird count"
            className={`${form2styles.input}`}
          />
        </div>
      </div>
      {/* NOTIFICATION PANEL */}
      <div className="flex gap-[clamp(1rem,3.5vw,5rem)] mb-[clamp(1rem,6.73828125vh,13.8rem)] max-md:mb-[3rem]">
        {/* LOWSTOCK */}
        <div className={`${form2styles.inputField}`}>
          <label htmlFor="lowstock" className={`${form2styles.label}`}>
            Low stock alert level
          </label>
          <input
            type="number"
            name="lowstock"
            id="lowstock"
            placeholder=""
            className={`${form2styles.input}`}
          />
        </div>
        {/* EMAIL REPORT */}
        <div className={`${form2styles.inputField} !gap-[1.5rem]`}>
          <label htmlFor="email_reminder" className={`${form2styles.label}`}>
            Email monthly reported
          </label>
          <div className="flex gap-[clamp(1rem,6.597222222222222vw,9.5rem)]">
            <div className={`${form2styles.radioHolder}`}>
              <input
                type="radio"
                name="email_radio"
                id="yes"
                value="Yes"
                className={`${form2styles.radio}`}
              />
              <label htmlFor="email_yes">Yes</label>
            </div>
            <div className={`${form2styles.radioHolder}`}>
              <input
                type="radio"
                name="email_radio"
                id="no"
                value="No"
                className={`${form2styles.radio}`}
              />
              <label htmlFor="email_no">No</label>
            </div>
          </div>
        </div>
      </div>
      {/* SUBMIT */}
      <div className="flex w-[54.1rem] max-w-[100%]">
        <input
          type="submit"
          value="Submit"
          className="w-full h-[4.6rem] rounded-[1.5rem] bg-[#61A061] shadow-[0_4px_19px_0_rgba(0,0,0,0.25)] text-white poppins text-[1.4rem] font-medium mr-[1rem]"
        />
      </div>
    </form>
  );
  return xml;
}

export default FormTwo;
