import React, { useState } from 'react'

const Box = () => {

    const [boxes,setBox] = useState([])


    const handleClick =()=>{

        const newBox = {
            id: boxes.length+1,
            box: 'Box'+(boxes.length+1)
        }

setBox([...boxes,newBox])


    }
  return (
    <div style={{display:'flex'}}>Box

        <button onClick={handleClick}> Click here</button>
        {boxes.map((box,index)=>(
           <div key={index} style={{border: '2px solid gray'}}>{box.box}</div>
        ))}
    </div>
  )
}

export default Box