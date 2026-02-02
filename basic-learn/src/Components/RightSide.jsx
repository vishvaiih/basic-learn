import React from "react";
import { AddTask, MainBox } from "./LeftSide";
import { Box, Typography,styled } from "@mui/material";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";

function RightSide() {
  const Item = styled(Box)({
    width: "100%",
    border:"1px solid #d1d8be",
    borderRadius: "10px",
    margin:"4% 0% 2% 0%",
    minHeight:"18vh",
    display:"flex",
    alignItems:"center",
    padding:"0% 2%"
  });

  return (
    <>
      <MainBox sx={{ width: "100%", margin: "3% 0% 0% 0%" }}>
        <AddTask>
          <ChecklistOutlinedIcon sx={{ fontSize: "12px", marginRight: "2%" }} />
          <Typography sx={{ fontSize: "12px" }}>your tasks</Typography>
        </AddTask>

        <Item>
            <Box sx={{border:"1px solid #d1d8be",height:"5vh",width:"5%",borderRadius:"10px"}}></Box>
        </Item>
      </MainBox>
    </>
  );
}

export default RightSide;
