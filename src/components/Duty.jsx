import React from "react";
import { FaTimes } from "react-icons/fa";

function Duty({ duty, deleteTask, toogleDone }) {
  console.log(duty);
  const { task, day } = duty;

  return (
    <div className="task" onDoubleClick={() => toogleDone(duty.id)}>
      <h3>
        {task}
        <FaTimes
          onClick={() => deleteTask(duty.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{day}</p>
    </div>
  );
}

export default Duty;
