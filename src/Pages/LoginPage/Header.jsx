import logo_white from "../../assets/logo_white.svg";
import Chickens from "../../assets/Chickens.png";

const Header = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="flex relative top-[22px]">
            <img
              src={logo_white}
              alt=""
              className="h-[3.75rem] w-[5.5rem] z-10"
            />

            <h1 className="z-10 text-white text-[15px] relative top-[6px]">
              FARM TRACK
            </h1>
          </div>
          <div className="h-[898px] w-[472px]">
            <img
              src={Chickens}
              alt=""
              className="h-[898px] mt-[-36px] w-[472px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
