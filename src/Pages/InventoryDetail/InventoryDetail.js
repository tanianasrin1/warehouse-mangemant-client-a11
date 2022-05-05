import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetail.css";

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState({});

 

  useEffect(() => {
    const url = `http://localhost:5000/inventory1/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const updateQuantity = () => {
    const {quantity, ...rest} = inventory;
    const newQuantity = quantity-1;
    const newInventory = {quantity: newQuantity, ...rest};
    setInventory(newInventory);
    
  }

  const handleQuantity = (e) =>{
    const stockCount = e.target.number.value;
    e.preventDefault();
    const {quantity, ...rest} = inventory;
    const newQuantity = quantity+parseInt(stockCount);
    const newInventory = {quantity: newQuantity, ...rest};
    setInventory(newInventory);
  }

  return (
    <div className="inventory-detail w-25 text-center mx-auto mt-5">
      
        <h4>Name: {inventory.name} </h4>
        <img className="details-img" src={inventory.img} alt="" />
        <p>Id: {inventoryId} </p>
        <p>Quantity: {inventory.quantity} </p>
        <p>Price: {inventory.price} </p>
        <p> {inventory.limit} </p>
        <p>Supplier Name: {inventory.Supplier} </p>
        <p>
          <small>description: {inventory.description} </small>
        </p>
        <button onClick={updateQuantity} className="mb-3 detail-button">Delivered</button>
      <form onSubmit={handleQuantity}>
          <input type="number" placeholder="update stock" name="number" id="" />
          <input type="submit" value="update" />
      </form>

    </div>

    
  );
};

export default InventoryDetail;
