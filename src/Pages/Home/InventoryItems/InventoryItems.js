import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'

const InventoryItems = () => {
    const [inventories, setInventories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/inventory1')
        .then(res => res.json())
        .then(data => setInventories(data))
    } ,[])

    return (
        <div id='InventoryItems' className='container my-5'>
            <h2 className='text-center text-uppercase'> inventory items </h2>
             <div className='inventories-container'>
             {
               inventories.slice(0,6).map(inventory => <InventoryItem
                    key={inventory.id}
                    inventory = {inventory}
               ></InventoryItem>) 
            }

             <Link to = '/manageInventory'>Manage inventory </Link>
             </div>

        </div>
    );
};

export default InventoryItems;