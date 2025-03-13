import HomePage from "./Pages/HomePage/HomePage";
import { Outlet } from "react-router-dom";
import Navbar from "./UtilComponents/Navbar";
import Footer from "./UtilComponents/Footer";
function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout