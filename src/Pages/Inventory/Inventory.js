import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Inventory.css";

const Inventory = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://hidden-mountain-55402.herokuapp.com/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    const handleQuantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        //console.log(quantity);

        const updateQuantity = { quantity };
        const url = `https://hidden-mountain-55402.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Success", data);
                alert("Quantity Update successfully");
                event.target.reset();
            })
    }
    return (
        <div className="container">
            <h2 className="text-center tex-bold text-primary">Inventory Items</h2>
            <div className="inventory-container">
                <img height="300px" width="300px" src={inventory.img} alt="" />
                <h5>Id:{inventoryId}</h5>
                <h2>{inventory.name}</h2>
                <h5>Price:${inventory.price}</h5>
                <p>Quantity:{inventory.quantity}</p>
                <p>{inventory.details}</p>
                <p><small>Supplier:{inventory.supplier}</small></p>
            </div>
            <div className="text-center">
                <button className="btn btn-primary m-4">Deliver Items</button>
            </div>
            <div className="text-center my-3">
                <h1 className="text-primary">Update Your Quantity</h1>
                <form onSubmit={handleQuantity}>
                    <input type="number" name="quantity" placeholder="Number Of Quantity" required />
                    <input type="submit" className="btn btn-primary" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default Inventory;