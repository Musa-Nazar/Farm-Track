import arrow from "../../assets/arrow-down.svg";
function FAQCard({ text }) {
  const xml = (
    <div className="flex justify-between w-full min-h-[6.5rem] items-center bg-[#fff]">
      <div className="text-[#000] text-[2rem] leading-[335%] pl-[4.3rem]">
        {text}
      </div>
    </div>
  );
  return xml;
}

export default FAQCard;
