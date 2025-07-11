import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import Header from "../Header";

export default function Addproduct() {
   const {setisHeaderFooterShow}  = useContext(MyContext);
          
   useEffect(() => {
      setisHeaderFooterShow(false);
    }, []); 

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "", price: "", brand: "", color: "", image: null, ram:"",storage:"",camera:"", battery:""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct({ ...product, image: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in product) {
      if (key === "image" && product[key]) {
        formData.append("image", product[key]);
      } else {
        formData.append(key, product[key]);
      }
    }

    try {
      await axios.post("http://localhost:8081/add", formData);
      navigate("/products");
      alert("New product added Suceesfully")
    } catch (error) {
      console.error("Add Product Error:", error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-4 add_background">      
        <div className="add_newproduct">
          {/* <h2 className="h2">Add Product</h2> */}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row align-items-start">

          <div className=" col mb-3">
            <label>Name</label>
            <input name="name" value={product.name} onChange={handleChange} className="form-control" required />
          </div>

          <div className="col mb-3">
            <label>Price</label>
            <input name="price" value={product.price} onChange={handleChange} className="form-control" required type="number" />
          </div>
          </div>

          <div className="row align-items-start">
          <div className="col mb-3">
            <label>Brand</label>
            <input name="brand" value={product.brand} onChange={handleChange} className="form-control" />
          </div>

          <div className="col mb-3">
            <label>Color</label>
            <input name="color" value={product.color} onChange={handleChange} className="form-control" />
          </div>
          </div>

          <div className="row align-items-start">
          <div className="col mb-3">
            <label>Ram</label>
            <input name="ram" value={product.ram} onChange={handleChange} className="form-control" required />
          </div>
          <div className="col mb-3">
            <label>Storage</label>
            <input name="storage" value={product.storage} onChange={handleChange} className="form-control" required />
          </div>
          </div>

          <div className="row align-items-start">
          <div className="col mb-3">
            <label>Camera</label>
            <input name="camera" value={product.camera} onChange={handleChange} className="form-control" required />
          </div>
          <div className="col mb-3">
            <label>Battery</label>
            <input name="battery" value={product.battery} onChange={handleChange} className="form-control" required />
          </div>
          </div>

          <div className="mb-3">
            <label>Image</label>
            <input type="file" name="image" onChange={handleChange} className="form-control" accept="image/*" required />
          </div>
         
          <button className="btn btn-success">Add</button>
           <Link to="/products"><button className='send'>Back</button></Link>
        </form>
     
        </div>
      </div>
    </>
  );
}

