import React, { useContext, useReducer, useEffect } from 'react';
import { CartReducer, totalItem, totalPrice } from '../../Features/CartReducer';
import Header from '../Header';
import CartProduct from './CartProduct';
import axios from 'axios';
import { MyContext } from "../../App";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, dispatch] = useReducer(CartReducer, []);
  const { setisHeaderFooterShow } = useContext(MyContext);

  useEffect(() => {
    setisHeaderFooterShow(false);
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const res = await axios.get(`http://localhost:8081/cart/${userId}`);
        const normalizedItems = (res.data.items || []).map(item => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        dispatch({ type: "SET_CART", items: normalizedItems });
      } catch (err) {
        console.error("Error fetching cart:", err.message);
      }
    };

    fetchCart();
  }, []);
 const navigate = useNavigate();
  const handlecheckout = async () =>{
    alert("Sucessfully Order Placed!")
    navigate("/")
  }

  return (
    <>
      <Header />
      <div className='container mt-3'>
        <div className='cart_header'>
          <h2>YOUR CART</h2>
        </div>
        <div className="row">
          <div className="col-4 cart_left">
            {cart.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cart.map((p) => (
                <CartProduct key={p.productId || p.id || p._id} product={p} dispatch={dispatch} />
              ))
            )}
          </div>

          <div className="col-4 cart_right">
            <div className="bg-secondary p-2 cartDetails">
              <h5>Total Items: {totalItem(cart)}</h5>
              <h5>Total Price: ₹{totalPrice(cart)}</h5>
              
              <button onClick={handlecheckout}
              className='btn btn-warning'>CheckOut</button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;