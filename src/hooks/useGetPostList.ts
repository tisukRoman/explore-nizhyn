import { useInfiniteQuery } from '@tanstack/react-query';
import { db } from '@utils/db';

export const useGetPostList = () => {
  return useInfiniteQuery(
    ['posts'],
    ({ pageParam = 0 }) => db.getPostList(pageParam),
    {
      getNextPageParam: (_, pages) => {
        return pages.length;
      },
    }
  );
};
