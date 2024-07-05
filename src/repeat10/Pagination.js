import React, { useEffect, useState } from 'react'
import './pagination.css'
const Pagination = () => {


    const [products, setProducts] = useState([])
    const [page,setPage] = useState(1)


    const fetchApi = async() => {

        const res =  await fetch('https://dummyjson.com/products?limit=100');

        const data = await res.json()

        setProducts(data.products)
    }



    useEffect(() => {
 
        fetchApi()
        console.log(products)
    },[])

    const handleClick =(selctedPage) =>{

         if(selctedPage>=1 && selctedPage<= products.length/10){        
       setPage(selctedPage)
        }
    }

  return (
    <div>Pagination

        <div className='pagination'>
            {products.slice(page*10-10,page*10).map((product) => {
                return (
                    <div key={product.id} className='pagination_single'> 
                    <img  src={product.thumbnail}  style={{ width:400, height:400}} alt={product.title}/>
                    <p>{product.title}</p>
                    </div>
                )
            }
        )}
        </div>

    <div className='pagiantion_page' >
        <span   className='selectPage' style={{ opacity: page>1 ? '1':0}}onClick={ () => handleClick(page-1)}>◀️</span>
                       { [...Array(products.length/10)].map((_,i) =>(
            <span  className='selectPage' onClick={ () => handleClick(i+1)}>{i+1} </span>
        ))}
        <span   style={{ opacity: page<products.length/10 ? '1':'0'}}className='selectPage' onClick={()=> handleClick(page+1)}>▶️</span>
    </div> 
    </div>
  )
}

export default Pagination