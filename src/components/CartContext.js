// components/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedProduct = [...prevCart, item];
      localStorage.setItem('cart', JSON.stringify(updatedProduct));
      return updatedProduct;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider }; 
export default CartProvider; 
