import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import ModalWindow from "../ModalWindow";
import EmbeddedFlow from "../../Projects/EmbeddedFlow";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [isCopyUrl, setIsCopyUrl] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Setup" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Analytics" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Stack
          py={3}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Typography variant="body1">
            WhatsApp Application Form Status
          </Typography>
          <Typography>Incomplete</Typography>
        </Stack>
        <Stack
          py={3}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Typography variant="body1">Embedded Signup URL</Typography>
          <Stack direction={"row"}>
            {!isCopyUrl ? (
              <>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    setIsCopyUrl(true);
                  }}
                >
                  Generate URL
                </Button>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    border: 1,
                    borderRight: 0,
                    width: 240,
                    px: 1,
                    marginRight: "-6px",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    variant="caption"
                    fontWeight={500}
                    color={grey[600]}
                  >
                    https://www.partner.aisensy.com/assistants/65966c268af6a4145c900118
                  </Typography>
                </Box>
                <Button size="small" variant="contained" onClick={handleOpen}>
                  Copy URL
                </Button>
              </>
            )}
          </Stack>
        </Stack>
        <Stack
          py={3}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Typography variant="body1">
            WhatsApp Application Form Status
          </Typography>
          <Typography>Incomplete</Typography>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EmbeddedFlow />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Analytics
      </CustomTabPanel>
      <ModalWindow
        title={"Details"}
        modalClose={handleClose}
        width={"40%"}
        modalOpen={open}
        content={
          <>
            <Box component={"form"} p={4}>
              <Stack gap={2}>
                <Stack gap={1.5}>
                  <Typography variant="h6" component={"p"}>
                    Get Your WhatsApp Business Platform Account
                  </Typography>
                  <Typography variant="body2">
                    Please verify the information about your company and the
                    phone number that you would like to connect to the WhatsApp
                    Business API. Please make sure that your company follows
                    Facebook's compliance policy.
                  </Typography>
                  <Typography fontWeight={500}>BUSINESS INFORMATION</Typography>
                  <Stack direction={"row"} gap={2}>
                    <Typography variant="body2" fontWeight={500}>
                      Name:
                    </Typography>
                    <Typography variant="body2">Surender</Typography>
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Typography variant="body2" fontWeight={500}>
                      Email:
                    </Typography>
                    <Typography variant="body2">Surender</Typography>
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Typography variant="body2" fontWeight={500}>
                      Company:
                    </Typography>
                    <Typography variant="body2">Surender</Typography>
                  </Stack>
                  <Stack direction={"row"} gap={2}>
                    <Typography variant="body2" fontWeight={500}>
                      Project:
                    </Typography>
                    <Typography variant="body2">Surender</Typography>
                  </Stack>
                </Stack>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox required />}
                    label="I agree to VeUp Terms and Conditions"
                  />
                </FormGroup>
                <Button
                  variant="contained"
                  sx={{ alignSelf: "center" }}
                  onClick={window.launchWhatsAppSignup}
                >
                  Connect to Facebook
                </Button>
              </Stack>
            </Box>
          </>
        }
      />
    </Box>
  );
}
