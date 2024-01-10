import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, gridClasses } from "@mui/x-data-grid";
import { alpha, styled } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";
import { grey } from "@mui/material/colors";
const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));
function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <Box sx={{ mb: 1 }}>No Templates</Box>
      <SvgIcon
        sx={{
          fontSize: "100px",
          color: (theme) => `${theme.palette.primary.main}`,
          opacity: 0.8,
        }}
      >
        <svg
          width="75"
          height="95"
          viewBox="0 0 75 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" width="68" height="77" fill="white" />
          <path
            d="M6 6C6 4.89543 6.89543 4 8 4H48.5911C49.1686 4 49.7179 4.24962 50.0977 4.68465L62.4325 18.813C62.7506 19.1774 62.9259 19.6447 62.9259 20.1284V67.3571C62.9259 68.4617 62.0305 69.3571 60.9259 69.3571H8C6.89543 69.3571 6 68.4617 6 67.3571V6Z"
            stroke="currentcolor"
            strokeWidth="4"
          />
          <path
            d="M50 20H61C62.1046 20 63 19.1046 63 18V17.5772C63 17.0691 62.8066 16.58 62.4591 16.2093L51.6054 4.63212C51.2273 4.22882 50.6992 4 50.1464 4H50C48.8954 4 48 4.89543 48 6V18C48 19.1046 48.8954 20 50 20Z"
            fill="currentcolor"
          />
          <path
            d="M25.1296 23.6321L16 15"
            stroke="currentcolor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.0003 23.6321L25.1299 15"
            stroke="currentcolor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 34.5C15 34.2239 15.2239 34 15.5 34H35.4032C35.6794 34 35.9032 34.2239 35.9032 34.5V37C35.9032 37.2761 35.6794 37.5 35.4032 37.5H15.5C15.2239 37.5 15 37.2761 15 37V34.5Z"
            fill="currentcolor"
            stroke="currentcolor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M15 52C15 51.7239 15.2239 51.5 15.5 51.5H40.4C40.6761 51.5 40.9 51.7239 40.9 52V54.5C40.9 54.7761 40.6761 55 40.4 55H15.5C15.2239 55 15 54.7761 15 54.5V52Z"
            fill="currentcolor"
            stroke="currentcolor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <path
            d="M15 43.8335C15 43.5574 15.2239 43.3335 15.5 43.3335H50.5C50.7761 43.3335 51 43.5574 51 43.8335V46.3334C51 46.6096 50.7761 46.8334 50.5 46.8334H15.5C15.2239 46.8334 15 46.6096 15 46.3334V43.8335Z"
            fill="currentcolor"
            stroke="currentcolor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <circle
            cx="61.0032"
            cy="68.0032"
            r="9.00317"
            fill="currentcolor"
            stroke="currentcolor"
            strokeWidth="3.60127"
          />
          <path
            d="M59.9648 62.4629H61.7652V68.6962H59.9648V62.4629Z"
            fill="white"
            stroke="white"
            strokeWidth="0.900317"
            strokeLinejoin="round"
          />
          <path
            d="M59.9648 72.5072C59.9648 73.0808 60.4298 73.5459 61.0033 73.5459V73.5459C61.5768 73.5459 62.0418 73.0808 62.0418 72.5072V72.5072C62.0418 71.9337 61.5768 71.4686 61.0033 71.4686V71.4686C60.4298 71.4686 59.9648 71.9337 59.9648 72.5072V72.5072Z"
            fill="white"
            stroke="white"
            strokeWidth="0.900317"
            strokeLinejoin="round"
          />
          <ellipse
            opacity="0.1"
            cx="37.5"
            cy="89.5"
            rx="37.5"
            ry="5.5"
            fill="#2B2A7F"
          />
        </svg>
      </SvgIcon>
    </StyledGridOverlay>
  );
}
export default function DataTable({
  fields,
  data,
  loading,
  rowIdField,
  columnVisibility,
}) {
  const ODD_OPACITY = 0.2;
  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: alpha(theme.palette.secondary.light, 0.3),
      "&:hover, &.Mui-hovered": {
        // backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        backgroundColor: alpha(theme.palette.secondary.light, 0.3),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        "&:hover, &.Mui-hovered": {
          //   backgroundColor: alpha(
          //     theme.palette.primary.main,
          //     ODD_OPACITY +
          //       theme.palette.action.selectedOpacity +
          //       theme.palette.action.hoverOpacity
          //   ),
          backgroundColor: alpha(theme.palette.secondary.light, 0.3),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
    [`& .${gridClasses.row}.odd`]: {
      backgroundColor: "white",
      "&:hover, &.Mui-hovered": {
        backgroundColor: "white",
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: "white",
        "&:hover, &.Mui-hovered": {
          backgroundColor: "white",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "white",
          },
        },
      },
    },
  }));

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: grey[50],
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "primary.light",
          color: "white",
          borderBottom: 0,
        },
        "& .MuiDataGrid-toolbarContainer": {
          padding: "20px 20px 0px",
        },
        "& .MuiDataGrid-footerContainer": {
          borderColor: "secondary.main",
          padding: "10px",
          //boxShadow: "rgba(0, 0, 0, 0.45) 0px 20px 20px -20px",
        },
        "& .MuiDataGrid-main": {
          mt: 2,
        },
      }}
    >
      <StripedDataGrid
        sx={{
          //boxShadow: 2,
          borderColor: "secondary.main",
          //   "& .MuiDataGrid-cell:hover": {
          //     color: "primary.main",
          //   },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
        }}
        rows={data}
        slots={{
          toolbar: GridToolbar,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        loading={loading}
        disableSelectionOnClick
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        disableColumnSelector
        columnVisibilityModel={columnVisibility}
        getRowId={(row) => row[rowIdField]}
        columns={fields}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          // filter: {
          //   filterModel: {
          //     items: [
          //       {
          //         field: "CallDate",
          //         operator: "is",
          //         value: new Date(),
          //       },
          //     ],
          //   },
          // },
        }}
        pageSizeOptions={[5, 10, 15]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
