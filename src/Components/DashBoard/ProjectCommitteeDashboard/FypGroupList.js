import React, { useState } from "react";
import Button from "@mui/material/Button";
import Table from "react-bootstrap/Table";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Remove } from "@mui/icons-material";

const FypGroupList = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div
      style={{
        width: "80vw",
      }}
    >
      <Table striped bordered hover sx={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>GroupName</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>
              <Button
                variant="contained"
                sx={{
                  background: "#e6e6e3",
                  fontSize: "15px",
                  fontFamily: "cursive",
                  color: "black",
                }}
                onClick={handleClickOpen}
              >
                View
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

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
            fontSize: "22px",
            fontFamily: "cursive",
            minWidth: "32vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          Groups List
          <Avatar sx={{ marginLeft: "auto" }}>
            <AddIcon />
          </Avatar>
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
                <Avatar style={{ background: "#228b22 " }}>
                  <Remove />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FypGroupList;
