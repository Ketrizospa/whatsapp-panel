import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { SupportAgent } from "@mui/icons-material";
import Copyrights from "../../components/common/Copyrights";
// import { useAuthContext } from "../../context/AuthContextProvider";
// import {
//   setAuthSessionToken,
//   setUserRoleSessionToken,
// } from "../../utils/authtoken";
import { useAlertContext } from "../../context/AlertContextProvider";
import ModalWindow from "../../components/common/ModalWindow";
export default function Login() {
  // const { setIsAuthorised, setAuthToken } = useAuthContext();
  const { setAlertSeverity, openAlertbar, setAlertContent } = useAlertContext();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    fetch("https://fcm.veup.io/api/createToken", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, "data");
        if (data.Code === 200) {
          // setIsAuthorised(true);
          // setAuthSessionToken(data.token);
          // setAuthToken(data.token);
          navigate("/dashboard");
        } else if (data.Code === 401) {
          setAlertContent(data.Status);
          setAlertSeverity("error");
          openAlertbar();
        }
      })
      .catch((error) => {});
  };
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <CssBaseline />
      <Paper sx={{ p: 8 }} elevation={6}>
        <Box
          sx={{
            maxWidth: 400,
            display: "flex",
            margin: "auto",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box mb={5}>
            <img
              src={require("../../assets/veup.png")}
              alt="loading"
              style={{ width: "250px" }}
            ></img>
          </Box>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Link href="#" variant="body2" onClick={() => handleModalOpen()}>
              Forgot password?
            </Link>
          </Box>
          <Copyrights sx={{ mt: 4, alignSelf: "flex-end" }} />
        </Box>
      </Paper>
      <ModalWindow
        title={"Forgot Password?"}
        modalClose={handleModalClose}
        modalOpen={modalOpen}
        width={"500px"}
        content={
          <Box p={4}>
            <SupportAgent
              color="primary"
              fontSize="large"
              sx={{ float: "right", m: 2 }}
            />
            <Typography id="modal-description">
              If you're encountering difficulties with logging into your account
              and require assistance in resetting your password to regain access
              to your account, reach out to us at&nbsp;
              <a style={{ color: "black" }} href="mailto:support@veup.in">
                support@veup.in
              </a>
              &nbsp;We are committed to providing you with the necessary support
              to ensure you can restore your account and continue to use our
              services seamlessly.
            </Typography>
          </Box>
        }
      />
    </Box>
  );
}
