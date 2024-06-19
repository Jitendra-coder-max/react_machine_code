// import React, { useState } from 'react'
// import './star.css'

// const Star = () => {

// const [rating, setRating] = useState(0);
// const [hover, setHover] = useState(0)

//   return (
//     <div>Star Rating

//         <div className='container'>

//             {[1,2,3,4,5].map((num) => {
//                return(

//                 <button
//                  onClick={() => setRating(num)}
//                 > <span className={num<=rating ? 'on' : 'off'}>&#9733;

//                     </span></button>
//                )
//             }) }
//         </div>
//     </div>
//   )
// }

// export default Star;

import React, { useState } from "react";
import "./starr.css";
const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0)

  return (
    <div className="container">
      <h1>star</h1>
      {[1, 2, 3, 4, 5].map((num) => (
        <button onClick={() =>setRating(num)}
                   onMouseOver={() => setHover(num)}
                   onMouseLeave ={ () => setHover(rating)}
        >
          
          <span className={` ${num <= (rating || hover) ? "on" : "off"} `}>
            
            &#9734;
          </span>{" "}
        </button>
      ))}
    </div>
  );
};

export default Star;
