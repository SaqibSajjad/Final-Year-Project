import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { LoginContext } from "../../../context/LoginContext";

const StudentListUrl =
  "http://localhost:/finalapi/api/User/getUnGroupedStudents";

const ShowGroup = () => {
  const { studentList, setStudentList } = useContext(LoginContext);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [technology, setTechnology] = React.useState("");

  useEffect(() => {
    axios.get(StudentListUrl).then((res) => {
      setStudentList(res.data);
      console.log(studentList);
    });
  }, []);
  const handleChange = (event) => {
    event.preventDefault();
    setTechnology(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
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
        Show Group
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Biit Project Progress Monitoring System"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            There will be Information of Fyp Group.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{
              background: "#228b22 ",
              fontSize: "15px",
              fontFamily: "cursive",
            }}
            onClick={handleClose}
            autoFocus
          >
            Ok
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#228b22 ",
              fontSize: "15px",
              fontFamily: "cursive",
            }}
            onClick={handleClickOpen1}
          >
            Add Students
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open1}
        onClose={handleClose1}
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
            color: "white",
          }}
        >
          Students List
        </DialogTitle>
        <DialogContent>
          {studentList.map((student) => {
            return (
              <>
                <List
                  key={student.id}
                  sx={{
                    width: "100%",
                    mixWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
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
                    <ListItemText
                      primary={student.name}
                      secondary={student.username}
                    />
                    <FormControl
                      variant="standard"
                      sx={{
                        m: 2,
                        minWidth: 150,
                      }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Select Technology
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={technology}
                        label="Select Technology"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>React</MenuItem>
                        <MenuItem value={20}>React Native</MenuItem>
                        <MenuItem value={30}>Android</MenuItem>
                        <MenuItem value={40}>IOS</MenuItem>
                        <MenuItem value={50}>Flutter</MenuItem>
                      </Select>
                    </FormControl>
                    <ListItemAvatar style={{ marginLeft: "10" }}>
                      <Avatar>
                        <AddIcon onClick={() => alert("clicked")} />
                      </Avatar>
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </>
            );
          })}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShowGroup;
