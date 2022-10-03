import { useQuery } from '@tanstack/react-query';
import { PostgrestError } from '@supabase/supabase-js';
import { Post } from '@utils/types';
import { db } from '@utils/db';

export const useGetPost = (
  id: string
): [Post | undefined, PostgrestError | null] => {
  const { data, error } = useQuery<Post, PostgrestError>(['post', id], () =>
    db.getPostDetails(Number(id))
  );
  return [data, error];
};
