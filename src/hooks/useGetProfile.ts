import { PostgrestError } from '@supabase/postgrest-js';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Profile } from '@utils/types';
import { api } from '@utils/api';

export const useGetProfile = () => {
  const { query } = useRouter();

  return useQuery<Profile, PostgrestError>(
    ['profile', query.id],
    () => api.getProfile(query.id as string),
    {
      enabled: !!query.id,
    }
  );
};
