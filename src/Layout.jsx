import HomePage from "./Pages/HomePage/HomePage";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./UtilComponents/Navbar";
import DashboardNavbar from "./UtilComponents/DashboardNavbar";
import Footer from "./UtilComponents/Footer";
function Layout() {
  const isDashboard = useLocation().pathname.startsWith("/user");
  return (
    <div className="hide-scrollbar">
      <Navbar />
      <Outlet />
      {useLocation().pathname === "/" && <Footer />}
    </div>
  );
}

export default Layout;
