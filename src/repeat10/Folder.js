import React, { useState } from 'react'
import './Folder.css'
const Folder = ({dir}) => {

    const [show, setShow] = useState(false)

if(dir.type === 'folder'){


  return (
    <div  onClick={(e)=> {setShow(!show) 
    e.stopPropagation()  }}>
       
        <span>📁{dir.name}</span>

        <div style={{display: show? 'block': 'none'}}>
            {dir.items.map((data) =>(
                <Folder   key={data.id}  dir={data} />
            ))}
        </div>
    </div>
  )
}
else {
     return <span  className='file'> 🗄️{dir.name}</span>
}
}

export default Folder