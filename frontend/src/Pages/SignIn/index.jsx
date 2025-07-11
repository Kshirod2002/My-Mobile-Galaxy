import React, {useState, useContext, useEffect } from 'react'
import { useAuth } from "../../authContext";
import {MyContext} from "../../App";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import axios from "axios";

export default function Signin() {
  const {setisHeaderFooterShow}  = useContext(MyContext);

   useEffect(() => {
      setisHeaderFooterShow(false);
    }, []);

    useEffect(()=>{ 
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      setCurrentUser(null);
    })

const [form, setForm] = useState({
  username: "",
  password: ""
});
const { setCurrentUser} = useAuth();
const { setIsLogin } = useContext(MyContext); 


const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("https://my-mobile-galaxy.onrender.com/login", {
      username: form.username,
      password: form.password,
    }, {
       withCredentials: true 
    });

    localStorage.setItem("token", res.data.token); 
    localStorage.setItem("userId", res.data.userId); 
    localStorage.setItem("username", res.data.username);

    setCurrentUser(res.data.userId);
    setIsLogin(true);
    
    window.location.href = "/"; 
    alert("Login successful");

  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
    console.error("Login Error:", err);
  }
};

  return (
    <>
   
      <section className='signin_page'>
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
                  

                <div className='box card p-3 shadow border-0 signin'>
                   <h2 className='h3'>Sign In</h2>
                     
                     <form  className="needs-validation" noValidate onSubmit={handleLogin }>

                       <div className="mb-3">
                        <label htmlFor='username'
                        className="form-label" >Username </label>
                        <input type="text" className="form-control" id="username"  name="username" value={form.username}
                        onChange={handleChange} required/>
   
                      </div>
                      <div className="mb-3">
                        <label  className="form-label" htmlFor='password'>Password</label>
                         <input type="password" className="form-control" id="password"  name="password" value={form.password}
                        onChange={handleChange} required/>
                      </div>
                       <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                          <label className="form-check-label" htmlFor="exampleCheck1" required>Check me out</label>
                        </div>

                        <div className='submit_btn'>
                           <button type="submit" className="btn btn-primary"
                           
                           >Sign In</button>

                           <Link to="/"><button className='cancel_btn'            >Cancel</button></Link>
                        </div>
                     
                      <p className='p1'>Not Registered ? <Link to="/signup" >Sign Up</Link></p>
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
