import ServicesPreviewCard from "./ServicesPreviewCard"

function ServicesPreview() {
  const xml =
  <div className="w-full px-[clamp(2rem,6.666666667vw,9.6rem)] pt-[13.6rem] pb-[7.7rem] bg-[#F4F4F4]">
    <div className="flex gap-[5.95rem] justify-between">
      <div className="flex w-[57.1rem] min-h-[46.8rem] shrink-0 bg-service mt-[1.6rem] bg-[#F4F4F4]">
      </div>
      <div className="flex flex-col items-start w-[50%]">
        <h2 className="text-[#000] text-[3.5rem] font-bold leading-[191.429%] sf-bold">OUR SERVICES</h2>
        <ul className="flex flex-col items-start gap-[5rem]">
          <ServicesPreviewCard 
          headText="Automated Inventory Tracking"
          text="Track feed, livestock, and supplies instantly with real-time monitoring, ensuring 
          optimal stock levels and reducing waste."
          />
          <ServicesPreviewCard 
          headText="Health & Mortality Monitoring"
          text="Track animal health in real time with smart sensors and automated alerts, reducing
          losses and ensuring better farm management."
          />
          <ServicesPreviewCard 
          headText="Market Access & Sales"
          text="Track animal health in real time with smart sensors and automated alerts, reducing losses and ensuring better farm management.."
          />
        </ul>
      </div>
    </div>
  </div>
  return (xml)
}

export default ServicesPreview
