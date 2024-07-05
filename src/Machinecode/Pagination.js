import React, { useEffect, useState } from 'react'
import './Pagination.css'
const Pagination = () => {


    const [products, setProducts] = useState([])

    const [page,setPage] = useState(1)


   const fetchProducts = async() =>{

    const res = await fetch(`https://dummyjson.com/products?limit=100`)
     const data =  await res.json();

     setProducts(data.products)
    //  console.log(data) 
   }

//    console.log(products)
 
   useEffect(() =>{
    fetchProducts()
   },[])


   const selectPageHandler = (selectedPage) => {
    if(selectedPage >=1 && selectedPage !==page && selectedPage<= products.length/10){
        setPage(selectedPage)
    }

   } 
// console.log([Array(products.length / 10)])
  return (
    <div> 
        {
      
      <div className='products'>
      {
        products.slice(page*10-10,page*10).map((product) => (
            <div className='single_product'  key={product.id}>
                <img src={product.thumbnail}  alt={product.title} />
                <span>{product.title}</span> 
                
                 </div>
        ))
      }
    
      </div>
}

<div className='pagination'>
<span    style={{ opacity: page>1 ? 1:0}} onClick={() => selectPageHandler(page-1)}> ◀️</span>

{
   [ ...Array(products.length/10)].map((_,i) =>(
    <span style={{  backgroundColor: page === i + 1 ? 'gray' : 'white',}} key={i} onClick={() => selectPageHandler(i+1)} > { i+1}</span>
   ))
}

<span  style={{ opacity: page<products.length/10 ? 1:0 }} onClick={ ()=> selectPageHandler(page+1)}> ▶️</span>
</div>



    </div>
  )
}

export default Pagination