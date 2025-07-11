import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { createContext, useEffect, useState } from "react";
import ProjectRoutes from "./Routes";

export const MyContext = createContext();

function App() {
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [cartData, setCartData]= useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (token){
      setIsLogin(true);
      setUsername(storedUsername);
    }  
  }, []);


  const addtocart =()=>{
    alert("Added to cart!")
  }
  const values={
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin,
    username,
    setUsername,
    addtocart,
    cartData,
    setCartData
  }
  
  return (
   
    <MyContext.Provider value={{ isLogin, setIsLogin, username, setUsername,isHeaderFooterShow,setisHeaderFooterShow }}> 
     <BrowserRouter>     
    {
      isHeaderFooterShow=== true && <Header />
    }    
      <ProjectRoutes />
    { 
      isHeaderFooterShow=== true && <Footer/>
    }     
     </BrowserRouter>
     </MyContext.Provider>
  )
}
export default App;