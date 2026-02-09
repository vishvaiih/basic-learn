import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SelectOption from "./SelectOption";

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
  handleDateChange,
  error,
}) {
  const handlePriorityChange = (event) => {
    console.log("....", event.target.value);
    setPriority(event.target.value);
  };

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
        <Box>
          <SelectOption
            priority={priority}
            setPriority={setPriority}
            handlePriorityChange={handlePriorityChange}
            optionOfPriority={optionOfPriority}
          />
        </Box>

        <Box sx={{ marginLeft: "4%" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={date}
              format="DD/MM/YYYY"
              onChange={(newValue) => handleDateChange(newValue)}
              slotProps={{
                textField: {
                  size: "small",
                  variant: "outlined",
                  sx: {
                    width: "150px",
                    height: "32px",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      height: "32px",
                      borderRadius: "10px",
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1976d2",
                    },

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1565c0",
                    },

                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0d47a1",
                    },

                    "& input": {
                      padding: "6px 10px",
                      fontSize: "13px",
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>

          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display="flex" gap={2}>
           
              {/* Date Picker Input */}
          {/* <DatePicker
                label="Select Date"
                value={date}
                onChange={(newValue) => handleDateChange(newValue)}
                slotProps={{
                  textField: {
                    width:"20%",
                    border:"2px solid black",
                   },
                }}
              /> */}
          {/* 
            </Box>
          </LocalizationProvider> */}

          <Typography
            sx={{ fontSize: "10px", color: "red", margin: "10px 0px" }}
          >
            {error}
          </Typography>
        </Box>
      </Box>

      <Btn onClick={handleAdd}>Add Task</Btn>
    </MainBox>
  );
}

export default LeftSide;
