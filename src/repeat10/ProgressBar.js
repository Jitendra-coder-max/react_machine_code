import React, { useEffect, useState } from 'react'
import './ProgressBar.css'
const ProgressBar = () => {


    const [progress, setprogess] = useState(0)


    useEffect(() =>{

    const timer =    setInterval(() =>{
            if(progress<100){

            
setprogess(progress+5)
            }
        },1000)

        return () =>  clearInterval(timer)

    },[progress])
  return (
    <div>ProgressBar

        <div className='container'>
 
              
              <div className='innerDiv'  style={{ width: `${progress}%`}}> </div>
              <h1>{progress}%</h1>


        </div>
    </div>
  )
}

export default ProgressBar