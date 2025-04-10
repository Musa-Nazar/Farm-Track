import { createContext, useContext, useEffect, useState } from "react";
import http from "./http";
import Cookies from "universal-cookie";
const MainContext = createContext();
function ContextWrapper({ children }) {
  const cookie = new Cookies();
  const [token, setToken] = useState(cookie.get("token"));
  const [user, setUser] = useState(cookie.get("user"));
  const myContext = { token, setToken, user, setUser, cookie };
  return (
    <MainContext.Provider value={myContext}>{children}</MainContext.Provider>
  );
}
function useMainContext() {
  const mainContext = useContext(MainContext);
  return mainContext;
}
export { ContextWrapper, useMainContext };
