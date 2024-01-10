import React, { useState } from "react";
import DataTable from "../common/DataTable";
import { Card, Chip, IconButton, Stack, Typography } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  var fields = [
    {
      field: "CampaignName",
      headerName: "Name",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "CampType",
      headerName: "Type",
      flex: 1,
      minWidth: 90,
    },
    {
      field: "Project",
      headerName: "Project",
      flex: 1,
      minWidth: 80,
    },
    {
      field: "Template",
      headerName: "Template used",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "CampaignSchedule",
      headerName: "Campaign Schedule",
      flex: 1.5,
      minWidth: 250,
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
      minWidth: 110,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Completed"
              ? "success"
              : params.value === "Started"
              ? "warning"
              : params.value === "Scheduled"
              ? "info"
              : "error"
          }
          size="small"
          sx={{ textTransform: "capitalize" }}
        />
      ),
    },
    { field: "TrackerId", headerName: "Tracker Id" },
    { field: "ScheduleId", headerName: "ScheduleId Id" },
    {
      field: "Actions",
      headerName: "Actions",
      flex: 1,
      // align: "center",
      minWidth: 120,
      renderCell: (params) => (
        <Stack spacing={2} direction={"row"}>
          <IconButton
            size="small"
            title="View Details"
            onClick={() => {
              //   setCampName(params.row.CampaignName);
              //   campReport(params.row.TrackerId);
              navigate(`/projects/:id${params.row.ScheduleId}`);
            }}
          >
            <Visibility color="primary" fontSize="small" />
          </IconButton>
        </Stack>
      ),
    },
  ];
  const projects = [
    {
      CampType: "Utility",
      CampaignName: "Today(21-12-2023)",
      CampaignSchedule: "Thu, 21 Dec 2023 07:59:59 GMT",
      Platforms: "['Chrome', 'Edge', 'Firefox', 'Apple']",
      Project: "VeUp",
      ScheduleId: "024d9e13-f423-4b3c-bee3-4ffde32df494",
      Status: "Completed",
      Template: "Kannada",
      TrackerId: "5610552734",
    },
    {
      CampType: "Utility",
      CampaignName: "Test1111119",
      CampaignSchedule: "Wed, 20 Dec 2023 17:07:45 GMT",
      Platforms: "['Chrome', 'Edge', 'Firefox', 'Apple']",
      Project: "VeUp",
      ScheduleId: "8ca9232f-13f7-4a3a-9c1c-f47413326d2d",
      Status: "Completed",
      Template: "Life Quotes",
      TrackerId: "8436239206",
    },
    {
      CampType: "Marketing",
      CampaignName: "Test2111",
      CampaignSchedule: "Wed, 20 Dec 2023 11:49:35 GMT",
      Platforms: "['Chrome', 'Edge', 'Firefox', 'Apple']",
      Project: "VeUp",
      ScheduleId: "2546bd32-a023-4959-91ea-493cbc7e3e50",
      Status: "Completed",
      Template: "VeUp Technologies",
      TrackerId: "8117999053",
    },
    {
      CampType: "Utility",
      CampaignName: "Test1157",
      CampaignSchedule: "Wed, 20 Dec 2023 10:45:00 GMT",
      Platforms: "['Chrome', 'Edge', 'Firefox', 'Apple']",
      Project: "VeUp",
      ScheduleId: "897fe513-4a60-4257-8466-024353d2286e",
      Status: "Completed",
      Template: "Life Quotes",
      TrackerId: "9027868299",
    },
    {
      CampType: "Utility",
      CampaignName: "20/12 - schedule",
      CampaignSchedule: "Wed, 20 Dec 2023 06:14:19 GMT",
      Platforms: "['Chrome', 'Edge', 'Firefox', 'Apple']",
      Project: "VeUp",
      ScheduleId: "fd27c062-af80-4c76-a594-02e44d5ff7db",
      Status: "Completed",
      Template: "Kannada",
      TrackerId: "4246569899",
    },
    {
      CampType: "Utility",
      CampaignName: "Today(19-12-2023)",
      CampaignSchedule: "Tue, 19 Dec 2023 19:50:56 GMT",
      Platforms: "['Chrome', 'Edge', 'Firefox', 'Apple']",
      Project: "VeUp",
      ScheduleId: "4ded103b-e4c7-4019-8b83-11d48f5567ad",
      Status: "Completed",
      Template: "Telugu",
      TrackerId: "8558273707",
    },
  ];
  return (
    <>
      {" "}
      <Card sx={{ p: 4 }} variant="outlined">
        <Stack
          spacing={4}
          maxWidth={"1380px"}
          m={"auto"}
          alignItems={"stretch"}
        >
          <Typography variant="h5" component={"h1"}>
            Projects
          </Typography>
          <DataTable
            fields={fields}
            data={projects}
            loading={loading}
            columnVisibility={{ TrackerId: false, ScheduleId: false }}
            rowIdField={"CampaignSchedule"}
          />
        </Stack>
      </Card>
    </>
  );
}
