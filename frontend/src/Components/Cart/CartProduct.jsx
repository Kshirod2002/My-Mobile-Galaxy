import React from 'react';
import axios from 'axios';
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";

const CartProduct = ({ product, dispatch }) => {
  const userId = localStorage.getItem("userId");

  const handleRemove = async () => {
    try {
    
    await axios.delete(`http://localhost:8081/cart/${userId}/${product.productId.toString()}`);

      dispatch({ type: "Remove", id: product.productId });
    } catch (err) {
      console.error("Remove failed:", err.message);
    }
  };

  const increaseQuantity = () => {
    dispatch({ type: "Increase", id: product.productId });
  };

  const decreaseQuantity = () => {
    if (product.quantity > 1) {
      dispatch({ type: "Decrease", id: product.productId });
    }
  };

  return (
    <div className='card p-2 mb-2 all_product'>
      <img src={product.image} alt={product.name} style={{ width: '80px' }} />
      <h5>{product.name}</h5>
      <p>Price: ₹{product.price}</p>
      <p className='qty'>Qty: 
        <button onClick={decreaseQuantity} className='qty_btn'><FaMinusCircle /></button> 
        {product.quantity }
        <button onClick={increaseQuantity} className='qty_btn'><FaCirclePlus /></button>
      </p>
      <button className='btn btn-danger remove' onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartProduct;
