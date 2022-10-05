import {
  UseMutateAsyncFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post, PostData } from '@utils/types';
import { db } from '@utils/db';

export const useCreatePost = (): [
  UseMutateAsyncFunction<Post[], unknown, PostData, unknown>,
  PostgrestError | null,
  boolean
] => {
  const client = useQueryClient();
  const { mutateAsync, error, isLoading } = useMutation(
    ['createPost'],
    (postData: PostData) => db.createPost(postData),
    {
      onSuccess: () => {
        client.invalidateQueries(['posts']);
      },
    }
  );
  return [mutateAsync, error as PostgrestError | null, isLoading];
};
