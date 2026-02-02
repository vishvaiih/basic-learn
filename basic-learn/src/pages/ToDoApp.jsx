import { Box, Typography } from "@mui/material";
import React from "react";
import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";

function ToDoApp() {
  return (
    <Box
      sx={{
        width: "60%",
        border: "2px solid black",
        margin: "20px auto",
        height: "100vh",
      }}
    >
      <Box sx={{ width: "60%" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
          Nicee To-Do
        </Typography>
        <Typography sx={{ color: "grey", fontSize: "12px" }}>
          Search,set priorities add due dates and keep a clean view of progress
          - all in polished,fast UI.
        </Typography>

       
      </Box>
      <Box sx={{display:"flex"}}>
            <LeftSide/>
            <RightSide/>
        </Box>
    </Box>
  );
}

export default ToDoApp;
