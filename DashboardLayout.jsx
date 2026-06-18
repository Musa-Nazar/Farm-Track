import { Outlet, Navigate } from "react-router-dom";
import DashboardNavbar from "./src/UtilComponents/DashboardNavbar";
import { useMainContext } from "./MainContext";
import { jwtDecode } from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
function DashboardLayout() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (!token) return <Navigate to="/login" />;
  const expirationTime = token ? jwtDecode(token).exp * 1000 : false;
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
