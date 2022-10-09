import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { PostData } from '@utils/types';
import { api } from '@utils/api';

export const useCreatePost = () => {
  const client = useQueryClient();
  const router = useRouter();

  return useMutation((postData: PostData) => api.createPost(postData), {
    onSuccess: () => {
      client.invalidateQueries(['posts']);
      router.push('/');
    },
  });
};
