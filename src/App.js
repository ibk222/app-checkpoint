import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div>
      <h1>Redux To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
