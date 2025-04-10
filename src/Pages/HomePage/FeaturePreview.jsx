import React from "react";
import FeatureCard from "./FeatureCard";
import icon1 from "../../assets/Card-icon-1.svg";
import icon2 from "../../assets/Card-icon-2.svg";
import icon3 from "../../assets/Card-icon-3.svg";
import icon4 from "../../assets/Card-icon-4.svg";

function FeaturePreview() {
  const xml = (
    <div
      className="w-full px-[clamp(2rem,6.666666667vw,9.6rem)] pt-[5.8rem] bg-[#F4F4F4] max-md:text-center max-md:pt-[2.6rem] max-md:px-[1.6rem]"
      id="feature"
    >
      <h2 className="text-[#1B1B1B] font-[SF Pro Display] text-[3rem] font-bold leading-[283%] tracking-[0.06rem] mb-[4.1rem] max-md:text-[1.6rem] max-md:tracking-[0.032rem] max-md:leading-[146.809%] max-md:mb-[5.65rem]">
        SOME OF OUR AMAZING FEATURES
      </h2>
      <div className="flex w-full gap-[clamp(1rem,1.81%,2.6rem)] justify-between max-md:flex-col max-md:items-center max-md:gap-[5.657rem]">
        <FeatureCard
          icon={icon1}
          cardHeading="Automated Tracking"
          cardText={
            <>
              To monitor poultry and fish health,{<br />} inventory, and
              environment in real time.
            </>
          }
        />
        <FeatureCard
          icon={icon2}
          cardHeading="Low stock alerts"
          cardText={
            <>
              Sends reminders for low {<br />} stock, vaccinations, or
              irregularities.
            </>
          }
        />
        <FeatureCard
          icon={icon3}
          cardHeading="Data Backup"
          cardText={
            <> Protects critical farm data {<br />} from loss or damage.</>
          }
        />
        <FeatureCard
          icon={icon4}
          cardHeading="Sales and expenses"
          cardText={
            <>
              Tracks sales,
              <br />
              purchases, and deliveries efficiently.
            </>
          }
        />
      </div>
    </div>
  );
  return xml;
}

export default FeaturePreview;
