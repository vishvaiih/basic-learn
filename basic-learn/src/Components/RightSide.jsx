import React, { useEffect, useState } from "react";
import { AddTask, MainBox } from "./LeftSide";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import DeleteDialog from "./DeleteDialog";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import SelectOption from "./SelectOption";
import ItemList from "./ItemList";

export const Item = styled(Box)({
  width: "100%",
  border: "1px solid #d1d8be",
  borderRadius: "10px",
  margin: "4% 0% 2% 0%",
  minHeight: "12vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Complete = styled(Box)({
  border: "1px solid #d1d8be",
  height: "28px",
  minWidth: "28px",
  borderRadius: "100%",
  margin: " 0% 2% ",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Btn = styled(Button)({
  border: "1px solid #f29aae",
  height: "20px",
  minWidth: "70px",
  borderRadius: "30px",
  backgroundColor: "#f9dfdf",
  fontSize: "10px",
  color: "black",
  textTransform: "capitalize",
});

export const Buton = styled(Button)({
  height: "20px",
  minWidth: "70px",
  borderRadius: "30px",
  fontSize: "10px",
  color: "black",
  textTransform: "capitalize",
  marginRight: "5%",
});

const Field = styled(TextField)({
  marginRight: "2%",
  "& .MuiOutlinedInput-root": {
    width: "100%",
    height: "32px",
    borderRadius: "10px",
    "&:hover fieldset": {
      borderColor: "#7d3bed",
    },
  },
});

function RightSide({
  toDo,
  setToDo,
  optionOfPriority,
  priority,
  setRightSidePriority,
  filterWiseData,
  setFilterWiseData,
}) {
  const [open, setOpen] = useState(false);
  const [completeDialogOpen, setCompleteDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState("");

  const [search, setSearch] = useState("");
  const [searchfilterFromAllList, setSearchfilterFromAllList] = useState([]);
  const [searchfilterWiseData, setSearchfilterWiseData] = useState([]);

  const [list, setList] = useState([]);

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
    console.log("......");
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

  const handlePriorityChange = (event) => {
    setRightSidePriority(event.target.value);
  };

  useEffect(() => {
    const filterWiseData = toDo.filter((itm) => itm.priority === priority);

    setFilterWiseData(filterWiseData);
  }, [priority]);


  useEffect(() => {
    const searchfilterFromAllList = toDo.filter((itm) =>
      search.includes(itm.name)
    );
    console.log("searchfilterFromAllList", searchfilterFromAllList);
    setSearchfilterFromAllList(searchfilterFromAllList);

    console.log("vbvb",filterWiseData)

    const searchfilterWiseData = filterWiseData.filter((itm) =>
      itm.name.includes(search)
    );
    console.log(searchfilterWiseData, "searchfilterWiseData");
    setSearchfilterWiseData(searchfilterWiseData);
  }, [search, toDo, filterWiseData]);



  useEffect(() => {
    let list = [];

    if (priority === "All" && search === "") {
      list = toDo;
    } else if (priority === "All" && search !== "") {
      console.log("...",searchfilterFromAllList);
      list = searchfilterFromAllList;
    } else if (priority === "High Priority" || priority === "Low Priority"|| priority === "Medium Priority" && search === "") {
      console.log("????",searchfilterWiseData);
      list = searchfilterWiseData;
    } else {
      list = filterWiseData;
    }

    setList(list);
  }, [
    priority,
    toDo,
    searchfilterFromAllList,
    searchfilterWiseData,
    filterWiseData,
    search,
  ]);

  console.log("list",list)

  return (
    <>
      <MainBox sx={{ width: "100%", margin: "3% 0% 0% 0%" }}>
        <AddTask sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
            <ChecklistOutlinedIcon
              sx={{ fontSize: "12px", marginRight: "2%", color: "#7d3bed" }}
            />
            <Typography sx={{ fontSize: "12px" }}>your tasks</Typography>
          </Box>

          <Box sx={{ display: "flex", width: "70%", alignItems: "center" }}>
            <Field
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="outlined-basic"
              placeholder="Search tasks..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <SelectOption
              optionOfPriority={optionOfPriority}
              priority={priority}
              handlePriorityChange={handlePriorityChange}
            />
          </Box>
        </AddTask>

        {list.map((itm) => (
          <ItemList
            handleClickOpen={handleClickOpen}
            handleOpen={handleOpen}
            itm={itm}
          />
        ))}

        {/* {priority === "All"
          ? toDo.map((itm) => (
              <ItemList
                handleClickOpen={handleClickOpen}
                handleOpen={handleOpen}
                itm={itm}
              />
            ))
          : filterWiseData.map((itm) => (
              <ItemList
                handleClickOpen={handleClickOpen}
                handleOpen={handleOpen}
                itm={itm}
              />
            ))} */}

        {/* {
            priority === "All"
            ? toDo.map((itm) => (
                <ItemList
                  handleClickOpen={handleClickOpen}
                  handleOpen={handleOpen}
                  itm={itm}
                />
              )):(
                priority === "All" && search
              ) ? (
                searchfilterFromAllList.map((itm) => (
                  <ItemList
                    handleClickOpen={handleClickOpen}
                    handleOpen={handleOpen}
                    itm={itm}
                  />
                ))
              ):(
                priority === "High Priority" || priority === "Medium Priority" || priority === "Low Priority" && search
              )?( searchfilterWiseData.map((itm) => (
                <ItemList
                  handleClickOpen={handleClickOpen}
                  handleOpen={handleOpen}
                  itm={itm}
                />
              ))):(
                filterWiseData.map((itm) => (
                  <ItemList
                    handleClickOpen={handleClickOpen}
                    handleOpen={handleOpen}
                    itm={itm}
                  />
                ))
              )
          }   */}
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
