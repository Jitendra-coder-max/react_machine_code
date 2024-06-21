import React from 'react'
import useFetch from '../custom/useFetch'

const FetchData = () => {

    const url = 'https://fakestoreapi.com/products'

    const {products} = useFetch(url)
  return (
    <div>
        <ul>
            {
                products.map((product) => {

                    return(
                        <li key={product.id}>
                            <h1>{product.title}</h1>
                            <h1>{product.price}</h1>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default FetchData