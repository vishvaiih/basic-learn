import React, { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [toDo, setToDo] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  const handleAdd = () => {
    const nwtask = {
      id: Math.random() * Math.pow(5, 9),
      name: task,
      status: "pending",
    };

    setToDo([...toDo, nwtask]);
    setTask("");
  };

  console.log("toDo", toDo);

  return (
    <>
      <div >
        <input
          type="text"
          name="text"
          value={task}
          style={{ marginRight: "10px" }}
          onChange={(e) => handleChange(e)}
        ></input>
        <button onClick={handleAdd}> Add</button>
      </div>

      {toDo.map((itm) => (
        <>
        <div style={{display:"flex",justifyContent:"space-between",width:"40%",alignItems:"center"}}>

        <p key={itm.id} style={{color:"red"}}>{itm.name}</p>
          <div>
          <button>edit</button>
          <button>important</button>

          <button>delete</button>

          <button>complete</button>

          </div>

        </div>
        
          
        </>
      ))}
    </>
  );
}

export default ToDo;
