// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (item) => {
//         setCartItems((prevItems) => {
//             const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
//             if (existingItem) {
//                 return prevItems.map((cartItem) =>
//                     cartItem.id === existingItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//                 );
//             }
//             return [...prevItems, { ...item, quantity: 1 }];
//         });
//     };

//     const removeFromCart = (id) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     };

//     const clearCart = () => {
//         setCartItems([]);
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };





import React, { createContext, useState, useContext } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Custom hook to access the Cart context
export const useCart = () => useContext(CartContext);

// Function to create a unique identifier for products
const createUniqueIdentifier = (productId, variantId) => `${productId}-${variantId}`;

// Create a Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to check if a specific product-variant is in the cart
  const isInCart = (productId, variantId) => {
    const cartIdentifier = createUniqueIdentifier(productId, variantId);
    console.log("createUniqueIdentifier in isInCart is ........." + cartIdentifier);

    return cartItems.some(item => item.cartIdentifier === cartIdentifier);
  };

  // Enhanced function to add an item to the cart
  const addToCart = (item) => {
    const cartIdentifier = createUniqueIdentifier(item.productId, item.variantId);
    console.log("createUniqueIdentifier in addToCart is ........." + cartIdentifier);

    const newItem = { ...item, cartIdentifier };

    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find(
        (cartItem) => cartItem.cartIdentifier === newItem.cartIdentifier
      );

      if (itemExists) {
        return prevCartItems.map((cartItem) =>
          cartItem.cartIdentifier === newItem.cartIdentifier
            ? { ...cartItem, ...newItem }
            : cartItem
        );
      }

      return [...prevCartItems, newItem];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId, variantId) => {
    const cartIdentifier = createUniqueIdentifier(productId, variantId);
    console.log("createUniqueIdentifier in removeFromCart is ........." + cartIdentifier);

    setCartItems(cartItems.filter(item => item.cartIdentifier !== cartIdentifier));
  };

  const clearCart = () => {
    setCartItems([]);
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart ,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
