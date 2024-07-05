import React, { useState } from "react";
import './StarRat.css'
const StarRat = () => {

  const [rating, setRating] = useState(0);
  const [Hover, setHover] = useState(0)

  const handleClick =(val)=>{

  setRating(val);
  }

  
  return (
    <div>
      <div className="container">
      StarRat 
      {[1, 2, 3, 4, 5].map((data, index) => {
       return( <button onClick={ () => handleClick(data)}  
       onMouseEnter={()=> setHover(data)}
       onMouseLeave={() =>setHover(rating)}
       key={index}> 
      
       <span style={{ color: (data <= (rating || Hover)) ? "red" : "blue" }}>
         &#9734; </span></button>);

      })}
      </div>
    </div>
  );
};

export default StarRat;
