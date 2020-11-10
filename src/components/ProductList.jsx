import React from 'react'
import { Link } from '@reach/router'
import axios from 'axios'
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/'+id+"/delete")
        .then(res => removeFromDom(id))
    }


    return (
        <div>
            <h2>All Products</h2>
        {props.products.map((item, i) => {
            return <p key={i}>
                <Link to={"/products/"+ item._id}>{item.title}</Link> | <Link to={"/products/"+ item._id+"/edit"}>edit</Link> | <button onClick={(e) => deleteProduct(item._id)}>delete</button></p>
        })}
        </div>
    )
}