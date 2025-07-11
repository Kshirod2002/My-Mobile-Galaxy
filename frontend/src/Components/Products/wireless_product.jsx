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

export const Wireless_earphone = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wirelessearphones, setWirelessearphones] = useState([]);

  const { dispatch } = useContext(CartContext);
  const { dispatchWishlist } = useWishlist();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { setisHeaderFooterShow } = useContext(MyContext);
    
      useEffect(() => {
        setisHeaderFooterShow(false);
      }, []); 
  const navigate = useNavigate();    
  const handleImageClick = (product) => {
    setSelectedProduct(product);
    };
      
    const handleClose = () => setSelectedProduct(null);
  

  useEffect(() => {
    fetch("/wireless_productData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setWirelessearphones(data.wirelessearphones);
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
    <h1 className="h1 mob_name">WIRELESS EARPHONES</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {wirelessearphones.map((wirelessearphones, index) => (
        <div key={wirelessearphones.id || index } className="p-4 border rounded shadow product">
            
          <img
            src={wirelessearphones.image}
            alt={wirelessearphones.name}
            className="card-img-top card_img" 
           onClick={() => handleImageClick(wirelessearphones)}
           style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{wirelessearphones.name}</h5>
          <p className="text-sm">{wirelessearphones.specs.type}</p>
          <p className="text-sm">{wirelessearphones.specs.battery}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{wirelessearphones.price}</p>
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
            <p><strong>Noisecancellation:</strong>{selectedProduct.specs.noiseCancellation}</p>
           
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


export const Wireless_headphone = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wirelessheadphones, setWirelessheadphones] = useState([]);

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
    fetch("/wireless_productData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setWirelessheadphones(data.wirelessheadphones);
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
    <h1 className="h1 mob_name">WIRELESS HEADPHONES</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {wirelessheadphones.map((wirelessheadphones, index) => (
        <div key={wirelessheadphones.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={wirelessheadphones.image}
            alt={wirelessheadphones.name}
            className="card-img-top card_img" 
           onClick={() => handleImageClick(wirelessheadphones)}
           style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{wirelessheadphones.name}</h5>
          <p className="text-sm">{wirelessheadphones.specs.type}</p>
          <p className="text-sm">{wirelessheadphones.specs.battery}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{wirelessheadphones.price}</p>
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
            <p><strong>Noisecancellation:</strong>{selectedProduct.specs.noiseCancellation}</p>
           
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


export const Wireless_speaker = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wirelessspeakers, setWirelessspeakers] = useState([]);

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
    fetch("/wireless_productData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setWirelessspeakers(data.wirelessspeakers);
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
    <h1 className="h1 mob_name">WIRELESS SPEAKERS</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {wirelessspeakers.map((wirelessspeaker, index) => (
        <div key={wirelessspeaker.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={wirelessspeaker.image}
            alt={wirelessspeaker.name}
            className="card-img-top card_img" 
           onClick={() => handleImageClick(wirelessspeaker)}
           style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{wirelessspeaker.name}</h5>
          <p className="text-sm">{wirelessspeaker.specs.type}</p>
          <p className="text-sm">{wirelessspeaker.specs.battery}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{wirelessspeaker.price}</p>
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
            <p><strong>Noisecancellation:</strong>{selectedProduct.specs.noiseCancellation}</p>
           
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
  
