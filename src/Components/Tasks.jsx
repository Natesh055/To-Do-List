import React, { useState } from "react";

const Tasks = ({ tasks }) => {
  const [checkedTasks, setCheckedTasks] = useState([]);

  const ticked = (index) => {
    setCheckedTasks((prevCheckedTasks) => {
      if (prevCheckedTasks.includes(index)) {
        // Remove the task from the checked list
        return prevCheckedTasks.filter((taskIndex) => taskIndex !== index);
      } else {
        // Add the task to the checked list
        return [...prevCheckedTasks, index];
      }
    });
  };



  return (
    <div>
      
      <div className="text-center">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: checkedTasks.includes(index) ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={checkedTasks.includes(index)}
                onChange={() => ticked(index)}
              />
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
