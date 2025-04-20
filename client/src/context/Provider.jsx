import React from 'react';
import { CartProvider } from './CartContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// import other providers as needed

const Providers = ({ children }) => {
const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {children}
      </CartProvider>
    </QueryClientProvider>
  );
};

export default Providers;
