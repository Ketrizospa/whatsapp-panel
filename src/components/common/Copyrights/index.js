import { Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Copyrights(props) {
  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      justifyContent={"flex-end"}
      gap={1}
      py={1}
      {...props}
    >
      {/* <Typography variant="body2" align="center">
        {"Powered by "}
      </Typography>
      <Link
        color="inherit"
        href="https://veup.io/"
        sx={{ display: "inline-block", height: "28px" }}
      >
        <img
          src={require("../../../assets/veup.png")}
          alt="VeUp"
          style={{ width: "90px" }}
        ></img>
      </Link> */}
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
      </Typography>
      <Link
        color="inherit"
        href="https://veup.io/"
        sx={{ display: "inline-block", height: "28px" }}
      >
        <img
          src={require("../../../assets/veup.png")}
          alt="VeUp"
          style={{ width: "80px" }}
        ></img>
      </Link>
      <Typography variant="body2" color="text.secondary">
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Stack>
  );
}
