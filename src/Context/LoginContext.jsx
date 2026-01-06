// LoginContext.js
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem("login") === "true");
  const [toastMsg, setToastMsg] = useState("");

  // Optional: watch toastMsg and trigger toast
  if (toastMsg) {
    toast(toastMsg);
    setToastMsg(""); // reset after showing
  }

  return (
    <LoginContext.Provider value={{ login, setLogin, setToastMsg }}>
      {children}
      <ToastContainer position="top-center" />
    </LoginContext.Provider>
  );
};