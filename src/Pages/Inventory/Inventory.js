import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    return (
        <div className="container">
            <h2>Selected Inventory Id:{inventoryId}</h2>
            <div className="product-container">
                <img height="300px" width="300px" src={inventory.img} alt="" />
                <h2>{inventory.name}</h2>
                <h5>Price:${inventory.price}</h5>
                <p>Quantity:{inventory.quantity}</p>
                <p>{inventory.details}</p>
                <p><small>Supplier:{inventory.supplier}</small></p>
            </div>
            <div className="text-center">
                <button className="btn btn-primary m-4">Deliver</button> <button className="btn btn-primary">Add</button>
            </div>
        </div>
    );
};

export default Inventory;