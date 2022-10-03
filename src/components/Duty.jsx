import React from 'react'
import {FaTimes} from "react-icons/fa"

const Duty = ({duty}) => {
  console.log(duty);
  return (
    <div className='task' >
        <h3>
            {duty.task}
           <FaTimes style={{color:"red",cursor:"pointer"  }} />
        </h3>
        <p>
            {duty.day}
        </p>
    </div>
  )
}

export default Duty