import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const increaseCount = (pizzaId) => {
    setCart(
      cart.map((item) =>
        item.id === pizzaId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (pizzaId) => {
    setCart(
      cart.reduce((acc, item) => {
        if (item.id === pizzaId) {
          if (item.count > 1) {
            acc.push({ ...item, count: item.count - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  // Método para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Cálculo del total del carrito
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseCount, decreaseCount, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

