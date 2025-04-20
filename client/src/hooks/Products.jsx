import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Api from './../Api/Api';
const fetchProducts = async (storeId) => {
  const { data } = await Api({
    endpoint:`/stores/${storeId}/products`,
  });
  return data;
};

export const useProducts = (storeId) => {
  return useQuery({
    queryKey: ['products', storeId],
    queryFn: () => fetchProducts(storeId),
    enabled: !!storeId, // only run if storeId is present
    staleTime: 60 * 60 * 1000, // optional: 1 hour
  });
};
