import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 👉 Agregar pizza al carrito
  const addPizza = (pizza) => {
    setCart((prevCart) => {
      const pizzaExistente = prevCart.find(
        (item) => item.id === pizza.id
      );

      if (pizzaExistente) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...pizza,
          count: 1,
        },
      ];
    });
  };

  // 👉 Aumentar cantidad desde el carrito
  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  // 👉 Disminuir cantidad desde el carrito
  const decrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 0 }
          : item
      ).filter(item => item.count > 0)
    );
  };

  // 👉 Total a pagar
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addPizza,
        increase,
        decrease,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado
export function useCart() {
  return useContext(CartContext);
}
