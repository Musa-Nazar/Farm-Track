import NotificationBox from "./NotificationBox";

function NotificationContent() {
  const xml = (
    <div className="w-full mt-[3.2rem]">
      <h2 className="text-[#000] text-[3.2rem] sf-bold font-bold leading-normal">
        Notifications(5)
      </h2>
      <div className="flex flex-col gap-[2.2rem] mt-[3.6rem]">
        <NotificationBox
          opacity={false}
          main="Bird Mortality Detected"
          rightText="Just Now"
        />
        <NotificationBox
          opacity={true}
          main="Water Quality Warning"
          rightText="30 Minute ago"
        />
        <NotificationBox
          opacity={true}
          main="Bird Mortality Detected"
          rightText="5hrs ago"
        />
        <NotificationBox
          opacity={true}
          main="Subscription Renewal Due"
          rightText="1 day ago"
        />
      </div>
    </div>
  );
  return xml;
}

export default NotificationContent;
