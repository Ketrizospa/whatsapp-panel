// import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { Box, Container, Stack, ThemeProvider } from "@mui/material";
import Navigation from "./components/common/Navigation";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useThemeContext } from "./context/ThemeContextProvider";
import { grey } from "@mui/material/colors";
import DashboardPage from "./pages/DashboardPage";
import BusinessPage from "./pages/BusinessPage";
import ProjectsPage from "./pages/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

function App() {
  const { theme } = useThemeContext();
  useEffect(() => {
    // Initialize the Facebook Pixel with your Pixel ID
    ReactPixel.init("928329262252926");
    // Track a page view with additional parameters
    ReactPixel.pageView(null, {
      appId: "1485720048670214",
      feature: "whatsapp_embedded_signup",
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Stack direction={"row"}>
        <Navigation />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            boxSizing: "border-box",
            height: "100vh",
            // pt: isAuthorised ? "100px" : "0px",
            overflow: "auto",
          }}
        >
          <Container
            sx={{
              height: "100%",
              p: 4,
              //p: [!isLogin && 2, !isLogin && 3, !isLogin && 4],
              display: "flex",
              gap: "24px",
              flexDirection: "column",
              backgroundColor: grey[100],
              maxWidth: "1480px !important",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Routes style={{ flexGrow: 1 }}>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/business" element={<BusinessPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetails />} />
                {/* 
                <Route path="/settings" element={<ChangePassword />} />
                <Route path="*" element={<PageNotFound />} /> */}
              </Routes>
            </Box>
          </Container>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
