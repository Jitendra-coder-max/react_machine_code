import React, { useState } from 'react'
import './FolderStructure.css'
const FolderStructure = ({dir}) => {


    const [show, setShow] = useState(false);



    if(dir.type ==='folder'){

    
  return (
    <>
    <div  onClick={ (e) => {setShow(!show);
        e.stopPropagation()
    }}>

        <span className='folder'>📂{dir.name}</span>

        <div   style={{ display: `${show ? 'block': 'none'}`}}>
            {
                dir.items.map((data) => (
                    <FolderStructure key={data.id}  dir={data} />
                ))
            }


        </div>

     

    </div>
    </>
  )

}

    else{
        return <span className='file'> 🗄️{dir.name}</span>
    }

}

export default FolderStructure