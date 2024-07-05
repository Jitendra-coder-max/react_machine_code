// import React, { useState } from 'react';

// const Drop = () => {
//   const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' }
//   ];

//   const [selectedValue, setSelectedValue] = useState('');

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <select value={selectedValue} onChange={handleChange}>
//         {options.map(option => (
//           <option key={option.value} value={option.value}>{option.label}</option>
//         ))}
//       </select>
//       <p>Selected value: {selectedValue}</p>
//     </div>
//   );
// };

// export default Drop;



import React, { useState } from 'react'
import './drop.css'
const Drop = () => {

const [selectedValue, setSelectedValue] = useState('')

    const options = [

        { value: 'option 1', label:' option 1'},
        {value: 'option 2', label: 'option 2'},
        {value: 'option 3', label: 'option 3'}
    ]

    const handleChange = (e) => {

          setSelectedValue(e.target.value) 

    }
  return (
    <div className='container'>

        <select  value={selectedValue}  onChange={handleChange}>
            {options.map((option,index) => (
                <option key={index}  value={option.value}>{option.label} </option>
            ))}
        </select>

         <h1 style={{margin: 20}}>{selectedValue}</h1>
        
        
    </div>
  )
}

export default Drop