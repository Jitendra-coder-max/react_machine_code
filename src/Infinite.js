import React, { useEffect, useState } from 'react'
import './Infinite.css'
const Infinite = () => {

    // https://jsonplaceholder.typicode.com/posts?_limit=9&_page=0

    const [response, setResponse] = useState([]);
const [page, setPage] = useState(0)
const [loading,setLoading] = useState(false)

    const getData = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?` +
            new URLSearchParams({
                _limit:9,
                _page:page


            })
        )

        const data = await res.json();

        setResponse(oldData => [...oldData,...data])
        setLoading(false)

    }

    console.log(response) 

    useEffect(() => {
getData()
    },[page])

    const handleInfiniteScroll = ()=>{
       if( window.innerHeight + document.documentElement.scrollTop +2>= document.documentElement.scrollHeight){

       
        // alert('8')
        setLoading(true)
        setPage(prev => prev+1)
        }
    }
    console.log( 'hII'+ document.documentElement.scrollTop)
    console.log(window.innerHeight + document.documentElement.scrollTop)

    useEffect(() =>{
        window.addEventListener('scroll', handleInfiniteScroll)
        return () => window.removeEventListener("scroll", handleInfiniteScroll);

    },[])

  return (<>
    <div>
        {response.map((data) =>(
             <div key={data.id} className='card'>
                <h1>{data.title.slice(0,15)}</h1>
                <h1>{data.body}</h1>
             </div>
        ))}
    </div>
    {loading && <div className='loading'> 
        {/* loading class optional  */}
        </div>}

    
    </>
  )
  
}

export default Infinite