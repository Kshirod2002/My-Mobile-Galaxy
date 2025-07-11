import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaRegWindowClose } from "react-icons/fa";

const Navigation = () => {
   const [isopenSidebarVal, setisopenSidebarval] = useState(false); 
   const handleClose = () => setisopenSidebarval(null);
   
    return(
        <>
        <div className='container'>
            <div className="row  ">  
                <div className="all_category">
                               
                        <button className="line2"
                        onClick={() =>setisopenSidebarval(!isopenSidebarVal)}>                      
                            ALL CATEGORY 
                            <MdOutlineArrowDropDown />
                        
                        </button>
    <div className={`sidebar ${isopenSidebarVal=== true ? 'open' : ''}`}>
        <ul>
          
          <Link className="nav-link" to="/mobiles">Mobile</Link>
          <Link className="nav-link" to="/earphones">Earphone</Link>
          <Link className="nav-link" to="/speakers">Speaker</Link>
          <Link className="nav-link" to="/laptops">Laptop</Link>
          <Link className="nav-link" to="/accessories">Accessory</Link>
         <button className="close_btn" onClick={handleClose}>
              <FaRegWindowClose />
            </button>
        </ul>
      </div>

                <div className="col-4 homebar">
                    <ul className="listnum  list-inline">
                        <div className="homebar_first">
                        <li className="list-inline-item"><Link to="/"><IoHomeOutline />HOME</Link></li>

                        <li className="list-inline-item dropdown ">
                            <button 
                            type="button"
                            className="btn btn-link dropdown-toggle btn3"  
                            data-bs-toggle="dropdown" 
                            aria-expanded="false" 
                            >
                                Mobile
                            </button>
                            <ul className="dropdown-menu ">
                             
                              <Link className="nav-link" to="/iphones">IPhone</Link>
                              <Link className="nav-link" to="/oneplus">OnePlus</Link>
                              <Link className="nav-link" to="/samsung">Samsung</Link>
                              <Link className="nav-link" to="/xiaomi">Xiaomi</Link>
                              <Link className="nav-link" to="/realme">Realme</Link>
                              <Link className="nav-link" to="/pixel">Pixel</Link>
                              <Link className="nav-link" to="/motorola">Motorola</Link>
                              <Link className="nav-link" to="/vivo">Vivo</Link>
                              <Link className="nav-link" to="/oppo">Oppo</Link>
                              <Link className="nav-link" to="/asus">Asus</Link>
                              <Link className="nav-link" to="/nothing">Nothing</Link>
                             </ul>
                        </li>

                        <li className="list-inline-item dropdown">
                            <button className="btn btn-link dropdown-toggle btn3" data-bs-toggle="dropdown"  aria-expanded="false">
                                Earphone</button>
                              <ul className="dropdown-menu ">
                                <Link className="nav-link" to="/wire_earphones">Wire</Link>
                                <Link className="nav-link" to="/wireless_earphones">Wireless</Link>
                             </ul>
                        </li>

                         <li className="list-inline-item dropdown">
                              <button className="btn btn-link dropdown-toggle btn3" data-bs-toggle="dropdown" aria-expanded="false">HeadPhone</button>
                              <ul className="dropdown-menu">
                              <Link className="nav-link" to="/wire_headphones">Wire</Link>
                              <Link className="nav-link" to="/wireless_headphones">Wireless</Link>
                             </ul>
                        </li>
                    </div>   
                      
                      <div className="homebar_second">
                        <li className="list-inline-item dropdown">
                              <button className="btn btn-link dropdown-toggle btn3" data-bs-toggle="dropdown" aria-expanded="false">Speaker</button>
                              <ul className="dropdown-menu">
                              <Link className="nav-link" to="/wire_speaker">Wire</Link>
                             <Link className="nav-link" to="/wireless_speaker">Wireless</Link>
                             </ul>

                        </li>
                        
                        <li className="list-inline-item"><Link to="/contact">CONTACT</Link></li>
                        <li className="list-inline-item"><Link to="/products">NEW_PRODUCT</Link></li>
                 </div>
                    </ul>
                </div>
 
                 
                </div>  
            </div>
        </div>
        </>
    )
}

 export default  Navigation;
