import React from 'react'
import {FaTimes} from "react-icons/fa"

function Duty({ duty, deleteTask }) {

  console.log(duty);


  return (
    <div className='task'>
      <h3>
        {duty.task}
        <FaTimes onClick={()=>deleteTask(duty.id) } style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>
        {duty.day}
      </p>
    </div>
  );
}

export default Duty