import profileIcon from "../../assets/profile-icon-new.png";
import pencil from "../../assets/pencil-icon.png";
function SettingPageForm() {
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
          <img
            src={profileIcon}
            alt="error"
            className="w-[10.4167rem] h-[10.4167rem] set-fill"
          />
        </div>
        <p className="text-[#000] poppins text-[4.1667rem] font-[600] leading-normal">
          Dew Tee
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="mt-[2.1rem] w-full">
        <div className="flex gap-[6.3rem] w-full max-md:gap-[2rem]">
          <div className={`${styles.inputField} max-w-[50%]`}>
            <label htmlFor="firstName" className={`${styles.label}`}>
              FirstName
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={`${styles.input}`}
              placeholder="Dew"
            />
            <label
              htmlFor="firstName"
              className="peer-focus:hidden absolute right-[2.5rem] bottom-[1.3rem]"
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
              id="lastName"
              className={`${styles.input}`}
              placeholder="Tee"
            />
            <label
              htmlFor="lastName"
              className="peer-focus:hidden absolute right-[2.5rem] bottom-[1.3rem]"
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
              className={`${styles.input}`}
              placeholder="FarmTrack"
            />
            <label
              htmlFor="farmName"
              className="peer-focus:hidden absolute right-[2.5rem] bottom-[1.3rem]"
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
              className={`${styles.input}`}
              placeholder="FarmTrack@gmail.com"
            />
            <label
              htmlFor="email"
              className="peer-focus:hidden absolute right-[2.5rem] bottom-[1.3rem]"
            >
              <img src={pencil} alt="" />
            </label>
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
              className={`${styles.input}`}
              placeholder="xxxxxxxx"
            />
            <label
              htmlFor="password"
              className="peer-focus:hidden absolute right-[2.5rem] bottom-[1.3rem]"
            >
              <img src={pencil} alt="" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
  return xml;
}

export default SettingPageForm;
