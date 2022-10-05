import {
  UseMutateAsyncFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post, PostData } from '@utils/types';
import { db } from '@utils/db';

export const useEditPost = (
  postId: number
): [
  UseMutateAsyncFunction<Post[], unknown, PostData, unknown>,
  PostgrestError | null,
  boolean
] => {
  const client = useQueryClient();
  const { mutateAsync, error, isLoading } = useMutation(
    (postData: PostData) => db.editPost(postId, postData),
    {
      onSuccess: () => {
        client.invalidateQueries(['posts', postId]);
      },
    }
  );
  return [mutateAsync, error as PostgrestError | null, isLoading];
};
