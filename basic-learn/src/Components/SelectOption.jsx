import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const Form = styled(FormControl)({

  "& .MuiOutlinedInput-root": {
    height: "32px",
    borderRadius: "10px",
    "&:hover fieldset": {
      borderColor: "#7d3bed",
    },
  },
});

const Item = styled(MenuItem)({
  margin: "2%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "&.Mui-selected": {
    backgroundColor: "#9929ea",
    borderRadius: "8px",
    color: "#4d2fb2",
    "&:hover": {
      backgroundColor: "none",
    },
  },
});

function SelectOption({priority,handlePriorityChange,optionOfPriority}) {
 

  return (
    <>
      <Form fullWidth>
        <Select
          value={priority}
          onChange={handlePriorityChange}
          sx={{
            fontSize: "13px",
            // color: '#b9b9b9',
          }}
        >
          {optionOfPriority.map((itm) => (
            <Item value={itm}>
              {itm}
              {/* {priority === itm && (
                <Box>
                  <Check />
                </Box>
              )} */}
            </Item>
          ))}
        </Select>
      </Form>
    </>
  );
}

export default SelectOption;
