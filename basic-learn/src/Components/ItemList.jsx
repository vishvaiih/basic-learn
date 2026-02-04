import React from 'react'
import { Trash2, Circle, CircleCheck} from "lucide-react";
import {Item,Complete,Btn,Buton,} from "./RightSide";
import { AddTask, MainBox } from "./LeftSide";
import { Box, Typography } from "@mui/material";

function ItemList({handleClickOpen,handleOpen,itm}) {
  return (
    <Item>
    <AddTask sx={{ width: "50%" }}>
      <Complete onClick={() => handleOpen(itm.id)}>
        {itm.status == "complete" ? (
          <CircleCheck size={20} style={{ color: "#75b06f" }} />
        ) : (
          <Circle size={20} style={{ color: "#666b83" }} />
        )}
        {/* <Circle size={15} style={{ color: itm.status == "complete" ? "#75b06f" :"#666b83",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center"}}>
         {itm.status == "complete" ?  <Check size={24} /> : null}
        </Circle> */}

        {/* <PanoramaFishEyeIcon  style={{ color: itm.status == "complete" ? "#75b06f" :"#666b83",display:"flex",alignItems:"center",justifyContent:"center"}}>
          {itm.status == "complete" ?  <CheckIcon size={26} /> : null}
        </PanoramaFishEyeIcon> */}
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
        <Btn>{itm.date}</Btn>
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

  )
}

export default ItemList
