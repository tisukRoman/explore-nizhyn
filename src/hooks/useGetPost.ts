import { useQuery } from 'react-query';
import { db } from '@utils/db';
import { Post } from '@utils/types';

export const useGetPost = (
  id: number
): [Post | undefined, boolean, boolean] => {
  const { data, isLoading, isError } = useQuery(
    ['post', id],
    () => db.getPostDetails(id),
    {
      staleTime: Infinity,
    }
  );
  return [data, isLoading, isError];
};
