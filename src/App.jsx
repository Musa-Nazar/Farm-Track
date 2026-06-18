import {
  createBrowserRouter,
  createRoutesFromElements,
  data,
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
import { action } from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import { useMainContext, ContextWrapper } from "../MainContext.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import Reset from "./Pages/ResestPassword/Reset.jsx";
import Otp from "./Pages/OTP/Otp.jsx";
import ConfirmMail from "./Pages/ConfirmMail/ConfirmMail.jsx";
import Onboarding from "./Pages/Onboarding/Onboarding.jsx";
import { lazy } from "react";

const SignUp = lazy(() => import("./Pages/SignUp/SignUp"));

function App() {
  const { otpHolder, setOtpHolder } = useMainContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/signup"
            element={<SignUp />}
            action={(meta) =>
              import("./Pages/SignUp/SignUp.jsx").then((data) =>
                data.action(meta),
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login />}
            action={(meta) =>
              import("./Pages/Login/LoginForm.jsx").then((data) =>
                data.action(meta),
              )
            }
          ></Route>
          <Route path="/reset" element={<Reset />}></Route>
          <Route
            path="/onboarding"
            element={<Onboarding />}
            action={(meta) =>
              import("./Pages/Onboarding/Onboarding.jsx").then((data) =>
                data.action(meta),
              )
            }
          ></Route>
          <Route
            path="/otp"
            element={<Otp />}
            action={(meta) =>
              import("./Pages/OTP/Otp.jsx").then((data) => data.action(meta))
            }
          ></Route>
          <Route path="/confirmemail" element={<ConfirmMail />}></Route>
        </Route>
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
            loader={() =>
              import("./Pages/Dashboard/Dashboard.jsx").then((data) =>
                data.loader(),
              )
            }
          ></Route>
          <Route
            path="/setting"
            element={<SettingPage />}
            action={(meta) =>
              import("./Pages/Setting/SettingPageForm.jsx").then((data) =>
                data.action(meta),
              )
            }
            loader={(meta) =>
              import("./Pages/Setting/SettingPageForm.jsx").then((data) =>
                data.loader(meta),
              )
            }
          ></Route>
          <Route
            path="/inventory"
            element={<Inventory />}
            action={(meta) =>
              import("./Pages/Inventory/Inventory.jsx").then((data) =>
                data.action(meta),
              )
            }
            loader={(meta) =>
              import("./Pages/Inventory/Inventory.jsx").then((data) =>
                data.loader(meta),
              )
            }
          ></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route
            path="/analytic"
            element={<Analytic />}
            loader={(meta) =>
              import("./Pages/Analytics/Analytic.jsx").then((data) =>
                data.loader(meta),
              )
            }
          ></Route>
          <Route
            path="/salesandexpense"
            element={<SalesAndExpense />}
            loader={(meta) =>
              import("./Pages/Sales/SalesAndExpense.jsx").then((data) =>
                data.loader(meta),
              )
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
