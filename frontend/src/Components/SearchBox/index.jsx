import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBox=() => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const keyword = searchTerm.trim().toLowerCase();

    // Keywords to redirect
    const keywordRoutes = {
      iphone: "/iphones",
      oneplus: "/oneplus",
      samsung: "/samsung",
      oppo: "/oppo",
      realme: "/realme",
      vivo: "/vivo",
      nothing: "/nothing",
      xiaomi: "/xiaomi",
      pixel: "/pixel",
      motorola: "/motorola",
      asus: "/asus",
      wireearphone:"/wire_earphones",
      wireheadphone:"/wire_headphones",
      wirespeaker:"/wire_speaker",
      wirelessearphone:"/wireless_earphones",
      wirelessheadphone:"/wireless_headphones",
      wirelessspeaker:"/wireless_speaker",
      accessory:"/accessories",
      laptop:"/laptops"
    };

    const redirectPath = keywordRoutes[keyword];

    if (redirectPath) {
      navigate(redirectPath);
    } else {
      alert("No matching result found");
    }

    setSearchTerm(""); 
  };

    return(      
          <div onSubmit={handleSearch}
             className="headersearch">
            <form  className="d-flex" role="search">
                <input className="input" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit"><FaSearch /></button>
            </form>
         </div> 
    )
}

export default SearchBox;