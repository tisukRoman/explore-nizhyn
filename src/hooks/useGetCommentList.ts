import { useQuery } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { Comment } from '@utils/types';
import { api } from '@utils/api';

export const useGetCommentList = () => {
  const router = useRouter();
  const postId = router.query?.id as string;

  return useQuery<Comment[], PostgrestError>(['comments', postId], () =>
    api.getPostComments(Number(postId))
  );
};
