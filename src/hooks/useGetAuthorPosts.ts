import { useInfiniteQuery } from '@tanstack/react-query';
import { POSTS_PER_PAGE } from '@utils/consts';
import { useRouter } from 'next/router';
import { api } from '@utils/api';

export const useGetAuthorPosts = () => {
  const { query } = useRouter();

  return useInfiniteQuery(
    ['posts', { author: query.id }],
    ({ pageParam = 0 }) => api.getAuthorPosts(query.id as string, pageParam),
    {
      enabled: !!query.id,
      getNextPageParam: (posts, pages) => {
        return posts.length < POSTS_PER_PAGE ? undefined : pages.length;
      },
    }
  );
};
