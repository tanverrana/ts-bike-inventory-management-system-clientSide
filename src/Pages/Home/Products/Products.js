import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="container my-5">
            <h1 className="text-center text-bold text-primary m-3">Our Inventory Items</h1>
            <div className="products-container">
                {
                    products.slice(0, 4).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="text-center m-5">
                <Link to="/manageinventory"><button className="btn btn-primary">Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default Products;