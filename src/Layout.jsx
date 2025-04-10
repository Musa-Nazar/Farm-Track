import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./UtilComponents/Navbar";
import Footer from "./UtilComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout() {
  return (
    <div className="hide-scrollbar">
      {useLocation().pathname !== "/" ? "" : <Navbar />}
      <Outlet />
      {useLocation().pathname === "/" && <Footer />}
      <ToastContainer />
    </div>
  );
}

export default Layout;
