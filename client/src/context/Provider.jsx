import React from 'react';
import { CartProvider } from './CartContext';
// import other providers as needed

const Providers = ({ children }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
};

export default Providers;
