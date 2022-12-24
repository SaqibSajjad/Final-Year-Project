import { Box, Typography, styled } from "@mui/material";
import React from "react";
import image from "../../../Images/graphImage.jpg";
const ImageBox = styled("Box")``;
const Image = styled("img")({
  marginTop: 30,
  width: "50%",
});
const Graphs = () => {
  return (
    <Box sx={{ marginTop: 10, display: "flex", zIndex: 100 }}>
      <ImageBox>
        <Typography
          sx={{ color: "#0a1172", fontSize: "18px", fontFamily: "cursive" }}
        >
          FYP-1 Progress Details
        </Typography>
        <Image src={image} alt="logo" />
      </ImageBox>
      <ImageBox>
        <Typography
          sx={{ color: "#0a1172", fontSize: "18px", fontFamily: "cursive" }}
        >
          FYP-2 Progress Details
        </Typography>
        <Image src={image} alt="graph Image" />
      </ImageBox>
    </Box>
  );
};

export default Graphs;
