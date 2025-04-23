import React, { useState } from "react";


const Tasks = ({ tasks }) => {
  
  const [checkedTasks, setCheckedTasks] = useState([]);

  // Function that toggles whether a task at a given index is checked or not
  const ticked = (index) => {
    setCheckedTasks((prevCheckedTasks) => {
      // If the index is already in the checked list, remove it
      if (prevCheckedTasks.includes(index)) {
        return prevCheckedTasks.filter((taskIndex) => taskIndex !== index);
      } else {
        // Otherwise, add it to the list
        return [...prevCheckedTasks, index];
      }
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-6">
      {/* Center the content using text-center class */}
      <ul className="space-y-4">
        {/* Loop over the tasks array and render each task as a list item */}
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
              checkedTasks.includes(index)
                ? "bg-gray-100 line-through text-gray-400"
                : "bg-white border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {/* Checkbox to toggle the checked state of the task */}
            <input
              type="checkbox"
              checked={checkedTasks.includes(index)} // Whether the checkbox is checked
              onChange={() => ticked(index)} // Toggle check status on change
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            {/* Display the task text */}
            <span className="flex-1 text-lg">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the Tasks component so it can be used in other parts of the app
export default Tasks;
