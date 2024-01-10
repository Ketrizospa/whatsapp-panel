import React, { useState } from "react";
import DashboardCard from "./DashboardCard";
import { Box, Card, Stack, Typography } from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";
// import { useAlertContext } from "../../context/AlertContextProvider";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  //   const { setAlertSeverity, openAlertbar, setAlertContent } = useAlertContext();
  const cards = [
    { name: "MC Central Balance Usage", amount: "1234" },
    { name: "MC Template Credit Usage", amount: "1234" },
    { name: "UC Central Balance Usage", amount: "1234" },
    { name: "UC Template Credit Usage", amount: "1234" },
    { name: "AC Central Balance Usage", amount: "1234" },
    { name: "AC Central Balance Usage", amount: "1234" },
    { name: "AC Central Balance Usage", amount: "1234" },
    { name: "AC Central Balance Usage", amount: "1234" },
  ];
  return (
    <>
      {loading === true ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <img
            src={require("../../assets/veup_logo.gif")}
            alt="loading"
            style={{ width: "300px" }}
          ></img>
        </Box>
      ) : (
        <Stack
          spacing={4}
          maxWidth={"1380px"}
          m={"auto"}
          alignItems={"stretch"}
        >
          <Typography variant="h5" component={"h1"}>
            {" "}
            Partner Dashboard
          </Typography>
          <Card sx={{ p: 4 }} variant="outlined">
            <Stack spacing={2}>
              <Typography variant="h6" component={"h2"}>
                Centralised balance Management
              </Typography>
              <Stack
                justifyContent={"space-between"}
                direction={"row"}
                alignItems={"center"}
              >
                <Typography>Current Balance</Typography>
                <Typography fontWeight={600} fontSize={"18px"}>
                  Rs. 10800
                </Typography>
              </Stack>
            </Stack>
          </Card>
          <Card variant="outlined" sx={{ p: 4 }}>
            <Stack spacing={2}>
              <Typography variant="h6" component={"h2"}>
                WhatsApp Usage
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: 3,
                }}
              >
                {cards.map((i, key) => {
                  return (
                    <DashboardCard
                      icon={
                        <CurrencyRupee
                          color="primary"
                          sx={{ fontSize: "40px" }}
                        />
                      }
                      cardTitle={i.name}
                      count={i.amount}
                    />
                  );
                })}
              </Box>
            </Stack>
          </Card>
        </Stack>
      )}
    </>
  );
}
