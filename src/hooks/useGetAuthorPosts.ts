import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '@utils/api';
import { useRouter } from 'next/router';

export const useGetAuthorPosts = () => {
  const { query } = useRouter();

  return useInfiniteQuery(
    ['posts', { author: query.id }],
    ({ pageParam = 0 }) => api.getAuthorPosts(query.id as string, pageParam),
    {
      enabled: !!query.id,
      getNextPageParam: (_, pages) => {
        return pages.length;
      },
    }
  );
};
