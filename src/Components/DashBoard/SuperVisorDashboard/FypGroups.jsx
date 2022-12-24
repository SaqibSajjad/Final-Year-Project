import { Box, Typography } from "@mui/material";
import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ScheduleIcon from "@mui/icons-material/Schedule";
// eslint-disable-next-line no-unused-vars

const FypGroups = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            boxShadow: "2px black",
            background: "#90EE90",
            width: "25vw",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <LibraryBooksIcon
            sx={{
              fontSize: "40px",
              color: "white",
              marginLeft: "84%",
              display: "inline",
            }}
          />
          <Typography
            sx={{
              fontFamily: "-moz-initial",
              fontSize: "25px",
            }}
          >
            FYP-1 Groups
          </Typography>
          <Typography
            sx={{
              fontFamily: "-moz-initial",
              fontSize: "15px",
            }}
          >
            Documentation Phase
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#9FE2BF",
            width: "25vw",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <EngineeringIcon
            sx={{
              color: "white",
              fontSize: "40px",
              marginLeft: "84%",
              display: "inline",
            }}
          />
          <Typography
            sx={{
              fontFamily: "-moz-initial",
              fontSize: "25px",
            }}
          >
            FYP-2 Groups
          </Typography>
          <Typography
            sx={{
              fontFamily: "-moz-initial",
              fontSize: "15px",
            }}
          >
            Implementation Phase
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            background: "#FF7377",
            width: "25vw",
            borderRadius: 2,
          }}
        >
          <ScheduleIcon
            sx={{
              color: "white",
              fontSize: "40px",
              marginLeft: "84%",
              display: "inline",
            }}
          />
          <Typography sx={{ fontFamily: "-moz-initial", fontSize: "25px" }}>
            Schedule Meetings
          </Typography>
          <Typography sx={{ fontFamily: "-moz-initial", fontSize: "15px" }}>
            Schedule Meetings for Students
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FypGroups;
