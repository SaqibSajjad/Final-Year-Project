import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Link } from "react-router-dom";

const OptionWindow = () => {
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        marginLeft: "45%",
        marginTop: "20%",
      }}
    >
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          margin: "auto",
          fontFamily: "monospace",
        }}
      >
        Select Role
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ backgroundColor: "#9FE2BF" }}
      >
        <DialogActions>
          <Typography sx={{ textAlign: "center", fontFamily: "monospace" }}>
            Select Role to Login:
            <QuestionMarkIcon sx={{ color: "red", marginTop: "1px" }} />
          </Typography>
        </DialogActions>
        <DialogActions>
          <Button
            sx={{ color: "black", fontFamily: "monospace" }}
            onClick={handleClose}
          >
            <Link to="CommitteeDashBoard">Committee</Link>
          </Button>
          <Button
            sx={{ color: "black", fontFamily: "monospace" }}
            onClick={handleClose}
            autoFocus
          >
            <Link to="TeacherDashboard">SuperVisor</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OptionWindow;
