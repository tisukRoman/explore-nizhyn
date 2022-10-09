import { PostgrestError } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { api } from '@utils/api';
import { Profile } from '@utils/types';

export const useGetAuthorList = (): [
  Profile[] | undefined,
  PostgrestError | null
] => {
  const { data, error } = useQuery<Profile[], PostgrestError>(
    ['authors'],
    api.getAuthorsList,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  return [data, error];
};
