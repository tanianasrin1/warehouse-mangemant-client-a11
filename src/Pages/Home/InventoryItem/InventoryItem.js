import React from 'react';
import './InventoryItem.css'

const InventoryItem = ({children, inventory}) => {
    const {_id, img, name, description, price, quantity, Supplier, limit} = inventory;
    

   
    return (
        <div className='inventory mt-3'>
            <img className='w-100 rounded' src={img} alt="" />
            <h2>{name} </h2>
            <p>Quantity: {quantity} </p>
            <p>Price {price} </p>
            <p> {limit} </p>
            <p> Supplier Name: {Supplier} </p>
            <p><small> {description} </small></p>
            {
                children
            }
        </div>
    );
};

export default InventoryItem;