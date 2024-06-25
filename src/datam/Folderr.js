import React, { useState } from 'react'

const Folderr = ({dir}) => {

    const [show, setShow] = useState(false)

    if(dir.type ==='folder'){

    
  return (
    <div onClick={ (e) => {setShow(!show)
        e.stopPropagation()
    }}
    >


        <sapn>📂{dir.name}</sapn>

        {   /* <div  style={{  display: show? 'block': 'none'}}> */}
         {  show && <div>

            { dir.items.map((val, index) => (
                <Folderr  key={index} dir={val}/>
            ))}
            
             </div>}




    </div>
  )}

  else {
    return <span style={{display:'flex', flexDirection:'column', marginLeft:'20px'}}>🗄️{dir.name}</span>
  }
}

export default Folderr