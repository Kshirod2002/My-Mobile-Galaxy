import React, {useState, useContext, useEffect } from 'react'
import { useAuth } from "../../authContext";
import {MyContext} from "../../App";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import axios from "axios";


export default function Signup() {
  const {setisHeaderFooterShow}  = useContext(MyContext);
  
   useEffect(() => {
      setisHeaderFooterShow(false);
    }, []); 

  const [form, setForm] = useState({ 
    username: "",
    phone: "", 
    email: "", 
    password: "" 
  });
  const {setCurrentUser } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/signup", form);
      
       if (res.data && res.data.token && res.data.userId) {
      localStorage.setItem("token", res.data.token); 
      localStorage.setItem("userId", res.data.userId); 

      setCurrentUser(res.data.userId);
      

      window.location.href = "/signin";
      alert("Registration successful!");
    } else {
      throw new Error("Invalid response from server");
    }
    } catch (err) {
      console.error("Signup Error:", err);
      alert(err.response?.data?.message || err.message || "Signup failed");
    }
  };


  return (
    <>
      <section className='signin_page signup_page'>
        <div className="container text-center">
            <div className="row align-items-center">
                <div className="col">

                   <div className='left'>
                    <div className="left_inside">
                      <div className="border">
                      o
                    </div>
                    <div className="mp">
                        50MP
                      </div>
                    <div className="border2">                                          
                      o
                    </div>                   
                     <div className="border3">
                      o
                    </div>
                    </div>                  
                  

                <div className='box card p-3 shadow border-0 signin signup'>
                   <h2 className='h3'>Sign Up</h2>

                     <form action="/signup" method='POST' className="needs-validation" noValidate onSubmit={handleSubmit}>

                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name </label>
                         <input type="text" 
                         name='username'
                         className="form-control" 
                         id="name" aria-describedby="emailHelp" 
                         onChange={handleChange}  required/>
                      </div>

                   
                        <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone No. </label>
                         <input type="text" 
                         name='phone'
                         className="form-control" id="phone" aria-describedby="emailHelp" 
                          onChange={handleChange} required/>
                      </div>

                 <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email </label>
                         <input type="email"
                         name='email'
                         className="form-control" id="email" aria-describedby="emailHelp"  onChange={handleChange} required/>
                      </div>
                        
                       
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                         <input type="password" 
                         name='password'
                         className="form-control" id="exampleInputPassword1"  onChange={handleChange} required/>
                      </div>

                       <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                          <label className="form-check-label" for="exampleCheck1" required>Check me out</label>
                        </div>

                        <div className='submit_btn'>
                           <button type="submit" className="btn btn-primary"
                           >Sign Up</button>

                           <Link to="/"><button className='cancel_btn' >Cancel</button></Link>
                        </div>
                     
                      <p className='p1'>Already Account have ? <Link to="/signin" >Sign In</Link></p>
                      <h5 className='p2'>Or continue with social account</h5>
                      <div className='social'>
                        <div className='social1'><FaFacebook /></div>
                        <div className='social2'><FaGoogle /> </div>
                        
                      </div>
                    </form>
                </div>                                  
           
                </div>
               </div>  
            </div>
        </div>
      </section>
    </>
  )
}
