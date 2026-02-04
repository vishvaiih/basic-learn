import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SelectOption from "./SelectOption";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const MainBox = styled(Box)({
  width: "60%",
  border: "1px solid #d1d8be",
  maxHeight: "60vh",
  borderRadius: "15px",
  overflowY: "auto",
  overflowX: "hidden",
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

export const Field = styled(TextField)({
  margin: "4% 0%",
  "& .MuiOutlinedInput-root": {
    height: "32px",
    borderRadius: "10px",
    "&:hover fieldset": {
      borderColor: "#7d3bed",
    },
  },
});

function LeftSide({
  handleChange,
  handleAdd,
  task,
  setPriority,
  priority,
  optionOfPriority,
  date,
  setDate,
}) {
  const handlePriorityChange = (event) => {
    console.log("....", event.target.value);
    setPriority(event.target.value);
  };

  console.log("date.$D",date.$D);

  return (
    <MainBox sx={{ margin: "3% 3% 0% 0%" }}>
      <AddTask>
        <AddOutlinedIcon
          sx={{ fontSize: "12px", marginRight: "2%", color: "#7d3bed" }}
        />
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SelectOption
          priority={priority}
          setPriority={setPriority}
          handlePriorityChange={handlePriorityChange}
          optionOfPriority={optionOfPriority}
        />
        <Box sx={{ marginLeft: "4%" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
               value={date}
               onChange={(newValue) => setDate(newValue)}
              name="startDate"
              slotProps={{
                textField: {
                  size: "small",
                  sx: {
                    width: "150px",
                    height: "32px",
                    "& .MuiOutlinedInput-root": {
                      height: "15px",
                      borderRadius: "10px",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>

      <Btn onClick={handleAdd}>Add Task</Btn>
    </MainBox>
  );
}

export default LeftSide;
