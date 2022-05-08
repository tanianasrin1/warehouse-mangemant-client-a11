import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'

const InventoryItems = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        fetch('https://mysterious-bastion-52209.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setInventories(data))
    } ,[])

    return (
        <div id='InventoryItems' className='container my-5'>
            <h2 className='text-center text-uppercase'> inventory items </h2>
             <div className='inventories-container'>
             {
               inventories.slice(0,6).map(inventory => <InventoryItem
                    key={inventory._id}
                    inventory = {inventory}
               >   <button onClick= { () => navigate(`/inventory/${inventory._id}`)}> Update </button> </InventoryItem>) 
            }

             <Link className='manage-button' to = '/manageInventory'>Manage inventory </Link>
             </div>

        </div>
    );
};

export default InventoryItems;