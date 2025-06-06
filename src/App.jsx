import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Tasks from "./Components/Tasks";

function App() {
  const [heading, setHeading] = useState('');
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    // localStorage.getItem('tasks') retrieves the value associated with
    //  the key 'tasks' from the browser's local storage.
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever the task list changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (heading.trim() !== "") {
      const newTasks = [...tasks, heading];
      // Here, a new array newTasks is 
      // created by combining the current 
      // list of tasks (which is stored in the tasks state)
      //  with the new task (heading).
      setTasks(newTasks);
      setHeading('');
    }
  };

  const date = new Date();

  return (
    <>
      {/* Navbar Component */}
      {/* <Navbar /> */}

      {/* Main title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 py-6">
        To Do List
      </h1>

      {/* Current date */}
      <h2 className="text-center text-lg text-gray-500 mb-6">
        {date.toISOString().slice(0, 10)}
      </h2>

      {/* Add task section */}
      <div className="flex justify-center gap-4 items-center mb-6">
        <h2 className="text-xl font-medium text-gray-700">Add a task</h2>

        {/* Input field */}
        <input
          className="p-3 text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        {/* Add task button */}
        <button
          className="p-3 text-xl text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleAddTask}
        >
          +
        </button>
      </div>

      {/* Tasks List */}
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
