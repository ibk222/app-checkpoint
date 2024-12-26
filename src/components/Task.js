import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, editTask } from "../redux/taskSlice";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  const handleEdit = () => {
    if (newDescription.trim()) {
      dispatch(editTask({ id: task.id, description: newDescription }));
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.isDone ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={handleToggle}
          >
            {task.description}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
