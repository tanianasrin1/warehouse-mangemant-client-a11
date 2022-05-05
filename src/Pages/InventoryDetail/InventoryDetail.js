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

  return (
    <div className="inventory-detail w-25 text-center mx-auto mt-5">
      <div>
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
        <button  className="mb-3 detail-button">Delivered</button>
      </div>
    </div>
  );
};

export default InventoryDetail;
