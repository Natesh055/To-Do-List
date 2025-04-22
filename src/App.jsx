import { useState } from "react"; // Importing the useState hook from React to manage component state
import "./App.css"; // Importing the stylesheet to style the app
import Navbar from "./Components/Navbar"; // Importing the Navbar component
import Tasks from "./Components/Tasks"; // Importing the Tasks component

// Main functional component for the App
function App() {
  // useState hooks to manage the state of the input field and task list
  const [heading, setHeading] = useState(''); // 'heading' stores the task input text, 'setHeading' is used to update it
  const [tasks, setTasks] = useState([]);  // 'tasks' stores the array of tasks, 'setTasks' is used to update it

  // Function to handle adding a new task to the tasks list
  const handleAddTask = () => {
    // Check if the input field is not empty
    if (heading.trim() !== "") {
      // Add the new task to the existing list of tasks and update the tasks state
      setTasks([...tasks, heading]); 
      // Clear the input field after adding the task
      setHeading('');  
    }
  };

  // Getting the current date to display in the format 'YYYY-MM-DD'
  const date = new Date();
  
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Main title for the app */}
      <h1 className="text-4xl" style={{ textAlign: "center" }}>
        To Do List
      </h1>

      {/* Displaying the current date */}
      <h1 className="text-center mt-2">{date.toISOString().slice(0, 10)}</h1>

      {/* Section for adding a new task */}
      <div className="flex justify-center mt-5 gap-2">
        {/* Label for the input field */}
        <h2>Add a task</h2>
        
        {/* Input field to enter the task */}
        <input
          className="bg-red-200" // Some styling for the input field
          type="text" // This is a text input
          value={heading} // This binds the input value to the 'heading' state, so it will update as you type
          onChange={(e) => setHeading(e.target.value)} // Updates the 'heading' state whenever the user types
        />
        
        {/* Button to add the task */}
        <button
          className="rounded-xl bg-blue-500" // Button styling
          onClick={handleAddTask} // Calls the handleAddTask function when the button is clicked
        >
          +
        </button>
      </div>

      {/* Pass the tasks to the Tasks component */}
      <Tasks tasks={tasks} /> {/* Passing the tasks state as a prop to the Tasks component */}
    </>
  );
}

export default App;
