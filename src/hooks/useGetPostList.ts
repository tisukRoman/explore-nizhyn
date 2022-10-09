import { useInfiniteQuery } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post } from '@utils/types';
import { api } from '@utils/api';

export const useGetPostList = () =>
  useInfiniteQuery<Post[], PostgrestError, Post[], string[]>(
    ['posts'],
    ({ pageParam = 0 }) => api.getPostList(pageParam),
    {
      getNextPageParam: (_, pages) => {
        return pages.length;
      },
    }
  );
