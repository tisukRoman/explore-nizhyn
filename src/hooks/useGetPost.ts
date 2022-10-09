import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post } from '@utils/types';
import { api } from '@utils/api';
import { useRouter } from 'next/router';

export const useGetPost = () => {
  const client = useQueryClient();
  const router = useRouter();
  const postId = router.query?.id as string;

  return useQuery<Post, PostgrestError>(
    ['posts', postId],
    () => api.getPostDetails(Number(postId)),
    {
      initialData: () => {
        const initialData = client.getQueryData(['posts']) as
          | { pages: Post[][] }
          | undefined;
        if (initialData) {
          return initialData?.pages
            .reduce((posts, page) => {
              return [...posts, ...page];
            }, [])
            .find((post) => String(post.id) === postId);
        }
      },
    }
  );
};
