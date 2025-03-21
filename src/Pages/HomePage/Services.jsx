import ServicesCard from "./ServicesCard";
import image_1 from "../../assets/Service-1.png";
import image_2 from "../../assets/Service-2.png";
import image_3 from "../../assets/Service-3.png";
function Services() {
  const xml = (
    <>
      <div
        className="flex w-full h-[255px] max-md:px-[0] max-md:py-[0] justify-center items-center gap-[10px] services-overlay max-md:h-[6.6064rem]"
        id="services"
      >
        <h2 className="text-white text-[30px] font-bold leading-[67px] tracking-[2.4px] max-md:text-[1.6rem] text-center">
          OUR SERVICES
        </h2>
      </div>
      <div className="flex flex-col bg-[#F4F4F4] pt-[6.9rem] gap-[14.2rem] pb-[15.2rem] max-md:gap-0">
        <ServicesCard
          image={image_1}
          head="Inventory Tracking"
          text="Inventory tracking is essential for managing stock levels, reducing waste, and ensuring smooth farm operations. It involves monitoring livestock, feed, medication, and equipment to prevent shortages and inefficiencies. Tracking livestock inventory helps farmers record poultry and fish numbers, age, and health status. This allows for better planning of feeding, harvesting, and sales while also detecting mortality trends early. Similarly, feed inventory tracking ensures that there is always an adequate supply, preventing spoilage and unexpected shortages. "
        />
        <ServicesCard
          image={image_2}
          head="Health Monitoring"
          text="Health monitoring tracks the growth, disease status, and overall well-being of poultry and fish. It records weight, mortality rates, and symptoms to detect health issues early. Automated alerts help identify diseases before they spread. Medication tracking ensures timely vaccinations and treatments. Environmental factors like water quality and temperature are monitored for optimal health. Digital systems improve accuracy, reducing losses and boosting productivity."
        />
        <ServicesCard
          image={image_3}
          head="Market Access"
          text="Market access enables farmers to sell poultry, fish, and farm products through digital platforms, marketplaces, and direct buyers. Using price tracking tools, farmers can adjust pricing based on market demand. A sales management system helps track orders, invoices, and deliveries efficiently. Automated reports provide valuable insights into customer preferences and sales trends. Expanding sales channels to wholesale markets, restaurants, and online stores increases profitability. Marketing strategies, such as promotions and branding, help attract more buyers"
        />
      </div>
    </>
  );
  return xml;
}

export default Services;
