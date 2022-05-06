import React from 'react';
import useAllInventoryItems from '../../Hook/useAllInventoryItems';
import InventoryItem from '../Home/InventoryItem/InventoryItem';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventories, setInventories] = useAllInventoryItems();
    

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const  url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = inventories.filter(inventory => inventory._id !==id)
                setInventories(remaining);
            })

        }
    }

    return (
        <div className='container'>
            <h2>This is manageInventory page</h2>
             <div className='inventoryItem'>
             {
                inventories.map(inventory => <InventoryItem 
                  key = {inventory._id}
                  inventory ={inventory }
                > <button onClick= { () => handleDelete (`${inventory._id}`)}> Delete</button>  </InventoryItem>)
            }
             </div>
        </div>
    );
};

export default ManageInventory;