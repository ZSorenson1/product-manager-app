import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

export default () => {
    const [ products, setProducts ] = useState([]);
    const removeFromDom = id => {
        setProducts(products.filter(prod => prod._id != id));
    }

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>setProducts(res.data)
        )}, [])
        
    return (
        <div>
            <ProductForm/>
            <hr/>
            <ProductList products={products} removeFromDom={removeFromDom}/>
        </div>
    )
}