import { useMainContext } from "../../../MainContext";

function AnalyticsCard({ head, cs, poultry, fish, unit }) {
  const { user } = useMainContext();
  const xml = (
    <div
      className={`w-[clamp(2rem,23vw,32rem)] max-md:w-full min-h-[17rem] rounded-[1.5rem] bg-[#F7FBF7] shadow-[0px_4px_25px_10px_rgba(0,0,0,0.10)] pt-[1.4rem] gap-[2.4rem] ${cs}`}
    >
      <h3 className="text-black text-center font-poppins text-[2rem] font-[500] leading-[100%]">
        {head}
      </h3>
      <div className="flex mt-[2.4rem] justify-center">
        {(user.livestock_type === "Poultry" ||
          user.livestock_type === "Both") && (
          <div
            className={`flex ${
              user.livestock_type === "Poultry" ? "" : "mr-auto"
            } flex-col`}
          >
            <h5 className="text-black/60 text-center text-[1.6rem] font-medium leading-[100%] tracking-[0.064rem] mb-[1rem]">
              Poultry
            </h5>
            <h2 className="text-black text-center poppins text-[4rem] font-medium leading-[100%] mb-[1.5rem]">
              {poultry}
            </h2>
            <h5 className="text-black text-center font-[SF Pro Display] text-[1.6rem] font-normal leading-[100%]">
              {unit}
            </h5>
          </div>
        )}

        {(user.livestock_type === "Fish" || user.livestock_type === "Both") && (
          <div className="flex flex-col">
            <h5 className="text-black/60 text-center text-[1.6rem] font-medium leading-[100%] tracking-[0.064rem] mb-[1rem]">
              Fish
            </h5>
            <h2 className="text-black text-center poppins text-[4rem] font-medium leading-[100%] mb-[1.5rem]">
              {fish}
            </h2>
            <h5 className="text-black text-center font-[SF Pro Display] text-[1.6rem] font-normal leading-[100%]">
              {unit}
            </h5>
          </div>
        )}
      </div>
    </div>
  );
  return xml;
}

export default AnalyticsCard;
