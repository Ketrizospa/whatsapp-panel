import { createContext, useContext, useState } from "react";

export const AlertContext = createContext(null);
export const useAlertContext = () => {
  return useContext(AlertContext);
};
export default function AlertContextProvider({ children }) {
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertContent, setAlertContent] = useState("");
  const [alertBarState, setAlertBarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const alertOpen = alertBarState.open;

  const openAlertbar = (newState) => {
    setAlertBarState((prev) => {
      return {
        ...prev,
        open: true,
      };
    });
  };
  const closeAlertbar = () => {
    setAlertBarState({ ...alertBarState, open: false });
  };

  return (
    <AlertContext.Provider
      value={{
        alertSeverity,
        setAlertSeverity,
        alertBarState,
        setAlertBarState,
        openAlertbar,
        alertTitle,
        setAlertTitle,
        alertContent,
        setAlertContent,
        alertOpen,
        closeAlertbar,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
