import { useState } from "react";

function NotificationContainer({ children }) {
  const [updated, setUpdated] = useState(false);
  const xml = (
    <div className="flex flex-col pl-[6.2rem] pr-[1.6rem] mx-[2.8rem] bg-[rgba(0,0,0,0.2)] rounded-[1.5rem] min-h-[89.4rem] mb-[4.7rem] max-md:px-[2rem]">
      {updated ? (
        children
      ) : (
        <h2 className="text-[gray] text-[3.2rem] sf-bold font-bold leading-normal text-center mt-[3rem]">
          Notification Feature will be available on the final release
        </h2>
      )}
    </div>
  );
  return xml;
}

export default NotificationContainer;
