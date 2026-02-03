import React, { useState } from "react";
import { AddTask, Field, MainBox } from "./LeftSide";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import { Trash2, Circle, CircleCheck, Search } from "lucide-react";
import DeleteDialog from "./DeleteDialog";
import InputAdornment from '@mui/material/InputAdornment';

function RightSide({ toDo, setToDo }) {
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
    fontSize: "10px",
    color: "black",
    textTransform: "capitalize",
    marginRight: "5%",
  });

  const Field = styled(TextField)({
    
    "& .MuiOutlinedInput-root": {
      height: "32px",
      borderRadius: "10px",
      "&:hover fieldset": {
        borderColor: "#7d3bed",
      },
    },
  });

  

  const [open, setOpen] = useState(false);
  const [completeDialogOpen, setCompleteDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState("");

  const handleClickOpen = (id) => {
    setSelectedTask(id);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedTask("");
    setOpen(false);
  };

  const handleOpen = (id) => {
    setSelectedTask(id);
    setCompleteDialogOpen(true);
  };

  const handlecompleteClose = () => {
    setSelectedTask("");
    setCompleteDialogOpen(false);
  };

  const handleDelete = () => {
    const findTask = toDo?.filter((itm) => itm.id !== selectedTask);
    setToDo(findTask);
    setOpen(false);
  };

  const handleComplete = () => {
    console.log(".....");
    const upattask = toDo?.map((itm) =>
      itm.id === selectedTask
        ? {
            ...itm,
            status: itm.status === "complete" ? "pending" : "complete",
          }
        : itm
    );
    setToDo(upattask);
    setCompleteDialogOpen(false);
  };

  return (
    <>
      <MainBox sx={{ width: "100%", margin: "3% 0% 0% 0%" }}>
        <AddTask sx={{justifyContent:"space-between"}}>
          <Box sx={{display:"flex",alignItems:"center",width:"50%"}}>
            <ChecklistOutlinedIcon
              sx={{ fontSize: "12px", marginRight: "2%", color: "#7d3bed" }}
            />
            <Typography sx={{ fontSize: "12px" }}>your tasks</Typography>
          </Box>

          <Box sx={{display:"flex"}}>

          <Field id="outlined-basic" placeholder="Search tasks..."  startAdornment={
            <InputAdornment position="start">
              <Search/>
            </InputAdornment>
          }  variant="outlined"/>
         
        
        
          </Box>
        </AddTask>

        {toDo?.map((itm) => (
          <>
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
                  <Btn>mon,feb2</Btn>
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
          </>
        ))}
      </MainBox>

      <DeleteDialog
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
        title=" Delete this task?"
        subTitle=" This can't be undone."
        btnText=" Delete"
      />
      <DeleteDialog
        open={completeDialogOpen}
        handleClose={handlecompleteClose}
        handleDelete={handleComplete}
        title="Complete this task?"
        subTitle=""
        btnText="Complete"
      />
    </>
  );
}

export default RightSide;
