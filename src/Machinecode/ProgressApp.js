import React, { useState ,useEffect} from 'react'
import './progressBar.css'
const ProgressApp = () => {

    const [progress,setProgress] = useState(0);


    useEffect(() =>{
       
      const interval =    setInterval(() =>{


            setProgress((prevProgress) =>{
                if(prevProgress ===100){
                    clearInterval(interval)
                    return prevProgress;
                }
                else{
                    return prevProgress+1;
                }
            } )
            

          },100);

        //   return () => clearInterval(interval)
        return () => clearInterval(interval);
        
    
    },[])

  return (
    <div className='container'> 
        <div className='progress-bar' style={{ width: `${progress}%` }}> 
        {progress}%
        </div>

    </div>
  )
}

export default ProgressApp;