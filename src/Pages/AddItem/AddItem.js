import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import './AddItem.css'

const AddItem = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');

  useEffect( () => {
    if(user) {
      setEmail(user.email)
    }
  },[user]) 

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      console.log(data);
      const url = `http://localhost:5000/inventory`;
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)

      })
      .then(res => res.json())
      .then(result => {
          console.log(result);
      })
    };
      

  return (
    <div className="container">
      <div className="add-title">
        <h2 className="p-5">Please add Items</h2>
      </div>
      <div className="w-50 mx-auto mt-5 mb-4">
         <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input className="mb-2" placeholder="Product name"  {...register("name", { required: true, maxLength: 20 })} />
          <input className="mb-2" placeholder="Supplier name"  {...register("Supplier", { required: true, maxLength: 20 })} />
          <textarea className="mb-2" placeholder="Description" {...register("description")} />
          <input className="mb-2" placeholder="Price" type="number" {...register("price")} />
          <input className="mb-2" placeholder="Quantity" type="number" {...register("quantity")} />
          <input className="mb-2" placeholder="Photo URL" type="text" {...register("img")} />
          <input className="mb-2" value={email} type="text" {...register("email")} />
          <input type="submit" value='Add Product' />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
