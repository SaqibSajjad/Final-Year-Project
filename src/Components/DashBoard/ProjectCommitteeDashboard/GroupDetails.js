import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const GroupDetails = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          background: "#228b22 ",
          fontSize: "15px",
          fontFamily: "cursive",
        }}
        onClick={handleClickOpen}
      >
        Add Students
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll="paper"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            background: "#228b22 ",
            fontSize: "15px",
            fontFamily: "cursive",
            minWidth: "32vw",
          }}
        >
          Groups List
        </DialogTitle>
        <DialogContent>
          <List>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary="Name" secondary="Details" />

              <ListItemAvatar style={{ marginLeft: "10" }}>
                <Avatar>
                  <AddIcon onClick={() => alert("clicked")} />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GroupDetails;
