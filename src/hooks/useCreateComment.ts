import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';
import { api } from '@utils/api';

export const useCreateComment = () => {
  const client = useQueryClient();
  const { query } = useRouter();
  const { user } = useAuth();

  return useMutation(
    (text: string) =>
      api.createComment({
        post_id: Number(query?.id),
        user_id: user?.id,
        text,
      }),
    {
      onSuccess: () => {
        client.invalidateQueries(['comments']);
      },
    }
  );
};
