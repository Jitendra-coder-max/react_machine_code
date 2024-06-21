import React, { useState } from 'react'

const Explorer = ({dir}) => {

  const [ show, setShow]  = useState(false)


  if( dir.type === 'folder'){

  
  return (
    <>
    <div onClick={ (e) => {setShow(!show);
        e.stopPropagation()}
    } >


<span>📂{dir.name}</span>

<div  style={{ display: `${show ? 'block': 'none' }`}}>
    {dir.items.map((data,index) => (
        <Explorer  key={data.id}  dir={data}/>
    ))}


</div>

    </div>

        
    </>
  )
}
else {
    return  <span  style={{ display:'flex', flexDirection:'row', marginLeft: '15px',marginTop:'15px', marginBottom:'15px'}}> 🗄️{dir.name}</span>
}
}

export default Explorer