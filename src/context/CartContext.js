
import React, {
  createContext,
  useContext,
  useState
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToCart(product) {
    setItems(current => {
      const existing = current.find(
        item => item.id === product.id
      );

      if (existing) {
        return current.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }

  function changeQuantity(id, quantity) {
    if (quantity < 1) {
      setItems(current =>
        current.filter(item => item.id !== id)
      );
      return;
    }

    setItems(current =>
      current.map(item =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  }

  function removeFromCart(id) {
    setItems(current =>
      current.filter(item => item.id !== id)
    );
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const count = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        changeQuantity,
        removeFromCart,
        total,
        count
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
