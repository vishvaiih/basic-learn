import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";


export const MainBox = styled(Box)({
  width: "60%",
  border: "1px solid #d1d8be",
  minHeight: "55vh",
  borderRadius: "15px",
//   marginTop: "4%",
  padding: "2%",
});

 export const AddTask = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const Btn = styled(Button)({
  width: "100%",
  color: "white",
  borderRadius: "10px",
  backgroundColor: "#7d3bed",
  fontSize: "12px",
  textTransform: "capitalize",
  margin: "3% 3% 0% 0%",
});

const Field = styled(TextField)({
  marginTop: "4%",
  "& .MuiOutlinedInput-root": {
    height: "32px",
    borderRadius: "10px",
  },
});

function LeftSide({handleChange,handleAdd,task}) {
  return (
    <MainBox sx={{margin:"3% 3% 0% 0%"}}>
      <AddTask>
        <AddOutlinedIcon sx={{ fontSize: "12px", marginRight: "2%" }} />
        <Typography sx={{ fontSize: "12px" }}>Add a task</Typography>
      </AddTask>

      <Field
        onChange={(e) => handleChange(e)}
        value={task}
        fullWidth
        id="outlined-basic"
        placeholder="What needs to get done?"
        variant="outlined"
        InputProps={{
          style: {
            fontSize: 11,
          },
        }}
      />
      <Btn onClick={handleAdd}>Add Task</Btn>
    </MainBox>
  );
}

export default LeftSide;
