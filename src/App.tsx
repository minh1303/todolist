import { useState } from "react";
import "./App.css";
import NewTaskForm from "./Components/NewTask/NewTaskForm";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <h2>To do list</h2>
      <NewTaskForm onTaskChange={setTasks}></NewTaskForm>
      <div>
        <TaskList setTasks={setTasks} tasks={tasks}></TaskList>
      </div>
    </>
  );
}

export default App;
