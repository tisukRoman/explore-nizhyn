import { PostgrestError } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { Post } from '@utils/types';
import { db } from '@utils/db';

export const useGetPostList = (
  initialPosts: Post[]
): [Post[] | undefined, PostgrestError | null] => {
  const { data, error } = useQuery<Post[], PostgrestError>(
    ['posts'],
    db.getPostList,
    {
      initialData: initialPosts,
    }
  );
  return [data, error];
};
