import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post } from '@utils/types';
import { api } from '@utils/api';
import { useRouter } from 'next/router';

export const useGetPost = (): [
  Post | undefined,
  boolean,
  PostgrestError | null
] => {
  const client = useQueryClient();
  const router = useRouter();
  const postId = router.query?.id as string;

  const { data, isFetching, error } = useQuery<Post, PostgrestError>(
    ['posts', postId],
    () => api.getPostDetails(Number(postId)),
    {
      placeholderData: () => {
        const initialPosts = client.getQueryData(['posts']) as
          | Post[]
          | undefined;
        if (initialPosts) {
          return initialPosts.find((post) => String(post.id) === postId);
        }
      },
    }
  );
  return [data, isFetching, error];
};
