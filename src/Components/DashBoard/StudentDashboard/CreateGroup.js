import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";

const createGroupUrl = "http://localhost:/finalapi/api/FypGroup/createGroup";

//const sendGroupRequestUrl =
//"http://localhost:/finalapi/api/FypGroup/sendGroupRequest";
// const SendGroupRequest = (event, id) => {
//   event.preventDefault();
//   axios
//     .post(sendGroupRequestUrl, {
//       groud_id: userDetails.group_id,
//       request_by: userDetails.id,
//       requested_to: id,
//     })
//     .then((response) => {})
//     .catch((error) => {
//       console.log("Group Request Send Fail");
//     });
// };

const CreateGroup = ({ setConfirmation }) => {
  const [groupName, setGroupName] = React.useState("");
  const { userDetails } = useContext(LoginContext);
  const [open, setOpen] = React.useState(false);

  const CreateFypGroup = (event) => {
    event.preventDefault();
    axios
      .post(createGroupUrl, {
        id: userDetails.id,
        name: userDetails.name,
        description: groupName,
        creator_id: userDetails.id,
        created_by: userDetails.id,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setConfirmation(true);

          alert("Congratulation Group is Created");
        }
        setGroupName("");
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Button variant="contained" color="success" onClick={handleClickOpen}>
          Create Group
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Create Your Group For Final Year Project
          </DialogTitle>
          <DialogContent>
            <TextField
              id="standard-basic"
              label="Enter Group Name"
              variant="standard"
              sx={{ width: "45ch" }}
              onChange={(event) => setGroupName(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="success" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={CreateFypGroup}
              autoFocus
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default CreateGroup;
