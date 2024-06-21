import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
           const fetchApi = async() => {

            const res = await fetch(url);
            const data = await res.json()
            setProducts(data)
           }
           fetchApi();
    },[])
  return { products}
    
  
}

export default useFetch