import React from 'react'
import { FaMobile } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlinePriceChange } from "react-icons/md";
import {Link} from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
     <div className='container'>
        <div className='topInfo row'>

            <div className="col footer_icon">
            <span><FaMobile /></span>
            <span >Everyday fresh Mobiles</span>
            </div>

            <div className="col footer_icon">
            <span><TbTruckDelivery /></span>
            <span >Free delivery for order over $70</span>
            </div>

            <div className="col footer_icon">
            <span><CiDiscount1 /></span>
            <span >Daily Mega Discounts</span>
            </div>

            <div className="col footer_icon">
            <span><MdOutlinePriceChange /></span>
            <span >Best Price on the Market</span>
            </div>
            </div>

            <div className="row mt-4 linksWrap">
                <div className="col link1">
                    <h5>PRODUCTS</h5>
                    <ul>
                        <li><Link to="/mobiles">Mobile</Link></li>
                        <li><Link to="/laptops">Laptop</Link></li>
                        <li><Link to="/earphones">Headphone</Link></li>
                        <li><Link to="/earphones">Earphone</Link></li>
                        <li><Link to="/speakers">Speaker</Link></li>
                        <li><Link to="/accessories">BackCover</Link></li>
                        <li><Link to="/accessories">Charger</Link></li>
                    </ul>
                </div>

                <div className="col link1">
                    <h5>SUPPORT</h5>
                    <ul>
                       <li><Link to="#">Resource Page</Link></li>
                        <li><Link to="#">How To's & Tips</Link></li>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Online Order info & Policies</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="col link1">
                    <h5>ABOUT US</h5>
                    <ul>
                        <li><Link to="#">More About</Link></li>
                    </ul>
                </div>

            </div>
    
           <div className='copyright mt-3 pt-3 pb-3'>
            <div>
            <p>Copyright 2025. All rights reserved.</p>
            <ul className='list list-inline'>
                <li className='list-inline-item list-1'>
                    <Link to="#"><FaFacebook /></Link>
                </li>
                <li className='list-inline-item list-2'>
                    <Link to="#"><FaInstagramSquare /></Link>
                </li>
                <li className='list-inline-item list-3'>
                    <Link to="#"><FaTwitterSquare /></Link>
                </li>
                
            </ul>
            </div >
            <div className='footer_img'> 
                <img src='data:image/png;base64,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'/>
            </div>
           </div>
    
   
    </div>
    </footer>
  )
}
