import { PostgrestError } from '@supabase/supabase-js';
import {
  UseMutateAsyncFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { api } from '@utils/api';
import { Comment } from '@utils/types';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

export const useCreateComment = (): [
  UseMutateAsyncFunction<Comment[], unknown, string, unknown>,
  PostgrestError | null,
  boolean
] => {
  const client = useQueryClient();
  const { query } = useRouter();
  const { user } = useAuth();
  const postId = Number(query?.id);

  const { mutateAsync, error, isLoading } = useMutation(
    (text: string) =>
      api.createComment({ post_id: postId, user_id: user?.id, text }),
    {
      onSuccess: () => {
        client.invalidateQueries(['comments']);
      },
    }
  );
  return [mutateAsync, error as PostgrestError | null, isLoading];
};
