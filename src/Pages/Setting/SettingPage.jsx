import DashboardGap from "../../UtilComponents/DashboardGap";
import SettingPageContainer from "./SettingPageContainer";
import SettingPageForm from "./SettingPageForm";
import SettingPagePrefference from "./SettingPagePrefference";
function SettingPage() {
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <SettingPageContainer>
        <SettingPageForm />
        <SettingPagePrefference />
      </SettingPageContainer>
    </div>
  );
  return xml;
}

export default SettingPage;
