import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import DashboardLayout from "../DashboardLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Inventory = lazy(() => import("./Pages/Inventory/Inventory"));
const SettingPage = lazy(() => import("./Pages/Setting/SettingPage"));
const Notification = lazy(() => import("./Pages/Notification/Notification"));
const Analytic = lazy(() => import("./Pages/Analytics/Analytic"));
const SalesAndExpense = lazy(() => import("./Pages/Sales/SalesAndExpense"));
const Login = lazy(() => import("./Pages/Login/Login"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage.jsx"));
const Reset = lazy(() => import("./Pages/ResestPassword/Reset.jsx"));
const Otp = lazy(() => import("./Pages/OTP/Otp.jsx"));
const ConfirmMail = lazy(() => import("./Pages/ConfirmMail/ConfirmMail.jsx"));
const Onboarding = lazy(() => import("./Pages/Onboarding/Onboarding.jsx"));

import SignUp from "./Pages/SignUp/SignUp";
import ErrorPage from "./Pages/HomePage/ErrorPage.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={ErrorPage}>
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
