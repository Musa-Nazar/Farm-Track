import DashboardContainer from "../Pages/Dashboard/DashboardContainer";

function DashboardLoaderUI({ state }) {
  const xml = (
    <div className="rounded-[1.5rem] dashboard-shaDow bg-[#fff] pt-[4rem] min-h-[21.5rem] ml-[3.7rem] mr-[6.8rem] flex max-md:mx-[2rem] justify-center items-center max-md:py-[2rem]">
      {state !== "error" && (
        <div className="flex gap-[.5rem] h-[calc(0.8*21.5rem)]">
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0s" }}
          ></div>
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0.1s" }}
          ></div>
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0.2s" }}
          ></div>
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0.3s" }}
          ></div>
          <div
            className="w-[1rem] bg-[#61a061] line-loader h-[80%] transition-[transform] duration-[0.5s] ease-linear"
            style={{ "--delay": "0.4s" }}
          ></div>
        </div>
      )}
    </div>
  );
  return xml;
}

export function ChartLoader() {
  const xml = (
    <DashboardContainer
      mt="mt-[3rem] !flex !items-center !p-0"
      cs="!block max-md: !pr-[2rem] h-[48rem]"
    >
      <div className="w-[7rem] aspect-square my-[1rem] mx-auto border-[#61A061] border-t-transparent border-[1rem] rounded-[50%] rotate flex justify-center items-center">
        <div className="w-[80%] aspect-square border-[#91bb91] border-t-transparent border-[0.2rem] rounded-[50%] rotate flex justify-center items-center Myspin-2"></div>
      </div>
    </DashboardContainer>
  );
  return xml;
}

export default DashboardLoaderUI;
