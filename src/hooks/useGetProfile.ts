import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { api } from '@utils/api';

export const useGetProfile = () => {
  const { query } = useRouter();
  return useQuery(
    ['profile', query.id],
    () => api.getProfile(query.id as string),
    {
      enabled: !!query.id,
    }
  );
};
