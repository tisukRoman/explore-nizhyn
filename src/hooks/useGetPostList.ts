import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '@utils/api';

export const useGetPostList = () => {
  return useInfiniteQuery(
    ['posts'],
    ({ pageParam = 0 }) => api.getPostList(pageParam),
    {
      getNextPageParam: (_, pages) => {
        return pages.length;
      },
    }
  );
};
