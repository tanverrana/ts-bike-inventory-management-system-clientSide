import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://hidden-mountain-55402.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div>
            <div className='m-3 w-50 mx-auto'>
                <h1 className="text-primary text-bold text-center">Add Your Inventory Items</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2' placeholder='Description' {...register("details")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplier")} />
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className="btn btn-primary" type="submit" value="Add Products" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;