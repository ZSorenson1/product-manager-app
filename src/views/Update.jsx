import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DeleteButton from '../components/DeleteButton'
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm'
export default props => {
    const { id } = props;
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [])

    const submitHandler = (product) => {
        axios.put('http://localhost:8000/api/products/'+id+"/edit", product)
        .then(res=>console.log(res))
    }
    return (
        <>
        {loaded && <ProductForm initialTitle={product.title} initialPrice={product.price} initialDesc={product.desc} onSubmitProp={submitHandler} />}
        <DeleteButton productId= {id} successCallback={ () => navigate("/")} />
        </>
    )
}