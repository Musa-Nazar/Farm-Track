import React from 'react'
import FeatureCard from './FeatureCard'

function FeaturePreview() {
  const xml = 
  <div className='w-full px-[clamp(2rem,6.666666667vw,9.6rem)] pt-[5.8rem] bg-[#F4F4F4]'>
    <h2 className="text-[#1B1B1B] text-[4.0886rem] sp-bold font-bold tracking-[0.0818rem] leading-[207.895%] flex-wrap">SOME OF OUR AMAZING FEATURES</h2>
    <div className="flex w-full gap-[1.6rem] justify-between">
      <FeatureCard 
        icon="./src/assets/Card-icon-1.svg"
        cardHeading="Automated Tracking"
        cardText={<>To monitor poultry and fish health,<br/>
                  inventory, and environment in real time.</>}
        spacing={"pl-[1.3rem]"}
      />
      <FeatureCard 
        icon="./src/assets/Card-icon-2.svg"
        cardHeading="Low stock alerts"
        cardText={<>Sends reminders for low stock,<br/>
                  vaccinations, or irregularities.</>}
        spacing={"pl-[2.1rem]"}
      />
      <FeatureCard 
        icon="./src/assets/Card-icon-3.svg"
        cardHeading={<>Data Backup and <br />
                  Security</>}
        cardText={<> Protects critical farm data from loss or<br/>
                  damage.</>}
        spacing={"pl-[1.4rem]"}
        leading={"leading-[133.333%]"}
      />
      <FeatureCard 
        icon="./src/assets/Card-icon-4.svg"
        cardHeading="Sales and expenses"
        cardText={<>Tracks sales, purchases, and deliveries<br/>
                  efficiently.</>}
        spacing={"pl-[1rem]"}
      />
    </div>
  </div>
  return (xml)
  
}

export default FeaturePreview