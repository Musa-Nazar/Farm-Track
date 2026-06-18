import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
const MainContext = createContext({
  token: "",
  setToken: () => {},
  user: "",
  setUser: () => {},
  cookie: "",
  otpHolder: "",
  setOtpHolder: () => {},
});
function ContextWrapper({ children }) {
  const cookie = new Cookies();
  const [otpHolder, setOtpHolder] = useState({});
  const [token, setToken] = useState(cookie.get("token"));
  const [user, setUser] = useState(cookie.get("user"));
  const myContext = {
    token,
    setToken,
    user,
    setUser,
    cookie,
    otpHolder,
    setOtpHolder,
  };
  return (
    <MainContext.Provider value={myContext}>{children}</MainContext.Provider>
  );
}
function useMainContext() {
  const mainContext = useContext(MainContext);
  return mainContext;
}
export { ContextWrapper, useMainContext };
