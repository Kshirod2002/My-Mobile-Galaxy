import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { MyContext } from '../../App';
import Header from '../Header';

export default function Product() {
     const {setisHeaderFooterShow}  = useContext(MyContext);
        
  useEffect(() => {
     setisHeaderFooterShow(false);
   }, []); 

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:8081/products");
    setProducts(res.data.products);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8081/products/${id}`);
    alert("Product Deleted")
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <Header/>
    <div className='container'>
        <div className="row  ">  
          <div className="new_product">
           <h1 className='h1'>NEW PRODUCT </h1>
            <table className="table table-bordered">
        <thead>
          <tr className='table_header'>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Color</th>
            <th>Ram</th>
            <th>Storage</th>
            <th>Camera</th>
            <th>Battery</th>
            <th>Price</th>
           
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td>
                <img 
               src={`http://localhost:8081${p.image?.url}`} alt="product"
              width="60px" />
              <div className='delete'>
                 <button onClick={() => handleDelete(p._id)} className="btn btn-danger btn-sm ms-2">Delete</button></div>  
              </td>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.color}</td>
              <td>{p.specs?.ram || "N/A"}</td>
              <td>{p.specs?.storage || "N/A"}</td>
              <td>{p.specs?.camera || "N/A"}</td>
              <td>{p.specs?.battery || "N/A"}</td>
              <td>{p.price} </td>
             
            </tr>
            
           
          ))}
        </tbody>
        

      </table> 
     
    <div >
   <Link to="/products/new_product" className="btn btn_product btn-primary mb-3 ">Add New Product</Link>
   </div>

      </div>
      </div>
      </div>
    </>
  )
}
