import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./UtilComponents/Navbar";
import Footer from "./UtilComponents/Footer";
function Layout() {
  console.log(
    useLocation().pathname,
    useLocation().pathname !== "/signup" || useLocation().pathname !== "/login"
  );
  return (
    <div className="hide-scrollbar">
      {useLocation().pathname !== "/" ? "" : <Navbar />}
      <Outlet />
      {useLocation().pathname === "/" && <Footer />}
    </div>
  );
}

export default Layout;
