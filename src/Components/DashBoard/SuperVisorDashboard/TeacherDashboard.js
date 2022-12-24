import { React, useContext } from "react";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { AccountCircle } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FypGroups from "./FypGroups";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";

const TeacherDashboard = () => {
  const { userDetails } = useContext(LoginContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
            Supervisor Dashboard
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
              fontSize: 18,
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
              fontSize: 12,
              fontWeight: "bold",
              position: "absolute",
              marginTop: 32,
              marginLeft: "85%",
            }}
          >
            ({userDetails.username})
          </p>
          <AccountCircle
            sx={{
              position: "absolute",
              marginLeft: 155,
              marginTop: 2,
              fontSize: 30,
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
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Link>
          </Menu>
        </AppBar>
      </Box>
      <Box sx={{ position: "absolute", marginTop: 8 }}>
        <FypGroups />
      </Box>
    </Box>
  );
};

export default TeacherDashboard;
