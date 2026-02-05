import React from "react";
import { Trash2, Circle, CircleCheck } from "lucide-react";
import { Item, Complete, Btn, Buton } from "./RightSide";
import { AddTask, MainBox } from "./LeftSide";
import { Box, Button, Typography,styled } from "@mui/material";

export const Butn = styled(Button)({
  border: "1px solid #57595b",
  height: "20px",
  minWidth: "70px",
  borderRadius: "30px",
  backgroundColor: "#ececec",
  fontSize: "10px",
  color: "black",
  textTransform: "capitalize",
});


function ItemList({ handleClickOpen, handleOpen, itm }) {
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <Item>
      <AddTask sx={{ width: "50%" }}>
        <Complete onClick={() => handleOpen(itm.id)}>
          {itm.status == "complete" ? (
            <CircleCheck size={20} style={{ color: "#75b06f" }} />
          ) : (
            <Circle size={20} style={{ color: "#666b83" }} />
          )}
        </Complete>
        <Box>
          <Typography
            sx={{
              fontSize: "11px",
              textDecoration:
                itm.status == "complete" ? "line-through" : "none",
            }}
          >
            {itm.name}
          </Typography>

          {todayDate < itm.date ? (
            <Btn>{`${itm.date}` + " " + "Duedate"}</Btn>
          ) : (
            <Butn>{`${itm.date}`}</Butn>
        
          )}

        </Box>
      </AddTask>

      <AddTask sx={{ width: "50%", justifyContent: "flex-end" }}>
        <Buton
          sx={{
            backgroundColor:
              itm.priority == "Low Priority"
                ? "#75b06f"
                : itm.priority == "Medium Priority"
                ? "#ff9644"
                : "#ee3a3a",
          }}
        >
          {itm.priority}
        </Buton>
        <Trash2
          size={15}
          style={{ marginRight: "2%" }}
          onClick={() => handleClickOpen(itm.id)}
        />
      </AddTask>
    </Item>
  );
}

export default ItemList;
