import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@utils/api';

export const useDeletePost = () => {
  const client = useQueryClient();
  
  return useMutation((postId: number) => api.deletePost(postId), {
    onSuccess: () => {
      client.invalidateQueries(['posts']);
    },
  });
};
