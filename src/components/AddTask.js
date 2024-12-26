import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description.trim()) {
      const newTask = {
        id: Date.now(),
        description,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
