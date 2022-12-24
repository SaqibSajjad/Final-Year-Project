import { Box } from "@mui/material";
import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
//import { AccountCircle } from "@mui/icons-material";
import "./Student.css";
import CreateGroup from "./CreateGroup";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Graphs from "./Graphs";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";
import Avatar from "@mui/material/Avatar";
import Profile from "../../../Images/dp.jpg";
import ShowGroup from "./ShowGroup";
import NotGroupCreated from "./NotGroupCreated";

const StudentDash = () => {
  const { userDetails } = useContext(LoginContext);
  const [confirmation, setConfirmation] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect(() => {
    console.log("confirmation=", confirmation);
  }, [confirmation]);
  return (
    <Box sx={{ width: "100vw", height: "100vh", background: "#e6e6e3" }}>
      <Box>
        <AppBar
          sx={{ height: "10vh", background: "#228b22 ", boxShadow: "none" }}
        >
          <p
            style={{
              fontSize: 25,
              fontWeight: "bold",
              position: "absolute",
              marginTop: 12,
            }}
          >
            Student Dashboard
          </p>

          <NotificationsIcon
            sx={{
              position: "absolute",
              marginLeft: 130,
              marginTop: 2,
              fontSize: 30,
            }}
          />
          <p
            style={{
              fontSize: 20,
              fontWeight: "bold",
              position: "absolute",
              marginTop: 5,
              marginLeft: "85%",
            }}
          >
            {userDetails.name}
          </p>
          <p
            style={{
              fontSize: 14,
              fontWeight: "bold",
              position: "absolute",
              marginTop: 32,
              marginLeft: "85%",
            }}
          >
            ({userDetails.username})
          </p>
          <Avatar
            alt="dp"
            src={Profile}
            sx={{
              position: "absolute",
              marginLeft: 155,
              marginTop: 2,
              fontSize: 30,
              width: 30,
              height: 30,
            }}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>{userDetails.platform}</MenuItem>
            <MenuItem onClick={handleClose}>
              {userDetails.semester}th Semester
            </MenuItem>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Link>
          </Menu>
        </AppBar>
        <Box>
          {userDetails.group_id == null || confirmation ? (
            <NotGroupCreated />
          ) : (
            <Graphs />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        {userDetails.group_id || confirmation ? (
          <ShowGroup />
        ) : (
          <CreateGroup setConfirmation={setConfirmation} />
        )}
      </Box>
    </Box>
  );
};

export default StudentDash;
