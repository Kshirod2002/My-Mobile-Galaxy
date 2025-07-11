import React, { useContext, useEffect, useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Features/ContextProvider";
import { GiSelfLove } from "react-icons/gi";
import { useWishlist } from "../../Features/WishlistContext"; 
import axios from "axios";
import { MyContext } from "../../App";
import Header from "../Header";

const Speaker = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [speakers, setSpeakers] = useState([]);

  const { dispatch } = useContext(CartContext);
  const { dispatchWishlist } = useWishlist();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { setisHeaderFooterShow } = useContext(MyContext);
  
    useEffect(() => {
      setisHeaderFooterShow(false);
    }, []);
    const handleImageClick = (product) => {
    setSelectedProduct(product);
    };
      
    const handleClose = () => setSelectedProduct(null);

  useEffect(() => {
    fetch("/speakersData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setSpeakers(data.speakers);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  // Handle Add to Cart API call
    const handleAddToCart = async (product) => {
      const userId = localStorage.getItem("userId");
  
      if (!userId) {
        alert("Please login first.");
        return navigate("/signin");
      }
  
      const productToSend = {
        productId: product.id || product.productId || product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      };
  
      try {
        const res = await axios.post("https://my-mobile-galaxy.onrender.com/add-to-cart", {
          userId,
          product: productToSend,
        });
        
        alert("Product added to cart successfully!");
        navigate("/cart");
      } catch (err) {
        console.error("Add to cart error:", err.message);
        alert("Failed to add product to cart.");
        
      }
    };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return ( 
    <>
    <Header/>
    <h1 className="h1">SPEAKERS</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {speakers.map((speaker, index) => (
        <div key={speaker.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={speaker.image}
            alt={speaker.name}
            className="card-img-top card_img" 
           onClick={() => handleImageClick(speaker)}
           style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{speaker.name}</h5>
          <p className="text-sm">{speaker.specs.type}</p>
          <p className="text-sm">{speaker.specs.battery}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{speaker.price}</p>
         </div>
         </div>
      ))}
    </div>
     
     {selectedProduct && (
        <Modal show onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid mb-3"
            />
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Type:</strong>{selectedProduct.specs.type}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
            <p><strong>Power:</strong>{selectedProduct.specs.power}</p>
           
          </Modal.Body>
          <Modal.Footer>
              <Link to="/wishlist">
                <button
                  className="wishlist-btn"
                    onClick={() => dispatchWishlist({ type: "ADD_TO_WISHLIST", selectedProduct: selectedProduct })}
                >
                <GiSelfLove /> Add to Wishlist
                </button>
              </Link> 
             <button
              className="add"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Add to Cart
            </button>
          </Modal.Footer> 
        </Modal>
      )}
   
    </>
  );
  
};

export default Speaker;
 
