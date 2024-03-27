import React, { createContext, useContext, useState } from "react";

const UseContext = createContext();

export const useCart = () => {
  return useContext(UseContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("LIST_CART")
      ? JSON.parse(localStorage.getItem("LIST_CART"))
      : []
  );

  const addToCart = (product, quantity) => {
    const newCart = [...cartItems];

    const checkIndex = newCart.findIndex((item) => item.id === product.id);

    if (checkIndex >= 0) {
      newCart[checkIndex].quantity += quantity;
    } else {
      product.quantity = quantity;
      newCart.push(product);
    }
    setCartItems(newCart);
    localStorage.setItem("LIST_CART", JSON.stringify(newCart));
  };

  return (
    <UseContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </UseContext.Provider>
  );
};
