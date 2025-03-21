import DashboardGap from "../../UtilComponents/DashboardGap";
import NotificationContainer from "./NotificationContainer";
import NotificationContent from "./NotificationContent";
function Notification() {
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <NotificationContainer>
        <NotificationContent />
      </NotificationContainer>
    </div>
  );
  return xml;
}

export default Notification;
