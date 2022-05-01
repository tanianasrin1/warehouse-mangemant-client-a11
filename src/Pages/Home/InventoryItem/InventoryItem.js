import React from 'react';
import './InventoryItem.css'

const InventoryItem = ({inventory}) => {
    const {img, name, description, price, quantity, Supplier} = inventory;    
    return (
        <div className='inventory mt-3'>
            <img className='w-100 rounded' src={img} alt="" />
            <h2>{name} </h2>
            <p> {quantity} </p>
            <p> {price} </p>
            <p> Supplier Name: {Supplier} </p>
            <p><small> {description} </small></p>
            <button> Update </button>
        </div>
    );
};

export default InventoryItem;