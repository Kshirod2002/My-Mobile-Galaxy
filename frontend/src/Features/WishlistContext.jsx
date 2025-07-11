import { createContext, useContext, useEffect, useReducer } from "react";

export const WishlistContext = createContext();

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.selectedProduct];
      
    case "REMOVE_FROM_WISHLIST":
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
};


const WishlistProvider = ({ children }) => {
  const [wishlist, dispatchWishlist] = useReducer(
    wishlistReducer, 
    [],
     () => {
      const localData = localStorage.getItem("wishlist");
      return localData ? JSON.parse(localData) : [];
    }
);

useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
export default WishlistProvider;

export const useWishlist = () => useContext(WishlistContext);