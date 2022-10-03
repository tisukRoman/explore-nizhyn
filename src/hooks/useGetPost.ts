import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post } from '@utils/types';
import { db } from '@utils/db';

export const useGetPost = (
  id: string
): [Post | undefined, boolean, PostgrestError | null] => {
  const client = useQueryClient();
  const { data, isFetching, error } = useQuery<Post, PostgrestError>(
    ['post', id],
    () => db.getPostDetails(Number(id)),
    {
      placeholderData: () => {
        const initialPosts = client.getQueryData(['posts']) as
          | Post[]
          | undefined;
        if (initialPosts) {
          return initialPosts.find((post) => String(post.id) === id);
        }
      },
    }
  );
  return [data, isFetching, error];
};
