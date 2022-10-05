import {
  UseMutateAsyncFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post, PostData } from '@utils/types';
import { db } from '@utils/db';
import { useRouter } from 'next/router';

export const useEditPost = (): [
  UseMutateAsyncFunction<Post[], unknown, PostData, unknown>,
  PostgrestError | null,
  boolean
] => {
  const client = useQueryClient();
  const router = useRouter();
  const postId = Number(router.query?.id);

  const { mutateAsync, error, isLoading } = useMutation(
    (postData: PostData) => db.editPost(postId, postData),
    {
      onSuccess: () => {
        client.invalidateQueries(['posts']);
        router.push(`/posts/${postId}`);
      },
    }
  );
  return [mutateAsync, error as PostgrestError | null, isLoading];
};
