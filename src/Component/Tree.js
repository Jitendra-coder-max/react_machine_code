import React, { useState } from 'react'

const Tree = ({dir}) => {

    const [show, setShow] = useState(false);

    if(dir.type==='Folder'){

    
    
    
  return (
    <div onClick={(e)=>{setShow(!show)
        e.stopPropagation()
    }}>
        <span>📁{dir.name}</span>
        
       <div style={{ display:`${show?'block':'none'}`}}>
            {dir.items.map((data) =>(
                <Tree  key={data.id} dir={data}/>
            ))}
        </div>

        
        </div>

    
  )
}

else{

   return <span  style={{display:'flex', margin:15}}>🗄️{dir.name}</span>
}
}




export default Tree