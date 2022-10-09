import { PostgrestError } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { Profile } from '@utils/types';
import { api } from '@utils/api';

export const useGetAuthorList = () =>
  useQuery<Profile[], PostgrestError>(['authors'], api.getAuthorsList, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
