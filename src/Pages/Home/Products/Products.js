import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="container my-5">
            <h2>Products:{products.length}</h2>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;