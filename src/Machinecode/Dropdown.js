//searhcable drop down


import React from 'react'

const Dropdown = () => {


    const options = [
        {value: 'CHOCOLATE', label: 'Chocolate'},
        {value: 'CANDY'  , label: 'Candy'  },
        {value: 'ICE CREAM' , label:'Ice Cream'  },

        {value: 'BURGER'  , label:'Burger'   }


    ]
  return (
    <div style={{ margin:'20px', width:20}}>
        <Select></Select>
    </div>
  )
}

export default Dropdown