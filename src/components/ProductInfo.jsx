import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default props => {
    const [ product, setProduct ] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products/"+props.id)
        .then(res=>setProduct(res.data))
        .catch(err => console.log("Something went wrong", err))
    }, [])
    return (
        <div>
            <h1></h1>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>
        </div>
    )
}