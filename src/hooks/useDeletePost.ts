import {
  UseMutateAsyncFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { api } from '@utils/api';
import { Post } from '@utils/types';

export const useDeletePost = (): [
  UseMutateAsyncFunction<Post[], unknown, number, unknown>,
  PostgrestError | null,
  boolean
] => {
  const client = useQueryClient();
  const { mutateAsync, error, isLoading } = useMutation(
    (postId: number) => api.deletePost(postId),
    {
      onSuccess: () => {
        client.invalidateQueries(['posts']);
        client.invalidateQueries(['authors']);
      },
    }
  );
  return [mutateAsync, error as PostgrestError | null, isLoading];
};
