import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React from "react";
import { useAlertContext } from "../../../context/AlertContextProvider";

export default function Alertbar() {
  const { alertSeverity, alertOpen, closeAlertbar, alertTitle, alertContent } =
    useAlertContext();
  return (
    <>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={closeAlertbar}
        sx={{ maxWidth: 340 }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          variant="filled"
          onClose={closeAlertbar}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {alertTitle && <AlertTitle>{alertTitle}</AlertTitle>}
          {alertContent}
        </Alert>
      </Snackbar>
    </>
  );
}
