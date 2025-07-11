import React from "react";
import { useContext } from 'react';
import { MyContext } from '../../App';
import {useWishlist}  from "../../Features/WishlistContext";
import { useEffect } from "react";
import Header from "../Header";

export default function Wishlist() {
  const { wishlist, dispatchWishlist } = useWishlist();

  const context = useContext(MyContext);
  const {setisHeaderFooterShow}  = useContext(MyContext);
 
  useEffect(() => {
      setisHeaderFooterShow(false);
    }, []);

  return (
    <>
    <Header/>
    <div className="wishlist">

        <div className="cart_header"> 
            <h2 >Your Wishlist</h2>
        </div>

    <div className="wishlist_product">
      {wishlist.length === 0 && <p>No items in wishlist.</p>}
      {wishlist.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <img src={product.image} alt={product.name} />
      
         <div className="wishlist_btn">
           <button className="remove"
           onClick={() => dispatchWishlist({ type: "REMOVE_FROM_WISHLIST", id: product.id })}>
            Remove
          </button>
          </div>
         </div>
                 
      ))}
      </div> 
      </div>
    </>
  );
}
