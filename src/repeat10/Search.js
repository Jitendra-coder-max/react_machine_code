import React, { useState } from 'react'

const Search = () => {

  const[List, setList] = useState(['Apple','Banana','Orange', 'Kivi'])
  const [inputText, setInputText] = useState('')


  const filteredList = List.filter((data) => data.toLowerCase().includes((inputText.toLowerCase())))
  return (
    <div>Search

<input type='text' placeholder='enter your input'   onChange={(e)=> setInputText(e.target.value)}/>
      <ul>
        {filteredList.map((data,index) =>{
return(
  <li key={index}>{data}</li>
)
        })}
      </ul>
    </div>
  )
}

export default Search