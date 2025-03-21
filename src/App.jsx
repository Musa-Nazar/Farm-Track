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
import SignUpPage from "./Pages/LoginPage/LoginPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/setting" element={<SettingPage />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/analytic" element={<Analytic />}></Route>
        <Route path="/salesandexpense" element={<SalesAndExpense />}></Route>
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
