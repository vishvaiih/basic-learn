import React from "react";
import { AddTask, MainBox } from "./LeftSide";
import { Box, Button, Typography, styled } from "@mui/material";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";


function RightSide() {
  const Item = styled(Box)({
    width: "100%",
    border: "1px solid #d1d8be",
    borderRadius: "10px",
    margin: "4% 0% 2% 0%",
    minHeight: "12vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const Complete = styled(Box)({
    border: "1px solid #d1d8be",
    height: "28px",
    minWidth: "28px",
    borderRadius: "100%",
    margin: " 0% 2% ",
  });

  const Btn = styled(Button)({
    border: "1px solid #f29aae",
    height: "20px",
    minWidth: "70px",
    borderRadius: "30px",
    backgroundColor: "#f9dfdf",
    fontSize: "10px",
    color: "black",
    textTransform: "capitalize",
  });

  const Buton = styled(Button)({
    
    height: "20px",
    minWidth: "70px",
    borderRadius: "30px",
    backgroundColor: "#ee3a3a",
    fontSize: "10px",
    color: "black",
    textTransform: "capitalize",
  });

  return (
    <>
      <MainBox sx={{ width: "100%", margin: "3% 0% 0% 0%" }}>
        <AddTask>
          <ChecklistOutlinedIcon sx={{ fontSize: "12px", marginRight: "2%" }} />
          <Typography sx={{ fontSize: "12px" }}>your tasks</Typography>
        </AddTask>

        <Item>
          <AddTask >
            <Complete></Complete>
            <Box>
              <Typography sx={{ fontSize: "11px" }}>
                plan the week (top 3 priorities)
              </Typography>
              <Btn>mon,feb2</Btn>
            </Box>
          </AddTask>

          <Box>
            <Buton>medium</Buton>
            <Trash2/>
            
          </Box>
        </Item>
      </MainBox>
    </>
  );
}

export default RightSide;
