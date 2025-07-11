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

export const Iphone = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [iphones, setIphones] = useState([]); 

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setIphones(data.iphones || []);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">IPHONE</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {iphones.map((iphone, index) => (
        <div key={iphone.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={iphone.image} 
            alt={iphone.name}
            className="card-img-top card_img" 
            onClick={() => handleImageClick(iphone)}
            style={{ cursor: "pointer" }}
            />         
          
          <div className="card-content ">
          <h5 className="text-lg font-semibold mt-2">{iphone.name}</h5>
          <p className="text-sm">{iphone.specs.ram}</p>
          <p className="text-sm">{iphone.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{iphone.price}</p>
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
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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


export  const OnePlus = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [oneplus, setOneplus] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setOneplus(data.oneplus);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">ONEPLUS</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {oneplus.map((oneplus, index) => (
        <div key={oneplus.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={oneplus.image}
            alt={oneplus.name}
             className="card-img-top card_img" 
                     onClick={() => handleImageClick(oneplus)}
                          style={{ cursor: "pointer" }}
      
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{oneplus.name}</h5>
          <p className="text-sm">{oneplus.specs.ram}</p>
          <p className="text-sm">{oneplus.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{oneplus.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

export  const Samsung = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [samsung, setSamsung] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setSamsung(data.samsung);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">SAMSUNG</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {samsung.map((samsung, index) => (
        <div key={samsung.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={samsung.image}
            alt={samsung.name}
             className="card-img-top card_img" 
                     onClick={() => handleImageClick(samsung)}
                          style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{samsung.name}</h5>
          <p className="text-sm">{samsung.specs.ram}</p>
          <p className="text-sm">{samsung.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{samsung.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

export  const Xiaomi = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [xiaomi, setXiaomi] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setXiaomi(data.xiaomi);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">XIAOMI</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {xiaomi.map((xiaomi, index) => (
        <div key={xiaomi.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={xiaomi.image}
            alt={xiaomi.name}
            className="card-img-top card_img" 
                     onClick={() => handleImageClick(xiaomi)}
                          style={{ cursor: "pointer" }}

          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{xiaomi.name}</h5>
          <p className="text-sm">{xiaomi.specs.ram}</p>
          <p className="text-sm">{xiaomi.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{xiaomi.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

export  const Realme = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [realme, setRealme] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setRealme(data.realme);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">REALME</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {realme.map((realme, index) => (
        <div key={realme.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={realme.image}
            alt={realme.name}
            className="card-img-top card_img" 
                     onClick={() => handleImageClick(realme)}
                          style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{realme.name}</h5>
          <p className="text-sm">{realme.specs.ram}</p>
          <p className="text-sm">{realme.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{realme.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

export  const Pixel = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pixel, setPixel] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setPixel(data.pixel);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">PIXEL</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {pixel.map((pixel, index) => (
        <div key={pixel.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={pixel.image}
            alt={pixel.name}
            className="card-img-top card_img" 
                     onClick={() => handleImageClick(pixel)}
                          style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{pixel.name}</h5>
          <p className="text-sm">{pixel.specs.ram}</p>
          <p className="text-sm">{pixel.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{pixel.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

export  const Motorola = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [motorola, setMotorola] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setMotorola(data.motorola);
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
      const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">MOTOROLA</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {motorola.map((motorola, index) => (
        <div key={motorola.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={motorola.image}
            alt={motorola.name}
            className="card-img-top card_img" 
                     onClick={() => handleImageClick(motorola)}
                          style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{motorola.name}</h5>
          <p className="text-sm">{motorola.specs.ram}</p>
          <p className="text-sm">{motorola.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{motorola.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

export  const Vivo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vivo, setVivo] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setVivo(data.vivo);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">VIVO</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {vivo.map((vivo, index) => (
        <div key={vivo.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={vivo.image}
            alt={vivo.name}
            className="card-img-top card_img" 
                     onClick={() => handleImageClick(vivo)}
                          style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{vivo.name}</h5>
          <p className="text-sm">{vivo.specs.ram}</p>
          <p className="text-sm">{vivo.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{vivo.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

export  const Oppo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [oppo, setOppo] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setOppo(data.oppo);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">OPPO</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {oppo.map((oppo, index) => (
        <div key={oppo.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={oppo.image}
            alt={oppo.name}
            className="card-img-top card_img" 
                     onClick={() => handleImageClick(oppo)}
                          style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{oppo.name}</h5>
          <p className="text-sm">{oppo.specs.ram}</p>
          <p className="text-sm">{oppo.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{oppo.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

export  const Asus = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [asus, setAsus] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setAsus(data.asus);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">ASUS</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {asus.map((asus, index) => (
        <div key={asus.id || index} className="p-4 border rounded shadow product">
            
          <img
            src={asus.image}
            alt={asus.name}
            className="card-img-top card_img" 
                     onClick={() => handleImageClick(asus)}
                          style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{asus.name}</h5>
          <p className="text-sm">{asus.specs.ram}</p>
          <p className="text-sm">{asus.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{asus.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

export  const Nothing = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nothing, setNothing] = useState([]);

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
    fetch("/all_mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setNothing(data.nothing);
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
        const res = await axios.post("http://localhost:8081/add-to-cart", {
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
    <h1 className="h1 mob_name">NOTHING</h1>
     <div className="grid grid-cols-3 gap-6 p-4 mob_img">
       
      {nothing.map((nothing, index) => (
        <div key={nothing.id || index} className="p-4 border rounded shadow product ">
            
          <img
            src={nothing.image}
            alt={nothing.name}
            className="card-img-top card_img" 
                     onClick={() => handleImageClick(nothing)}
                          style={{ cursor: "pointer" }}
          />
          <div className="card-content">
          <h5 className="text-lg font-semibold mt-2">{nothing.name}</h5>
          <p className="text-sm">{nothing.specs.ram}</p>
          <p className="text-sm">{nothing.specs.storage}</p>
          <p className="text-sm"><LiaRupeeSignSolid />{nothing.price}</p>
         </div>
         </div>
      ))}
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
            <h2> {selectedProduct.name}</h2>
            <p><strong>Brand:</strong>{selectedProduct.brand}</p>
            <p><strong>Color:</strong>{selectedProduct.color}</p>
            <p><strong>Price:</strong>{selectedProduct.price}</p>
            <p><strong>Ram:</strong>{selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong>{selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong>{selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong>{selectedProduct.specs.battery}</p>
           
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

