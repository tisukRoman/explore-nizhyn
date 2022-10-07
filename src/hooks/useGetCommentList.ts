import { useQuery } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { Comment } from '@utils/types';
import { db } from '@utils/db';

export const useGetCommentList = (): [
  Comment[] | undefined,
  boolean,
  PostgrestError | null
] => {
  const router = useRouter();
  const postId = router.query?.id as string;

  const { data, isFetching, error } = useQuery<Comment[], PostgrestError>(
    ['comments', postId],
    () => db.getPostComments(Number(postId))
  );
  return [data, isFetching, error];
};
