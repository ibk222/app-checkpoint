import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [], // Array to hold tasks
    filter: "all", // 'all', 'done', or 'not'
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.description = description;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTaskStatus, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;

