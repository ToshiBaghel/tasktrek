import React from "react";
import "./App.css";
import Taskform from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoicon from "./assets/direct-hit.png";
import doingicon from "./assets/glowing-star.png";
import doneicon from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="app">
      <Taskform />
      <main className="app_main">
        <TaskColumn task="To do" icon={todoicon} />
        <TaskColumn task="Doing" icon={doingicon} />
        <TaskColumn task="Done" icon={doneicon} />
      </main>
    </div>
  );
};

export default App;
