import { Outlet } from "react-router-dom";
import DashboardNavbar from "./src/UtilComponents/DashboardNavbar";

function DashboardLayout() {
  const xml = (
    <div className="flex bg-[#F4F4F4] w-full h-dvh max-md:flex-col">
      <DashboardNavbar />
      <Outlet />
    </div>
  );
  return xml;
}

export default DashboardLayout;
