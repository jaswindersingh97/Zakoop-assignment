import { useQuery, useMutation } from '@tanstack/react-query';
import Api from './../Api/Api';

const fetchOrders = async () => {
  const { data } = await Api({
    endpoint: '/orders',
    method: 'get',
    includeToken: true,
  });
  return data;
};

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
    staleTime: 60 * 60 * 1000,
  });
};

const createOrder = async ({items,storeId}) => {
  const transformedItems = items.map(item => ({
    Product: item._id || item.id, // depends on your product model
    qty: item.quantity,
  }));

  const { data } = await Api({
    endpoint: '/orders',
    data: {items: transformedItems ,storeId},
    method: 'post',
    includeToken: true,
  });
  return data;
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: createOrder,
  });
};
