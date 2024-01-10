import { Close } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Modal,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";

export default function ModalWindow({
  modalOpen,
  modalClose,
  width,
  title,
  content,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: "320px",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: width,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    overflow: "hidden",
  };
  return (
    <Modal
      open={modalOpen}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            spacing={2}
            p={2}
            px={3}
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.secondary.main, 0.3),
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <IconButton onClick={modalClose} size="small">
              <Close fontSize="small" />
            </IconButton>
          </Stack>
          <Divider></Divider>
          {content}
        </Stack>
      </Box>
    </Modal>
  );
}
