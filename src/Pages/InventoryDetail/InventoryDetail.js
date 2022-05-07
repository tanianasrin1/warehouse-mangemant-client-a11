import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetail.css";

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState({});

 

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const updateQuantity = () => {
    const {quantity, sold, ...rest} = inventory;
    const newQuantity = quantity-1;
    const newSold = sold+1;
    const newInventory = {quantity: newQuantity, sold: newSold, ...rest};
    setInventory(newInventory);

    const url = `http://localhost:5000/Inventory/${inventoryId}`
    fetch(url, {
      method : 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newInventory)
      

    }).then(res=> res.json())
    .then(data => console.log(data))
    
    
    
  }

  const handleQuantity = (e) =>{
    const stockCount = e.target.number.value;
    e.preventDefault();
    const {quantity, ...rest} = inventory;
    const newQuantity = quantity+parseInt(stockCount);
    const newInventory = {quantity: newQuantity, ...rest};
    setInventory(newInventory);

    const url = `http://localhost:5000/Inventory/${inventoryId}`
    fetch(url, {
      method : 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newInventory)
      

    }).then(res=> res.json())
    .then(data => console.log(data))

    e.target.number.value = ''
    
  }

  

  return (
  
  
    <div className="container">
       <h3 className="text-center mt-3">InventoryDetails</h3>
      <div className="inventory-detail w-50 text-center mx-auto mt-5 mb-4">
        <h4>Name: {inventory.name} </h4>
        <img className="details-img" src={inventory.img} alt="" />
        <p>Id: {inventoryId} </p>
        <p>Quantity: {inventory.quantity} </p>
        <p>Price: {inventory.price} </p>
        <p> {inventory.limit} </p>
        <p>Sold: {inventory.sold} </p>
        <p>Supplier Name: {inventory.Supplier} </p>
        <p>
          <small>description: {inventory.description} </small>
        </p>
        
        <form onSubmit={handleQuantity}>
          <input type="number" placeholder="update stock" name="number" id="" />
          <input className="mx-2" type="submit" value="update" />
          
        </form>
        <button onClick={updateQuantity} className="mb-3 detail-button mt-2">Delivered</button>
      </div>

    </div>

    
  );
};

export default InventoryDetail;
