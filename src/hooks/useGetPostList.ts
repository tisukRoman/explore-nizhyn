import { useInfiniteQuery } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { POSTS_PER_PAGE } from '@utils/consts'; 
import { Post } from '@utils/types';
import { api } from '@utils/api';

export const useGetPostList = () =>
  useInfiniteQuery<Post[], PostgrestError, Post[], string[]>(
    ['posts'],
    ({ pageParam = 0 }) => api.getPostList(pageParam),
    {
      getNextPageParam: (posts, pages) => {
        return posts.length < POSTS_PER_PAGE ? undefined : pages.length;
      },
    }
  );
