import React, { useContext, useEffect, useReducer, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import SearchBox from '../SearchBox';
import Navigation from '../Navigation';
import { IoIosHeartDislike } from "react-icons/io";
import { MyContext } from '../../App';

const countries = [
  "India", "USA", "UK", "Canada", "Germany", "Australia", "France", "Japan", "Brazil", "China",
  "Russia", "South Korea", "Italy", "Spain", "Netherlands", "Mexico", "Indonesia", "Turkey"
];
 
export default function Header() {
  const [selected, setSelected] = useState('');
  const handleSelect = (country) => {
    setSelected(country);
  };
  
  const {  isLogin, setIsLogin, username, setUsername } = useContext(MyContext);

 const context = useContext(MyContext); 

 const handleLogout = async (e) => {
   localStorage.removeItem("token");
   localStorage.removeItem("userId");
   localStorage.removeItem("username");
   
   setIsLogin(false);
   setUsername("");
   window.location.href = "/"; 
}

    return (
    <>
      <div className='headerWrapper'>
        <div className="container">
            <h6 className=' firstpart'>
            <marquee>WELCOME TO MY <b>MOBILE GALAXY SHOP </b></marquee>
            </h6>
        </div>

    <div className='header'>
        <div className="container">
            <div className="row ">
                <div className="secondpart">
                
                <div className="col-3">
                  <div className='logo'>
                  <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                </div>
            </div>

            <div className="col">           
                <div className='countryDrop'>
                  <p> Location</p>
                  <div className='location'>
                    <p ><b>{selected}</b></p>
                    <button className='btn1' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <FaAngleDoubleDown />
                    </button> 

                 <div className="offcanvas offcanvas-start flex" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                       <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        Choose your Delivery Location</h5>
                       <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                     </div>
                     <div className="offcanvas-body">
                       <div>
                            Enter your address and we will specify the offer for your area.
                          </div> 
                          <div className="dropdown mt-3 ">
                           <button className="btn2 btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Country
                            </button>
                         
                        <ul className="dropdown-menu">    
                          {countries.map((country, index) => (
                        <li key={index}>
                          <a
                           className="dropdown-item"
                            onClick={() => handleSelect(country)}
                          >
                            {country}
                         </a>
                        </li>
                      ))}
                         </ul>
    

                       {selected && (
                          <h3 className="mt-4  select">You selected: {selected}</h3>
                        )}
                           </div>
                         </div>
                        </div>


                  </div>  
                </div>
            </div>

            <div className="col-5">
              <SearchBox /> 
             </div>

             <div className="col-3"> 
                    <div className='cart'>
                        <div className='cart_item'>
                         
                        {isLogin ? (
                          <>
                        <span>Welcome, <b>{username}</b></span> 
                        
                         <button className="btn logout_btn " onClick={handleLogout}>Logout</button>   
                         </>                  
                          ) : ( 
                           <Link className="nav-link list sign" to="/signin"> <FaUser /><p>SIGNIN</p>
                           
                           </Link> 
                          )} 

                          
                        </div>
                          
                        <Link className="nav-link list all_wishlist" to="/wishlist"><IoIosHeartDislike/>
                        </Link>
                                                                      
                        <Link className="nav-link list list_cart" to="/cart"><FaShoppingCart /></Link>
                    </div>
           </div>


            </div> 
         </div>
        </div>
    </div>

   <Navigation />
        


    </div>

    </>
  )
}
