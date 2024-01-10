import * as React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import List from "@mui/material/List";
import { Stack, Tooltip, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  Build,
  BusinessCenter,
  Folder,
  FormatListBulleted,
  Receipt,
} from "@mui/icons-material";
export default function MenuItems() {
  const StyledNavLink = styled(NavLink)(({ theme }) => ({
    fontWeight: 700,
    overflow: "hidden",
    textDecoration: "none",
    display: "block",
    padding: "8px",
    color: "white",
    transition: "background-color ease 0.3s",
    "&:active": {
      color: theme.palette.secondary.main,
    },
    "&:visited": {
      color: theme.palette.secondary.main,
    },
    "&.active": {
      borderLeft: "3px solid white",
      color: theme.palette.primary.main,
    },
    "&.active .MuiListItemIcon-root": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      padding: "7px",
      margin: "0px 6px",
    },
  }));
  var user = [
    {
      submenuItems: [
        {
          icon: <DashboardIcon fontSize="small" color="inherit" />,
          link: "/dashboard",
          title: "Dashboard",
        },
        {
          icon: <BusinessCenter fontSize="small" color="inherit" />,
          link: "/business",
          title: "Businesses",
        },
        {
          icon: <Folder fontSize="small" color="inherit" />,
          link: "/projects",
          title: "Projects",
        },
        {
          icon: <FormatListBulleted fontSize="small" color="inherit" />,
          link: "/plan-details",
          title: "Plan Details",
        },
        {
          icon: <Receipt fontSize="small" color="inherit" />,
          link: "/billing",
          title: "Billing",
        },
        {
          icon: <Build fontSize="small" color="inherit" />,
          link: "/manage",
          title: "Manage",
        },
      ],
    },
  ];

  return (
    <List
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "& .MuiListItemIcon-root": {
          marginRight: { xs: "10px", md: "12px" },
          minWidth: "0px",
        },
        "& .MuiButtonBase-root.MuiListItemButton-root": {
          padding: { xs: "4px", md: "6px 10px" },
          height: { xs: "30px", md: "auto" },
        },
      }}
    >
      <Stack justifyContent={"space-between"}>
        {user.map((item, key) => {
          return (
            <Stack justifyContent={"space-between"} key={key} gap={0.5} py={1}>
              {item.submenuItems.map((i, key) => (
                <StyledNavLink to={i.link} key={key}>
                  <Stack
                    direction={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                      "& .MuiListItemIcon-root": {
                        marginBottom: { xs: "0px", md: "6px" },
                        marginRight: "0px",
                      },
                    }}
                  >
                    <Tooltip title={i.title} placement="right">
                      <ListItemIcon
                        style={{
                          color: "inherit",
                          padding: "5px",
                          borderRadius: "50%",
                        }}
                      >
                        {i.icon}
                      </ListItemIcon>
                    </Tooltip>
                    <Typography
                      sx={{
                        "&.MuiTypography-root": {
                          fontSize: "11px !important",
                          textAlign: "center",
                          whiteSpace: "normal",
                          color: "white",
                        },
                      }}
                      display={{ xs: "none", md: "block" }}
                      primary={i.title}
                    >
                      {i.title}
                    </Typography>
                  </Stack>
                </StyledNavLink>
              ))}
            </Stack>
          );
        })}
      </Stack>
    </List>
  );
}
