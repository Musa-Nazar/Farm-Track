import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import DashboardLayout from "../DashboardLayout";
const HomePage = import("./Pages/HomePage/HomePage");
const Dashboard = import("./Pages/Dashboard/Dashboard");
const Inventory = import("./Pages/Inventory/Inventory");
const SettingPage = import("./Pages/Setting/SettingPage");
const Notification = import("./Pages/Notification/Notification");
const Analytic = import("./Pages/Analytics/Analytic");
const SalesAndExpense = import("./Pages/Sales/SalesAndExpense");
const Login = import("./Pages/Login/Login");
const NotFoundPage = import("./Pages/NotFoundPage.jsx");
const Reset = import("./Pages/ResestPassword/Reset.jsx");
const Otp = import("./Pages/OTP/Otp.jsx");
const ConfirmMail = import("./Pages/ConfirmMail/ConfirmMail.jsx");
const Onboarding = import("./Pages/Onboarding/Onboarding.jsx");

import SignUp from "./Pages/SignUp/SignUp";

function App() {
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
