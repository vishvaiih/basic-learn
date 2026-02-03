import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";

function ToDoApp() {
  const [task, setTask] = useState("");
  const [toDo, setToDo] = useState([]);

  const [priority, setPriority] = useState("Medium Priority");

  const handleChange = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  const handleAdd = () => {
    if (task.trim()) {
      const nwtask = {
        id: Math.random() * Math.pow(5, 9),
        name: task,
        status: "pending",
        priority: priority,
      };
      
      setToDo([...toDo, nwtask]);
      setTask("");
    }
  };

  useEffect(() => {
    if (toDo.length > 0) {
      localStorage.setItem("taskList", JSON.stringify(toDo));
    }
  }, [toDo]);

  //   useEffect(() => {
  //     const getTask = JSON.parse(localStorage.getItem("taskList")) || [];
  //     setToDo(getTask);
  //   },[])

  return (
    <Box
      sx={{
        width: "70%",
        margin: "20px auto",
        maxHeight: "80%",
      }}
    >
      <Box sx={{ width: "60%" }}>
        <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
          Nicee To-Do
        </Typography>
        <Typography sx={{ color: "grey", fontSize: "12px" }}>
          Search,set priorities add due dates and keep a clean view of progress
          - all in polished,fast UI.
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <LeftSide
          handleChange={handleChange}
          handleAdd={handleAdd}
          task={task}
          priority={priority}
          setPriority={setPriority}
        />
        <RightSide toDo={toDo} setToDo={setToDo} />
      </Box>
    </Box>
  );
}

export default ToDoApp;
