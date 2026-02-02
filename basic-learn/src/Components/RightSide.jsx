import React from "react";
import { AddTask, MainBox } from "./LeftSide";
import { Box, Button, Typography, styled } from "@mui/material";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import { Trash2, Circle } from "lucide-react";
import DeleteDialog from "./DeleteDialog";

function RightSide({ toDo,handleDelete }) {
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    marginRight: "5%",
  });


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };


  return (
    <>
      <MainBox sx={{ width: "100%", margin: "3% 0% 0% 0%" }}>
        <AddTask>
          <ChecklistOutlinedIcon sx={{ fontSize: "12px", marginRight: "2%" }} />
          <Typography sx={{ fontSize: "12px" }}>your tasks</Typography>
        </AddTask>

        {toDo?.map((itm) => (
            <>
              <Item>
            <AddTask sx={{ width: "50%" }}>
              <Complete>
                <Circle size={15} style={{ color: "#666b83" }} />
              </Complete>
              <Box>
                <Typography sx={{ fontSize: "11px" }}>{itm.name}</Typography>
                <Btn>mon,feb2</Btn>
              </Box>
            </AddTask>

            <AddTask sx={{ width: "50%", justifyContent: "flex-end" }}>
              <Buton>{itm.status}</Buton>
              <Trash2 size={15} style={{ marginRight: "2%" }} onClick={handleClickOpen}  />
            </AddTask>
          </Item>
          <DeleteDialog open={open} handleClose={handleClose}  handleDelete={handleDelete} id={itm.id}/>  
            </>
         
        ))}
      </MainBox>

      
    </>
  );
}

export default RightSide;
