import { Box, Stack, Typography, alpha } from "@mui/material";

export default function DashboardCard({
  cardTitle,
  iconBg,
  backgroundImage,
  icon,
  count,
  content,
}) {
  return (
    <Stack
      sx={{
        flexGrow: 1,
        //backgroundImage: backgroundImage,
        display: "grid",
        gridTemplateColumns: "80px auto",
        p: 1,
        //gap: "8px",
        backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.5),
        alignItems: "center",
      }}
    >
      <Stack
        alignItems={"center"}
        spacing={1}
        width={"100%"}
        height={"100%"}
        sx={{
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "4px",
        }}
        justifyContent={"center"}
      >
        {icon}
      </Stack>
      <Stack gap={1} alignItems={"center"} px={2.5} direction={"column"}>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            //width: "40%",
            height: "100%",
            borderRadius: "4px",
          }}
        ></Box>
        <Box>
          {cardTitle && (
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Segoe UI",
                fontSize: "14px",
              }}
            >
              {cardTitle}
            </Typography>
          )}
        </Box>
        {content}
        {count && (
          <Typography fontFamily="Segoe UI" fontWeight={500} fontSize={"16px"}>
            Rs.{count}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
