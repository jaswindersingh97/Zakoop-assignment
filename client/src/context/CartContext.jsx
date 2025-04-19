import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const getInitialCart = () => {
  try {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart());

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (storeId, product) => {
    setCart(prev => {
      const storeCart = prev[storeId] || {};
      const quantity = storeCart[product.id]?.quantity || 0;
      return {
        ...prev,
        [storeId]: {
          ...storeCart,
          [product.id]: { ...product, quantity: quantity + 1 },
        },
      };
    });
  };

  const removeItem = (storeId, productId) => {
    setCart(prev => {
      const storeCart = { ...prev[storeId] };
      if (!storeCart[productId]) return prev;

      const newQty = storeCart[productId].quantity - 1;
      if (newQty <= 0) {
        delete storeCart[productId];
      } else {
        storeCart[productId].quantity = newQty;
      }

      return {
        ...prev,
        [storeId]: storeCart,
      };
    });
  };

  const clearStoreCart = (storeId) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[storeId];
      return newCart;
    });
  };

  const getQuantity = (storeId, productId) => {
    return cart?.[storeId]?.[productId]?.quantity || 0;
  };
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearStoreCart, getQuantity  }}>
      {children}
    </CartContext.Provider>
  );
};
