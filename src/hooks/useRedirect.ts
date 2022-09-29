import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useRedirect  = (user: User | null) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);
};
