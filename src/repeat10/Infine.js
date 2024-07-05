import React, { useEffect, useState } from 'react'
import './Infine.css'
const Infine = () => {

const [response, setResponse] = useState([])
const[page, setPage] = useState(1)

const [loading, setLoading] = useState(false)

 const fetchApi = async() =>{

const res =  await fetch(`https://jsonplaceholder.typicode.com/comments?` +
 new URLSearchParams({

  _limit:9,
  _page:page
 })
)
 const data = await  res.json()
 
//  setResponse((oldData) => [...oldData,...data]) 

setResponse((prevData) =>[...prevData, ...data] )
 setLoading(false)
 

 }

 useEffect(() => {
fetchApi()
console.log(response) 
 },[page])


const handleScroll = () => {

  if( window.innerHeight+ document.documentElement.scrollTop + 2>= document.documentElement.scrollHeight){

    setPage( prev => prev+1)
    setLoading(true)
  }


}

useEffect(()=>{

  window.addEventListener('scroll', handleScroll)

},[])

  return (
    <div>

<div>
  {response.map((res) => {
   return( <div key={res.id} className='card'>
    <h1>{res.id}</h1>
    <h1>{res.name}</h1>
    <h1>{res.email}</h1>
    
     </div>)
  })}
</div>

{loading && <div> <p>...Loading</p></div>}
    </div>
  )
}

export default Infine