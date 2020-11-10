import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/products/'+id+"/edit", {
            title,
            price,
            desc
        })
        .then(res=>console.log(res))
    }
    return (
        <form action="" onSubmit={e => submitHandler(e)}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = { (e)=> setTitle(e.target.value) }/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" value={price} onChange = { (e)=> setPrice(e.target.value) }/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" value={desc} onChange = { (e)=> setDesc(e.target.value) }/>
            </p>
            <input type="submit"/>
        </form>
    )
}