import React, { useEffect } from "react";
import {useNavigate, useRoutes} from 'react-router-dom'

// Pages List
import Home from "./Pages/Home";
import Signin from "./Pages/SignIn";
import Signup from "./Pages/SignUp"

// Auth Context
import { useAuth } from "./authContext";
import Mobile from "./Components/Products/mobile";
import Earphone from "./Components/Products/earphone";
import Wishlist from "./Components/Wishlist/WishlistProduct";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import { Wireless_earphone, Wireless_headphone, Wireless_speaker } from "./Components/Products/wireless_product";
import { Wire_earphone, Wire_headphone, Wire_speaker } from "./Components/Products/wired_product";
import { Asus, Iphone, Motorola, Nothing, OnePlus, Oppo, Pixel, Realme, Samsung, Vivo, Xiaomi } from "./Components/Products/all_mobiles";
import Accessory from "./Components/Products/accessory";
import Laptop from "./Components/Products/laptop";
import Speaker from "./Components/Products/speaker";
import Product from "./Components/Product/getproduct";
import Addproduct from "./Components/Product/addproduct";

const ProjectRoutes = ()=>{
    const {currentUser, setCurrentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        const userIdFromStorage = localStorage.getItem("userId");

        if(userIdFromStorage && !currentUser){
            setCurrentUser(userIdFromStorage);
        }

        if(!userIdFromStorage && !["/signin", "/signup"].includes(window.location.pathname))
        {
            navigate("/signin");
        }

        if(userIdFromStorage && window.location.pathname=='/signin'){
            navigate("/");
        }
    }, [currentUser, navigate, setCurrentUser]);

    let element = useRoutes([
       
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/signin",
            element:<Signin/>
        },
        {
            path:"/signup",
            element:<Signup />
        },
        
        {
            path:"/mobiles",
            element:<Mobile />
        },
        {
            path:"/earphones",
            element:<Earphone />
        },
        {
            path:"/speakers",
            element:<Speaker />
        },
        {
            path:"/laptops",
            element:<Laptop />
        },
        {
            path:"/accessories",
            element:<Accessory/>
        },
        {
            path:"/iphones",
            element:<Iphone />
        },
        {
            path:"/oneplus",
            element:<OnePlus />
        },
        {
            path:"/samsung",
            element:<Samsung />
        },
        {
            path:"/xiaomi",
            element:<Xiaomi />
        },
        {
            path:"/realme",
            element:<Realme />
        },
        {
            path:"/pixel",
            element:<Pixel />
        },
        {
            path:"/motorola",
            element:<Motorola />
        },
        {
            path:"/vivo",
            element:<Vivo />
        },
        {
            path:"/oppo",
            element:<Oppo />
        },
        {
            path:"/asus",
            element:<Asus />
        },
        {
            path:"/nothing",
            element:<Nothing/>
        },
        {
            path:"/wire_earphones",
            element:<Wire_earphone />
        },
        {
            path:"/wire_headphones",
            element:<Wire_headphone />
        },
        {
            path:"/wire_speaker",
            element:<Wire_speaker/>
        },
        {
            path:"/wireless_earphones",
            element:<Wireless_earphone />
        },
        {
            path:"/wireless_headphones",
            element:<Wireless_headphone />
        },

        {
            path:"/wireless_speaker",
            element:<Wireless_speaker />
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/cart",
            element:<Cart />
        },
        {
            path:"/wishlist",
            element:<Wishlist />
        },
        {
            path:"/products",
            element:<Product />
        },
        {
            path:"/products/new_product",
            element:<Addproduct />
        }

        

    ])

    return element;
}

export default ProjectRoutes;
