import {
  UseMutateAsyncFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post, PostData } from '@utils/types';
import { api } from '@utils/api';
import { useRouter } from 'next/router';

export const useEditPost = () => {
  const client = useQueryClient();
  const router = useRouter();
  const postId = Number(router.query?.id);

  return useMutation((postData: PostData) => api.editPost(postId, postData), {
    onSuccess: () => {
      client.invalidateQueries(['posts']);
      router.push(`/posts/${postId}`);
    },
  });
};
