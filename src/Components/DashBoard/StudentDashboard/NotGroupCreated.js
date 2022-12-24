import { Box, Typography } from "@mui/material";
import React from "react";

const NotGroupCreated = () => {
  return (
    <Box
      style={{
        marginTop: 180,
        marginBottom: 100,
        zIndex: 120,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{ color: "#0a1172", fontSize: "30px", fontFamily: "cursive" }}
      >
        Please Enroll in Final Year Project You are not Enroll...
      </Typography>
    </Box>
  );
};

export default NotGroupCreated;
