import React, { useState } from 'react'
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            desc
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return (
        <form action="" onSubmit={e => submitHandler(e)}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = { (e)=> setTitle(e.target.value) }/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = { (e)=> setPrice(e.target.value) }/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = { (e)=> setDesc(e.target.value) }/>
            </p>
            <input type="submit"/>
        </form>
    )
}