import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./UtilComponents/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Inventory from "./Pages/Inventory/Inventory";
import SettingPage from "./Pages/Setting/SettingPage";
import DashboardLayout from "../DashboardLayout";
import Notification from "./Pages/Notification/Notification";
import Analytic from "./Pages/Analytics/Analytic";
import SalesAndExpense from "./Pages/Sales/SalesAndExpense";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import { useMainContext, ContextWrapper } from "../MainContext.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import Reset from "./Pages/ResestPassword/Reset.jsx";
import Otp from "./Pages/OTP/Otp.jsx";
import ConfirmMail from "./Pages/ConfirmMail/ConfirmMail.jsx";
import Onboarding from "./Pages/Onboarding/Onboarding.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/onboarding" element={<Onboarding />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/confirmemail" element={<ConfirmMail />}></Route>
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/setting" element={<SettingPage />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/analytic" element={<Analytic />}></Route>
        <Route path="/salesandexpense" element={<SalesAndExpense />}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
function App() {
  return (
    <ContextWrapper>
      <RouterProvider router={router} />
    </ContextWrapper>
  );
}

export default App;
