import { Outlet, Navigate } from "react-router-dom";
import DashboardNavbar from "./src/UtilComponents/DashboardNavbar";
import { useMainContext } from "./MainContext";
import { jwtDecode } from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function DashboardLayout() {
  const { token } = useMainContext();
  const expirationTime = token ? jwtDecode(token.access).exp * 1000 : false;
  const isExpired = expirationTime ? Number(expirationTime) < Date.now() : true;
  const xml = (
    <div className="flex bg-[#F4F4F4] w-full h-dvh max-md:flex-col">
      <DashboardNavbar />
      <Outlet />
      <ToastContainer />
    </div>
  );

  return isExpired ? <Navigate to="/login" /> : xml;
}

export default DashboardLayout;
