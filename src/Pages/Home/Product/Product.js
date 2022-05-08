import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Product.css";

const Product = ({ product }) => {
    const { name, img, details, price, quantity, supplier, _id } = product;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className="product-container">
            <img height="300px" width="300px" src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price:${price}</h5>
            <p>Quantity:{quantity}</p>
            <p>{details}</p>
            <p><small>Supplier:{supplier}</small></p>

            <button onClick={() => navigateToInventory(_id)} className="btn btn-primary"> Update</button>

        </div>
    );
};

export default Product;