import { useEffect, useState, useContext } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Features/ContextProvider";
import { GiSelfLove } from "react-icons/gi";
import { useWishlist } from "../../Features/WishlistContext";
import axios from "axios";
import { MyContext } from "../../App";
import Header from "../Header";

const Mobile = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { dispatch } = useContext(CartContext);
  const { dispatchWishlist } = useWishlist();
  const navigate = useNavigate();
const { setisHeaderFooterShow } = useContext(MyContext);
  
    useEffect(() => {
      setisHeaderFooterShow(false);
    }, []); 
  // Fetch mobile data from local JSON file
  useEffect(() => {
    fetch("/mobilesData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch mobile data");
        return res.json();
      })
      .then((data) => {
        setMobiles(data.mobiles || []);
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

  // Handle Image Click to open modal
  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };

  // Close modal
  const handleClose = () => {
    setSelectedProduct(null);
  };

  // Loading & Error UI
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
    <Header/>
      <h1 className="h1 mob_name">MOBILES</h1>

      <div className="grid grid-cols-3 gap-6 p-4 mob_img">
        {mobiles.map((mobile, index) => (
          <div key={mobile.id || index} className="p-4 border rounded shadow product">
            <img
              src={mobile.image}
              alt={mobile.name}
              className="card-img-top card_img"
              style={{ cursor: "pointer" }}
              onClick={() => handleImageClick(mobile)}
            />

            <div className="card-content">
              <h5 className="text-lg font-semibold mt-2">{mobile.name}</h5>
              <p className="text-sm">{mobile.specs.ram}</p>
              <p className="text-sm">{mobile.specs.storage}</p>
              <p className="text-sm">
              <LiaRupeeSignSolid /> {mobile.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal View */}
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
            <h2>{selectedProduct.name}</h2>
            <p><strong>Brand:</strong> {selectedProduct.brand}</p>
            <p><strong>Color:</strong> {selectedProduct.color}</p>
            <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
            <p><strong>Ram:</strong> {selectedProduct.specs.ram}</p>
            <p><strong>Storage:</strong> {selectedProduct.specs.storage}</p>
            <p><strong>Camera:</strong> {selectedProduct.specs.camera}</p>
            <p><strong>Battery:</strong> {selectedProduct.specs.battery}</p>
          </Modal.Body>

          <Modal.Footer>
            <Link to="/wishlist">
              <button
                className="wishlist-btn"
                onClick={() =>
                  dispatchWishlist({
                    type: "ADD_TO_WISHLIST",
                    selectedProduct: selectedProduct,
                  })
                }
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

export default Mobile;