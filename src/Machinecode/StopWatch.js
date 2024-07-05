import React, { useEffect, useState } from 'react'

const StopWatch = () => {

    const [startTime, setStartTime] = useState(0);
    const [validId, setValidId] = useState(null);


    
    
    const startWatch = () => {
        
   
      const timer =   setInterval(() =>{
            setStartTime(startTime => startTime+1)
        },1000)
    
        setValidId(timer)
    

    
}

   const  stopWatch = () => {

    
    clearInterval(validId)
    setValidId(null)


   }

   const resetWatch = () => {

    clearInterval(validId)
    setValidId(null)
    setStartTime(0)
   }



                let hours = Math.floor( startTime/3600);// 60*60=

                let mins =  Math.floor((startTime%3600)/60); ///

                let sec = Math.floor(startTime)%60

  return (
    <div>StopWatch

      <h1>  {hours}:{mins}:{sec} </h1>

        <button onClick={startWatch}>Start</button>
        <button onClick={stopWatch}>Stop</button>
        <button onClick={resetWatch}>Reset</button>
    </div>
  )
}

export default StopWatch;