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
        
        const addProduct = (product) =>{
            axios.post('http://localhost:8000/api/products/new', 
            product)
        .then(res=>setProducts([...products,res.data]))
        .catch(err=>console.log(err))
        }
        
    return (
        <div>
            <ProductForm initialTitle="" initialPrice="" initialDesc="" onSubmitProp={addProduct} />
            <hr/>
            <ProductList products={products} removeFromDom={removeFromDom}/>
        </div>
    )
}