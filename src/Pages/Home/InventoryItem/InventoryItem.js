import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css'

const InventoryItem = ({inventory}) => {
    const {_id, img, name, description, price, quantity, Supplier, limit} = inventory;
    const navigate = useNavigate();

    const   navigateToInventoryDetail = _id => {
        navigate(`/inventory/${_id}`)

    }  
    return (
        <div className='inventory mt-3'>
            <img className='w-100 rounded' src={img} alt="" />
            <h2>{name} </h2>
            <p>Quantity: {quantity} </p>
            <p>Price {price} </p>
            <p> {limit} </p>
            <p> Supplier Name: {Supplier} </p>
            <p><small> {description} </small></p>
            <button onClick= { () => navigateToInventoryDetail (_id)}> Update </button>
        </div>
    );
};

export default InventoryItem;