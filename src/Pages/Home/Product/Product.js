import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = ({ product }) => {
    const { name, img, details, price, quantity, supplier } = product;
    return (
        <div className="product-container">
            <img height="300px" width="300px" src={img} alt="" />
            <h2>{name}</h2>
            <h5>Price:${price}</h5>
            <p>Quantity:{quantity}</p>
            <p>{details}</p>
            <p><small>Supplier:{supplier}</small></p>
            <Link to="/inventory">
                <button className="btn btn-primary"> Update</button>
            </Link>
        </div>
    );
};

export default Product;