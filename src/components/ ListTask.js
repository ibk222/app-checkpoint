import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/taskSlice";
import Task from "./Task";

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => (filter === "done" ? task.isDone : !task.isDone));

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("done"))}>Done</button>
        <button onClick={() => dispatch(setFilter("not"))}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
