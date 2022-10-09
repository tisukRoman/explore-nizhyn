import {
  UseMutateAsyncFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post, PostData } from '@utils/types';
import { api } from '@utils/api';
import { useRouter } from 'next/router';

export const useCreatePost = (): [
  UseMutateAsyncFunction<Post[], unknown, PostData, unknown>,
  PostgrestError | null,
  boolean
] => {
  const client = useQueryClient();
  const router = useRouter();
  const { mutateAsync, error, isLoading } = useMutation(
    (postData: PostData) => api.createPost(postData),
    {
      onSuccess: () => {
        client.invalidateQueries(['posts']);
        router.push('/');
      },
    }
  );
  return [mutateAsync, error as PostgrestError | null, isLoading];
};
