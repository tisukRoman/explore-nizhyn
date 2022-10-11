import { useInfiniteQuery } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { POSTS_PER_PAGE } from '@utils/consts';
import { useRouter } from 'next/router';
import { Post } from '@utils/types';
import { api } from '@utils/api';

export const useGetSearchedPosts = () => {
  const { query } = useRouter();
  const temp = query.q as string;

  return useInfiniteQuery<Post[], PostgrestError, Post[], string[]>(
    ['posts', 'search', temp],
    ({ pageParam = 0 }) => api.getSearchedPostList(temp, pageParam),
    {
      getNextPageParam: (posts, pages) => {
        return posts.length < POSTS_PER_PAGE ? undefined : pages.length;
      },
    }
  );
};
