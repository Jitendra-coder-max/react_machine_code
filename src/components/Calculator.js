// import { useState } from 'react';
// import './Calculator.css';
// const  Calculator = ()=> {

//   const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
//     '+', '-', '/', '*', '=', 'C', '.'
//   ]
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setValue(e.target.value);
//   }
//   const handleClick = (e) => {
//     const id = e.target.id;
//     if (id === 'C') {
//       setValue('');
//     } else if (id === '=') {
//       //produce a result
//       handleSubmit();
//     } else {
//       setValue((val) => val + id);
//     }
//     console.log();
//   }

//   const handleSubmit = (e) => {
//     e?.preventDefault();
//     try {
//       const ans = eval(value);
//       setValue(ans);
//     } catch (err) {
//       alert("Invalid Inputs")
//     }
//   }
//   console.log(value);
//   return (
//     <div className="App">
//       <h1>Calculator</h1>
//       <form
//         onSubmit={handleSubmit}
//       >
//         <input
//           value={value}
//           onChange={handleChange}
//           type='text'
//         />
//       </form>
//       <div className='container'
//         onClick={handleClick}
//       >
//         {
//           arr.map((item, idx) => (
//             <button
//               id={item}
//               key={idx}
//               className='cell'
//             >{item}</button>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Calculator;

import React, { useState } from "react";
import './Calculator.css'
const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "*",
    "-",
    "+",
    "/",
    "=",
    "C",
    ".",
  ];

  const handleClick = (val) => {
    if (val === "=") {
      try {
        setResult(eval(input));
      } catch {
        setResult("Error");
      }
    } else if (val === "C") {
      setResult("");
      setInput("");
    } else {
      setInput((prevInput) => prevInput + val);
    }
  };

  return (
    <div className="main">
      <div>
        <div>{input}</div>
        <div>{result}</div>
      </div>
      <div className="conatiner">
        {arr.map((val, index) => (
          <button  className='operator'key={index} onClick={(e) =>handleClick(val)}>
            {val}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
