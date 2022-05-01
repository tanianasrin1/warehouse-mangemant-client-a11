import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css'

const InventoryItem = ({inventory}) => {
    const {id, img, name, description, price, quantity, Supplier} = inventory;
    const navigate = useNavigate();

    const   navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`)

    }  
    return (
        <div className='inventory mt-3'>
            <img className='w-100 rounded' src={img} alt="" />
            <h2>{name} </h2>
            <p> {quantity} </p>
            <p> {price} </p>
            <p> Supplier Name: {Supplier} </p>
            <p><small> {description} </small></p>
            <button onClick= { () => navigateToInventoryDetail (id)}> Update </button>
        </div>
    );
};

export default InventoryItem;