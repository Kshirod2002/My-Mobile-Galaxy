import React, { useContext, useEffect, useState } from 'react'
import HomeBanner from '../../Components/HomeBanner'
import { Button } from 'bootstrap';
import { CiMail } from "react-icons/ci";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Features/ContextProvider';
import { MyContext } from '../../App';

  const products = [
  {
    productId:"392",
    name: "Samsung Galaxy S25",
    brand: "Samsung",
    color:"Icyblue",
    price: 80999.00,
    specs: { "ram": "6GB", "storage": "256GB", "camera": "48MP", "battery": "3900mAh" },
    discount:"15%",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGFDlXui1GVnONyX-wijCyd8eBTPl_OWK7DvqamWvaHqSE5MuFqd3412xwtFH0fI_6sExW_4Acu2FjVQYugNHILtZy7T4njIr4SrQGAQR_4K6e10jlrUJg",
  },
  {
    productId:"393",
    name: "Apple Air Tag",
    brand: "Apple",
    color:"White",
    price: 3190.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "Coin Cell" },
    discount:"5%",
    image: "https://images-na.ssl-images-amazon.com/images/I/71rP7f78eFL._AC_UL600_SR600,400_.jpg",
  },
  {
    productId:"394",
    name: "OnePlus Nord Buds",
    brand: "OnePlus",
    color:"Sky Blue",
    price:2299.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "6 hrs" },
    discount:"10%",
    image: "https://m.media-amazon.com/images/I/61QyJsjiBcL._SX425_.jpg",
  },
  {
    productId:"395",
    name: "Apple AirPods Pro 2",
    brand: "Apple",
    color:"White",
    price: 17990.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "8 hrs" },
    discount:"5%",
    image: "https://images-na.ssl-images-amazon.com/images/I/61SUj2aKoEL._AC_UL600_SR600,400_.jpg",
  },
  {
    productId:"396",
    name: "Apple AirPods 4",
     brand: "Apple",
    color:"White",
    price: 16990.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "8 hrs" },
    discount:"25%",
    image: "https://images-na.ssl-images-amazon.com/images/I/61iBtxCUabL._AC_UL600_SR600,400_.jpg",
  },
  {
    productId:"397",
    name: "Protector Power",
     brand: "Apple",
    color:"White",
    price: 17990.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "8 hrs" },
    discount:"2%",
    image: "https://images-na.ssl-images-amazon.com/images/I/61NGPmmMAIL._AC_UL600_SR600,400_.jpg",
  },
];

const products2 = [
  {
    productId:"398",
    name: "Apple Earpods Headphones", 
    brand: "Apple",
    color:"White",
    price: 1649.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "Nill" },
    discount:"5%",
    image: "https://images-na.ssl-images-amazon.com/images/I/317eB4+yU6L._AC_UL600_SR600,400_.jpg",
  },
  {
    productId:"399",
    name: "HULFU wireless Earbuds Heaphone",
    brand: "HULFU",
    color:"Black",
    price: 706.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "8 hrs" },
    discount:"15%",
    image: "https://images-na.ssl-images-amazon.com/images/I/61L3fsy1EwL._AC_UL600_SR600,400_.jpg ",
  },
  {
    productId:"400",
    name: "Wall charger",
    brand: "CMIAN",
    color:"White",
    price: 899.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "Nill" },
    discount:"2%",
    image: "https://images-na.ssl-images-amazon.com/images/I/61Hh-YlfJOL._AC_UL600_SR600,400_.jpg",
  },
  {
    productId:"401",
    name: "Surge Protector",
    brand: "Voltas",
    color:"White",
    price: 990.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "Nill" },
    discount:"5%",
    image: "https://images-na.ssl-images-amazon.com/images/I/61q9hmplGFL._AC_UL600_SR600,400_.jpg",
  },
  {
    productId:"402",
    name: "Apple MFi Certified",
    brand: "Apple",
    color:"White",
    price: 290.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "Nill" },
    discount:"5%",
    image: "https://images-na.ssl-images-amazon.com/images/I/517ifQfeeDL._AC_UL300_SR300,200_.jpg",
  },
  {
    productId:"403",
    name: "Anker USB C Hub",
    brand: "Anker",
    color:"White",
    price: 399.00,
    specs: { "ram": "Nill", "storage": "Nill", "camera": "Nill", "battery": "Nill" },
    discount:"2%",
    image: "https://images-na.ssl-images-amazon.com/images/I/615HRY2dnML._AC_UL600_SR600,400_.jpg",
  },
];
export default function Home() {

 const [viewMode, setViewMode] = useState("initial"); 
 const [viewMode2, setViewMode2] = useState("initial"); 

 const [selectedProduct, setSelectedProduct] = useState(null);
 const navigate = useNavigate();

 const { setisHeaderFooterShow } = useContext(MyContext);
     
  useEffect(() => {
    setisHeaderFooterShow(true);
  }, []); 

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };
 const { dispatch } = useContext(CartContext);

  const handleClose = () => setSelectedProduct(null);

  const getVisibleProducts = () => {
    if (viewMode === "initial") return products.slice(0, 3);
    if (viewMode === "all") return products;
    return [];
  };

  const getVisibleProducts2 = () => {
    if (viewMode2 === "initial") return products2.slice(0, 3);
    if (viewMode2 === "all") return products2;
    return [];
  };


  const handleToggle = () => {
    setViewMode((prev) => {
      if (prev === "initial") return "all";
      if (prev === "all")
      return "initial";
    });
  };

    const handleToggle2 = () => {
    setViewMode2((prev) => {
      if (prev === "initial") return "all";
      if (prev === "all")
      return "initial";
    });
  };

  const getButtonText = () => {
    if (viewMode === "initial") return "View More";
    return "View Less";
  };

   const getButtonText2 = () => {
    if (viewMode2 === "initial") return "View More";
    return "View Less";
  };

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


  return (
    <>
    
      <div className='home'>
        <HomeBanner />
      </div>

      <section className='homeProducts'>
        <div className="container">
            
          <div className="row ">
            <div className="banners">         
            <div className="col-md-3">

              <div className="banner1">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-smartphone-deals-design-template-59ded5673749b546438bb41983ea2b2c.webp?ts=1737183862" className='cursor'></img>
                </div>
                </div>

                <div className="col-md-3">
                <div className="banner2">
                 <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mobile-accessories-design-template-1d136ae1d70218d654633496c8081545.jpg?ts=1687627392" className='cursor'></img>
              </div>             
            </div>
          </div>
         </div>
         </div>

 <div className="container">
        <div className="row">  
          <div className="all_images">
              
           <div className="col-sm-2 ">
            <div className="info">
              <h1>BEST SELLERS</h1>
              
                 <div className="text-center mt-3">
                  <button className="btn btn-outline-primary" onClick={handleToggle}>
                    {getButtonText()}
                  </button>
                 </div>
            </div>
            
             <div className="info2">
                <p >Do not miss the current offers until the end of the month</p>
              </div>
             

             <div className="container my-4 viewer">     
               <div className="row">
                {getVisibleProducts().map((product) => (
                  <div key={product.id} className="col-sm-4 mb-3">
                   <div className="card h-100">
                     <img src={product.image}
                          alt={product.name} 
                          className="card-img-top card_img" 
                        
                          onClick={() => handleImageClick(product)}
                          style={{ cursor: "pointer" }}
                          />

                       <div className="card-body text-center">
                         <h5 className="card-title">{product.name}</h5>
                         <h5 className="discount"><b>{product.discount}</b></h5>
                           <button
                               className="add"
                                 onClick={() => handleAddToCart(product)}
                             >
                            Add To Cart
                          </button>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
     </div>
   </div>

<div className="all_images2">
 <div className="col-sm-2 ">
            <div className="info3">
              <h1>MOST VIEWERS</h1>
                 <div className="text-center mt-3">
                  <button className="btn btn-outline-primary" onClick={handleToggle2}>
                    {getButtonText2()}
                  </button>
                 </div>
            </div>

             <div className="container my-4 viewers">     
               <div className="row">
                {getVisibleProducts2().map((product) => (
                  <div key={product.id} className="col-sm-4 mb-3 ">
                   <div className="card h-100">
                     <img src={product.image} 
                     alt={product.name} 
                     
                     className="card-img-top card_img" 
                     onClick={() => handleImageClick(product)}
                          style={{ cursor: "pointer" }}
                     />
                       <div className="card-body text-center">
                         <h5 className="card-title">{product.name}</h5>
                          <h5 className="discount"><b>{product.discount}</b></h5>
                        
                            <button
                               className="add"
                                 onClick={() => handleAddToCart(product)}
                             >
                            Add To Cart
                          </button>

                        </div>
                    </div>
                  </div>
                ))} 
              </div>     
           </div>
            
 {selectedProduct && (
        <Modal show={true} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid mb-3"
            />
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
             <p><strong>Color:</strong>{selectedProduct.color}</p>
              <p><strong>Price:</strong>{selectedProduct.price}</p>
               <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
               <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
               <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
               <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
          </Modal.Body>
          <Modal.Footer>
          
          </Modal.Footer>
        </Modal>
      )}
        </div>
        </div>
      </div>
    </section>

<div className='subscribe'>
<section className='newsLettertSection mt-3 mb-3'>
  <div className="container ">
    <div className="row">
      <div className="col-md-6 letter">
        <p className='newsletter'>$20 discount for your first order</p>
        <h1 className='newsletter'>Join our newsletter and get...</h1>
        <p className='newsletter'>Join our email subscription now to get updates on promotions and coupons.</p>

        <form className='form'>
          <CiMail />
          <input type='text'/>
          <button>Subscribe</button>
        </form>
      </div>

      <div className="col-md-6">
        <img src='data:image/jpeg;base64,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' className='coupon'></img>
      </div>
    </div>
  </div>
</section>
</div>
    </>
  )
}
