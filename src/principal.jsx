import axios from 'axios'
import { ProductCard } from './productCard.jsx'
import { useState, useEffect } from 'react'

export function Principal(){

    const [products,setProducts] = useState(["no products"])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/products/listProducts')
        .then(response =>{
            setProducts(response.data)
        })
      },[]);

    
    return(
        <>
            <ul>
                {products.map(product => (
                    <li key={product.idProduct}>
                        <ProductCard nombre={product.name} existencias={product.stock} valor={product.unitPrice}></ProductCard>
                    </li>    
                ))}
            </ul>
        </>
    )


}