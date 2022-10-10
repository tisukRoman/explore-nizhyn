import { useInfiniteQuery } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
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
      getNextPageParam: (_, pages) => {
        return pages.length;
      },
    }
  );
};
