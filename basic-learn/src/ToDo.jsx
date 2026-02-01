import React, { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [toDo, setToDo] = useState([]);
  const [editId,setEditId] = useState("");

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


  const handleEdit = (id) => {
    setEditId(id);
    const findTask = toDo?.find((itm) => itm.id === id)
     setTask(findTask.name);
  }

  const handleUpdate = () => {
    const upattask = toDo?.map((itm) => itm.id === editId ? {...itm,name:task} : itm)
    setToDo(upattask);
    setTask("")
    setEditId("");
  }

  const handleCancl = () => {
    setTask("")
    setEditId("")
  }

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
        {!editId ? <button onClick={handleAdd}> Add</button> : (
            <>
            <button onClick = {handleCancl}>cancel</button>
            <button onClick={handleUpdate}>Update</button>
            </>
            
        )}
        
      </div>

      {toDo.map((itm) => (
        <>
        <div style={{display:"flex",justifyContent:"space-between",width:"40%",alignItems:"center"}}>

        <p key={itm.id} style={{color:"red"}}>{itm.name}</p>
          <div>
          <button onClick={() => handleEdit(itm.id)}>edit</button>
          <button >important</button>

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
