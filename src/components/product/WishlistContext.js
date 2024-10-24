// // WishlistContext.js
// import React, { createContext, useState, useContext } from 'react';

// // Create the Wishlist Context
// const WishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);

// // Create a Wishlist Provider
// export const WishlistProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // const addToWishlist = (item) => {
//   //   setWishlistItems((prev) => [...prev, item]);
//   // };

//   // const removeFromWishlist = (itemId) => {
//   //   setWishlistItems((prev) => prev.filter(item => item.productId !== itemId));
//   // };


//   // // New method to check if an item is in the wishlist
//   // const isInWishlist = (itemId) => {
//   //   return wishlistItems.some(item => item.productId === itemId);
//   // };


//    // Function to check if a specific product-variant is in the wishlist
//    const isInWishlist = (wishlistIdentifier) => {
//     return wishlistItems.some(item => item.wishlistIdentifier === wishlistIdentifier);
//   };

//   // Function to add an item to the wishlist
//   const addToWishlist = (item) => {
//     setWishlistItems([...wishlistItems, item]);
//   };

//   // Function to remove an item from the wishlist
//   const removeFromWishlist = (wishlistIdentifier) => {
//     setWishlistItems(wishlistItems.filter(item => item.wishlistIdentifier !== wishlistIdentifier));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist  }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };





import React, { createContext, useState, useContext } from 'react';

// Create the Wishlist Context
const WishlistContext = createContext();

// Custom hook to access the Wishlist context
export const useWishlist = () => useContext(WishlistContext);
// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error("useWishlist must be used within a WishlistProvider");
//   }
//   return context;
// };


// Function to create a unique identifier
const createUniqueIdentifier = (productId, variantId) => `${productId}-${variantId}`;

// console.log("createUniqueIdentifier is ........." +createUniqueIdentifier)
// Create a Wishlist Provider component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to check if a specific product-variant is in the wishlist
  const isInWishlist = (productId, variantId) => {
    // console.log( "in isInWishlist =>>>>"+productId+""+variantId)


    const wishlistIdentifier = createUniqueIdentifier(productId, variantId);
    console.log("createUniqueIdentifier in isInWishlist is ........." +wishlistIdentifier)

    return wishlistItems.some(item => item.wishlistIdentifier === wishlistIdentifier);
  };

  // Enhanced function to add an item to the wishlist
  const addToWishlist = (item) => {
    // console.log( "in addToWishlist =>>>>"+productId+""+variantId)


    const wishlistIdentifier = createUniqueIdentifier(item.productId, item.variantId);
    console.log("createUniqueIdentifier in addToWishlist is ........." +wishlistIdentifier)

    const newItem = { ...item, wishlistIdentifier };

    setWishlistItems((prevWishlistItems) => {
      const itemExists = prevWishlistItems.find(
        (wishlistItem) => wishlistItem.wishlistIdentifier === newItem.wishlistIdentifier
      );

      if (itemExists) {
        return prevWishlistItems.map((wishlistItem) =>
          wishlistItem.wishlistIdentifier === newItem.wishlistIdentifier
            ? { ...wishlistItem, ...newItem }
            : wishlistItem
        );
      }

      return [...prevWishlistItems, newItem];
    });
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (productId, variantId) => {

    console.log( "in removeFromWishlist =>>>>"+productId+""+variantId)


    const wishlistIdentifier = createUniqueIdentifier(productId, variantId);
    console.log("createUniqueIdentifier in  removeFromWishlist is ........." +wishlistIdentifier)

    setWishlistItems(wishlistItems.filter(item => item.wishlistIdentifier !== wishlistIdentifier));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
