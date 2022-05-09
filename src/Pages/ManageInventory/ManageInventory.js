import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
    const [products, setProducts] = useInventory();

    const handleDelete = id => {
        const proceed = window.confirm("Are you Sure for Delete Inventory?");
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })

        }
    }

    return (
        <div className="container">
            <h2>Manage Your Inventory Items</h2>
            <div className="products-container">
                {
                    products.map(product => <div className="product-container" key={product._id}>
                        <img height="300px" width="300px" src={product.img} alt="" />
                        <h2>{product.name}</h2>
                        <h5>Price:${product.price}</h5>
                        <p>Quantity:{product.quantity}</p>
                        <p>{product.details}</p>
                        <p><small>Supplier:{product.supplier}</small></p>
                        <button className="btn btn-primary" onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>)
                }
            </div>
            <div className="text-center m-5">
                <Link to="/addproducts"><button className="btn btn-primary">Add Inventory Items</button></Link>
            </div>
        </div>
    );
};

export default ManageInventory;