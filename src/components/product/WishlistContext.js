// WishlistContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the Wishlist Context
const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

// Create a Wishlist Provider
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems((prev) => [...prev, item]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => prev.filter(item => item.productId !== itemId));
  };


  // New method to check if an item is in the wishlist
  const isInWishlist = (itemId) => {
    return wishlistItems.some(item => item.productId === itemId);
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist  }}>
      {children}
    </WishlistContext.Provider>
  );
};
