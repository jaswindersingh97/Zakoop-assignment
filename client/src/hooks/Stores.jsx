import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Api from '../Api/Api';

const fetchStores = async () => {
  const { data } = await Api({endpoint:'/stores'});
  return data;
};

export const useStores = () => {
  return useQuery({
    queryKey: ['stores'],
    queryFn: fetchStores,
    staleTime: 60 * 60 * 1000, // optional: 1 hour
  });
};
