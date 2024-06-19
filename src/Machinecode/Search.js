import React, { useState } from 'react'

const Search = () => {

const [list, setList ] = useState(['Apple','Banana','Papaya','Kiwi'])
const[serchText, setSearchText] = useState('')


const filteredList = list.filter((item) => item.toLowerCase().includes(serchText.toLowerCase()))

  return (
    <div>Search
        <input  type='text' placeholder='enter input here' onChange={(e) => setSearchText(e.target.value)}/>
        <ul>
{filteredList.map((item) => (
    <li>{item}</li>
)
)}
</ul>
    </div>
  )
}

export default Search