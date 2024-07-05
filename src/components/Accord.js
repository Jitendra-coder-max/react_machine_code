import React, { useState } from 'react'
import './accord.css'
const Accord = ({title,content}) => {

    const [isActive, setIsActive] = useState(false)
  return (
    <div className='conatiner'>
     <div  className='accordian-title' onClick={() => setIsActive(!isActive)}>
 <h1>{title}</h1>
 <h1> {isActive ? '-' : '+'} </h1>
     </div>


          {isActive && <div className='accordian-content'>{content} </div>}
      

    </div>
  )
}

export default Accord