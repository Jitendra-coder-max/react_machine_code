import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [startTime, setStartTime] = useState(new Date())


    useEffect(()=>{
        setInterval(()=>{


            setStartTime( new Date())
        },1000)
       

    },[])


    const formatTime =(time) =>{
       return time.toLocaleTimeString('en-US')

    }
  return (
    <div>Timer

         <div><h1>{formatTime(startTime)}</h1></div>

    </div>
  )
}

export default Timer