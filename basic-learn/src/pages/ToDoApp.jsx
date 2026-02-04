import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";
import dayjs from 'dayjs';

function ToDoApp() {
  const [task, setTask] = useState("");
  const [toDo, setToDo] = useState([]);
  const [date,setDate] = useState(dayjs('2022-04-17'));

  

  const [priority, setPriority] = useState("Medium Priority");
  const [rightSidePriority,setRightSidePriority] = useState("All")


  const [filterWiseData,setFilterWiseData] = useState([]);

  const optionOfPriority = ["Low Priority", "Medium Priority", "High Priority"];

  const optionOfPriorityOfRightSide = ["All","Low Priority", "Medium Priority", "High Priority"]

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
        // date:date,
      };

      
      let highPriorityTask = toDo.filter((itm) => itm.priority === "High Priority" );

      let mediumPriorityTask = toDo.filter((itm) => itm.priority === "Medium Priority");

      let LowPriorityTask = toDo.filter((itm) => itm.priority === "Low Priority");

      
     if(nwtask.priority == "High Priority"){
      highPriorityTask.push(nwtask);

     }else if(nwtask.priority == "Medium Priority"){
      mediumPriorityTask.push(nwtask);
     }else{
      LowPriorityTask.push(nwtask);
     }
      
      setToDo([...highPriorityTask,...mediumPriorityTask,...LowPriorityTask]);
      setTask("");
    }
  };

  useEffect(() => {
    if (toDo.length > 0) {
      localStorage.setItem("taskList", JSON.stringify(toDo));
    }
  }, [toDo]);

    useEffect(() => {
      const getTask = JSON.parse(localStorage.getItem("taskList")) || [];
      setToDo(getTask);
    },[])

    // console.log("rightSidePriority",rightSidePriority)

  // useEffect(() => {
      
  //   const filterWiseData = toDo.filter((itm) => itm.priority === rightSidePriority);
  //   console.log("filterWiseData",filterWiseData);

  //   setFilterWiseData(filterWiseData)
  // },[rightSidePriority])

//  console.log("filterWiseData",filterWiseData);

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
          optionOfPriority={optionOfPriority}
          date={date}
          setDate={setDate}

        />
        <RightSide toDo={toDo} setToDo={setToDo} optionOfPriority={optionOfPriorityOfRightSide} priority={rightSidePriority} setRightSidePriority={setRightSidePriority} filterWiseData={filterWiseData} setFilterWiseData={setFilterWiseData} />
      </Box>
    </Box>
  );
}

export default ToDoApp;
