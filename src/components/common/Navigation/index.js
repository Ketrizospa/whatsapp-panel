import * as React from "react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { Avatar, Menu, MenuItem, Stack, Tooltip } from "@mui/material";
import { Key, Logout, Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";

const drawerMixin = (theme) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 80,
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: 50,
  },
  "& .MuiDrawer-paper": {
    paddingTop: "16px !important",
    paddingBottom: "16px !important",
    width: 80,
    [theme.breakpoints.down("md")]: {
      width: 50,
    },
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => drawerMixin(theme));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Navigation() {
  const theme = useTheme();
  //   const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  //   const handleDrawer = () => {
  //     setOpen(!open);
  //   };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  //   const { logout } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const profileOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        // open={open}
        open={true}
        sx={{
          backgroundColor: grey[300],
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <img
              src={require("../../../assets/veup.png")}
              alt="VeUp"
              style={{ width: "120px" }}
            ></img>
          </Stack>
          <Stack gap={2} alignItems={"center"} direction={"row"}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={profileOpen ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={profileOpen ? "true" : undefined}
              >
                <Avatar
                  variant="round"
                  sx={{
                    width: 40,
                    height: 40,
                    fontWeight: 600,
                    fontFamily: "Segoe Ui",
                    bgcolor: (theme) => theme.palette.secondary.main,
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  <Person />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={profileOpen}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/profile");
                  handleClose();
                }}
                sx={{ fontSize: 14 }}
              >
                <Person sx={{ mr: 1, fontSize: 18 }} />
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/settings");
                  handleClose();
                }}
                sx={{ fontSize: 14 }}
              >
                <Key sx={{ mr: 1, fontSize: 18 }} />
                Change Password
              </MenuItem>
              <MenuItem
                onClick={() => {
                  //   logout();
                  handleClose();
                }}
                sx={{
                  fontSize: 14,
                  color: (theme) => theme.palette.error.main,
                }}
                color="error"
              >
                <Logout sx={{ mr: 1, fontSize: 18 }} />
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar> */}
      <Drawer
        variant="permanent"
        open={true}
        as={"nav"}
        sx={{
          "& .MuiDrawer-paper.MuiPaper-root": {
            backgroundColor: alpha(theme.palette.primary.main, 1),
            textTransform: "capitalize",
          },
        }}
      >
        <DrawerHeader
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            width={"55px"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              p: 1,
              borderRadius: "50%",
            }}
          >
            <img
              src={require("../../../assets/vs-short-logo.png")}
              alt="VeUp"
              width={"100%"}
            ></img>
          </Stack>

          {/* <IconButton onClick={handleDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}
        </DrawerHeader>
        <MenuItems />
        <Stack gap={2} alignItems={"center"} direction={"row"}>
          {/* <ThemeChooser /> */}
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={profileOpen ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={profileOpen ? "true" : undefined}
            >
              <Avatar
                variant="round"
                sx={{
                  width: 40,
                  height: 40,
                  fontWeight: 600,
                  fontFamily: "Segoe Ui",
                  bgcolor: (theme) => theme.palette.secondary.main,
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                <Person />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={profileOpen}
            onClose={handleClose}
            onClick={handleClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
          >
            <MenuItem
              onClick={() => {
                navigate("/profile");
                handleClose();
              }}
              sx={{ fontSize: 14 }}
            >
              <Person sx={{ mr: 1, fontSize: 18 }} />
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/settings");
                handleClose();
              }}
              sx={{ fontSize: 14 }}
            >
              <Key sx={{ mr: 1, fontSize: 18 }} />
              Change Password
            </MenuItem>
            <MenuItem
              onClick={() => {
                //   logout();
                handleClose();
              }}
              sx={{
                fontSize: 14,
                color: (theme) => theme.palette.error.main,
              }}
              color="error"
            >
              <Logout sx={{ mr: 1, fontSize: 18 }} />
              Logout
            </MenuItem>
          </Menu>
        </Stack>
      </Drawer>
    </Box>
  );
}
