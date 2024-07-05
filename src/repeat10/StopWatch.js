import React ,{useEffect, useState}from 'react'
// import Star from '../Machinecode/Star'

const StopWatch = () => {

    const [startTime, setStartTime] = useState(0)
const [validId, setValidId] = useState(false)

    const startWatch =()=>{
       
   const timer= setInterval(()=>{
    
setStartTime(prev=> prev+1)
   },1000)

   setValidId(timer)

    }

    
const stopWatch =() =>{

    clearInterval(validId)
    setValidId(null)
}

const resumeWatch =()=>{
    setStartTime(0);
    clearInterval(validId)
    setValidId(null)
}

    let hours = Math.floor( startTime/3600) //

    let min = Math.floor((startTime%3600)/60) //

    let sec = Math.floor(startTime%60)
    
  return (
    <div>StopWatch

        <div>
            <h1>{hours}:{min}:{sec}</h1>
            <button onClick={startWatch}> start</button>
            <button onClick={stopWatch}> stop</button>
            <button onClick={resumeWatch}> resume</button>
        </div>
    </div>
  )
}

export default StopWatch