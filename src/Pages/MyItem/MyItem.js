import React, { useEffect, useState } from 'react';
import InventoryItem from '../Home/InventoryItem/InventoryItem';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import './MyItem.css'
import axios from 'axios';


const MyItem = () => {
    const [user] = useAuthState(auth);

    const [inventories, setInventories ] = useState([]);
    useEffect( () => {
       
       
            
        const getItem = async() => {
            const email = user?.email;
            const url= `http://localhost:5000/myItem?email=${email}`
            const {data} = await axios.get(url, {
                headers: {
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
              })
              setInventories(data)
        }
           
         
    getItem()
        
        
       
    },[user])
     console.log(inventories)
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
        <h2 className='text-center mt-3'> My Item Page</h2>
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

export default MyItem;