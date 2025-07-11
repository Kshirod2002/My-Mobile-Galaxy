import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Features/ContextProvider.jsx'; 
import { AuthProvider } from './authContext.jsx';
import  WishlistProvider  from "./Features/WishlistContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthProvider >
      <CartProvider>
         <WishlistProvider>
       <App />
       </WishlistProvider>
       </CartProvider>
    </AuthProvider>
     
  </StrictMode>,
)
 