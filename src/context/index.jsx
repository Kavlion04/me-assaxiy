import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(""); 

  const toggleCartItem = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
      setMessage(`${product.title} savatchadan olib tashlandi.`);
    } else {
      setCart([...cart, product]);
      setMessage(`${product.title} savatchaga qo‘shildi.`);
    }

    setTimeout(() => setMessage(""), 3000); 
  };

  return (
    <CartContext.Provider value={{ cart, toggleCartItem, message }}>
      {children}
    </CartContext.Provider>
  );
};
