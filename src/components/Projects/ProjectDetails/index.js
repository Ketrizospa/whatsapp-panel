import { Box, Card, Stack, Typography, alpha } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import React from "react";
import BasicTabs from "../../common/BasicTabs";

export default function ProjectDetails() {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
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
              src={require("../../../assets/veup_logo.gif")}
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
              Project Details
            </Typography>
            <Card sx={{ p: 4 }} variant="outlined">
              <Stack
                spacing={2}
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Stack
                  justifyContent={"space-between"}
                  direction={"column"}
                  alignItems={"center"}
                  spacing={0.5}
                >
                  <Typography sx={{ color: grey[800] }}>
                    Project name
                  </Typography>
                  <Typography fontSize={"17px"}>Veup Demo</Typography>
                </Stack>
                <Stack
                  justifyContent={"space-between"}
                  direction={"column"}
                  alignItems={"center"}
                  spacing={0.5}
                >
                  <Typography sx={{ color: grey[800] }}>
                    Account Status
                  </Typography>
                  <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
                    <Box
                      width={8}
                      height={8}
                      sx={{
                        backgroundColor: (theme) => theme.palette.success.main,
                        borderRadius: "50%",
                        outline: (theme) =>
                          `4px solid ${alpha(
                            theme.palette.success.light,
                            0.2
                          )}`,
                      }}
                    ></Box>
                    <Typography fontSize={"17px"}>Live</Typography>
                  </Stack>
                </Stack>
                <Stack
                  justifyContent={"space-between"}
                  direction={"column"}
                  alignItems={"center"}
                  spacing={0.5}
                >
                  <Typography sx={{ color: grey[800] }}>Quality</Typography>
                  <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
                    <Box
                      width={8}
                      height={8}
                      sx={{
                        backgroundColor: (theme) => theme.palette.success.main,
                        borderRadius: "50%",
                        outline: (theme) =>
                          `4px solid ${alpha(
                            theme.palette.success.light,
                            0.2
                          )}`,
                      }}
                    ></Box>
                    <Typography fontSize={"17px"}>High</Typography>
                  </Stack>
                </Stack>
                <Stack
                  justifyContent={"space-between"}
                  direction={"column"}
                  alignItems={"center"}
                  spacing={0.5}
                >
                  <Typography sx={{ color: grey[800] }}>
                    WhatsApp Credits
                  </Typography>
                  <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
                    <Typography fontSize={"17px"}>Rs.108</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
            <Card variant="outlined" sx={{ p: 4 }}>
              <Stack spacing={2} justifyContent={"space-between"}>
                <Typography variant="h6" component={"h2"}>
                  Business Details
                </Typography>
                <Stack
                  p={2}
                  direction={"row"}
                  justifyContent={"space-between"}
                  sx={{
                    backgroundColor: teal[50],
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    justifyContent={"space-between"}
                    direction={"column"}
                    alignItems={"center"}
                    spacing={0.5}
                  >
                    <Typography sx={{ color: grey[800] }}>
                      Business name
                    </Typography>
                    <Typography>Veup Demo</Typography>
                  </Stack>
                  <Stack
                    justifyContent={"space-between"}
                    direction={"column"}
                    alignItems={"center"}
                    spacing={0.5}
                  >
                    <Typography sx={{ color: grey[800] }}>
                      Mobile Number
                    </Typography>
                    <Typography>7729928664</Typography>
                  </Stack>
                  <Stack
                    justifyContent={"space-between"}
                    direction={"column"}
                    alignItems={"center"}
                    spacing={0.5}
                  >
                    <Typography sx={{ color: grey[800] }}>
                      Admin Email
                    </Typography>
                    <Typography>abcdef@gmail.com</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
            <Card sx={{ p: 4 }} variant="outlined">
              <BasicTabs />
            </Card>
          </Stack>
        )}
      </>
    </>
  );
}
